import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer } from "@calpoly/mustang";
import { Auth } from "@calpoly/mustang";

interface Project {
  category: string;
  href: string;
  title: string;
  description: string;
  type: {
    name: string;
    href: string;
  };
  role: string;
  stack: string;
  status: string;
}

export class AllProjectsListElement extends LitElement {
  @property()
  src?: string;

  @state()
  projects: Array<Project> = [];

  _authObserver = new Observer<Auth.Model>(this, "cadenceforge:auth");
  _user?: Auth.User;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      if (this.src) this.hydrate(this.src);
    });
  }

  get authorization() {
    return this._user?.authenticated
      ? {
          Authorization: `Bearer ${
            (this._user as Auth.AuthenticatedUser).token
          }`,
        }
      : undefined;
  }

  hydrate(src: string) {
    fetch(src, { headers: this.authorization })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((json: Array<Project>) => {
        if (json) {
          this.projects = json;
        }
      })
      .catch((err) => console.error("Error loading projects:", err));
  }

  render() {
    return html`
      <ul>
        ${this.projects.map((project) => this.renderProject(project))}
      </ul>
    `;
  }

  renderProject(project: Project) {
    return html`
      <li>
        <cf-article category=${project.category} href=${project.href}>
          <span slot="title">${project.title}</span>
          <span slot="description">${project.description}</span>
          <dl slot="metadata">
            <dt>Type:</dt>
            <dd>
              <a href=${project.type.href}>${project.type.name}</a>
            </dd>
            <dt>Role:</dt>
            <dd>${project.role}</dd>
            <dt>Stack:</dt>
            <dd>${project.stack}</dd>
            <dt>Status:</dt>
            <dd>${project.status}</dd>
          </dl>
        </cf-article>
      </li>
    `;
  }
}

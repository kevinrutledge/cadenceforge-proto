import { LitElement, html } from "lit";
import { state } from "lit/decorators.js";
import { Observer } from "@calpoly/mustang";
import { Auth } from "@calpoly/mustang";

interface Project {
  category: string;
  slug: string;
  href?: string;
  title: string;
  description: string;
  type?: {
    name: string;
    href: string;
  };
  role?: string;
  stack?: string;
  status?: string;
}

export class ProjectListViewElement extends LitElement {
  @state()
  projects: Project[] = [];

  _authObserver = new Observer<Auth.Model>(this, "cadenceforge:auth");
  _user?: Auth.User;

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      if (this._user?.authenticated) {
        this.loadData();
      }
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

  loadData() {
    fetch("/api/projects", { headers: this.authorization })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((json: Project[]) => {
        this.projects = json;
      })
      .catch((err) => console.error("Error loading projects:", err));
  }

  render() {
    return html`
      <div class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/app">Home</a> / Projects</div>
          <h1>Projects</h1>
          <p>
            Web applications and development work from Hack4Impact and personal
            exploration.
          </p>
        </div>
      </div>

      <main>
        <div class="container">
          <section>
            <h2>All Projects</h2>
            <ul>
              ${this.projects.map((project) => this.renderProject(project))}
            </ul>
          </section>
        </div>
      </main>
    `;
  }

  renderProject(project: Project) {
    return html`
      <li>
        <article data-category=${project.category}>
          <h3>
            <a href="/app/projects/${project.slug}">${project.title}</a>
          </h3>
          <p>${project.description}</p>
          <dl>
            ${project.type
              ? html`
                  <dt>Type:</dt>
                  <dd>${project.type.name}</dd>
                `
              : ""}
            ${project.role
              ? html`
                  <dt>Role:</dt>
                  <dd>${project.role}</dd>
                `
              : ""}
            ${project.stack
              ? html`
                  <dt>Stack:</dt>
                  <dd>${project.stack}</dd>
                `
              : ""}
            ${project.status
              ? html`
                  <dt>Status:</dt>
                  <dd>${project.status}</dd>
                `
              : ""}
          </dl>
        </article>
      </li>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

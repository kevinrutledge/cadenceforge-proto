import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";

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

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => res.json())
      .then((json: Array<Project>) => {
        if (json) {
          this.projects = json;
        }
      });
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

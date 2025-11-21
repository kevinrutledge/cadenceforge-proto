import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer } from "@calpoly/mustang";
import { Auth } from "@calpoly/mustang";

interface Project {
  category: string;
  slug: string;
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

export class ProjectViewElement extends LitElement {
  @property()
  slug?: string;

  @state()
  project?: Project;

  _authObserver = new Observer<Auth.Model>(this, "cadenceforge:auth");
  _user?: Auth.User;

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      if (this._user?.authenticated && this.slug) {
        this.loadData();
      }
    });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (
      name === "slug" &&
      oldValue !== newValue &&
      newValue &&
      this._user?.authenticated
    ) {
      this.loadData();
    }
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
    if (!this.slug) return;

    fetch(`/api/projects/${this.slug}`, { headers: this.authorization })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((json: Project) => {
        this.project = json;
      })
      .catch((err) => console.error("Error loading project:", err));
  }

  render() {
    if (!this.project) {
      return html`<div class="container"><p>Loading...</p></div>`;
    }

    return html`
      <main>
        <div class="container">
          <article>
            <div class="breadcrumb">
              <a href="/app">Home</a> / <a href="/app/projects">Projects</a> /
              ${this.project.title}
            </div>

            <header>
              <h1>${this.project.title}</h1>
              <p>${this.project.description}</p>

              <dl>
                ${this.project.type
                  ? html`
                      <dt>Type:</dt>
                      <dd>${this.project.type.name}</dd>
                    `
                  : ""}
                ${this.project.role
                  ? html`
                      <dt>Role:</dt>
                      <dd>${this.project.role}</dd>
                    `
                  : ""}
                ${this.project.stack
                  ? html`
                      <dt>Stack:</dt>
                      <dd>${this.project.stack}</dd>
                    `
                  : ""}
                ${this.project.status
                  ? html`
                      <dt>Status:</dt>
                      <dd>${this.project.status}</dd>
                    `
                  : ""}
              </dl>
            </header>

            <section>
              <p>
                Full project content will go here when we add it to the model.
              </p>
              <p>
                For now, this demonstrates that the routing and data loading
                work correctly.
              </p>
            </section>
          </article>
        </div>
      </main>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

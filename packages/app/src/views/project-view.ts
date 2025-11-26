import { View, Observer, Auth } from "@calpoly/mustang";
import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { marked } from "marked";

import { Project } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class ProjectViewElement extends View<Model, Msg> {
  @property()
  slug?: string;

  @state()
  get project(): Project | undefined {
    return this.model.project;
  }

  @state()
  authenticated = false;

  @state()
  username = "";

  _authObserver = new Observer<Auth.Model>(this, "cadenceforge:auth");

  constructor() {
    super("cadenceforge:model");
  }

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      if (auth.user && auth.user.authenticated) {
        this.authenticated = true;
        this.username = auth.user.username || "";
      } else {
        this.authenticated = false;
        this.username = "";
      }
    });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "slug" && oldValue !== newValue && newValue) {
      this.dispatchMessage(["project/request", { slug: newValue }]);
    }
  }

  render() {
    if (!this.project || !this.project.title) {
      return html`<div class="container"><p>Loading...</p></div>`;
    }

    return html`
      <main>
        <div class="container">
          <article>
            <div class="article-header-row">
              <div class="breadcrumb">
                <a href="/app">Home</a> / <a href="/app/projects">Projects</a> /
                ${this.project.title}
              </div>
              ${this.authenticated && this.username === "kevin"
                ? html`<a
                    href="/app/projects/${this.project.slug}/edit"
                    class="edit-link"
                    >Edit</a
                  >`
                : ""}
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

            <section class="article-content"></section>
          </article>
        </div>
      </main>
    `;
  }

  updated() {
    const contentEl = this.querySelector(".article-content");
    if (contentEl && this.project?.content) {
      contentEl.innerHTML = marked.parse(this.project.content) as string;
    } else if (contentEl && !this.project?.content) {
      contentEl.innerHTML = "<p>No content available for this project yet.</p>";
    }
  }

  createRenderRoot() {
    return this;
  }
}

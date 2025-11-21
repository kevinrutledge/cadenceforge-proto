import { View } from "@calpoly/mustang";
import { html } from "lit";
import { property, state } from "lit/decorators.js";
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

  constructor() {
    super("cadenceforge:model");
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

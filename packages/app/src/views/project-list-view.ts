import { View } from "@calpoly/mustang";
import { html } from "lit";
import { state } from "lit/decorators.js";
import { Project } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class ProjectListViewElement extends View<Model, Msg> {
  @state()
  get projects(): Project[] {
    return this.model.projectsList || [];
  }

  constructor() {
    super("cadenceforge:model");
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchMessage(["projects-list/request"]);
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

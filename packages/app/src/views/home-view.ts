import { View } from "@calpoly/mustang";
import { html } from "lit";
import { state } from "lit/decorators.js";
import { Writing, Project } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class HomeViewElement extends View<Model, Msg> {
  @state()
  get writings(): Writing[] {
    return this.model.writingList || [];
  }

  @state()
  get projects(): Project[] {
    return this.model.projectsList || [];
  }

  constructor() {
    super("cadenceforge:model");
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchMessage(["writing-list/request"]);
    this.dispatchMessage(["projects-list/request"]);
  }

  render() {
    const recentWritings = this.writings.slice(0, 2);
    const currentProjects = this.projects.filter(
      (p) => !p.status?.toLowerCase().includes("completed")
    );

    return html`
      <div class="page-hero">
        <div class="container">
          <h1>Cadence Forge</h1>
          <p>
            Systematic experimentation through rhythmic precision. Essays on
            computer science, methodology, and learning systems.
          </p>
        </div>
      </div>

      <main>
        <div class="container">
          <section>
            <h2>Recent Writing</h2>
            <ul>
              ${recentWritings.map((writing) => this.renderWriting(writing))}
            </ul>
            <p>
              <a href="/app/writing">All writing →</a>
            </p>
          </section>

          <section>
            <h2>Current Work</h2>
            <ul>
              ${currentProjects.length > 0
                ? currentProjects.map((project) => this.renderProject(project))
                : this.projects
                    .slice(0, 2)
                    .map((project) => this.renderProject(project))}
            </ul>
            <p>
              <a href="/app/projects">All projects →</a>
            </p>
          </section>
        </div>
      </main>
    `;
  }

  renderWriting(writing: Writing) {
    return html`
      <li>
        <article data-category=${writing.category}>
          <h3>
            <a href="/app/writing/${writing.slug}">${writing.title}</a>
          </h3>
          <p>${writing.description}</p>
          ${writing.date
            ? html`<time datetime=${writing.date}
                >${this.formatDate(writing.date)}</time
              >`
            : ""}
        </article>
      </li>
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
          ${project.stack ? html`<span>${project.stack}</span>` : ""}
        </article>
      </li>
    `;
  }

  formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }

  createRenderRoot() {
    return this;
  }
}

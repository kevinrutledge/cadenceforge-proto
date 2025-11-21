import { View } from "@calpoly/mustang";
import { html } from "lit";
import { state } from "lit/decorators.js";
import { Writing } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class WritingListViewElement extends View<Model, Msg> {
  @state()
  get writings(): Writing[] {
    return this.model.writingList || [];
  }

  constructor() {
    super("cadenceforge:model");
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchMessage(["writing-list/request"]);
  }

  render() {
    return html`
      <div class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/app">Home</a> / Writing</div>
          <h1>Writing</h1>
          <p>
            Essays on systematic learning, computer science, and methodology.
          </p>
        </div>
      </div>

      <main>
        <div class="container">
          <section>
            <h2>All Posts</h2>
            <ul>
              ${this.writings.map((writing) => this.renderWriting(writing))}
            </ul>
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
          <dl>
            ${writing.date
              ? html`
                  <dt>Date:</dt>
                  <dd>
                    <time datetime=${writing.date}
                      >${this.formatDate(writing.date)}</time
                    >
                  </dd>
                `
              : ""}
            ${writing.categories
              ? html`
                  <dt>Categories:</dt>
                  <dd>${writing.categories}</dd>
                `
              : ""}
            ${writing.series
              ? html`
                  <dt>Series:</dt>
                  <dd>
                    <a href="/app/series/${writing.series.name}"
                      >${writing.series.name}</a
                    >
                    ${writing.series.part ? ` (${writing.series.part})` : ""}
                  </dd>
                `
              : ""}
          </dl>
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

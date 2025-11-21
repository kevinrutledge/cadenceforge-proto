import { View } from "@calpoly/mustang";
import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { Writing } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class WritingViewElement extends View<Model, Msg> {
  @property()
  slug?: string;

  @state()
  get writing(): Writing | undefined {
    return this.model.writing;
  }

  constructor() {
    super("cadenceforge:model");
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "slug" && oldValue !== newValue && newValue) {
      this.dispatchMessage(["writing/request", { slug: newValue }]);
    }
  }

  render() {
    if (!this.writing || !this.writing.title) {
      return html`<div class="container"><p>Loading...</p></div>`;
    }

    return html`
      <main>
        <div class="container">
          <article>
            <div class="breadcrumb">
              <a href="/app">Home</a> / <a href="/app/writing">Writing</a> /
              ${this.writing.title}
            </div>

            <header>
              <h1>${this.writing.title}</h1>
              <p>${this.writing.description}</p>

              <dl>
                ${this.writing.date
                  ? html`
                      <dt>Published:</dt>
                      <dd>
                        <time datetime=${this.writing.date}>
                          ${this.formatDate(this.writing.date)}
                        </time>
                      </dd>
                    `
                  : ""}
                ${this.writing.categories
                  ? html`
                      <dt>Categories:</dt>
                      <dd>${this.writing.categories}</dd>
                    `
                  : ""}
                ${this.writing.series
                  ? html`
                      <dt>Series:</dt>
                      <dd>
                        <a href="/app/series/${this.writing.series.name}">
                          ${this.writing.series.name}
                        </a>
                        ${this.writing.series.part
                          ? ` (${this.writing.series.part})`
                          : ""}
                      </dd>
                    `
                  : ""}
              </dl>
            </header>

            <section>
              <p>
                Full article content will go here when we add it to the model.
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

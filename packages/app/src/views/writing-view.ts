import { View, Observer, Auth } from "@calpoly/mustang";
import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { marked } from "marked";

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
            <div class="article-header-row">
              <div class="breadcrumb">
                <a href="/app">Home</a> / <a href="/app/writing">Writing</a> /
                ${this.writing.title}
              </div>
              ${this.authenticated && this.username === "kevin"
                ? html`<a
                    href="/app/writing/${this.writing.slug}/edit"
                    class="edit-link"
                    >Edit</a
                  >`
                : ""}
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

            <section class="article-content"></section>
          </article>
        </div>
      </main>
    `;
  }

  updated() {
    const contentEl = this.querySelector(".article-content");
    if (contentEl && this.writing?.content) {
      contentEl.innerHTML = marked.parse(this.writing.content) as string;
    } else if (contentEl && !this.writing?.content) {
      contentEl.innerHTML = "<p>No content available for this article yet.</p>";
    }
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

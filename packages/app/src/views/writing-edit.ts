import { define, Form, View, History } from "@calpoly/mustang";
import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { Writing } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class WritingEditElement extends View<Model, Msg> {
  static uses = define({
    "mu-form": Form.Element,
  });

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
              <a href="/app/writing/${this.writing.slug}"
                >${this.writing.title}</a
              >
              / Edit
            </div>

            <header>
              <h1>Edit: ${this.writing.title}</h1>
            </header>

            <mu-form .init=${this.writing} @mu-form:submit=${this.handleSubmit}>
              <label>
                <span>Title</span>
                <input name="title" />
              </label>

              <label>
                <span>Description</span>
                <textarea name="description" rows="3"></textarea>
              </label>

              <label>
                <span>Date (YYYY-MM)</span>
                <input name="date" />
              </label>

              <label>
                <span>Categories</span>
                <input name="categories" />
              </label>

              <button type="submit">Save Changes</button>
              <button type="button" @click=${this.handleCancel}>Cancel</button>
            </mu-form>
          </article>
        </div>
      </main>
    `;
  }

  handleSubmit(event: Form.SubmitEvent<Writing>) {
    this.dispatchMessage([
      "writing/save",
      {
        slug: this.slug!,
        writing: event.detail,
      },
      {
        onSuccess: () =>
          History.dispatch(this, "history/navigate", {
            href: `/app/writing/${this.slug}`,
          }),
        onFailure: (error: Error) => console.error("Save failed:", error),
      },
    ]);
  }

  handleCancel() {
    History.dispatch(this, "history/navigate", {
      href: `/app/writing/${this.slug}`,
    });
  }

  createRenderRoot() {
    return this;
  }
}

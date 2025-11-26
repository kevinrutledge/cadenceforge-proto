import { define, Form, View, History } from "@calpoly/mustang";
import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { Project } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class ProjectEditElement extends View<Model, Msg> {
  static uses = define({
    "mu-form": Form.Element,
  });

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
              <a href="/app/projects/${this.project.slug}"
                >${this.project.title}</a
              >
              / Edit
            </div>

            <header>
              <h1>Edit: ${this.project.title}</h1>
            </header>

            <mu-form .init=${this.project} @mu-form:submit=${this.handleSubmit}>
              <label>
                <span>Title</span>
                <input name="title" />
              </label>

              <label>
                <span>Description</span>
                <textarea name="description" rows="3"></textarea>
              </label>

              <label>
                <span>Role</span>
                <input name="role" />
              </label>

              <label>
                <span>Stack</span>
                <input name="stack" />
              </label>

              <label>
                <span>Status</span>
                <input name="status" />
              </label>

              <button type="submit">Save Changes</button>
              <button type="button" @click=${this.handleCancel}>Cancel</button>
            </mu-form>
          </article>
        </div>
      </main>
    `;
  }

  handleSubmit(event: Form.SubmitEvent<Project>) {
    this.dispatchMessage([
      "project/save",
      {
        slug: this.slug!,
        project: event.detail,
      },
      {
        onSuccess: () =>
          History.dispatch(this, "history/navigate", {
            href: `/app/projects/${this.slug}`,
          }),
        onFailure: (error: Error) => console.error("Save failed:", error),
      },
    ]);
  }

  handleCancel() {
    History.dispatch(this, "history/navigate", {
      href: `/app/projects/${this.slug}`,
    });
  }

  createRenderRoot() {
    return this;
  }
}

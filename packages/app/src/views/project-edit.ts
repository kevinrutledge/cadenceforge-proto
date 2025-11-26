import { define, Form, View, History, Observer, Auth } from "@calpoly/mustang";
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
    if (!this.authenticated || this.username !== "kevin") {
      return html`
        <main>
          <div class="container">
            <p>Access denied. Only kevin can edit content.</p>
            <p><a href="/app">Return home</a></p>
          </div>
        </main>
      `;
    }

    if (!this.project || !this.project.title) {
      return html`
        <main>
          <div class="container">
            <p>Loading...</p>
          </div>
        </main>
      `;
    }

    return html`
      <main>
        <div class="container">
          <article class="edit-form" data-category=${this.project.category}>
            <div class="breadcrumb">
              <a href="/app">Home</a> / <a href="/app/projects">Projects</a> /
              <a href="/app/projects/${this.project.slug}">${this.project.title}</a>
              / Edit
            </div>

            <header>
              <h1>Edit Project</h1>
            </header>

            <mu-form .init=${this.project} @mu-form:submit=${this.handleSubmit}>
              <label>
                <span>Title</span>
                <input name="title" />
              </label>

              <label>
                <span>Description</span>
                <textarea name="description" rows="4"></textarea>
              </label>

              <label>
                <span>Role</span>
                <input name="role" placeholder="e.g. Full-stack Developer" />
              </label>

              <label>
                <span>Tech Stack</span>
                <input name="stack" placeholder="e.g. Next.js, TypeScript, MongoDB" />
              </label>

              <label>
                <span>Status</span>
                <select name="status">
                  <option value="Researching">Researching</option>
                  <option value="Planning">Planning</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </select>
              </label>

              <label>
                <span>Category</span>
                <select name="category">
                  <option value="cs">Computer Science</option>
                  <option value="methodology">Methodology</option>
                  <option value="personal">Personal</option>
                </select>
              </label>

              <label>
                <span>Content (Markdown)</span>
                <textarea name="content" rows="12" placeholder="Write your content in Markdown..."></textarea>
              </label>

              <div class="form-buttons" slot="submit">
                <button type="submit">Save Changes</button>
                <button type="button" @click=${this.handleCancel}>Cancel</button>
              </div>
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

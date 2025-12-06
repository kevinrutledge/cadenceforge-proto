import { define, Form, View, History, Observer, Auth } from "@calpoly/mustang";
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

    if (!this.writing || !this.writing.title) {
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
          <article class="edit-form" data-category=${this.writing.category}>
            <div class="breadcrumb">
              <a href="/app">Home</a> / <a href="/app/writing">Writing</a> /
              <a href="/app/writing/${this.writing.slug}">${this.writing.title}</a>
              / Edit
            </div>

            <header>
              <h1>Edit Writing</h1>
            </header>

            <mu-form .init=${this.writing}>
              <label>
                <span>Title</span>
                <input name="title" />
              </label>

              <label>
                <span>Description</span>
                <textarea name="description" rows="4"></textarea>
              </label>

              <label>
                <span>Date</span>
                <input name="date" type="month" />
              </label>

              <label>
                <span>Category</span>
                <select name="category">
                  <option value="cs">Computer Science</option>
                  <option value="philosophy">Philosophy</option>
                  <option value="methodology">Methodology</option>
                  <option value="culture">Culture</option>
                  <option value="personal">Personal</option>
                </select>
              </label>

              <label>
                <span>Content (Markdown)</span>
                <textarea name="content" rows="12" placeholder="Write your content in Markdown..."></textarea>
              </label>

              <div class="form-buttons" slot="submit">
                <button type="button" @click=${this.handleSave}>Save Changes</button>
                <button type="button" @click=${this.handleCancel}>Cancel</button>
              </div>
            </mu-form>
          </article>
        </div>
      </main>
    `;
  }

  handleSave() {
    const writing: Partial<Writing> = { ...this.writing };
    this.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      "input, textarea, select"
    ).forEach((el) => {
      if (el.name) (writing as Record<string, string>)[el.name] = el.value;
    });

    this.dispatchMessage([
      "writing/save",
      { slug: this.slug!, writing: writing as Writing },
      {
        onSuccess: () =>
          History.dispatch(this, "history/navigate", {
            href: `/app/writing/${this.slug}`,
          }),
        onFailure: (err: Error) => console.error("Save failed:", err),
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

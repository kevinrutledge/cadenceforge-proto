import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer } from "@calpoly/mustang";
import { Auth } from "@calpoly/mustang";

interface Writing {
  category: string;
  slug: string;
  title: string;
  description: string;
  date?: string;
  categories?: string;
  series?: {
    name: string;
    href: string;
    part?: string;
  };
}

export class WritingViewElement extends LitElement {
  @property()
  slug?: string;

  @state()
  writing?: Writing;

  _authObserver = new Observer<Auth.Model>(this, "cadenceforge:auth");
  _user?: Auth.User;

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      if (this._user?.authenticated && this.slug) {
        this.loadData();
      }
    });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (
      name === "slug" &&
      oldValue !== newValue &&
      newValue &&
      this._user?.authenticated
    ) {
      this.loadData();
    }
  }

  get authorization() {
    return this._user?.authenticated
      ? {
          Authorization: `Bearer ${
            (this._user as Auth.AuthenticatedUser).token
          }`,
        }
      : undefined;
  }

  loadData() {
    if (!this.slug) return;

    fetch(`/api/writing/${this.slug}`, { headers: this.authorization })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((json: Writing) => {
        this.writing = json;
      })
      .catch((err) => console.error("Error loading writing:", err));
  }

  render() {
    if (!this.writing) {
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

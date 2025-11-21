import { LitElement, html } from "lit";
import { state } from "lit/decorators.js";
import { Observer } from "@calpoly/mustang";
import { Auth } from "@calpoly/mustang";

interface Writing {
  category: string;
  slug: string;
  href?: string;
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

export class WritingListViewElement extends LitElement {
  @state()
  writings: Writing[] = [];

  _authObserver = new Observer<Auth.Model>(this, "cadenceforge:auth");
  _user?: Auth.User;

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      if (this._user?.authenticated) {
        this.loadData();
      }
    });
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
    fetch("/api/writing", { headers: this.authorization })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((json: Writing[]) => {
        this.writings = json;
      })
      .catch((err) => console.error("Error loading writing:", err));
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

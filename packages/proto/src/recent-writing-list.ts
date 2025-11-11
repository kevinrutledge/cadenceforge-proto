import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer } from "@calpoly/mustang";
import { Auth } from "@calpoly/mustang";

interface Article {
  category: string;
  href: string;
  title: string;
  description: string;
  date: string;
}

export class RecentWritingListElement extends LitElement {
  @property()
  src?: string;

  @state()
  articles: Array<Article> = [];

  _authObserver = new Observer<Auth.Model>(this, "cadenceforge:auth");
  _user?: Auth.User;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      if (this.src) this.hydrate(this.src);
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

  hydrate(src: string) {
    fetch(src, { headers: this.authorization })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((json: Array<Article>) => {
        if (json) {
          this.articles = json;
        }
      })
      .catch((err) => console.error("Error loading writing:", err));
  }

  render() {
    return html`
      <ul>
        ${this.articles.map((article) => this.renderArticle(article))}
      </ul>
    `;
  }

  renderArticle(article: Article) {
    return html`
      <li>
        <cf-article category=${article.category} href=${article.href}>
          <span slot="title">${article.title}</span>
          <span slot="description">${article.description}</span>
          <time slot="metadata" datetime=${article.date}
            >${this.formatDate(article.date)}</time
          >
        </cf-article>
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
}

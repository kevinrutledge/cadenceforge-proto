import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";

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

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => res.json())
      .then((json: Array<Article>) => {
        if (json) {
          this.articles = json;
        }
      });
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

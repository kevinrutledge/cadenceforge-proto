import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";

interface Post {
  category: string;
  href?: string;
  title: string;
  description: string;
  date?: string;
}

export class SeriesPostsListElement extends LitElement {
  @property()
  src?: string;

  @state()
  posts: Array<Post> = [];

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
      .then((json: Array<Post>) => {
        if (json) {
          this.posts = json;
        }
      });
  }

  render() {
    return html`
      <ol>
        ${this.posts.map((post) => this.renderPost(post))}
      </ol>
    `;
  }

  renderPost(post: Post) {
    return html`
      <li>
        <cf-article category=${post.category} href=${post.href || ""}>
          <span slot="title">${post.title}</span>
          <span slot="description">${post.description}</span>
          ${post.date
            ? html`
                <time slot="metadata" datetime=${post.date}>
                  ${this.formatDate(post.date)}
                </time>
              `
            : ""}
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

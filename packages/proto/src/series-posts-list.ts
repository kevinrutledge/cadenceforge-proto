import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer } from "@calpoly/mustang";
import { Auth } from "@calpoly/mustang";

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
      .then((json: Array<Post>) => {
        if (json) {
          this.posts = json;
        }
      })
      .catch((err) => console.error("Error loading series posts:", err));
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

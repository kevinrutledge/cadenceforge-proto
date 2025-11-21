import { LitElement, html } from "lit";
import { state } from "lit/decorators.js";
import { Observer } from "@calpoly/mustang";
import { Auth } from "@calpoly/mustang";

export class HeaderElement extends LitElement {
  @state()
  authenticated = false;

  _authObserver = new Observer<Auth.Model>(this, "cadenceforge:auth");

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      if (auth.user && auth.user.authenticated) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  }

  firstUpdated() {
    const button = this.querySelector(".theme-toggle");
    if (button) {
      button.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-mode");
        if (isDark) {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
        } else {
          document.body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
        }
      });
    }
  }

  render() {
    return html`
      <header class="site-header">
        <div class="container">
          <a href="/app" class="logo">Cadence Forge</a>
          <div class="header-right">
            <nav>
              <ul>
                <li><a href="/app">Home</a></li>
                <li><a href="/app/writing">Writing</a></li>
                <li><a href="/app/projects">Projects</a></li>
                <li><a href="/app/about">About</a></li>
                ${this.authenticated
                  ? html`<li>
                      <a href="#" @click=${this.handleSignOut}>Logout</a>
                    </li>`
                  : html`<li><a href="/login.html">Login</a></li>`}
              </ul>
            </nav>
            <button class="theme-toggle" aria-label="Toggle dark mode">
              <svg
                class="sun-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <svg
                class="moon-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    `;
  }

  handleSignOut(e: Event) {
    e.preventDefault();
    const event = new CustomEvent("auth:message", {
      bubbles: true,
      composed: true,
      detail: ["auth/signout"],
    });
    this.dispatchEvent(event);
  }

  createRenderRoot() {
    return this;
  }
}

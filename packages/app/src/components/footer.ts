import { LitElement, html } from "lit";

export class FooterElement extends LitElement {
  render() {
    return html`
      <footer class="site-footer">
        <div class="container">
          <nav>
            <a href="/app/writing">Writing</a>
            <a href="/app/projects">Projects</a>
            <a href="/app/about">About</a>
            <a href="https://github.com/kevinrutledge">GitHub</a>
            <a href="https://linkedin.com/in/rutledge-kevin">LinkedIn</a>
          </nav>
          <div class="footer-meta">
            <span>© 2025 Kevin Rutledge</span>
            <span>Lit, Mustang, MongoDB</span>
          </div>
        </div>
      </footer>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

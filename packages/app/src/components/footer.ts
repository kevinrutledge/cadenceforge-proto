import { LitElement, html } from "lit";

export class FooterElement extends LitElement {
  render() {
    return html`
      <footer class="site-footer">
        <div class="container">
          <div>
            <h3>Cadence Forge</h3>
            <p>Systematic experimentation through rhythmic precision.</p>
          </div>
          <div>
            <h3>Content</h3>
            <ul>
              <li><a href="/app/writing">Writing</a></li>
              <li><a href="/app/projects">Projects</a></li>
              <li><a href="/app/about">About</a></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li><a href="https://github.com/kevinrutledge">GitHub</a></li>
              <li>
                <a href="https://linkedin.com/in/rutledge-kevin">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div class="footer-meta">
            <span>© 2025 Kevin Rutledge</span>
            <span>Built with purpose</span>
          </div>
        </div>
      </footer>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

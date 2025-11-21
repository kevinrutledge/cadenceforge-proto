import { html, LitElement } from "lit";

export class HomeViewElement extends LitElement {
  render() {
    return html`
      <div class="page-hero">
        <div class="container">
          <h1>Cadence Forge</h1>
          <p>
            Systematic experimentation through rhythmic precision. Essays on
            computer science, methodology, and learning systems.
          </p>
        </div>
      </div>

      <main>
        <div class="container">
          <section>
            <h2>Recent Writing</h2>
            <p>
              <a href="/app/writing">
                All writing
                <svg class="icon">
                  <use href="/icons/ui.svg#icon-arrow-right" />
                </svg>
              </a>
            </p>
          </section>

          <section>
            <h2>Current Work</h2>
            <p>
              <a href="/app/projects">
                All projects
                <svg class="icon">
                  <use href="/icons/ui.svg#icon-arrow-right" />
                </svg>
              </a>
            </p>
          </section>
        </div>
      </main>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

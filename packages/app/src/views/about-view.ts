import { html, LitElement } from "lit";

export class AboutViewElement extends LitElement {
  render() {
    return html`
      <div class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/app">Home</a> / About</div>
          <h1>About</h1>
          <p>
            Computer science student at Cal Poly. Track athlete. Systematic
            thinker.
          </p>
        </div>
      </div>

      <main>
        <div class="container">
          <article>
            <section>
              <h2>Current</h2>
              <p>
                I'm a computer science student at Cal Poly San Luis Obispo,
                graduating in 2026. I'm currently Tech Lead at Hack4Impact,
                where I lead development teams building web applications for
                nonprofit organizations.
              </p>
            </section>

            <section>
              <h2>Background</h2>
              <p>
                I was born in Campbell, California in 1989. Vietnamese mother,
                Irish-English father. Grew up in Los Gatos. Sports were always
                easier than sitting in classrooms.
              </p>
              <p>
                I competed in track and field through high school. Long jump,
                high jump, triple jump. Made it to state runner-up in long jump
                my senior year. Got recruited to Cal Poly for track in 2008.
              </p>
              <p>
                Dropped out after freshman year. The engineering coursework was
                harder than I expected, and I didn't know how to study. Spent
                the next 15 years working various jobs, coaching track,
                competing in ballroom dancing, and eventually figuring out how
                to approach academics systematically.
              </p>
              <p>
                Came back to Cal Poly in 2024. Made Dean's List Fall quarter.
                Graduating 2026.
              </p>
            </section>

            <section>
              <h2>The Name</h2>
              <p>
                Cadence refers to rhythm and systematic repetition. Forge refers
                to building through sustained effort. Track training taught me
                that complex skills can be mastered through methodical breakdown
                and practice. That same approach applies to algorithms, system
                design, and technical problem-solving.
              </p>
            </section>

            <section>
              <h2>What I Write About</h2>
              <ul>
                <li>Computer science and software development</li>
                <li>Learning methodology and systematic skill development</li>
                <li>Non-linear career paths</li>
                <li>Hack4Impact project work</li>
              </ul>
            </section>
          </article>
        </div>
      </main>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

import{r as c,i as d,O as h,x as i,n as p,d as b,_ as $,h as y,a as k}from"./state-HKvb4smT.js";var _=Object.defineProperty,j=(a,e,r,o)=>{for(var t=void 0,s=a.length-1,n;s>=0;s--)(n=a[s])&&(t=n(e,r,t)||t);return t&&_(e,r,t),t};class g extends d{constructor(){super(...arguments),this.authenticated=!1,this._authObserver=new h(this,"cadenceforge:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{r.user&&r.user.authenticated?this.authenticated=!0:this.authenticated=!1}),localStorage.getItem("theme")==="dark"&&document.body.classList.add("dark-mode")}firstUpdated(){const e=this.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light")):(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark"))})}render(){return i`
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
                ${this.authenticated?i`<li>
                      <a href="#" @click=${this.handleSignOut}>Logout</a>
                    </li>`:i`<li><a href="/login.html">Login</a></li>`}
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
    `}handleSignOut(e){e.preventDefault();const r=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]});this.dispatchEvent(r)}createRenderRoot(){return this}}j([c()],g.prototype,"authenticated");class C extends d{render(){return i`
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
    `}createRenderRoot(){return this}}class x extends d{render(){return i`
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
    `}createRenderRoot(){return this}}var P=Object.defineProperty,D=(a,e,r,o)=>{for(var t=void 0,s=a.length-1,n;s>=0;s--)(n=a[s])&&(t=n(e,r,t)||t);return t&&P(e,r,t),t};class m extends d{constructor(){super(...arguments),this.writings=[],this._authObserver=new h(this,"cadenceforge:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this._user?.authenticated&&this.loadData()})}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:void 0}loadData(){fetch("/api/writing",{headers:this.authorization}).then(e=>{if(!e.ok)throw new Error(`Failed to fetch: ${e.status}`);return e.json()}).then(e=>{this.writings=e}).catch(e=>console.error("Error loading writing:",e))}render(){return i`
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
              ${this.writings.map(e=>this.renderWriting(e))}
            </ul>
          </section>
        </div>
      </main>
    `}renderWriting(e){return i`
      <li>
        <article data-category=${e.category}>
          <h3>
            <a href="/app/writing/${e.slug}">${e.title}</a>
          </h3>
          <p>${e.description}</p>
          <dl>
            ${e.date?i`
                  <dt>Date:</dt>
                  <dd>
                    <time datetime=${e.date}
                      >${this.formatDate(e.date)}</time
                    >
                  </dd>
                `:""}
            ${e.categories?i`
                  <dt>Categories:</dt>
                  <dd>${e.categories}</dd>
                `:""}
            ${e.series?i`
                  <dt>Series:</dt>
                  <dd>
                    <a href="/app/series/${e.series.name}"
                      >${e.series.name}</a
                    >
                    ${e.series.part?` (${e.series.part})`:""}
                  </dd>
                `:""}
          </dl>
        </article>
      </li>
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}createRenderRoot(){return this}}D([c()],m.prototype,"writings");var E=Object.defineProperty,v=(a,e,r,o)=>{for(var t=void 0,s=a.length-1,n;s>=0;s--)(n=a[s])&&(t=n(e,r,t)||t);return t&&E(e,r,t),t};class l extends d{constructor(){super(...arguments),this._authObserver=new h(this,"cadenceforge:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this._user?.authenticated&&this.slug&&this.loadData()})}attributeChangedCallback(e,r,o){super.attributeChangedCallback(e,r,o),e==="slug"&&r!==o&&o&&this._user?.authenticated&&this.loadData()}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:void 0}loadData(){this.slug&&fetch(`/api/writing/${this.slug}`,{headers:this.authorization}).then(e=>{if(!e.ok)throw new Error(`Failed to fetch: ${e.status}`);return e.json()}).then(e=>{this.writing=e}).catch(e=>console.error("Error loading writing:",e))}render(){return this.writing?i`
      <main>
        <div class="container">
          <article>
            <div class="breadcrumb">
              <a href="/app">Home</a> / <a href="/app/writing">Writing</a> /
              ${this.writing.title}
            </div>

            <header>
              <h1>${this.writing.title}</h1>
              <p>${this.writing.description}</p>

              <dl>
                ${this.writing.date?i`
                      <dt>Published:</dt>
                      <dd>
                        <time datetime=${this.writing.date}>
                          ${this.formatDate(this.writing.date)}
                        </time>
                      </dd>
                    `:""}
                ${this.writing.categories?i`
                      <dt>Categories:</dt>
                      <dd>${this.writing.categories}</dd>
                    `:""}
                ${this.writing.series?i`
                      <dt>Series:</dt>
                      <dd>
                        <a href="/app/series/${this.writing.series.name}">
                          ${this.writing.series.name}
                        </a>
                        ${this.writing.series.part?` (${this.writing.series.part})`:""}
                      </dd>
                    `:""}
              </dl>
            </header>

            <section>
              <p>
                Full article content will go here when we add it to the model.
              </p>
              <p>
                For now, this demonstrates that the routing and data loading
                work correctly.
              </p>
            </section>
          </article>
        </div>
      </main>
    `:i`<div class="container"><p>Loading...</p></div>`}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}createRenderRoot(){return this}}v([p()],l.prototype,"slug");v([c()],l.prototype,"writing");var S=Object.defineProperty,O=(a,e,r,o)=>{for(var t=void 0,s=a.length-1,n;s>=0;s--)(n=a[s])&&(t=n(e,r,t)||t);return t&&S(e,r,t),t};class f extends d{constructor(){super(...arguments),this.projects=[],this._authObserver=new h(this,"cadenceforge:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this._user?.authenticated&&this.loadData()})}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:void 0}loadData(){fetch("/api/projects",{headers:this.authorization}).then(e=>{if(!e.ok)throw new Error(`Failed to fetch: ${e.status}`);return e.json()}).then(e=>{this.projects=e}).catch(e=>console.error("Error loading projects:",e))}render(){return i`
      <div class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/app">Home</a> / Projects</div>
          <h1>Projects</h1>
          <p>
            Web applications and development work from Hack4Impact and personal
            exploration.
          </p>
        </div>
      </div>

      <main>
        <div class="container">
          <section>
            <h2>All Projects</h2>
            <ul>
              ${this.projects.map(e=>this.renderProject(e))}
            </ul>
          </section>
        </div>
      </main>
    `}renderProject(e){return i`
      <li>
        <article data-category=${e.category}>
          <h3>
            <a href="/app/projects/${e.slug}">${e.title}</a>
          </h3>
          <p>${e.description}</p>
          <dl>
            ${e.type?i`
                  <dt>Type:</dt>
                  <dd>${e.type.name}</dd>
                `:""}
            ${e.role?i`
                  <dt>Role:</dt>
                  <dd>${e.role}</dd>
                `:""}
            ${e.stack?i`
                  <dt>Stack:</dt>
                  <dd>${e.stack}</dd>
                `:""}
            ${e.status?i`
                  <dt>Status:</dt>
                  <dd>${e.status}</dd>
                `:""}
          </dl>
        </article>
      </li>
    `}createRenderRoot(){return this}}O([c()],f.prototype,"projects");var L=Object.defineProperty,w=(a,e,r,o)=>{for(var t=void 0,s=a.length-1,n;s>=0;s--)(n=a[s])&&(t=n(e,r,t)||t);return t&&L(e,r,t),t};class u extends d{constructor(){super(...arguments),this._authObserver=new h(this,"cadenceforge:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this._user?.authenticated&&this.slug&&this.loadData()})}attributeChangedCallback(e,r,o){super.attributeChangedCallback(e,r,o),e==="slug"&&r!==o&&o&&this._user?.authenticated&&this.loadData()}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:void 0}loadData(){this.slug&&fetch(`/api/projects/${this.slug}`,{headers:this.authorization}).then(e=>{if(!e.ok)throw new Error(`Failed to fetch: ${e.status}`);return e.json()}).then(e=>{this.project=e}).catch(e=>console.error("Error loading project:",e))}render(){return this.project?i`
      <main>
        <div class="container">
          <article>
            <div class="breadcrumb">
              <a href="/app">Home</a> / <a href="/app/projects">Projects</a> /
              ${this.project.title}
            </div>

            <header>
              <h1>${this.project.title}</h1>
              <p>${this.project.description}</p>

              <dl>
                ${this.project.type?i`
                      <dt>Type:</dt>
                      <dd>${this.project.type.name}</dd>
                    `:""}
                ${this.project.role?i`
                      <dt>Role:</dt>
                      <dd>${this.project.role}</dd>
                    `:""}
                ${this.project.stack?i`
                      <dt>Stack:</dt>
                      <dd>${this.project.stack}</dd>
                    `:""}
                ${this.project.status?i`
                      <dt>Status:</dt>
                      <dd>${this.project.status}</dd>
                    `:""}
              </dl>
            </header>

            <section>
              <p>
                Full project content will go here when we add it to the model.
              </p>
              <p>
                For now, this demonstrates that the routing and data loading
                work correctly.
              </p>
            </section>
          </article>
        </div>
      </main>
    `:i`<div class="container"><p>Loading...</p></div>`}createRenderRoot(){return this}}w([p()],u.prototype,"slug");w([c()],u.prototype,"project");const R=[{path:"/app/writing/:slug",view:a=>i`
      <writing-view slug=${a.slug}></writing-view>
    `},{path:"/app/writing",view:()=>i` <writing-list-view></writing-list-view> `},{path:"/app/projects/:slug",view:a=>i`
      <project-view slug=${a.slug}></project-view>
    `},{path:"/app/projects",view:()=>i` <projects-list-view></projects-list-view> `},{path:"/app/about",view:()=>i` <about-view></about-view> `},{path:"/app",view:()=>i` <home-view></home-view> `},{path:"/",redirect:"/app"}];b({"mu-auth":k.Provider,"mu-history":y.Provider,"mu-switch":class extends $.Element{constructor(){super(R,"cadenceforge:history","cadenceforge:auth")}},"cf-header":g,"home-view":C,"about-view":x,"writing-list-view":m,"writing-view":l,"projects-list-view":f,"project-view":u});

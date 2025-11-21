import{a as c,r as d,i as l,O as y,x as a,V as h,n as g,d as $,s as j,_ as k,h as C}from"./state-DnAmevJH.js";const P={};function x(s,e,t){const[n,r]=s;switch(n){case"writing/request":{const{slug:i}=r;return e.writing?.slug===i?e:[{...e,writing:{slug:i}},_(r,t).then(o=>["writing/load",{slug:i,writing:o}])]}case"writing/load":{const{writing:i}=r;return{...e,writing:i}}case"writing-list/request":return e.writingList?e:[e,L(t).then(i=>["writing-list/load",{writings:i}])];case"writing-list/load":{const{writings:i}=r;return{...e,writingList:i}}case"project/request":{const{slug:i}=r;return e.project?.slug===i?e:[{...e,project:{slug:i}},O(r,t).then(o=>["project/load",{slug:i,project:o}])]}case"project/load":{const{project:i}=r;return{...e,project:i}}case"projects-list/request":return e.projectsList?e:[e,S(t).then(i=>["projects-list/load",{projects:i}])];case"projects-list/load":{const{projects:i}=r;return{...e,projectsList:i}}default:{const i=n;throw new Error(`Unhandled message "${i}"`)}}}function _(s,e){return fetch(`/api/writing/${s.slug}`,{headers:c.headers(e)}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to load writing: ${s.slug}`)}).then(t=>{if(t)return t;throw new Error("No JSON in response")})}function L(s){return fetch("/api/writing",{headers:c.headers(s)}).then(e=>{if(e.status===200)return e.json();throw new Error("Failed to load writing list")}).then(e=>{if(e)return e;throw new Error("No JSON in response")})}function O(s,e){return fetch(`/api/projects/${s.slug}`,{headers:c.headers(e)}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to load project: ${s.slug}`)}).then(t=>{if(t)return t;throw new Error("No JSON in response")})}function S(s){return fetch("/api/projects",{headers:c.headers(s)}).then(e=>{if(e.status===200)return e.json();throw new Error("Failed to load projects list")}).then(e=>{if(e)return e;throw new Error("No JSON in response")})}var E=Object.defineProperty,D=(s,e,t,n)=>{for(var r=void 0,i=s.length-1,o;i>=0;i--)(o=s[i])&&(r=o(e,t,r)||r);return r&&E(e,t,r),r};class m extends l{constructor(){super(...arguments),this.authenticated=!1,this._authObserver=new y(this,"cadenceforge:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{t.user&&t.user.authenticated?this.authenticated=!0:this.authenticated=!1}),localStorage.getItem("theme")==="dark"&&document.body.classList.add("dark-mode")}firstUpdated(){const e=this.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light")):(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark"))})}render(){return a`
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
                ${this.authenticated?a`<li>
                      <a href="#" @click=${this.handleSignOut}>Logout</a>
                    </li>`:a`<li><a href="/login.html">Login</a></li>`}
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
    `}handleSignOut(e){e.preventDefault();const t=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]});this.dispatchEvent(t)}createRenderRoot(){return this}}D([d()],m.prototype,"authenticated");class R extends l{render(){return a`
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
    `}createRenderRoot(){return this}}class I extends l{render(){return a`
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
    `}createRenderRoot(){return this}}class W extends l{render(){return a`
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
    `}createRenderRoot(){return this}}var q=Object.defineProperty,F=Object.getOwnPropertyDescriptor,A=(s,e,t,n)=>{for(var r=F(e,t),i=s.length-1,o;i>=0;i--)(o=s[i])&&(r=o(e,t,r)||r);return r&&q(e,t,r),r};class v extends h{get writings(){return this.model.writingList||[]}constructor(){super("cadenceforge:model")}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["writing-list/request"])}render(){return a`
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
    `}renderWriting(e){return a`
      <li>
        <article data-category=${e.category}>
          <h3>
            <a href="/app/writing/${e.slug}">${e.title}</a>
          </h3>
          <p>${e.description}</p>
          <dl>
            ${e.date?a`
                  <dt>Date:</dt>
                  <dd>
                    <time datetime=${e.date}
                      >${this.formatDate(e.date)}</time
                    >
                  </dd>
                `:""}
            ${e.categories?a`
                  <dt>Categories:</dt>
                  <dd>${e.categories}</dd>
                `:""}
            ${e.series?a`
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
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}createRenderRoot(){return this}}A([d()],v.prototype,"writings");var H=Object.defineProperty,T=Object.getOwnPropertyDescriptor,w=(s,e,t,n)=>{for(var r=n>1?void 0:n?T(e,t):e,i=s.length-1,o;i>=0;i--)(o=s[i])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&H(e,t,r),r};class p extends h{get writing(){return this.model.writing}constructor(){super("cadenceforge:model")}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e==="slug"&&t!==n&&n&&this.dispatchMessage(["writing/request",{slug:n}])}render(){return!this.writing||!this.writing.title?a`<div class="container"><p>Loading...</p></div>`:a`
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
                ${this.writing.date?a`
                      <dt>Published:</dt>
                      <dd>
                        <time datetime=${this.writing.date}>
                          ${this.formatDate(this.writing.date)}
                        </time>
                      </dd>
                    `:""}
                ${this.writing.categories?a`
                      <dt>Categories:</dt>
                      <dd>${this.writing.categories}</dd>
                    `:""}
                ${this.writing.series?a`
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
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}createRenderRoot(){return this}}w([g()],p.prototype,"slug",2);w([d()],p.prototype,"writing",1);var N=Object.defineProperty,M=Object.getOwnPropertyDescriptor,G=(s,e,t,n)=>{for(var r=M(e,t),i=s.length-1,o;i>=0;i--)(o=s[i])&&(r=o(e,t,r)||r);return r&&N(e,t,r),r};class f extends h{get projects(){return this.model.projectsList||[]}constructor(){super("cadenceforge:model")}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["projects-list/request"])}render(){return a`
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
    `}renderProject(e){return a`
      <li>
        <article data-category=${e.category}>
          <h3>
            <a href="/app/projects/${e.slug}">${e.title}</a>
          </h3>
          <p>${e.description}</p>
          <dl>
            ${e.type?a`
                  <dt>Type:</dt>
                  <dd>${e.type.name}</dd>
                `:""}
            ${e.role?a`
                  <dt>Role:</dt>
                  <dd>${e.role}</dd>
                `:""}
            ${e.stack?a`
                  <dt>Stack:</dt>
                  <dd>${e.stack}</dd>
                `:""}
            ${e.status?a`
                  <dt>Status:</dt>
                  <dd>${e.status}</dd>
                `:""}
          </dl>
        </article>
      </li>
    `}createRenderRoot(){return this}}G([d()],f.prototype,"projects");var B=Object.defineProperty,J=Object.getOwnPropertyDescriptor,b=(s,e,t,n)=>{for(var r=n>1?void 0:n?J(e,t):e,i=s.length-1,o;i>=0;i--)(o=s[i])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&B(e,t,r),r};class u extends h{get project(){return this.model.project}constructor(){super("cadenceforge:model")}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e==="slug"&&t!==n&&n&&this.dispatchMessage(["project/request",{slug:n}])}render(){return!this.project||!this.project.title?a`<div class="container"><p>Loading...</p></div>`:a`
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
                ${this.project.type?a`
                      <dt>Type:</dt>
                      <dd>${this.project.type.name}</dd>
                    `:""}
                ${this.project.role?a`
                      <dt>Role:</dt>
                      <dd>${this.project.role}</dd>
                    `:""}
                ${this.project.stack?a`
                      <dt>Stack:</dt>
                      <dd>${this.project.stack}</dd>
                    `:""}
                ${this.project.status?a`
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
    `}createRenderRoot(){return this}}b([g()],u.prototype,"slug",2);b([d()],u.prototype,"project",1);const U=[{path:"/app/writing/:slug",view:s=>a`
      <writing-view slug=${s.slug}></writing-view>
    `},{path:"/app/writing",view:()=>a` <writing-list-view></writing-list-view> `},{path:"/app/projects/:slug",view:s=>a`
      <project-view slug=${s.slug}></project-view>
    `},{path:"/app/projects",view:()=>a` <projects-list-view></projects-list-view> `},{path:"/app/about",view:()=>a` <about-view></about-view> `},{path:"/app",view:()=>a` <home-view></home-view> `},{path:"/",redirect:"/app"}];$({"mu-auth":c.Provider,"mu-history":C.Provider,"mu-switch":class extends k.Element{constructor(){super(U,"cadenceforge:history","cadenceforge:auth")}},"mu-store":class extends j.Provider{constructor(){super(x,P,"cadenceforge:auth")}},"cf-header":m,"cf-footer":R,"home-view":I,"about-view":W,"writing-list-view":v,"writing-view":p,"projects-list-view":f,"project-view":u});

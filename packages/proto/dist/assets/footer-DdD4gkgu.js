import{r as o,i as n,O as d,x as r}from"./state-BW_sjFeb.js";var h=Object.defineProperty,c=(a,e,t,m)=>{for(var i=void 0,s=a.length-1,l;s>=0;s--)(l=a[s])&&(i=l(e,t,i)||i);return i&&h(e,t,i),i};class u extends n{constructor(){super(...arguments),this.authenticated=!1,this._authObserver=new d(this,"cadenceforge:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{t.user&&t.user.authenticated?this.authenticated=!0:this.authenticated=!1}),localStorage.getItem("theme")==="dark"&&document.body.classList.add("dark-mode")}firstUpdated(){const e=this.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light")):(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark"))})}render(){return r`
      <header class="site-header">
        <div class="container">
          <a href="/" class="logo">Cadence Forge</a>
          <div class="header-right">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/writing.html">Writing</a></li>
                <li><a href="/projects.html">Projects</a></li>
                <li><a href="/about.html">About</a></li>
                ${this.authenticated?r`<li>
                      <a href="#" @click=${this.handleSignOut}>Logout</a>
                    </li>`:r`<li><a href="/login.html">Login</a></li>`}
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
    `}handleSignOut(e){e.preventDefault();const t=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]});this.dispatchEvent(t)}createRenderRoot(){return this}}c([o()],u.prototype,"authenticated");class g extends n{render(){return r`
      <footer class="site-footer">
        <div class="container">
          <div>
            <h3>Cadence Forge</h3>
            <p>Systematic experimentation through rhythmic precision.</p>
          </div>
          <div>
            <h3>Content</h3>
            <ul>
              <li><a href="/writing.html">Writing</a></li>
              <li><a href="/projects.html">Projects</a></li>
              <li><a href="/about.html">About</a></li>
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
    `}createRenderRoot(){return this}}export{g as F,u as H};

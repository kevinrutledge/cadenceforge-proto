import{a as O,r as v,i as X,O as M,x as d,V as L,n as H,d as K,f as pe,h as q,s as $e,_ as _e}from"./state-BGMZkYOB.js";const Se={};function je(a,e,n){const[t,i,r]=a;switch(t){case"noop":return e;case"writing/save":{const{slug:s}=i,{onSuccess:l,onFailure:o}=r||{};return[e,Pe(i,n).then(g=>(l&&l(),["writing/load",{slug:s,writing:g}])).catch(g=>(o&&o(g),["noop"]))]}case"writing/request":{const{slug:s}=i;return e.writing?.slug===s?e:[{...e,writing:{slug:s}},Ce(i,n).then(l=>["writing/load",{slug:s,writing:l}])]}case"writing/load":{const{writing:s}=i;return{...e,writing:s}}case"writing-list/request":return e.writingList?e:[e,ze(n).then(s=>["writing-list/load",{writings:s}])];case"writing-list/load":{const{writings:s}=i;return{...e,writingList:s}}case"project/request":{const{slug:s}=i;return e.project?.slug===s?e:[{...e,project:{slug:s}},Re(i,n).then(l=>["project/load",{slug:s,project:l}])]}case"project/save":{const{slug:s}=i,{onSuccess:l,onFailure:o}=r||{};return[e,Ee(i,n).then(g=>(l&&l(),["project/load",{slug:s,project:g}])).catch(g=>(o&&o(g),["noop"]))]}case"project/load":{const{project:s}=i;return{...e,project:s}}case"projects-list/request":return e.projectsList?e:[e,Te(n).then(s=>["projects-list/load",{projects:s}])];case"projects-list/load":{const{projects:s}=i;return{...e,projectsList:s}}default:{const s=t;throw new Error(`Unhandled message "${s}"`)}}}function Ce(a,e){return fetch(`/api/writing/${a.slug}`,{headers:O.headers(e)}).then(n=>{if(n.status===200)return n.json();throw new Error(`Failed to load writing: ${a.slug}`)}).then(n=>{if(n)return n;throw new Error("No JSON in response")})}function ze(a){return fetch("/api/writing",{headers:O.headers(a)}).then(e=>{if(e.status===200)return e.json();throw new Error("Failed to load writing list")}).then(e=>{if(e)return e;throw new Error("No JSON in response")})}function Re(a,e){return fetch(`/api/projects/${a.slug}`,{headers:O.headers(e)}).then(n=>{if(n.status===200)return n.json();throw new Error(`Failed to load project: ${a.slug}`)}).then(n=>{if(n)return n;throw new Error("No JSON in response")})}function Te(a){return fetch("/api/projects",{headers:O.headers(a)}).then(e=>{if(e.status===200)return e.json();throw new Error("Failed to load projects list")}).then(e=>{if(e)return e;throw new Error("No JSON in response")})}function Pe(a,e){return fetch(`/api/writing/${a.slug}`,{method:"PUT",headers:{"Content-Type":"application/json",...O.headers(e)},body:JSON.stringify(a.writing)}).then(n=>{if(n.status===200)return n.json();throw new Error(`Failed to save writing: ${a.slug}`)}).then(n=>{if(n)return n;throw new Error("No JSON in response")})}function Ee(a,e){return fetch(`/api/projects/${a.slug}`,{method:"PUT",headers:{"Content-Type":"application/json",...O.headers(e)},body:JSON.stringify(a.project)}).then(n=>{if(n.status===200)return n.json();throw new Error(`Failed to save project: ${a.slug}`)}).then(n=>{if(n)return n;throw new Error("No JSON in response")})}var Oe=Object.defineProperty,Le=(a,e,n,t)=>{for(var i=void 0,r=a.length-1,s;r>=0;r--)(s=a[r])&&(i=s(e,n,i)||i);return i&&Oe(e,n,i),i};class ue extends X{constructor(){super(...arguments),this.authenticated=!1,this.lastScrollY=0,this.headerEl=null,this._authObserver=new M(this,"cadenceforge:auth"),this.handleScroll=()=>{if(this.headerEl||(this.headerEl=this.querySelector(".site-header")),!this.headerEl)return;const e=window.scrollY;e<50?this.headerEl.classList.remove("header-hidden"):e<this.lastScrollY?this.headerEl.classList.remove("header-hidden"):this.headerEl.classList.add("header-hidden"),this.lastScrollY=e}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(n=>{n.user&&n.user.authenticated?this.authenticated=!0:this.authenticated=!1}),localStorage.getItem("theme")==="dark"&&document.body.classList.add("dark-mode"),window.addEventListener("scroll",this.handleScroll)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.handleScroll)}firstUpdated(){const e=this.querySelector(".theme-toggle");e&&e.addEventListener("click",()=>{document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light")):(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark"))})}render(){return d`
      <header class="site-header">
        <div class="container">
          <a href="/app" class="logo">
            <svg class="logo-icon" width="24" height="24" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="8" fill="currentColor"/>
              <path d="M 11.5 5 A 4.5 4.5 0 1 0 11.5 11"
                    stroke="white"
                    stroke-width="2.6"
                    fill="none"
                    stroke-linecap="square"/>
            </svg>
            <span>Cadence Forge</span>
          </a>
          <div class="header-right">
            <nav>
              <ul>
                <li><a href="/app/writing">Writing</a></li>
                <li><a href="/app/projects">Projects</a></li>
                <li><a href="/app/about">About</a></li>
                ${this.authenticated?d`<li>
                      <a href="#" @click=${this.handleSignOut}>Logout</a>
                    </li>`:d`<li><a href="/login.html">Login</a></li>`}
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
    `}handleSignOut(e){e.preventDefault();const n=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]});this.dispatchEvent(n)}createRenderRoot(){return this}}Le([v()],ue.prototype,"authenticated");class Ae extends X{render(){return d`
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
    `}createRenderRoot(){return this}}var Ie=Object.defineProperty,De=Object.getOwnPropertyDescriptor,de=(a,e,n,t)=>{for(var i=De(e,n),r=a.length-1,s;r>=0;r--)(s=a[r])&&(i=s(e,n,i)||i);return i&&Ie(e,n,i),i};class V extends L{get writings(){return this.model.writingList||[]}get projects(){return this.model.projectsList||[]}constructor(){super("cadenceforge:model")}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["writing-list/request"]),this.dispatchMessage(["projects-list/request"])}render(){const e=this.writings.slice(0,2),n=this.projects.filter(t=>!t.status?.toLowerCase().includes("completed"));return d`
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
            <ul>
              ${e.map(t=>this.renderWriting(t))}
            </ul>
            <p>
              <a href="/app/writing">All writing →</a>
            </p>
          </section>

          <section>
            <h2>Current Work</h2>
            <ul>
              ${n.length>0?n.map(t=>this.renderProject(t)):this.projects.slice(0,2).map(t=>this.renderProject(t))}
            </ul>
            <p>
              <a href="/app/projects">All projects →</a>
            </p>
          </section>
        </div>
      </main>
    `}renderWriting(e){return d`
      <li>
        <article data-category=${e.category}>
          <h3>
            <a href="/app/writing/${e.slug}">${e.title}</a>
          </h3>
          <p>${e.description}</p>
          ${e.date?d`<time datetime=${e.date}
                >${this.formatDate(e.date)}</time
              >`:""}
        </article>
      </li>
    `}renderProject(e){return d`
      <li>
        <article data-category=${e.category}>
          <h3>
            <a href="/app/projects/${e.slug}">${e.title}</a>
          </h3>
          <p>${e.description}</p>
          ${e.stack?d`<span>${e.stack}</span>`:""}
        </article>
      </li>
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}createRenderRoot(){return this}}de([v()],V.prototype,"writings");de([v()],V.prototype,"projects");class qe extends X{render(){return d`
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
    `}createRenderRoot(){return this}}var Me=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,Ne=(a,e,n,t)=>{for(var i=Be(e,n),r=a.length-1,s;r>=0;r--)(s=a[r])&&(i=s(e,n,i)||i);return i&&Me(e,n,i),i};class ge extends L{get writings(){return this.model.writingList||[]}constructor(){super("cadenceforge:model")}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["writing-list/request"])}render(){return d`
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
    `}renderWriting(e){return d`
      <li>
        <article data-category=${e.category}>
          <h3>
            <a href="/app/writing/${e.slug}">${e.title}</a>
          </h3>
          <p>${e.description}</p>
          <dl>
            ${e.date?d`
                  <dt>Date:</dt>
                  <dd>
                    <time datetime=${e.date}
                      >${this.formatDate(e.date)}</time
                    >
                  </dd>
                `:""}
            ${e.categories?d`
                  <dt>Categories:</dt>
                  <dd>${e.categories}</dd>
                `:""}
            ${e.series?d`
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
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}createRenderRoot(){return this}}Ne([v()],ge.prototype,"writings");function fe(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let A=fe();function Ze(a){A=a}const me=/[&<>"']/,Ue=new RegExp(me.source,"g"),we=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,We=new RegExp(we.source,"g"),He={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},se=a=>He[a];function y(a,e){if(e){if(me.test(a))return a.replace(Ue,se)}else if(we.test(a))return a.replace(We,se);return a}const Fe=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ke(a){return a.replace(Fe,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const Qe=/(^|[^\[])\^/g;function k(a,e){a=typeof a=="string"?a:a.source,e=e||"";const n={replace:(t,i)=>(i=i.source||i,i=i.replace(Qe,"$1"),a=a.replace(t,i),n),getRegex:()=>new RegExp(a,e)};return n}const Je=/[^\w:]/g,Ge=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ae(a,e,n){if(a){let t;try{t=decodeURIComponent(ke(n)).replace(Je,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}e&&!Ge.test(n)&&(n=Ve(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Z={},Ye=/^[^:]+:\/*[^/]*$/,Xe=/^([^:]+:)[\s\S]*$/,Ke=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Ve(a,e){Z[" "+a]||(Ye.test(a)?Z[" "+a]=a+"/":Z[" "+a]=U(a,"/",!0)),a=Z[" "+a];const n=a.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:a.replace(Xe,"$1")+e:e.charAt(0)==="/"?n?e:a.replace(Ke,"$1")+e:a+e}const W={exec:function(){}};function le(a,e){const n=a.replace(/\|/g,(r,s,l)=>{let o=!1,g=s;for(;--g>=0&&l[g]==="\\";)o=!o;return o?"|":" |"}),t=n.split(/ \|/);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function U(a,e,n){const t=a.length;if(t===0)return"";let i=0;for(;i<t;){const r=a.charAt(t-i-1);if(r===e&&!n)i++;else if(r!==e&&n)i++;else break}return a.slice(0,t-i)}function et(a,e){if(a.indexOf(e[1])===-1)return-1;const n=a.length;let t=0,i=0;for(;i<n;i++)if(a[i]==="\\")i++;else if(a[i]===e[0])t++;else if(a[i]===e[1]&&(t--,t<0))return i;return-1}function tt(a){a&&a.sanitize&&!a.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function oe(a,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=a),e>>=1,a+=a;return n+a}function ce(a,e,n,t){const i=e.href,r=e.title?y(e.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){t.state.inLink=!0;const l={type:"link",raw:n,href:i,title:r,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,l}return{type:"image",raw:n,href:i,title:r,text:y(s)}}function nt(a,e){const n=a.match(/^(\s+)(?:```)/);if(n===null)return e;const t=n[1];return e.split(`
`).map(i=>{const r=i.match(/^\s+/);if(r===null)return i;const[s]=r;return s.length>=t.length?i.slice(t.length):i}).join(`
`)}class ee{constructor(e){this.options=e||A}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:U(t,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const t=n[0],i=nt(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){const i=U(t,"#");(this.options.pedantic||!i||/ $/.test(i))&&(t=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const t=n[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(t);return this.lexer.state.top=i,{type:"blockquote",raw:n[0],tokens:r,text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t,i,r,s,l,o,g,f,m,w,h,j,$=n[1].trim();const z=$.length>1,b={type:"list",raw:"",ordered:z,start:z?+$.slice(0,-1):"",loose:!1,items:[]};$=z?`\\d{1,9}\\${$.slice(-1)}`:`\\${$}`,this.options.pedantic&&($=z?$:"[*+-]");const x=new RegExp(`^( {0,3}${$})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(j=!1,!(!(n=x.exec(e))||this.rules.block.hr.test(e)));){if(t=n[0],e=e.substring(t.length),f=n[2].split(`
`,1)[0].replace(/^\t+/,C=>" ".repeat(3*C.length)),m=e.split(`
`,1)[0],this.options.pedantic?(s=2,h=f.trimLeft()):(s=n[2].search(/[^ ]/),s=s>4?1:s,h=f.slice(s),s+=n[1].length),o=!1,!f&&/^ *$/.test(m)&&(t+=m+`
`,e=e.substring(m.length+1),j=!0),!j){const C=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),_=new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),S=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),D=new RegExp(`^ {0,${Math.min(3,s-1)}}#`);for(;e&&(w=e.split(`
`,1)[0],m=w,this.options.pedantic&&(m=m.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(S.test(m)||D.test(m)||C.test(m)||_.test(e)));){if(m.search(/[^ ]/)>=s||!m.trim())h+=`
`+m.slice(s);else{if(o||f.search(/[^ ]/)>=4||S.test(f)||D.test(f)||_.test(f))break;h+=`
`+m}!o&&!m.trim()&&(o=!0),t+=w+`
`,e=e.substring(w.length+1),f=m.slice(s)}}b.loose||(g?b.loose=!0:/\n *\n *$/.test(t)&&(g=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(h),i&&(r=i[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),b.items.push({type:"list_item",raw:t,task:!!i,checked:r,loose:!1,text:h}),b.raw+=t}b.items[b.items.length-1].raw=t.trimRight(),b.items[b.items.length-1].text=h.trimRight(),b.raw=b.raw.trimRight();const I=b.items.length;for(l=0;l<I;l++)if(this.lexer.state.top=!1,b.items[l].tokens=this.lexer.blockTokens(b.items[l].text,[]),!b.loose){const C=b.items[l].tokens.filter(S=>S.type==="space"),_=C.length>0&&C.some(S=>/\n.*\n/.test(S.raw));b.loose=_}if(b.loose)for(l=0;l<I;l++)b.items[l].loose=!0;return b}}html(e){const n=this.rules.block.html.exec(e);if(n){const t={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(n[0]):y(n[0]);t.type="paragraph",t.text=i,t.tokens=this.lexer.inline(i)}return t}}def(e){const n=this.rules.block.def.exec(e);if(n){const t=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:t,raw:n[0],href:i,title:r}}}table(e){const n=this.rules.block.table.exec(e);if(n){const t={type:"table",header:le(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){t.raw=n[0];let i=t.align.length,r,s,l,o;for(r=0;r<i;r++)/^ *-+: *$/.test(t.align[r])?t.align[r]="right":/^ *:-+: *$/.test(t.align[r])?t.align[r]="center":/^ *:-+ *$/.test(t.align[r])?t.align[r]="left":t.align[r]=null;for(i=t.rows.length,r=0;r<i;r++)t.rows[r]=le(t.rows[r],t.header.length).map(g=>({text:g}));for(i=t.header.length,s=0;s<i;s++)t.header[s].tokens=this.lexer.inline(t.header[s].text);for(i=t.rows.length,s=0;s<i;s++)for(o=t.rows[s],l=0;l<o.length;l++)o[l].tokens=this.lexer.inline(o[l].text);return t}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:y(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):y(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const s=U(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{const s=et(n[2],"()");if(s>-1){const o=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,o).trim(),n[3]=""}}let i=n[2],r="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),ce(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let i=(t[2]||t[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i){const r=t[0].charAt(0);return{type:"text",raw:r,text:r}}return ce(t,i,t[0],this.lexer)}}emStrong(e,n,t=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;const r=i[1]||i[2]||"";if(!r||r&&(t===""||this.rules.inline.punctuation.exec(t))){const s=i[0].length-1;let l,o,g=s,f=0;const m=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(m.lastIndex=0,n=n.slice(-1*e.length+s);(i=m.exec(n))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(o=l.length,i[3]||i[4]){g+=o;continue}else if((i[5]||i[6])&&s%3&&!((s+o)%3)){f+=o;continue}if(g-=o,g>0)continue;o=Math.min(o,o+g+f);const w=e.slice(0,s+i.index+(i[0].length-l.length)+o);if(Math.min(s,o)%2){const j=w.slice(1,-1);return{type:"em",raw:w,text:j,tokens:this.lexer.inlineTokens(j)}}const h=w.slice(2,-2);return{type:"strong",raw:w,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," ");const i=/[^ ]/.test(t),r=/^ /.test(t)&&/ $/.test(t);return i&&r&&(t=t.substring(1,t.length-1)),t=y(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const t=this.rules.inline.autolink.exec(e);if(t){let i,r;return t[2]==="@"?(i=y(this.options.mangle?n(t[1]):t[1]),r="mailto:"+i):(i=y(t[1]),r=i),{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(e,n){let t;if(t=this.rules.inline.url.exec(e)){let i,r;if(t[2]==="@")i=y(this.options.mangle?n(t[0]):t[0]),r="mailto:"+i;else{let s;do s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(s!==t[0]);i=y(t[0]),t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,n){const t=this.rules.inline.text.exec(e);if(t){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):y(t[0]):t[0]:i=y(this.options.smartypants?n(t[0]):t[0]),{type:"text",raw:t[0],text:i}}}}const u={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:W,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};u._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;u._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;u.def=k(u.def).replace("label",u._label).replace("title",u._title).getRegex();u.bullet=/(?:[*+-]|\d{1,9}[.)])/;u.listItemStart=k(/^( *)(bull) */).replace("bull",u.bullet).getRegex();u.list=k(u.list).replace(/bull/g,u.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+u.def.source+")").getRegex();u._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";u._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;u.html=k(u.html,"i").replace("comment",u._comment).replace("tag",u._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();u.paragraph=k(u._paragraph).replace("hr",u.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",u._tag).getRegex();u.blockquote=k(u.blockquote).replace("paragraph",u.paragraph).getRegex();u.normal={...u};u.gfm={...u.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};u.gfm.table=k(u.gfm.table).replace("hr",u.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",u._tag).getRegex();u.gfm.paragraph=k(u._paragraph).replace("hr",u.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",u.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",u._tag).getRegex();u.pedantic={...u.normal,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",u._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:W,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(u.normal._paragraph).replace("hr",u.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",u.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const c={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:W,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:W,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};c._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";c.punctuation=k(c.punctuation).replace(/punctuation/g,c._punctuation).getRegex();c.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;c.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;c._comment=k(u._comment).replace("(?:-->|$)","-->").getRegex();c.emStrong.lDelim=k(c.emStrong.lDelim).replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimAst=k(c.emStrong.rDelimAst,"g").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimUnd=k(c.emStrong.rDelimUnd,"g").replace(/punct/g,c._punctuation).getRegex();c._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;c._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;c._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;c.autolink=k(c.autolink).replace("scheme",c._scheme).replace("email",c._email).getRegex();c._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;c.tag=k(c.tag).replace("comment",c._comment).replace("attribute",c._attribute).getRegex();c._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;c._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;c._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;c.link=k(c.link).replace("label",c._label).replace("href",c._href).replace("title",c._title).getRegex();c.reflink=k(c.reflink).replace("label",c._label).replace("ref",u._label).getRegex();c.nolink=k(c.nolink).replace("ref",u._label).getRegex();c.reflinkSearch=k(c.reflinkSearch,"g").replace("reflink",c.reflink).replace("nolink",c.nolink).getRegex();c.normal={...c};c.pedantic={...c.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",c._label).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",c._label).getRegex()};c.gfm={...c.normal,escape:k(c.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};c.gfm.url=k(c.gfm.url,"i").replace("email",c.gfm._extended_email).getRegex();c.breaks={...c.gfm,br:k(c.br).replace("{2,}","*").getRegex(),text:k(c.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function it(a){return a.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function he(a){let e="",n,t;const i=a.length;for(n=0;n<i;n++)t=a.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}class R{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||A,this.options.tokenizer=this.options.tokenizer||new ee,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:u.normal,inline:c.normal};this.options.pedantic?(n.block=u.pedantic,n.inline=c.pedantic):this.options.gfm&&(n.block=u.gfm,this.options.breaks?n.inline=c.breaks:n.inline=c.gfm),this.tokenizer.rules=n}static get rules(){return{block:u,inline:c}}static lex(e,n){return new R(n).lex(e)}static lexInline(e,n){return new R(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,o,g)=>o+"    ".repeat(g.length));let t,i,r,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(t=l.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=e.slice(1);let g;this.options.extensions.startBlock.forEach(function(f){g=f.call({lexer:this},o),typeof g=="number"&&g>=0&&(l=Math.min(l,g))}),l<1/0&&l>=0&&(r=e.substring(0,l+1))}if(this.state.top&&(t=this.tokenizer.paragraph(r))){i=n[n.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t),s=r.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let t,i,r,s=e,l,o,g;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)f.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+oe("a",l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+oe("a",l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(s))!=null;)s=s.slice(0,l.index+l[0].length-2)+"++"+s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(o||(g=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(t=f.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,s,g)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e,he)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e,he))){e=e.substring(t.raw.length),n.push(t);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const m=e.slice(1);let w;this.options.extensions.startInline.forEach(function(h){w=h.call({lexer:this},m),typeof w=="number"&&w>=0&&(f=Math.min(f,w))}),f<1/0&&f>=0&&(r=e.substring(0,f+1))}if(t=this.tokenizer.inlineText(r,it)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(g=t.raw.slice(-1)),o=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return n}}class te{constructor(e){this.options=e||A}code(e,n,t){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(e,i);r!=null&&r!==e&&(t=!0,e=r)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+y(i)+'">'+(t?e:y(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:y(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,t,i){if(this.options.headerIds){const r=this.options.headerPrefix+i.slug(t);return`<h${n} id="${r}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,t){const i=n?"ol":"ul",r=n&&t!==1?' start="'+t+'"':"";return"<"+i+r+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){if(e=ae(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i='<a href="'+e+'"';return n&&(i+=' title="'+n+'"'),i+=">"+t+"</a>",i}image(e,n,t){if(e=ae(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i=`<img src="${e}" alt="${t}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class be{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}}class xe{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let t=e,i=0;if(this.seen.hasOwnProperty(t)){i=this.seen[e];do i++,t=e+"-"+i;while(this.seen.hasOwnProperty(t))}return n||(this.seen[e]=i,this.seen[t]=0),t}slug(e,n={}){const t=this.serialize(e);return this.getNextSafeSlug(t,n.dryrun)}}class T{constructor(e){this.options=e||A,this.options.renderer=this.options.renderer||new te,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new be,this.slugger=new xe}static parse(e,n){return new T(n).parse(e)}static parseInline(e,n){return new T(n).parseInline(e)}parse(e,n=!0){let t="",i,r,s,l,o,g,f,m,w,h,j,$,z,b,x,I,C,_,S;const D=e.length;for(i=0;i<D;i++){if(h=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(S=this.options.extensions.renderers[h.type].call({parser:this},h),S!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type))){t+=S||"";continue}switch(h.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{t+=this.renderer.heading(this.parseInline(h.tokens),h.depth,ke(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue}case"code":{t+=this.renderer.code(h.text,h.lang,h.escaped);continue}case"table":{for(m="",f="",l=h.header.length,r=0;r<l;r++)f+=this.renderer.tablecell(this.parseInline(h.header[r].tokens),{header:!0,align:h.align[r]});for(m+=this.renderer.tablerow(f),w="",l=h.rows.length,r=0;r<l;r++){for(g=h.rows[r],f="",o=g.length,s=0;s<o;s++)f+=this.renderer.tablecell(this.parseInline(g[s].tokens),{header:!1,align:h.align[s]});w+=this.renderer.tablerow(f)}t+=this.renderer.table(m,w);continue}case"blockquote":{w=this.parse(h.tokens),t+=this.renderer.blockquote(w);continue}case"list":{for(j=h.ordered,$=h.start,z=h.loose,l=h.items.length,w="",r=0;r<l;r++)x=h.items[r],I=x.checked,C=x.task,b="",x.task&&(_=this.renderer.checkbox(I),z?x.tokens.length>0&&x.tokens[0].type==="paragraph"?(x.tokens[0].text=_+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&x.tokens[0].tokens[0].type==="text"&&(x.tokens[0].tokens[0].text=_+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:_}):b+=_),b+=this.parse(x.tokens,z),w+=this.renderer.listitem(b,C,I);t+=this.renderer.list(w,j,$);continue}case"html":{t+=this.renderer.html(h.text);continue}case"paragraph":{t+=this.renderer.paragraph(this.parseInline(h.tokens));continue}case"text":{for(w=h.tokens?this.parseInline(h.tokens):h.text;i+1<D&&e[i+1].type==="text";)h=e[++i],w+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);t+=n?this.renderer.paragraph(w):w;continue}default:{const re='Token with "'+h.type+'" type was not found.';if(this.options.silent){console.error(re);return}else throw new Error(re)}}}return t}parseInline(e,n){n=n||this.renderer;let t="",i,r,s;const l=e.length;for(i=0;i<l;i++){if(r=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(s=this.options.extensions.renderers[r.type].call({parser:this},r),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){t+=s||"";continue}switch(r.type){case"escape":{t+=n.text(r.text);break}case"html":{t+=n.html(r.text);break}case"link":{t+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break}case"image":{t+=n.image(r.href,r.title,r.text);break}case"strong":{t+=n.strong(this.parseInline(r.tokens,n));break}case"em":{t+=n.em(this.parseInline(r.tokens,n));break}case"codespan":{t+=n.codespan(r.text);break}case"br":{t+=n.br();break}case"del":{t+=n.del(this.parseInline(r.tokens,n));break}case"text":{t+=n.text(r.text);break}default:{const o='Token with "'+r.type+'" type was not found.';if(this.options.silent){console.error(o);return}else throw new Error(o)}}}return t}}class Y{constructor(e){this.options=e||A}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}function rt(a,e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,a){const i="<p>An error occurred:</p><pre>"+y(t.message+"",!0)+"</pre>";if(e)return Promise.resolve(i);if(n){n(null,i);return}return i}if(e)return Promise.reject(t);if(n){n(t);return}throw t}}function ve(a,e){return(n,t,i)=>{typeof t=="function"&&(i=t,t=null);const r={...t};t={...p.defaults,...r};const s=rt(t.silent,t.async,i);if(typeof n>"u"||n===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(tt(t),t.hooks&&(t.hooks.options=t),i){const l=t.highlight;let o;try{t.hooks&&(n=t.hooks.preprocess(n)),o=a(n,t)}catch(m){return s(m)}const g=function(m){let w;if(!m)try{t.walkTokens&&p.walkTokens(o,t.walkTokens),w=e(o,t),t.hooks&&(w=t.hooks.postprocess(w))}catch(h){m=h}return t.highlight=l,m?s(m):i(null,w)};if(!l||l.length<3||(delete t.highlight,!o.length))return g();let f=0;p.walkTokens(o,function(m){m.type==="code"&&(f++,setTimeout(()=>{l(m.text,m.lang,function(w,h){if(w)return g(w);h!=null&&h!==m.text&&(m.text=h,m.escaped=!0),f--,f===0&&g()})},0))}),f===0&&g();return}if(t.async)return Promise.resolve(t.hooks?t.hooks.preprocess(n):n).then(l=>a(l,t)).then(l=>t.walkTokens?Promise.all(p.walkTokens(l,t.walkTokens)).then(()=>l):l).then(l=>e(l,t)).then(l=>t.hooks?t.hooks.postprocess(l):l).catch(s);try{t.hooks&&(n=t.hooks.preprocess(n));const l=a(n,t);t.walkTokens&&p.walkTokens(l,t.walkTokens);let o=e(l,t);return t.hooks&&(o=t.hooks.postprocess(o)),o}catch(l){return s(l)}}}function p(a,e,n){return ve(R.lex,T.parse)(a,e,n)}p.options=p.setOptions=function(a){return p.defaults={...p.defaults,...a},Ze(p.defaults),p};p.getDefaults=fe;p.defaults=A;p.use=function(...a){const e=p.defaults.extensions||{renderers:{},childTokens:{}};a.forEach(n=>{const t={...n};if(t.async=p.defaults.async||t.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const r=e.renderers[i.name];r?e.renderers[i.name]=function(...s){let l=i.renderer.apply(this,s);return l===!1&&(l=r.apply(this,s)),l}:e.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[i.level]?e[i.level].unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),t.extensions=e),n.renderer){const i=p.defaults.renderer||new te;for(const r in n.renderer){const s=i[r];i[r]=(...l)=>{let o=n.renderer[r].apply(i,l);return o===!1&&(o=s.apply(i,l)),o}}t.renderer=i}if(n.tokenizer){const i=p.defaults.tokenizer||new ee;for(const r in n.tokenizer){const s=i[r];i[r]=(...l)=>{let o=n.tokenizer[r].apply(i,l);return o===!1&&(o=s.apply(i,l)),o}}t.tokenizer=i}if(n.hooks){const i=p.defaults.hooks||new Y;for(const r in n.hooks){const s=i[r];Y.passThroughHooks.has(r)?i[r]=l=>{if(p.defaults.async)return Promise.resolve(n.hooks[r].call(i,l)).then(g=>s.call(i,g));const o=n.hooks[r].call(i,l);return s.call(i,o)}:i[r]=(...l)=>{let o=n.hooks[r].apply(i,l);return o===!1&&(o=s.apply(i,l)),o}}t.hooks=i}if(n.walkTokens){const i=p.defaults.walkTokens;t.walkTokens=function(r){let s=[];return s.push(n.walkTokens.call(this,r)),i&&(s=s.concat(i.call(this,r))),s}}p.setOptions(t)})};p.walkTokens=function(a,e){let n=[];for(const t of a)switch(n=n.concat(e.call(p,t)),t.type){case"table":{for(const i of t.header)n=n.concat(p.walkTokens(i.tokens,e));for(const i of t.rows)for(const r of i)n=n.concat(p.walkTokens(r.tokens,e));break}case"list":{n=n.concat(p.walkTokens(t.items,e));break}default:p.defaults.extensions&&p.defaults.extensions.childTokens&&p.defaults.extensions.childTokens[t.type]?p.defaults.extensions.childTokens[t.type].forEach(function(i){n=n.concat(p.walkTokens(t[i],e))}):t.tokens&&(n=n.concat(p.walkTokens(t.tokens,e)))}return n};p.parseInline=ve(R.lexInline,T.parseInline);p.Parser=T;p.parser=T.parse;p.Renderer=te;p.TextRenderer=be;p.Lexer=R;p.lexer=R.lex;p.Tokenizer=ee;p.Slugger=xe;p.Hooks=Y;p.parse=p;p.options;p.setOptions;p.use;p.walkTokens;p.parseInline;T.parse;R.lex;var st=Object.defineProperty,at=Object.getOwnPropertyDescriptor,F=(a,e,n,t)=>{for(var i=t>1?void 0:t?at(e,n):e,r=a.length-1,s;r>=0;r--)(s=a[r])&&(i=(t?s(e,n,i):s(i))||i);return t&&i&&st(e,n,i),i};class B extends L{constructor(){super("cadenceforge:model"),this.authenticated=!1,this.username="",this._authObserver=new M(this,"cadenceforge:auth")}get writing(){return this.model.writing}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{e.user&&e.user.authenticated?(this.authenticated=!0,this.username=e.user.username||""):(this.authenticated=!1,this.username="")})}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t),e==="slug"&&n!==t&&t&&this.dispatchMessage(["writing/request",{slug:t}])}render(){return!this.writing||!this.writing.title?d`<div class="container"><p>Loading...</p></div>`:d`
      <main>
        <div class="container">
          <article>
            <div class="article-header-row">
              <div class="breadcrumb">
                <a href="/app">Home</a> / <a href="/app/writing">Writing</a> /
                ${this.writing.title}
              </div>
              ${this.authenticated&&this.username==="kevin"?d`<a
                    href="/app/writing/${this.writing.slug}/edit"
                    class="edit-link"
                    >Edit</a
                  >`:""}
            </div>

            <header>
              <h1>${this.writing.title}</h1>
              <p>${this.writing.description}</p>

              <dl>
                ${this.writing.date?d`
                      <dt>Published:</dt>
                      <dd>
                        <time datetime=${this.writing.date}>
                          ${this.formatDate(this.writing.date)}
                        </time>
                      </dd>
                    `:""}
                ${this.writing.categories?d`
                      <dt>Categories:</dt>
                      <dd>${this.writing.categories}</dd>
                    `:""}
                ${this.writing.series?d`
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

            <section class="article-content"></section>
          </article>
        </div>
      </main>
    `}updated(){const e=this.querySelector(".article-content");e&&this.writing?.content?e.innerHTML=p.parse(this.writing.content):e&&!this.writing?.content&&(e.innerHTML="<p>No content available for this article yet.</p>")}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}createRenderRoot(){return this}}F([H()],B.prototype,"slug",2);F([v()],B.prototype,"writing",1);F([v()],B.prototype,"authenticated",2);F([v()],B.prototype,"username",2);var lt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Q=(a,e,n,t)=>{for(var i=t>1?void 0:t?ot(e,n):e,r=a.length-1,s;r>=0;r--)(s=a[r])&&(i=(t?s(e,n,i):s(i))||i);return t&&i&&lt(e,n,i),i};const ne=class ne extends L{constructor(){super("cadenceforge:model"),this.authenticated=!1,this.username="",this._authObserver=new M(this,"cadenceforge:auth")}get writing(){return this.model.writing}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{e.user&&e.user.authenticated?(this.authenticated=!0,this.username=e.user.username||""):(this.authenticated=!1,this.username="")})}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t),e==="slug"&&n!==t&&t&&this.dispatchMessage(["writing/request",{slug:t}])}render(){return!this.authenticated||this.username!=="kevin"?d`
        <main>
          <div class="container">
            <p>Access denied. Only kevin can edit content.</p>
            <p><a href="/app">Return home</a></p>
          </div>
        </main>
      `:!this.writing||!this.writing.title?d`
        <main>
          <div class="container">
            <p>Loading...</p>
          </div>
        </main>
      `:d`
      <main>
        <div class="container">
          <article class="edit-form" data-category=${this.writing.category}>
            <div class="breadcrumb">
              <a href="/app">Home</a> / <a href="/app/writing">Writing</a> /
              <a href="/app/writing/${this.writing.slug}">${this.writing.title}</a>
              / Edit
            </div>

            <header>
              <h1>Edit Writing</h1>
            </header>

            <mu-form .init=${this.writing} @mu-form:submit=${this.handleSubmit}>
              <label>
                <span>Title</span>
                <input name="title" />
              </label>

              <label>
                <span>Description</span>
                <textarea name="description" rows="4"></textarea>
              </label>

              <label>
                <span>Date</span>
                <input name="date" type="month" />
              </label>

              <label>
                <span>Category</span>
                <select name="category">
                  <option value="cs">Computer Science</option>
                  <option value="philosophy">Philosophy</option>
                  <option value="methodology">Methodology</option>
                  <option value="culture">Culture</option>
                  <option value="personal">Personal</option>
                </select>
              </label>

              <label>
                <span>Content (Markdown)</span>
                <textarea name="content" rows="12" placeholder="Write your content in Markdown..."></textarea>
              </label>

              <div class="form-buttons" slot="submit">
                <button type="submit">Save Changes</button>
                <button type="button" @click=${this.handleCancel}>Cancel</button>
              </div>
            </mu-form>
          </article>
        </div>
      </main>
    `}handleSubmit(e){this.dispatchMessage(["writing/save",{slug:this.slug,writing:e.detail},{onSuccess:()=>q.dispatch(this,"history/navigate",{href:`/app/writing/${this.slug}`}),onFailure:n=>console.error("Save failed:",n)}])}handleCancel(){q.dispatch(this,"history/navigate",{href:`/app/writing/${this.slug}`})}createRenderRoot(){return this}};ne.uses=K({"mu-form":pe.Element});let P=ne;Q([H()],P.prototype,"slug",2);Q([v()],P.prototype,"writing",1);Q([v()],P.prototype,"authenticated",2);Q([v()],P.prototype,"username",2);var ct=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,pt=(a,e,n,t)=>{for(var i=ht(e,n),r=a.length-1,s;r>=0;r--)(s=a[r])&&(i=s(e,n,i)||i);return i&&ct(e,n,i),i};class ye extends L{get projects(){return this.model.projectsList||[]}constructor(){super("cadenceforge:model")}connectedCallback(){super.connectedCallback(),this.dispatchMessage(["projects-list/request"])}render(){return d`
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
    `}renderProject(e){return d`
      <li>
        <article data-category=${e.category}>
          <h3>
            <a href="/app/projects/${e.slug}">${e.title}</a>
          </h3>
          <p>${e.description}</p>
          <dl>
            ${e.type?d`
                  <dt>Type:</dt>
                  <dd>${e.type.name}</dd>
                `:""}
            ${e.role?d`
                  <dt>Role:</dt>
                  <dd>${e.role}</dd>
                `:""}
            ${e.stack?d`
                  <dt>Stack:</dt>
                  <dd>${e.stack}</dd>
                `:""}
            ${e.status?d`
                  <dt>Status:</dt>
                  <dd>${e.status}</dd>
                `:""}
          </dl>
        </article>
      </li>
    `}createRenderRoot(){return this}}pt([v()],ye.prototype,"projects");var ut=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,J=(a,e,n,t)=>{for(var i=t>1?void 0:t?dt(e,n):e,r=a.length-1,s;r>=0;r--)(s=a[r])&&(i=(t?s(e,n,i):s(i))||i);return t&&i&&ut(e,n,i),i};class N extends L{constructor(){super("cadenceforge:model"),this.authenticated=!1,this.username="",this._authObserver=new M(this,"cadenceforge:auth")}get project(){return this.model.project}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{e.user&&e.user.authenticated?(this.authenticated=!0,this.username=e.user.username||""):(this.authenticated=!1,this.username="")})}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t),e==="slug"&&n!==t&&t&&this.dispatchMessage(["project/request",{slug:t}])}render(){return!this.project||!this.project.title?d`<div class="container"><p>Loading...</p></div>`:d`
      <main>
        <div class="container">
          <article>
            <div class="article-header-row">
              <div class="breadcrumb">
                <a href="/app">Home</a> / <a href="/app/projects">Projects</a> /
                ${this.project.title}
              </div>
              ${this.authenticated&&this.username==="kevin"?d`<a
                    href="/app/projects/${this.project.slug}/edit"
                    class="edit-link"
                    >Edit</a
                  >`:""}
            </div>

            <header>
              <h1>${this.project.title}</h1>
              <p>${this.project.description}</p>

              <dl>
                ${this.project.type?d`
                      <dt>Type:</dt>
                      <dd>${this.project.type.name}</dd>
                    `:""}
                ${this.project.role?d`
                      <dt>Role:</dt>
                      <dd>${this.project.role}</dd>
                    `:""}
                ${this.project.stack?d`
                      <dt>Stack:</dt>
                      <dd>${this.project.stack}</dd>
                    `:""}
                ${this.project.status?d`
                      <dt>Status:</dt>
                      <dd>${this.project.status}</dd>
                    `:""}
              </dl>
            </header>

            <section class="article-content"></section>
          </article>
        </div>
      </main>
    `}updated(){const e=this.querySelector(".article-content");e&&this.project?.content?e.innerHTML=p.parse(this.project.content):e&&!this.project?.content&&(e.innerHTML="<p>No content available for this project yet.</p>")}createRenderRoot(){return this}}J([H()],N.prototype,"slug",2);J([v()],N.prototype,"project",1);J([v()],N.prototype,"authenticated",2);J([v()],N.prototype,"username",2);var gt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,G=(a,e,n,t)=>{for(var i=t>1?void 0:t?ft(e,n):e,r=a.length-1,s;r>=0;r--)(s=a[r])&&(i=(t?s(e,n,i):s(i))||i);return t&&i&&gt(e,n,i),i};const ie=class ie extends L{constructor(){super("cadenceforge:model"),this.authenticated=!1,this.username="",this._authObserver=new M(this,"cadenceforge:auth")}get project(){return this.model.project}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{e.user&&e.user.authenticated?(this.authenticated=!0,this.username=e.user.username||""):(this.authenticated=!1,this.username="")})}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t),e==="slug"&&n!==t&&t&&this.dispatchMessage(["project/request",{slug:t}])}render(){return!this.authenticated||this.username!=="kevin"?d`
        <main>
          <div class="container">
            <p>Access denied. Only kevin can edit content.</p>
            <p><a href="/app">Return home</a></p>
          </div>
        </main>
      `:!this.project||!this.project.title?d`
        <main>
          <div class="container">
            <p>Loading...</p>
          </div>
        </main>
      `:d`
      <main>
        <div class="container">
          <article class="edit-form" data-category=${this.project.category}>
            <div class="breadcrumb">
              <a href="/app">Home</a> / <a href="/app/projects">Projects</a> /
              <a href="/app/projects/${this.project.slug}">${this.project.title}</a>
              / Edit
            </div>

            <header>
              <h1>Edit Project</h1>
            </header>

            <mu-form .init=${this.project} @mu-form:submit=${this.handleSubmit}>
              <label>
                <span>Title</span>
                <input name="title" />
              </label>

              <label>
                <span>Description</span>
                <textarea name="description" rows="4"></textarea>
              </label>

              <label>
                <span>Role</span>
                <input name="role" placeholder="e.g. Full-stack Developer" />
              </label>

              <label>
                <span>Tech Stack</span>
                <input name="stack" placeholder="e.g. Next.js, TypeScript, MongoDB" />
              </label>

              <label>
                <span>Status</span>
                <select name="status">
                  <option value="Researching">Researching</option>
                  <option value="Planning">Planning</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </select>
              </label>

              <label>
                <span>Category</span>
                <select name="category">
                  <option value="cs">Computer Science</option>
                  <option value="methodology">Methodology</option>
                  <option value="personal">Personal</option>
                </select>
              </label>

              <label>
                <span>Content (Markdown)</span>
                <textarea name="content" rows="12" placeholder="Write your content in Markdown..."></textarea>
              </label>

              <div class="form-buttons" slot="submit">
                <button type="submit">Save Changes</button>
                <button type="button" @click=${this.handleCancel}>Cancel</button>
              </div>
            </mu-form>
          </article>
        </div>
      </main>
    `}handleSubmit(e){this.dispatchMessage(["project/save",{slug:this.slug,project:e.detail},{onSuccess:()=>q.dispatch(this,"history/navigate",{href:`/app/projects/${this.slug}`}),onFailure:n=>console.error("Save failed:",n)}])}handleCancel(){q.dispatch(this,"history/navigate",{href:`/app/projects/${this.slug}`})}createRenderRoot(){return this}};ie.uses=K({"mu-form":pe.Element});let E=ie;G([H()],E.prototype,"slug",2);G([v()],E.prototype,"project",1);G([v()],E.prototype,"authenticated",2);G([v()],E.prototype,"username",2);const mt=[{path:"/app/writing/:slug/edit",view:a=>d`
      <writing-edit slug=${a.slug}></writing-edit>
    `},{path:"/app/writing/:slug",view:a=>d`
      <writing-view slug=${a.slug}></writing-view>
    `},{path:"/app/writing",view:()=>d` <writing-list-view></writing-list-view> `},{path:"/app/projects/:slug/edit",view:a=>d`
      <project-edit slug=${a.slug}></project-edit>
    `},{path:"/app/projects/:slug",view:a=>d`
      <project-view slug=${a.slug}></project-view>
    `},{path:"/app/projects",view:()=>d` <projects-list-view></projects-list-view> `},{path:"/app/about",view:()=>d` <about-view></about-view> `},{path:"/app",view:()=>d` <home-view></home-view> `},{path:"/",redirect:"/app"}];K({"mu-auth":O.Provider,"mu-history":q.Provider,"mu-switch":class extends _e.Element{constructor(){super(mt,"cadenceforge:history","cadenceforge:auth")}createRenderRoot(){return this}},"mu-store":class extends $e.Provider{constructor(){super(je,Se,"cadenceforge:auth")}},"cf-header":ue,"cf-footer":Ae,"home-view":V,"about-view":qe,"writing-list-view":ge,"writing-view":B,"writing-edit":P,"projects-list-view":ye,"project-view":N,"project-edit":E});

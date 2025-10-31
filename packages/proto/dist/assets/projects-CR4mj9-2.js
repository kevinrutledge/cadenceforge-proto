import{r as i,i as m,x as c,n as h,d as u,A as f}from"./article-card-hP1LAyQJ.js";const l=document.querySelector(".theme-toggle"),p=localStorage.getItem("theme");p==="dark"&&document.body.classList.add("dark-mode");l&&(l.onclick=d=>{const e=document.body.classList.contains("dark-mode"),t=new CustomEvent("darkmode:toggle",{bubbles:!0,detail:{checked:!e}});d.target.dispatchEvent(t),d.stopPropagation()});document.body.addEventListener("darkmode:toggle",d=>{d.detail.checked?(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});var g=Object.defineProperty,n=(d,e,t,k)=>{for(var s=void 0,r=d.length-1,o;r>=0;r--)(o=d[r])&&(s=o(e,t,s)||s);return s&&g(e,t,s),s};class a extends m{constructor(){super(...arguments),this.projects=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(this.projects=t)})}render(){return c`
      <ul>
        ${this.projects.map(e=>this.renderProject(e))}
      </ul>
    `}renderProject(e){return c`
      <li>
        <cf-article category=${e.category} href=${e.href}>
          <span slot="title">${e.title}</span>
          <span slot="description">${e.description}</span>
          <dl slot="metadata">
            <dt>Type:</dt>
            <dd>
              <a href=${e.type.href}>${e.type.name}</a>
            </dd>
            <dt>Role:</dt>
            <dd>${e.role}</dd>
            <dt>Stack:</dt>
            <dd>${e.stack}</dd>
            <dt>Status:</dt>
            <dd>${e.status}</dd>
          </dl>
        </cf-article>
      </li>
    `}}n([h()],a.prototype,"src");n([i()],a.prototype,"projects");u({"cf-article":f,"cf-all-projects":a});

import{r as l,n as h,i as m,x as o,d as g,A as y}from"./article-card-hP1LAyQJ.js";const d=document.querySelector(".theme-toggle"),k=localStorage.getItem("theme");k==="dark"&&document.body.classList.add("dark-mode");d&&(d.onclick=s=>{const e=document.body.classList.contains("dark-mode"),t=new CustomEvent("darkmode:toggle",{bubbles:!0,detail:{checked:!e}});s.target.dispatchEvent(t),s.stopPropagation()});document.body.addEventListener("darkmode:toggle",s=>{s.detail.checked?(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});var b=Object.defineProperty,u=(s,e,t,f)=>{for(var r=void 0,a=s.length-1,n;a>=0;a--)(n=s[a])&&(r=n(e,t,r)||r);return r&&b(e,t,r),r};class c extends m{constructor(){super(...arguments),this.articles=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(this.articles=t)})}render(){return o`
      <ul>
        ${this.articles.map(e=>this.renderArticle(e))}
      </ul>
    `}renderArticle(e){return o`
      <li>
        <cf-article category=${e.category} href=${e.href}>
          <span slot="title">${e.title}</span>
          <span slot="description">${e.description}</span>
          <time slot="metadata" datetime=${e.date}
            >${this.formatDate(e.date)}</time
          >
        </cf-article>
      </li>
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}}u([h()],c.prototype,"src");u([l()],c.prototype,"articles");var v=Object.defineProperty,p=(s,e,t,f)=>{for(var r=void 0,a=s.length-1,n;a>=0;a--)(n=s[a])&&(r=n(e,t,r)||r);return r&&v(e,t,r),r};class i extends m{constructor(){super(...arguments),this.projects=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(this.projects=t)})}render(){return o`
      <ul>
        ${this.projects.map(e=>this.renderProject(e))}
      </ul>
    `}renderProject(e){return o`
      <li>
        <cf-article category=${e.category} href=${e.href}>
          <span slot="title">${e.title}</span>
          <span slot="description">${e.description}</span>
          <span slot="metadata">${e.metadata}</span>
        </cf-article>
      </li>
    `}}p([h()],i.prototype,"src");p([l()],i.prototype,"projects");g({"cf-article":y,"cf-recent-writing":c,"cf-current-projects":i});

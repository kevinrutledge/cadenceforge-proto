import{r as l,i as m,x as a,n as h,d as u,A as f}from"./article-card-hP1LAyQJ.js";const i=document.querySelector(".theme-toggle"),g=localStorage.getItem("theme");g==="dark"&&document.body.classList.add("dark-mode");i&&(i.onclick=r=>{const e=document.body.classList.contains("dark-mode"),t=new CustomEvent("darkmode:toggle",{bubbles:!0,detail:{checked:!e}});r.target.dispatchEvent(t),r.stopPropagation()});document.body.addEventListener("darkmode:toggle",r=>{r.detail.checked?(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});var p=Object.defineProperty,c=(r,e,t,k)=>{for(var d=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(d=n(e,t,d)||d);return d&&p(e,t,d),d};class o extends m{constructor(){super(...arguments),this.articles=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(this.articles=t)})}render(){return a`
      <ul>
        ${this.articles.map(e=>this.renderArticle(e))}
      </ul>
    `}renderArticle(e){return a`
      <li>
        <cf-article category=${e.category} href=${e.href}>
          <span slot="title">${e.title}</span>
          <span slot="description">${e.description}</span>
          <dl slot="metadata">
            <dt>Date:</dt>
            <dd>
              <time datetime=${e.date}
                >${this.formatDate(e.date)}</time
              >
            </dd>
            <dt>Categories:</dt>
            <dd>${e.categories}</dd>
            ${e.series?a`
                  <dt>Series:</dt>
                  <dd>
                    <a href=${e.series.href}>${e.series.name}</a>
                    ${e.series.part?` (${e.series.part})`:""}
                  </dd>
                `:""}
          </dl>
        </cf-article>
      </li>
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}}c([h()],o.prototype,"src");c([l()],o.prototype,"articles");u({"cf-article":f,"cf-all-writing":o});

import{r as l,n as d,i as h,x as i,d as m,a as $}from"./state-BW_sjFeb.js";import{F as y,H as v}from"./footer-DdD4gkgu.js";import{A as g}from"./article-card-CGWHAZbV.js";var C=Object.defineProperty,f=(s,e,t,u)=>{for(var r=void 0,a=s.length-1,n;a>=0;a--)(n=s[a])&&(r=n(e,t,r)||r);return r&&C(e,t,r),r};class c extends h{constructor(){super(...arguments),this.articles=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(this.articles=t)})}render(){return i`
      <ul>
        ${this.articles.map(e=>this.renderArticle(e))}
      </ul>
    `}renderArticle(e){return i`
      <li>
        <cf-article category=${e.category} href=${e.href}>
          <span slot="title">${e.title}</span>
          <span slot="description">${e.description}</span>
          <time slot="metadata" datetime=${e.date}
            >${this.formatDate(e.date)}</time
          >
        </cf-article>
      </li>
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}}f([d()],c.prototype,"src");f([l()],c.prototype,"articles");var P=Object.defineProperty,p=(s,e,t,u)=>{for(var r=void 0,a=s.length-1,n;a>=0;a--)(n=s[a])&&(r=n(e,t,r)||r);return r&&P(e,t,r),r};class o extends h{constructor(){super(...arguments),this.projects=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(this.projects=t)})}render(){return i`
      <ul>
        ${this.projects.map(e=>this.renderProject(e))}
      </ul>
    `}renderProject(e){return i`
      <li>
        <cf-article category=${e.category} href=${e.href}>
          <span slot="title">${e.title}</span>
          <span slot="description">${e.description}</span>
          <span slot="metadata">${e.metadata}</span>
        </cf-article>
      </li>
    `}}p([d()],o.prototype,"src");p([l()],o.prototype,"projects");m({"mu-auth":$.Provider,"cf-header":v,"cf-footer":y,"cf-article":g,"cf-recent-writing":c,"cf-current-projects":o});

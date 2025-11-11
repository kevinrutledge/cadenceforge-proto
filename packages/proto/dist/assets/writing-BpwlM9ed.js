import{r as l,i as c,x as d,n as f,d as h,a as m}from"./state-BW_sjFeb.js";import{F as p,H as u}from"./footer-DdD4gkgu.js";import{A as $}from"./article-card-CGWHAZbV.js";var g=Object.defineProperty,o=(s,e,t,y)=>{for(var r=void 0,a=s.length-1,n;a>=0;a--)(n=s[a])&&(r=n(e,t,r)||r);return r&&g(e,t,r),r};class i extends c{constructor(){super(...arguments),this.articles=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(this.articles=t)})}render(){return d`
      <ul>
        ${this.articles.map(e=>this.renderArticle(e))}
      </ul>
    `}renderArticle(e){return d`
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
            ${e.series?d`
                  <dt>Series:</dt>
                  <dd>
                    <a href=${e.series.href}>${e.series.name}</a>
                    ${e.series.part?` (${e.series.part})`:""}
                  </dd>
                `:""}
          </dl>
        </cf-article>
      </li>
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}}o([f()],i.prototype,"src");o([l()],i.prototype,"articles");h({"mu-auth":m.Provider,"cf-header":u,"cf-footer":p,"cf-article":$,"cf-all-writing":i});

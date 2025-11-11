import{r as h,i as c,O as l,x as i,n as u,d as f,F as m,H as p,a as $}from"./footer-B477tF5S.js";import{A as g}from"./article-card-BdLq8se2.js";var v=Object.defineProperty,d=(s,e,t,_)=>{for(var r=void 0,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=o(e,t,r)||r);return r&&v(e,t,r),r};class n extends c{constructor(){super(...arguments),this.articles=[],this._authObserver=new l(this,"cadenceforge:auth")}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this.src&&this.hydrate(this.src)})}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:void 0}hydrate(e){fetch(e,{headers:this.authorization}).then(t=>{if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);return t.json()}).then(t=>{t&&(this.articles=t)}).catch(t=>console.error("Error loading writing:",t))}render(){return i`
      <ul>
        ${this.articles.map(e=>this.renderArticle(e))}
      </ul>
    `}renderArticle(e){return i`
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
            ${e.series?i`
                  <dt>Series:</dt>
                  <dd>
                    <a href=${e.series.href}>${e.series.name}</a>
                    ${e.series.part?` (${e.series.part})`:""}
                  </dd>
                `:""}
          </dl>
        </cf-article>
      </li>
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}}d([u()],n.prototype,"src");d([h()],n.prototype,"articles");f({"mu-auth":$.Provider,"cf-header":p,"cf-footer":m,"cf-article":g,"cf-all-writing":n});

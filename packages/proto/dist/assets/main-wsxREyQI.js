import{r as h,n as u,i as d,O as l,x as n,d as v,a as $,F as _,H as g}from"./footer-B477tF5S.js";import{A as b}from"./article-card-BdLq8se2.js";var y=Object.defineProperty,f=(s,e,t,m)=>{for(var r=void 0,a=s.length-1,i;a>=0;a--)(i=s[a])&&(r=i(e,t,r)||r);return r&&y(e,t,r),r};class o extends d{constructor(){super(...arguments),this.articles=[],this._authObserver=new l(this,"cadenceforge:auth")}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this.src&&this.hydrate(this.src)})}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:void 0}hydrate(e){fetch(e,{headers:this.authorization}).then(t=>{if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);return t.json()}).then(t=>{t&&(this.articles=t)}).catch(t=>console.error("Error loading writing:",t))}render(){return n`
      <ul>
        ${this.articles.map(e=>this.renderArticle(e))}
      </ul>
    `}renderArticle(e){return n`
      <li>
        <cf-article category=${e.category} href=${e.href}>
          <span slot="title">${e.title}</span>
          <span slot="description">${e.description}</span>
          <time slot="metadata" datetime=${e.date}
            >${this.formatDate(e.date)}</time
          >
        </cf-article>
      </li>
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}}f([u()],o.prototype,"src");f([h()],o.prototype,"articles");var w=Object.defineProperty,p=(s,e,t,m)=>{for(var r=void 0,a=s.length-1,i;a>=0;a--)(i=s[a])&&(r=i(e,t,r)||r);return r&&w(e,t,r),r};class c extends d{constructor(){super(...arguments),this.projects=[],this._authObserver=new l(this,"cadenceforge:auth")}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this.src&&this.hydrate(this.src)})}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:void 0}hydrate(e){fetch(e,{headers:this.authorization}).then(t=>{if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);return t.json()}).then(t=>{t&&(this.projects=t)}).catch(t=>console.error("Error loading projects:",t))}render(){return n`
      <ul>
        ${this.projects.map(e=>this.renderProject(e))}
      </ul>
    `}renderProject(e){return n`
      <li>
        <cf-article category=${e.category} href=${e.href}>
          <span slot="title">${e.title}</span>
          <span slot="description">${e.description}</span>
          <span slot="metadata">${e.metadata}</span>
        </cf-article>
      </li>
    `}}p([u()],c.prototype,"src");p([h()],c.prototype,"projects");v({"mu-auth":$.Provider,"cf-header":g,"cf-footer":_,"cf-article":b,"cf-recent-writing":o,"cf-current-projects":c});

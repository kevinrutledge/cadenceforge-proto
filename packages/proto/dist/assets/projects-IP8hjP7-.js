import{r as h,i as c,O as l,x as o,n as u,d as f,F as p,H as m,a as $}from"./footer-B477tF5S.js";import{A as v}from"./article-card-BdLq8se2.js";var y=Object.defineProperty,n=(s,t,e,_)=>{for(var r=void 0,a=s.length-1,i;a>=0;a--)(i=s[a])&&(r=i(t,e,r)||r);return r&&y(t,e,r),r};class d extends c{constructor(){super(...arguments),this.projects=[],this._authObserver=new l(this,"cadenceforge:auth")}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{this._user=t.user,this.src&&this.hydrate(this.src)})}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:void 0}hydrate(t){fetch(t,{headers:this.authorization}).then(e=>{if(!e.ok)throw new Error(`Failed to fetch: ${e.status}`);return e.json()}).then(e=>{e&&(this.projects=e)}).catch(e=>console.error("Error loading projects:",e))}render(){return o`
      <ul>
        ${this.projects.map(t=>this.renderProject(t))}
      </ul>
    `}renderProject(t){return o`
      <li>
        <cf-article category=${t.category} href=${t.href}>
          <span slot="title">${t.title}</span>
          <span slot="description">${t.description}</span>
          <dl slot="metadata">
            <dt>Type:</dt>
            <dd>
              <a href=${t.type.href}>${t.type.name}</a>
            </dd>
            <dt>Role:</dt>
            <dd>${t.role}</dd>
            <dt>Stack:</dt>
            <dd>${t.stack}</dd>
            <dt>Status:</dt>
            <dd>${t.status}</dd>
          </dl>
        </cf-article>
      </li>
    `}}n([u()],d.prototype,"src");n([h()],d.prototype,"projects");f({"mu-auth":$.Provider,"cf-header":m,"cf-footer":p,"cf-article":v,"cf-all-projects":d});

import{r as o,i as c,x as n,n as f,d as h,a as p}from"./state-BW_sjFeb.js";import{F as u,H as m}from"./footer-DdD4gkgu.js";import{A as $}from"./article-card-CGWHAZbV.js";var y=Object.defineProperty,i=(d,t,e,v)=>{for(var r=void 0,s=d.length-1,l;s>=0;s--)(l=d[s])&&(r=l(t,e,r)||r);return r&&y(t,e,r),r};class a extends c{constructor(){super(...arguments),this.projects=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(e=>e.json()).then(e=>{e&&(this.projects=e)})}render(){return n`
      <ul>
        ${this.projects.map(t=>this.renderProject(t))}
      </ul>
    `}renderProject(t){return n`
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
    `}}i([f()],a.prototype,"src");i([o()],a.prototype,"projects");h({"mu-auth":p.Provider,"cf-header":m,"cf-footer":u,"cf-article":$,"cf-all-projects":a});

import{r as c,i as d,O as l,x as i,n as u}from"./footer-B477tF5S.js";var f=Object.defineProperty,n=(s,e,t,p)=>{for(var r=void 0,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=o(e,t,r)||r);return r&&f(e,t,r),r};class h extends d{constructor(){super(...arguments),this.posts=[],this._authObserver=new l(this,"cadenceforge:auth")}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user,this.src&&this.hydrate(this.src)})}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:void 0}hydrate(e){fetch(e,{headers:this.authorization}).then(t=>{if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);return t.json()}).then(t=>{t&&(this.posts=t)}).catch(t=>console.error("Error loading series posts:",t))}render(){return i`
      <ol>
        ${this.posts.map(e=>this.renderPost(e))}
      </ol>
    `}renderPost(e){return i`
      <li>
        <cf-article category=${e.category} href=${e.href||""}>
          <span slot="title">${e.title}</span>
          <span slot="description">${e.description}</span>
          ${e.date?i`
                <time slot="metadata" datetime=${e.date}>
                  ${this.formatDate(e.date)}
                </time>
              `:""}
        </cf-article>
      </li>
    `}formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}}n([u()],h.prototype,"src");n([c()],h.prototype,"posts");export{h as S};

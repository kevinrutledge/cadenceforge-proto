import{r as l,i as d,x as n,n as h}from"./article-card-hP1LAyQJ.js";var f=Object.defineProperty,o=(s,t,e,p)=>{for(var r=void 0,a=s.length-1,i;a>=0;a--)(i=s[a])&&(r=i(t,e,r)||r);return r&&f(t,e,r),r};class c extends d{constructor(){super(...arguments),this.posts=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(e=>e.json()).then(e=>{e&&(this.posts=e)})}render(){return n`
      <ol>
        ${this.posts.map(t=>this.renderPost(t))}
      </ol>
    `}renderPost(t){return n`
      <li>
        <cf-article category=${t.category} href=${t.href||""}>
          <span slot="title">${t.title}</span>
          <span slot="description">${t.description}</span>
          ${t.date?n`
                <time slot="metadata" datetime=${t.date}>
                  ${this.formatDate(t.date)}
                </time>
              `:""}
        </cf-article>
      </li>
    `}formatDate(t){return new Date(t).toLocaleDateString("en-US",{month:"long",year:"numeric"})}}o([h()],c.prototype,"src");o([l()],c.prototype,"posts");export{c as S};

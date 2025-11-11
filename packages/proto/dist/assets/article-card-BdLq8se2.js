import{i as n,x as v,b as h,n as d}from"./footer-B477tF5S.js";var p=Object.defineProperty,c=(t,l,s,g)=>{for(var r=void 0,e=t.length-1,i;e>=0;e--)(i=t[e])&&(r=i(l,s,r)||r);return r&&p(l,s,r),r};const o=class o extends n{render(){return v`
      <article data-category=${this.category||""}>
        <h3>
          <a href=${this.href||"#"}>
            <slot name="title"></slot>
          </a>
        </h3>
        <p><slot name="description"></slot></p>
        <slot name="metadata"></slot>
      </article>
    `}};o.styles=h`
    article {
      padding: var(--space-6);
      background: var(--bg-elevated);
      border: 1px solid var(--border);
      border-left: 4px solid var(--brand);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: all var(--transition);
    }

    article:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }

    article[data-category="cs"] {
      border-left-color: var(--cs);
    }

    article[data-category="philosophy"] {
      border-left-color: var(--philosophy);
    }

    article[data-category="methodology"] {
      border-left-color: var(--methodology);
    }

    article[data-category="culture"] {
      border-left-color: var(--culture);
    }

    article[data-category="personal"] {
      border-left-color: var(--personal);
    }

    h3 {
      font-size: var(--text-xl);
      font-weight: var(--weight-semibold);
      line-height: var(--leading-snug);
      margin-bottom: var(--space-3);
    }

    h3 a {
      color: var(--text);
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }

    h3 a:hover {
      color: var(--brand);
    }

    p {
      margin-bottom: var(--space-4);
      line-height: var(--leading-relaxed);
      color: var(--text-secondary);
    }
  `;let a=o;c([d()],a.prototype,"category");c([d()],a.prototype,"href");export{a as A};

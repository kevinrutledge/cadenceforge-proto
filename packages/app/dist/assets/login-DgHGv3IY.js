import{i as h,x as b,b as l,r as u,n as c,d as m,a as v}from"./state-BGMZkYOB.js";var f=Object.defineProperty,i=(d,a,r,s)=>{for(var t=void 0,o=d.length-1,p;o>=0;o--)(p=d[o])&&(t=p(a,r,t)||t);return t&&f(a,r,t),t};const n=class n extends h{constructor(){super(...arguments),this.formData={},this.redirect="/app"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return b`
      <form
        @change=${a=>this.handleChange(a)}
        @submit=${a=>this.handleSubmit(a)}
      >
        <input
          name="username"
          type="text"
          placeholder="Username"
          autocomplete="off"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button ?disabled=${!this.canSubmit} type="submit">Login</button>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(a){const r=a.target,s=r?.name,t=r?.value,o=this.formData;switch(s){case"username":this.formData={...o,username:t};break;case"password":this.formData={...o,password:t};break}}handleSubmit(a){a.preventDefault(),this.canSubmit&&fetch(this?.api||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(r=>{if(r.status!==200)throw"Login failed";return r.json()}).then(r=>{const{token:s}=r,t=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:s,redirect:this.redirect}]});this.dispatchEvent(t)}).catch(r=>{this.error=r.toString()})}};n.styles=l`
    form {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      max-width: 400px;
      margin: 0 auto;
    }

    input {
      width: 100%;
      padding: var(--space-4);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      font-size: var(--text-base);
      font-family: var(--sans);
      background: var(--bg-elevated);
      color: var(--text);
      box-sizing: border-box;
    }

    input::placeholder {
      color: var(--text-tertiary);
    }

    input:focus {
      outline: none;
      border-color: var(--brand);
    }

    button {
      width: 100%;
      padding: var(--space-4);
      background: var(--brand);
      color: white;
      border: none;
      border-radius: var(--radius-md);
      font-size: var(--text-base);
      font-weight: var(--weight-semibold);
      cursor: pointer;
      transition: all var(--transition);
      box-sizing: border-box;
      margin-top: var(--space-2);
    }

    button:hover:not(:disabled) {
      background: var(--brand-dark);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error:not(:empty) {
      color: #dc2626;
      border: 1px solid #dc2626;
      padding: var(--space-3);
      border-radius: var(--radius-md);
      background: rgba(220, 38, 38, 0.1);
      font-size: var(--text-sm);
      margin-top: var(--space-2);
    }
  `;let e=n;i([u()],e.prototype,"formData");i([c()],e.prototype,"api");i([c()],e.prototype,"redirect");i([u()],e.prototype,"error");m({"mu-auth":v.Provider,"login-form":e});

import{i as h,x as c,b as f,r as m,n as u,d as b,a as l}from"./state-HKvb4smT.js";var v=Object.defineProperty,i=(d,t,r,s)=>{for(var a=void 0,e=d.length-1,p;e>=0;e--)(p=d[e])&&(a=p(t,r,a)||a);return a&&v(t,r,a),a};const n=class n extends h{constructor(){super(...arguments),this.formData={},this.redirect="/app"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password&&this.formData.confirmPassword&&this.formData.password===this.formData.confirmPassword)}render(){const t=this.formData.password&&this.formData.confirmPassword&&this.formData.password!==this.formData.confirmPassword;return c`
      <form
        @change=${r=>this.handleChange(r)}
        @submit=${r=>this.handleSubmit(r)}
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
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />
        ${t?c`<p class="error">Passwords do not match</p>`:""}
        <button ?disabled=${!this.canSubmit} type="submit">Sign Up</button>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(t){const r=t.target,s=r?.name,a=r?.value,e=this.formData;switch(s){case"username":this.formData={...e,username:a};break;case"password":this.formData={...e,password:a};break;case"confirmPassword":this.formData={...e,confirmPassword:a};break}}handleSubmit(t){t.preventDefault(),this.canSubmit&&fetch(this?.api||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.formData.username,password:this.formData.password})}).then(r=>{if(r.status!==201)throw"Registration failed";return r.json()}).then(r=>{const{token:s}=r,a=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:s,redirect:this.redirect}]});this.dispatchEvent(a)}).catch(r=>{this.error=r.toString()})}};n.styles=f`
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
    }
  `;let o=n;i([m()],o.prototype,"formData");i([u()],o.prototype,"api");i([u()],o.prototype,"redirect");i([m()],o.prototype,"error");b({"mu-auth":l.Provider,"register-form":o});

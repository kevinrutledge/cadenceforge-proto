import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";

interface LoginFormData {
  username?: string;
  password?: string;
}

export class LoginFormElement extends LitElement {
  @state()
  formData: LoginFormData = {};

  @property()
  api?: string;

  @property()
  redirect: string = "/";

  @state()
  error?: string;

  get canSubmit(): boolean {
    return Boolean(
      this.api && this.formData.username && this.formData.password
    );
  }

  render() {
    return html`
      <form
        @change=${(e: InputEvent) => this.handleChange(e)}
        @submit=${(e: SubmitEvent) => this.handleSubmit(e)}
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
    `;
  }

  static styles = css`
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
  `;

  handleChange(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const name = target?.name;
    const value = target?.value;
    const prevData = this.formData;

    switch (name) {
      case "username":
        this.formData = { ...prevData, username: value };
        break;
      case "password":
        this.formData = { ...prevData, password: value };
        break;
    }
  }

  handleSubmit(submitEvent: SubmitEvent) {
    submitEvent.preventDefault();

    if (this.canSubmit) {
      fetch(this?.api || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      })
        .then((res) => {
          if (res.status !== 200) throw "Login failed";
          else return res.json();
        })
        .then((json: object) => {
          const { token } = json as { token: string };
          const customEvent = new CustomEvent("auth:message", {
            bubbles: true,
            composed: true,
            detail: ["auth/signin", { token, redirect: this.redirect }],
          });
          this.dispatchEvent(customEvent);
        })
        .catch((error: Error) => {
          this.error = error.toString();
        });
    }
  }
}

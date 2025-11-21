import { Auth, define } from "@calpoly/mustang";
import { RegisterFormElement } from "./components/register-form";

define({
  "mu-auth": Auth.Provider,
  "register-form": RegisterFormElement,
});

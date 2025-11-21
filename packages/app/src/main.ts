import { Auth, define, History, Switch } from "@calpoly/mustang";
import { html } from "lit";
import { HeaderElement } from "./components/header";
import { FooterElement } from "./components/footer";
import { HomeViewElement } from "./views/home-view";
import { AboutViewElement } from "./views/about-view";
import { WritingListViewElement } from "./views/writing-list-view";
import { WritingViewElement } from "./views/writing-view";
import { ProjectListViewElement } from "./views/project-list-view";
import { ProjectViewElement } from "./views/project-view";

const routes: Switch.Route[] = [
  {
    path: "/app/writing/:slug",
    view: (params: Switch.Params) => html`
      <writing-view slug=${params.slug}></writing-view>
    `,
  },
  {
    path: "/app/writing",
    view: () => html` <writing-list-view></writing-list-view> `,
  },
  {
    path: "/app/projects/:slug",
    view: (params: Switch.Params) => html`
      <project-view slug=${params.slug}></project-view>
    `,
  },
  {
    path: "/app/projects",
    view: () => html` <projects-list-view></projects-list-view> `,
  },
  {
    path: "/app/about",
    view: () => html` <about-view></about-view> `,
  },
  {
    path: "/app",
    view: () => html` <home-view></home-view> `,
  },
  {
    path: "/",
    redirect: "/app",
  },
];

define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "cadenceforge:history", "cadenceforge:auth");
    }
  },
  "cf-header": HeaderElement,
  "cf-footer": FooterElement,
  "home-view": HomeViewElement,
  "about-view": AboutViewElement,
  "writing-list-view": WritingListViewElement,
  "writing-view": WritingViewElement,
  "projects-list-view": ProjectListViewElement,
  "project-view": ProjectViewElement,
});

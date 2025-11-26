import { Auth, define, History, Switch, Store } from "@calpoly/mustang";
import { html } from "lit";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";
import { HeaderElement } from "./components/header";
import { FooterElement } from "./components/footer";
import { HomeViewElement } from "./views/home-view";
import { AboutViewElement } from "./views/about-view";
import { WritingListViewElement } from "./views/writing-list-view";
import { WritingViewElement } from "./views/writing-view";
import { WritingEditElement } from "./views/writing-edit";
import { ProjectListViewElement } from "./views/project-list-view";
import { ProjectViewElement } from "./views/project-view";
import { ProjectEditElement } from "./views/project-edit";

const routes: Switch.Route[] = [
  {
    path: "/app/writing/:slug/edit",
    view: (params: Switch.Params) => html`
      <writing-edit slug=${params.slug}></writing-edit>
    `,
  },
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
    path: "/app/projects/:slug/edit",
    view: (params: Switch.Params) => html`
      <project-edit slug=${params.slug}></project-edit>
    `,
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
  "mu-store": class AppStore extends Store.Provider<Model, Msg> {
    constructor() {
      super(update, init, "cadenceforge:auth");
    }
  },
  "cf-header": HeaderElement,
  "cf-footer": FooterElement,
  "home-view": HomeViewElement,
  "about-view": AboutViewElement,
  "writing-list-view": WritingListViewElement,
  "writing-view": WritingViewElement,
  "writing-edit": WritingEditElement,
  "projects-list-view": ProjectListViewElement,
  "project-view": ProjectViewElement,
  "project-edit": ProjectEditElement,
});

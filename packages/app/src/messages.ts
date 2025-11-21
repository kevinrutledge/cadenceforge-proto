import { Writing, Project } from "server/models";

export type Msg =
  | ["writing/load", { slug: string; writing: Writing }]
  | ["writing/request", { slug: string }]
  | ["writing-list/load", { writings: Writing[] }]
  | ["writing-list/request"]
  | ["project/load", { slug: string; project: Project }]
  | ["project/request", { slug: string }]
  | ["projects-list/load", { projects: Project[] }]
  | ["projects-list/request"];

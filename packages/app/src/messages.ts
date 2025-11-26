import { Writing, Project } from "server/models";

export type Msg =
  | ["noop"]
  | [
      "writing/save",
      { slug: string; writing: Writing },
      { onSuccess?: () => void; onFailure?: (err: Error) => void }
    ]
  | ["writing/load", { slug: string; writing: Writing }]
  | ["writing/request", { slug: string }]
  | ["writing-list/load", { writings: Writing[] }]
  | ["writing-list/request"]
  | [
      "project/save",
      { slug: string; project: Project },
      { onSuccess?: () => void; onFailure?: (err: Error) => void }
    ]
  | ["project/load", { slug: string; project: Project }]
  | ["project/request", { slug: string }]
  | ["projects-list/load", { projects: Project[] }]
  | ["projects-list/request"];

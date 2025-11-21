import { Writing, Project } from "server/models";

export interface Model {
  writing?: Writing;
  writingList?: Writing[];
  project?: Project;
  projectsList?: Project[];
}

export const init: Model = {};

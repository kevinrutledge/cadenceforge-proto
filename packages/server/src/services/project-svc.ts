import { Schema, model } from "mongoose";
import { Project } from "../models/project";

const ProjectSchema = new Schema<Project>(
  {
    category: { type: String, required: true },
    href: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      name: String,
      href: String,
    },
    role: { type: String },
    stack: { type: String },
    status: { type: String },
  },
  { collection: "cf_projects" }
);

const ProjectModel = model<Project>("Project", ProjectSchema);

interface QueryOptions {
  currentOnly?: boolean;
}

function index(options?: QueryOptions): Promise<Project[]> {
  if (options?.currentOnly) {
    return ProjectModel.find({
      status: { $not: /completed/i },
    });
  }

  return ProjectModel.find();
}

function get(title: string): Promise<Project> {
  return ProjectModel.find({ title })
    .then((list) => list[0])
    .catch((err) => {
      throw `${title} Not Found`;
    });
}

export default { index, get };

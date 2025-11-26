import { Schema, model } from "mongoose";
import { Project } from "../models/project";

const ProjectSchema = new Schema<Project>(
  {
    category: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    href: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String },
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

function get(slug: string): Promise<Project> {
  return ProjectModel.findOne({ slug }).then((project) => {
    if (!project) throw `${slug} Not Found`;
    return project;
  });
}

function create(json: Project): Promise<Project> {
  const p = new ProjectModel(json);
  return p.save();
}

function update(slug: string, project: Project): Promise<Project> {
  return ProjectModel.findOneAndUpdate({ slug }, project, {
    new: true,
  }).then((updated) => {
    if (!updated) throw `${slug} not updated`;
    else return updated as Project;
  });
}

function remove(slug: string): Promise<void> {
  return ProjectModel.findOneAndDelete({ slug }).then((deleted) => {
    if (!deleted) throw `${slug} not deleted`;
  });
}

export default { index, get, create, update, remove };

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var project_svc_exports = {};
__export(project_svc_exports, {
  default: () => project_svc_default
});
module.exports = __toCommonJS(project_svc_exports);
var import_mongoose = require("mongoose");
const ProjectSchema = new import_mongoose.Schema(
  {
    category: { type: String, required: true },
    href: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      name: String,
      href: String
    },
    role: { type: String },
    stack: { type: String },
    status: { type: String }
  },
  { collection: "cf_projects" }
);
const ProjectModel = (0, import_mongoose.model)("Project", ProjectSchema);
function index(options) {
  if (options?.currentOnly) {
    return ProjectModel.find({
      status: { $not: /completed/i }
    });
  }
  return ProjectModel.find();
}
function get(title) {
  return ProjectModel.find({ title }).then((list) => list[0]).catch((err) => {
    throw `${title} Not Found`;
  });
}
function create(json) {
  const p = new ProjectModel(json);
  return p.save();
}
function update(title, project) {
  return ProjectModel.findOneAndUpdate({ title }, project, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${title} not updated`;
    else return updated;
  });
}
function remove(title) {
  return ProjectModel.findOneAndDelete({ title }).then((deleted) => {
    if (!deleted) throw `${title} not deleted`;
  });
}
var project_svc_default = { index, get, create, update, remove };

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
var writing_svc_exports = {};
__export(writing_svc_exports, {
  default: () => writing_svc_default
});
module.exports = __toCommonJS(writing_svc_exports);
var import_mongoose = require("mongoose");
const WritingSchema = new import_mongoose.Schema(
  {
    category: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    href: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String },
    date: { type: String },
    categories: { type: String },
    series: {
      name: String,
      href: String,
      part: String
    }
  },
  { collection: "cf_writing" }
);
const WritingModel = (0, import_mongoose.model)("Writing", WritingSchema);
function index(options) {
  let query = WritingModel.find();
  if (options?.sortByDate) {
    query = query.sort({ date: -1 });
  }
  if (options?.limit) {
    query = query.limit(options.limit);
  }
  return query;
}
function get(slug) {
  return WritingModel.findOne({ slug }).then((writing) => {
    if (!writing) throw `${slug} Not Found`;
    return writing;
  });
}
function getBySeries(seriesName) {
  return WritingModel.find({ "series.name": seriesName });
}
function create(json) {
  const w = new WritingModel(json);
  return w.save();
}
function update(slug, writing) {
  return WritingModel.findOneAndUpdate({ slug }, writing, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${slug} not updated`;
    else return updated;
  });
}
function remove(slug) {
  return WritingModel.findOneAndDelete({ slug }).then((deleted) => {
    if (!deleted) throw `${slug} not deleted`;
  });
}
var writing_svc_default = { index, get, getBySeries, create, update, remove };

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
    href: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
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
function get(title) {
  return WritingModel.find({ title }).then((list) => list[0]).catch((err) => {
    throw `${title} Not Found`;
  });
}
function getBySeries(seriesName) {
  return WritingModel.find({ "series.name": seriesName });
}
function create(json) {
  const w = new WritingModel(json);
  return w.save();
}
function update(title, writing) {
  return WritingModel.findOneAndUpdate({ title }, writing, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${title} not updated`;
    else return updated;
  });
}
function remove(title) {
  return WritingModel.findOneAndDelete({ title }).then((deleted) => {
    if (!deleted) throw `${title} not deleted`;
  });
}
var writing_svc_default = { index, get, getBySeries, create, update, remove };

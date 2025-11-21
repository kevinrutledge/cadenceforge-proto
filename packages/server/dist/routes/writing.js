"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var writing_exports = {};
__export(writing_exports, {
  default: () => writing_default
});
module.exports = __toCommonJS(writing_exports);
var import_express = __toESM(require("express"));
var import_writing_svc = __toESM(require("../services/writing-svc"));
const router = import_express.default.Router();
router.get("/", (_, res) => {
  import_writing_svc.default.index().then((list) => res.json(list)).catch((err) => res.status(500).send(err));
});
router.get("/series/:seriesName", (req, res) => {
  const { seriesName } = req.params;
  import_writing_svc.default.getBySeries(seriesName).then((list) => res.json(list)).catch((err) => res.status(500).send(err));
});
router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  import_writing_svc.default.get(slug).then((writing) => res.json(writing)).catch((err) => res.status(404).send(err));
});
router.post("/", (req, res) => {
  const newWriting = req.body;
  import_writing_svc.default.create(newWriting).then((writing) => res.status(201).json(writing)).catch((err) => res.status(500).send(err));
});
router.put("/:slug", (req, res) => {
  const { slug } = req.params;
  const newWriting = req.body;
  import_writing_svc.default.update(slug, newWriting).then((writing) => res.json(writing)).catch((err) => res.status(404).end());
});
router.delete("/:slug", (req, res) => {
  const { slug } = req.params;
  import_writing_svc.default.remove(slug).then(() => res.status(204).end()).catch((err) => res.status(404).send(err));
});
var writing_default = router;

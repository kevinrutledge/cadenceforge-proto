"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_express = __toESM(require("express"));
var import_mongo = require("./services/mongo");
var import_writing_svc = __toESM(require("./services/writing-svc"));
var import_project_svc = __toESM(require("./services/project-svc"));
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
const staticDir = process.env.STATIC || "public";
(0, import_mongo.connect)("cadenceforge-proto");
app.use(import_express.default.static(staticDir));
app.get("/hello", (req, res) => {
  res.send("Hello, World");
});
app.get("/api/writing", (req, res) => {
  const { limit, sort } = req.query;
  const options = {
    limit: limit ? parseInt(limit) : void 0,
    sortByDate: sort === "date"
  };
  import_writing_svc.default.index(options).then((data) => {
    res.set("Content-Type", "application/json").send(JSON.stringify(data));
  });
});
app.get("/api/writing/:title", (req, res) => {
  const { title } = req.params;
  import_writing_svc.default.get(title).then((data) => {
    if (data) {
      res.set("Content-Type", "application/json").send(JSON.stringify(data));
    } else {
      res.status(404).send();
    }
  });
});
app.get("/api/series/:seriesName", (req, res) => {
  const { seriesName } = req.params;
  import_writing_svc.default.getBySeries(seriesName).then((data) => {
    res.set("Content-Type", "application/json").send(JSON.stringify(data));
  });
});
app.get("/api/projects", (req, res) => {
  const { current } = req.query;
  const options = {
    currentOnly: current === "true"
  };
  import_project_svc.default.index(options).then((data) => {
    res.set("Content-Type", "application/json").send(JSON.stringify(data));
  });
});
app.get("/api/projects/:title", (req, res) => {
  const { title } = req.params;
  import_project_svc.default.get(title).then((data) => {
    if (data) {
      res.set("Content-Type", "application/json").send(JSON.stringify(data));
    } else {
      res.status(404).send();
    }
  });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

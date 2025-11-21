import express, { Request, Response } from "express";
import { Project } from "../models/project";
import Projects from "../services/project-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  Projects.index()
    .then((list: Project[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:slug", (req: Request, res: Response) => {
  const { slug } = req.params;

  Projects.get(slug)
    .then((project: Project) => res.json(project))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newProject = req.body;

  Projects.create(newProject)
    .then((project: Project) => res.status(201).json(project))
    .catch((err) => res.status(500).send(err));
});

router.put("/:slug", (req: Request, res: Response) => {
  const { slug } = req.params;
  const newProject = req.body;

  Projects.update(slug, newProject)
    .then((project: Project) => res.json(project))
    .catch((err) => res.status(404).end());
});

router.delete("/:slug", (req: Request, res: Response) => {
  const { slug } = req.params;

  Projects.remove(slug)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;

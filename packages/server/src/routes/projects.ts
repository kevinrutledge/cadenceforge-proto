import express, { Request, Response } from "express";
import { Project } from "../models/project";
import Projects from "../services/project-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  Projects.index()
    .then((list: Project[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:title", (req: Request, res: Response) => {
  const { title } = req.params;

  Projects.get(title)
    .then((project: Project) => res.json(project))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newProject = req.body;

  Projects.create(newProject)
    .then((project: Project) => res.status(201).json(project))
    .catch((err) => res.status(500).send(err));
});

router.put("/:title", (req: Request, res: Response) => {
  const { title } = req.params;
  const newProject = req.body;

  Projects.update(title, newProject)
    .then((project: Project) => res.json(project))
    .catch((err) => res.status(404).end());
});

router.delete("/:title", (req: Request, res: Response) => {
  const { title } = req.params;

  Projects.remove(title)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;

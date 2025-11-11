import express, { Request, Response } from "express";
import { Writing } from "../models/writing";
import Writings from "../services/writing-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  Writings.index()
    .then((list: Writing[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/series/:seriesName", (req: Request, res: Response) => {
  const { seriesName } = req.params;

  Writings.getBySeries(seriesName)
    .then((list: Writing[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:title", (req: Request, res: Response) => {
  const { title } = req.params;

  Writings.get(title)
    .then((writing: Writing) => res.json(writing))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newWriting = req.body;

  Writings.create(newWriting)
    .then((writing: Writing) => res.status(201).json(writing))
    .catch((err) => res.status(500).send(err));
});

router.put("/:title", (req: Request, res: Response) => {
  const { title } = req.params;
  const newWriting = req.body;

  Writings.update(title, newWriting)
    .then((writing: Writing) => res.json(writing))
    .catch((err) => res.status(404).end());
});

router.delete("/:title", (req: Request, res: Response) => {
  const { title } = req.params;

  Writings.remove(title)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;

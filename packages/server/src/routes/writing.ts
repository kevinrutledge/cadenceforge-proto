import express, { Request, Response } from "express";
import { Writing } from "../models/writing";
import Writings from "../services/writing-svc";
import { authenticateUser } from "./auth";

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

router.get("/:slug", (req: Request, res: Response) => {
  const { slug } = req.params;

  Writings.get(slug)
    .then((writing: Writing) => res.json(writing))
    .catch((err) => res.status(404).send(err));
});

router.post("/", authenticateUser, (req: Request, res: Response) => {
  const newWriting = req.body;

  Writings.create(newWriting)
    .then((writing: Writing) => res.status(201).json(writing))
    .catch((err) => res.status(500).send(err));
});

router.put("/:slug", authenticateUser, (req: Request, res: Response) => {
  const { slug } = req.params;
  const newWriting = req.body;

  Writings.update(slug, newWriting)
    .then((writing: Writing) => res.json(writing))
    .catch((err) => res.status(404).end());
});

router.delete("/:slug", authenticateUser, (req: Request, res: Response) => {
  const { slug } = req.params;

  Writings.remove(slug)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;

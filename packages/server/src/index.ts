import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import Writing from "./services/writing-svc";
import Projects from "./services/project-svc";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

connect("cadenceforge-proto");

app.use(express.static(staticDir));

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.get("/api/writing", (req: Request, res: Response) => {
  const { limit, sort } = req.query;

  const options = {
    limit: limit ? parseInt(limit as string) : undefined,
    sortByDate: sort === "date",
  };

  Writing.index(options).then((data) => {
    res.set("Content-Type", "application/json").send(JSON.stringify(data));
  });
});

app.get("/api/writing/:title", (req: Request, res: Response) => {
  const { title } = req.params;

  Writing.get(title).then((data) => {
    if (data) {
      res.set("Content-Type", "application/json").send(JSON.stringify(data));
    } else {
      res.status(404).send();
    }
  });
});

app.get("/api/series/:seriesName", (req: Request, res: Response) => {
  const { seriesName } = req.params;

  Writing.getBySeries(seriesName).then((data) => {
    res.set("Content-Type", "application/json").send(JSON.stringify(data));
  });
});

app.get("/api/projects", (req: Request, res: Response) => {
  const { current } = req.query;

  const options = {
    currentOnly: current === "true",
  };

  Projects.index(options).then((data) => {
    res.set("Content-Type", "application/json").send(JSON.stringify(data));
  });
});

app.get("/api/projects/:title", (req: Request, res: Response) => {
  const { title } = req.params;

  Projects.get(title).then((data) => {
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

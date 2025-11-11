import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import writings from "./routes/writing";
import projects from "./routes/projects";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

connect("cadenceforge-proto");

app.use(express.static(staticDir));
app.use(express.json());
app.use("/api/writing", writings);
app.use("/api/projects", projects);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

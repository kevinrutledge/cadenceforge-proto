import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import writings from "./routes/writing";
import projects from "./routes/projects";
import auth, { authenticateUser } from "./routes/auth";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "../proto/dist";

connect("cadenceforge-proto");

app.use(express.static(staticDir));
app.use(express.json());

app.use("/auth", auth);
app.use("/api/writing", authenticateUser, writings);
app.use("/api/projects", authenticateUser, projects);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

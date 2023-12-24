import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import user from "./controller/user.controller";

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/user", user);

app.use((error, req: Request, res: Response, next: NextFunction) => {
  res.send(error.message);
});

export default app;
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import user from "./controller/user.controller";
import api from './controller/api.controller';
import course from './controller/course.controller';

const app = express();

app.use(bodyParser.json());

app.use(cors())

app.use("/user", user);

app.use('/api',api)

app.use('/course',course);

app.use((error, req: Request, res: Response, next: NextFunction) => {
  res.send(error.message);
});

export default app;
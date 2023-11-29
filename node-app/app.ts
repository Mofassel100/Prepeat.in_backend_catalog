import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import httpStatus from "http-status";
import router from "./models/Routers";
const app: Application = express();
app.use(cors());
app.use(cookieParser());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/", router);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    succes: false,
    message: "not found",
    errorMessage: [
      {
        path: req.originalUrl,
        message: "API NOT FOUND",
      },
    ],
  });
  next();
});
export default app;

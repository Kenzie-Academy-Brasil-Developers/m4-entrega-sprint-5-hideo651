import "express-async-errors";
import "reflect-metadata";
import express from "express";
import usersRoutes from "./routes/users";
import loginRoute from "./routes/login";
import { erroHandler } from "./error";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoute);

app.use(erroHandler);

export default app;

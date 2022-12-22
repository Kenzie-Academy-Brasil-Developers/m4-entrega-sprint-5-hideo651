import "express-async-errors";
import "reflect-metadata";
import express from "express";
import usersRoutes from "./routes/users";
import loginRoute from "./routes/login";
import { erroHandler } from "./error";
import categoryRoutes from "./routes/categories";
import propertiesRoutes from "./routes/properties";
import scheduleRoutes from "./routes/schedules";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoute);
app.use("/categories", categoryRoutes);
app.use("/properties", propertiesRoutes);
app.use("/schedules", scheduleRoutes);

app.use(erroHandler);

export default app;

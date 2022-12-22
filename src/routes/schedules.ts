import { Router } from "express";
import {
  createScheduleController,
  listtSchedulePropertiesController,
} from "../controller/schedules.controller";
import validateAdm from "../middlewares/validateAdm";
import validateDateUpdate from "../middlewares/validateData";
import validateDate from "../middlewares/validateDate";
import validateProperty from "../middlewares/validateProperty";
import validateToken from "../middlewares/validateToken";
import { schedulesSchema } from "../schema/createUser.schema";

const scheduleRoutes = Router();

scheduleRoutes.post(
  "",
  validateToken,
  validateDateUpdate(schedulesSchema),
  validateDate,
  validateProperty,
  createScheduleController
);
scheduleRoutes.get(
  "/properties/:id",
  validateToken,
  validateAdm,
  listtSchedulePropertiesController
);

export default scheduleRoutes;

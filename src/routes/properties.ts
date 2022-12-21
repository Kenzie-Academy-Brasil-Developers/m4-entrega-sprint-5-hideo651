import { Router } from "express";
import {
  createPropertyController,
  listPropertiesController,
} from "../controller/properties.controller";
import validateAdm from "../middlewares/validateAdm";
import validateDateUpdate from "../middlewares/validateData";
import validateCategoryId from "../middlewares/validateIdCategory";
import validateToken from "../middlewares/validateToken";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  validateToken,
  validateAdm,
  validateCategoryId,
  createPropertyController
);
propertiesRoutes.get("", listPropertiesController);

export default propertiesRoutes;

import { Router } from "express";
import { createPropertyController } from "../controller/properties.controller";

const propertiesRoutes = Router();

propertiesRoutes.post("", createPropertyController);

export default propertiesRoutes;

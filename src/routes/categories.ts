import { Router } from "express";
import {
  createCategoryController,
  listCategoriesController,
  listCategoryByIdController,
} from "../controller/categories.controller";
import validateAdm from "../middlewares/validateAdm";
import validateCategory from "../middlewares/validateCategory";
import validateToken from "../middlewares/validateToken";

const categoryRoutes = Router();

categoryRoutes.post(
  "",
  validateToken,
  validateAdm,
  validateCategory,
  createCategoryController
);
categoryRoutes.get("", listCategoriesController);
categoryRoutes.get("/:id/properties", listCategoryByIdController);

export default categoryRoutes;

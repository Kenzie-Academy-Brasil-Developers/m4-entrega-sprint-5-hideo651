import { Router } from "express";
import { createCategoryController } from "../controller/categories.controller";

const categoryRoutes = Router();

categoryRoutes.post("", createCategoryController);

export default categoryRoutes;

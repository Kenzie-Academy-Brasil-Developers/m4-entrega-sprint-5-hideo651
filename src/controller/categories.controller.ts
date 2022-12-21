import { Request, Response } from "express";
import createCategoryService from "../services/categoryServices/createCategory.service";
import listCategoriesService from "../services/categoryServices/listCategories.service";
import listCategoryByIdService from "../services/categoryServices/listCategoryById.service";

const createCategoryController = async (req: Request, res: Response) => {
  const data = await createCategoryService(req.body);

  return res.status(201).json(data);
};

const listCategoriesController = async (req: Request, res: Response) => {
  const data = await listCategoriesService();

  return res.status(200).json(data);
};

const listCategoryByIdController = async (req: Request, res: Response) => {
  const data = await listCategoryByIdService(req.params.id);

  return res.status(200).json(data);
};

export {
  createCategoryController,
  listCategoriesController,
  listCategoryByIdController,
};

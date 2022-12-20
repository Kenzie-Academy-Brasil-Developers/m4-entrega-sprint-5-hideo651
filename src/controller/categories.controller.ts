import { Request, Response } from "express";
import createCategoryService from "../services/categoryServices/createCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  const data = await createCategoryService(req.body);

  return res.status(201).json(data);
};

export { createCategoryController };

import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entity";
import { AppError } from "../error";

const validateCategoryId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryRepo = AppDataSource.getRepository(Categories);

    const verifyCategoryId = await categoryRepo.findOneBy({
      id: req.body.categoryId,
    });

    if (!verifyCategoryId) {
      throw new AppError("ID da categoria inválido", 404);
    }

    return next();
  } catch (erro) {
    throw new AppError("ID da categoria inválido", 404);
  }
};

export default validateCategoryId;

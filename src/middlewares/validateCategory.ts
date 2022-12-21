import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entity";
import { AppError } from "../error";

const validateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryRepo = AppDataSource.getRepository(Categories);

  const category = await categoryRepo.findOneBy({ name: req.body.name });

  if (category) {
    throw new AppError("Esta categoria já está cadastrada", 409);
  }

  return next();
};

export default validateCategory;

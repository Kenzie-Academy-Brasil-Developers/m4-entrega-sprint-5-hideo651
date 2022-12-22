import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";
import { AppError } from "../error";

const validateProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const propertyRepo = AppDataSource.getRepository(Properties);

    const validateProperty = await propertyRepo.findOneBy({
      id: req.body.propertyId,
    });

    if (!validateProperty) {
      throw new AppError("Propriedade inválida", 404);
    }

    return next();
  } catch (error) {
    throw new AppError("Propriedade inválida", 404);
  }
};

export default validateProperty;

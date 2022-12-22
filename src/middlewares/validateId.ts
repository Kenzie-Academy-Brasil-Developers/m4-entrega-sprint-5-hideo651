import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../error";

const validateId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userRepo = AppDataSource.getRepository(User);

    console.log(req.params.id);

    const user = await userRepo.findOneBy({ id: req.params.id });

    if (!user) {
      throw new AppError("ID inválido", 404);
    }

    return next();
  } catch (error) {
    throw new AppError("ID inválido", 404);
  }
};

export default validateId;

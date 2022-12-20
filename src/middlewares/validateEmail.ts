import AppDataSource from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entity";
import { AppError } from "../error";

const validateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email: req.body.email });

  if (user) {
    throw new AppError("Email já cadastrado", 409);
  }

  return next();
};

export default validateEmail;

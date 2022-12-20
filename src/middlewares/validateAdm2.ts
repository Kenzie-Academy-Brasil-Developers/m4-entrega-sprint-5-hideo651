import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const validateAdm2 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isAdm = req.user.isAdm;

  if (!isAdm) {
    throw new AppError("Miss authorization", 401);
  }

  return next();
};

export default validateAdm2;

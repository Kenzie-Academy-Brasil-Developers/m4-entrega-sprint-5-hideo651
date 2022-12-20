import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const validateAdm = async (req: Request, res: Response, next: NextFunction) => {
  let isAdm = req.user.isAdm;

  if (!isAdm) {
    throw new AppError("Miss authorization", 403);
  }

  return next();
};

export default validateAdm;

// throw new AppError("Miss authorization", 403);
// return res.status(403).json({ message: "Miss authorization" });

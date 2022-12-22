import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../error";

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Invalid token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      throw new AppError("Invalid token", 401);
    }

    req.user = {
      id: decoded.id,
      isAdm: decoded.isAdm,
      isActive: decoded.isActive,
    };

    // console.log(req.user);

    return next();
  });
};

export default validateToken;

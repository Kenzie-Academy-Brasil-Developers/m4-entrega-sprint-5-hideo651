import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { AppError } from "../error";

const validateDateUpdate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validateData = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: false,
      });
      req.body = validateData;
      return next();
    } catch (error) {
      throw new AppError(`${error.message}`, 401);
    }
  };

export default validateDateUpdate;

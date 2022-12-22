import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const validateDate = (req: Request, res: Response, next: NextFunction) => {
  const { date, hour } = req.body;

  const validateDay = new Date(`${date} ${hour}`).getDay();
  const validateHour = new Date(`${date} ${hour}`).getHours();

  const minutes = new Date(`${date} ${hour}`).getMinutes();

  const validateTime = Number(`${validateHour}.${minutes}`);

  if (validateDay < 1 || validateDay > 5) {
    throw new AppError("Não funcionamos nos fins de semana", 400);
  }

  if (validateTime < 8 || validateTime > 18) {
    throw new AppError("Fora do horário comercial", 400);
  }

  return next();
};
export default validateDate;

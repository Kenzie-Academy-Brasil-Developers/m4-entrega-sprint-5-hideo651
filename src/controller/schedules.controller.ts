import { NextFunction, Request, Response } from "express";
import createScheduleService from "../services/schedulesServices/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  const data = await createScheduleService(req.body, req.user.id);

  return res.status(201).json(data);
};

export { createScheduleController };

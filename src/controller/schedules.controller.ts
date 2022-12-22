import { NextFunction, Request, Response } from "express";
import createScheduleService from "../services/schedulesServices/createSchedule.service";
import listtSchedulePropertiesService from "../services/schedulesServices/listScheduleProperties.service";

const createScheduleController = async (req: Request, res: Response) => {
  const data = await createScheduleService(req.body, req.user.id);

  return res.status(201).json(data);
};

const listtSchedulePropertiesController = async (
  req: Request,
  res: Response
) => {
  const data = await listtSchedulePropertiesService(req.params.id);
  return res.status(200).json(data);
};

export { createScheduleController, listtSchedulePropertiesController };

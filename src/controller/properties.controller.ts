import { NextFunction, Request, Response } from "express";
import createPropertyService from "../services/propertiesServices/createProperty.service";
import listPropertiesService from "../services/propertiesServices/listProperties.service";

const createPropertyController = async (req: Request, res: Response) => {
  const data = await createPropertyService(req.body);

  return res.status(201).json(data);
};

const listPropertiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await listPropertiesService();

  return res.status(200).json(data);
};

export { createPropertyController, listPropertiesController };

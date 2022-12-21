import { Request, Response } from "express";
import createPropertyService from "../services/propertiesServices/createProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
  const data = await createPropertyService(req.body);

  return res.status(201).json(data);
};

export { createPropertyController };

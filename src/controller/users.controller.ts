import { Request, Response } from "express";

import { instanceToPlain } from "class-transformer";
import createUserService from "../services/userServices/createUser.service";
import listUsersService from "../services/userServices/listUsers.service";
import deleteUserService from "../services/userServices/deleteUser.service";
import patchUserService from "../services/userServices/patchUser.service";

const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);

  return res.status(201).json(user);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(instanceToPlain(users));
};

const deleteUserController = async (req: Request, res: Response) => {
  const user = await deleteUserService(req.params.id);

  return res.status(204).json(user);
};

const patchUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const userId = req.params.id;
  const userUpdate = await patchUserService(userData, userId);

  return res.status(200).json(instanceToPlain(userUpdate));
};

export {
  listUsersController,
  createUserController,
  deleteUserController,
  patchUserController,
};

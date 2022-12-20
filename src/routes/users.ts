import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  patchUserController,
} from "../controller/users.controller";
import validateAdm from "../middlewares/validateAdm";
import validateEmail from "../middlewares/validateEmail";
import validateId from "../middlewares/validateId";
import validateToken from "../middlewares/validateToken";
import validateDateUpdate from "../middlewares/validateData";
import { userSchema } from "../schema/createUser.schema";
import validateAdm2 from "../middlewares/validateAdm2";

const usersRoutes = Router();

usersRoutes.post("", validateEmail, createUserController);
usersRoutes.get("", validateToken, validateAdm, listUsersController);
usersRoutes.delete(
  "/:id",
  validateToken,
  validateAdm,
  validateId,
  deleteUserController
);
usersRoutes.patch(
  "/:id",
  validateToken,
  validateAdm2,
  validateId,
  validateDateUpdate(userSchema),
  patchUserController
);

export default usersRoutes;

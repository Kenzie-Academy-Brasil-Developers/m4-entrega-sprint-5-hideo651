import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import loginService from "../services/userServices/loginUser.service";

const loginController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const [status, token] = await loginService(data);

  return res.status(status as number).json(token);
};

export default loginController;

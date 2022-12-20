import { IUserLogin } from "../../interfaces/users";
import Jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { compare } from "bcryptjs";
import "dotenv/config";
import { AppError } from "../../error";
const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<Array<number | object>> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email: email });

  if (!user) {
    throw new AppError("Senha ou email errada", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Senha ou email errada", 403);
  }

  const token = Jwt.sign(
    {
      isAdm: user.isAdm,
      id: user.id,
      isActive: user.isActive,
    },
    process.env.SECRET_KEY,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return [200, { token: token }];
};

export default loginService;

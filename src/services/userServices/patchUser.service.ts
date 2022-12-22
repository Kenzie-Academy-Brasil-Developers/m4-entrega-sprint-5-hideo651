import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { IUserUpdate } from "../../interfaces/users";
import { userNoPassword } from "../../schema/createUser.schema";

const patchUserService = async (data: IUserUpdate, idUser: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const keys = Object.keys(data);

  const filter = keys.find(
    (e) => e === "name" || e === "email" || e === "password"
  );

  if (!filter) {
    throw new AppError("Campo inválido", 401);
  }

  const findUser = await userRepo.findOneBy({
    id: idUser,
  });

  const patchUser = userRepo.create({
    ...findUser,
    ...data,
  });

  await userRepo.save(patchUser);

  const userReturn = await userNoPassword.validate(patchUser, {
    stripUnknown: true,
  });

  return userReturn;
};

export default patchUserService;

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";

const createUserService = async (data: IUserRequest): Promise<User> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = userRepo.create(data);

  const createUser = await userRepo.save(user);

  const userReturn = Object.assign({}, createUser);

  delete userReturn.password;

  return userReturn;
};

export default createUserService;

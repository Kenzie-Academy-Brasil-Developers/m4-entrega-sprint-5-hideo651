import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listUsersService = async (): Promise<User[]> => {
  const userRepo = AppDataSource.getRepository(User);
  return await userRepo.find();
};

export default listUsersService;

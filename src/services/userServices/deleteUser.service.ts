import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { IUser } from "../../interfaces/users";

const deleteUserService = async (id: string): Promise<void> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: id });

  if (!user.isActive) {
    throw new AppError("Não pode deletar usuário inativo", 400);
  }

  await userRepo.update(
    {
      id: id,
    },
    {
      isActive: false,
    }
  );

  return;
};

export default deleteUserService;

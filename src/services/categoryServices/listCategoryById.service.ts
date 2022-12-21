import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../error";

const listCategoryByIdService = async (id: string) => {
  try {
    const categoryRepo = AppDataSource.getRepository(Categories);

    const category = await categoryRepo.find({
      relations: {
        properties: true,
      },
      where: {
        id: id,
      },
    });

    if (!category[0]) {
      throw new AppError("ID inválido ou categoria não encontrada", 404);
    }

    return category[0];
  } catch (error) {
    throw new AppError("ID inválido ou categoria não encontrada", 404);
  }
};

export default listCategoryByIdService;

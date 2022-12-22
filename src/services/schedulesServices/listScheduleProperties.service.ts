import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../error";

const listtSchedulePropertiesService = async (id: string) => {
  try {
    const propertyRepo = AppDataSource.getRepository(Properties);

    const properties = await propertyRepo.find({
      relations: {
        schedules: true,
      },
      where: {
        id: id,
      },
    });

    if (!properties[0]) {
      throw new AppError("ID inválido", 404);
    }

    return properties[0];
  } catch (error) {
    throw new AppError("ID inválido", 404);
  }
};

export default listtSchedulePropertiesService;

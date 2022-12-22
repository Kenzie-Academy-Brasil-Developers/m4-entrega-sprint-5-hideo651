import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules } from "../../entities/schedules.entity";

const listtSchedulePropertiesService = async (id: string) => {
  const propertyRepo = AppDataSource.getRepository(Properties);

  const properties = await propertyRepo.find({
    relations: {
      schedules: true,
    },
    where: {
      id: id,
    },
  });

  return properties[0];
};

export default listtSchedulePropertiesService;

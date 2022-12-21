import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

const listPropertiesService = async (): Promise<Properties[]> => {
  const propertyRepo = AppDataSource.getRepository(Properties);

  return await propertyRepo.find();
};

export default listPropertiesService;

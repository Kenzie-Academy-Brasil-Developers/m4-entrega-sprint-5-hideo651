import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

const listCategoriesService = async (): Promise<Categories[]> => {
  const categoryRepo = AppDataSource.getRepository(Categories);
  return await categoryRepo.find();
};

export default listCategoriesService;

import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (
  data: ICategoryRequest
): Promise<Categories> => {
  const categoryRepo = AppDataSource.getRepository(Categories);

  const category = categoryRepo.create(data);

  const createCategory = await categoryRepo.save(category);

  return createCategory;
};

export default createCategoryService;

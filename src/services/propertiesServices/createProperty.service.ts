import AppDataSource from "../../data-source";
import { Adress } from "../../entities/adress.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../error";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async (
  data: IPropertyRequest
): Promise<Properties> => {
  const { address } = data;

  const propertyRepo = AppDataSource.getRepository(Properties);
  const adressRepo = AppDataSource.getRepository(Adress);

  const verifyAddress = await adressRepo.findOneBy({
    zipCode: address.zipCode,
  });

  if (address.zipCode.length > 8) {
    throw new AppError("zipCode inválido", 400);
  }

  if (address.state.length > 2) {
    throw new AppError("Estado inválido", 400);
  }

  if (verifyAddress) {
    throw new AppError("Propriedade já cadastrada", 409);
  }

  const createAddress = adressRepo.create(data.address);
  const saveAdress = await adressRepo.save(createAddress);
  const property = propertyRepo.create({
    ...data,
    address: saveAdress,
    category: data.categoryId,
  });

  const createProperty = await propertyRepo.save(property);

  return createProperty;
};

export default createPropertyService;

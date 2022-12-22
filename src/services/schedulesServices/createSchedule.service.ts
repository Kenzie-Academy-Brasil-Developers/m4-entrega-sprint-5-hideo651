import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules } from "../../entities/schedules.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async (
  data: IScheduleRequest,
  tokenId: string
) => {
  const { date, hour, propertyId } = data;

  const userRepo = AppDataSource.getRepository(User);
  const propertyRepo = AppDataSource.getRepository(Properties);

  const schedulesRepo = AppDataSource.getRepository(Schedules);

  const user = await userRepo
    .createQueryBuilder()
    .select("users")
    .from(User, "users")
    .where("users.id = :id", { id: tokenId })
    .getOne();

  const property = await propertyRepo
    .createQueryBuilder("properties")
    .where("properties.id = :id", { id: propertyId })
    .getOne();

  const verifySchedules = await schedulesRepo
    .createQueryBuilder()
    .select("schedules_users_properties")
    .from(Schedules, "schedules_users_properties")
    .where("schedules_users_properties.property = :propertyId", { propertyId })
    .andWhere("schedules_users_properties.date = :date", { date })
    .andWhere("schedules_users_properties.hour = :hour", { hour })
    .getOne();

  if (verifySchedules) {
    throw new AppError(
      "Não é possivel realizar um agendamento com data/hora iguais na mesma propriedade",
      409
    );
  }

  const verifySchedulesDateAndHour = await schedulesRepo
    .createQueryBuilder()
    .select("schedules_users_properties")
    .from(Schedules, "schedules_users_properties")
    .where("schedules_users_properties.date = :date", { date })
    .andWhere("schedules_users_properties.hour = :hour", { hour })
    .getOne();

  if (verifySchedulesDateAndHour) {
    throw new AppError("Já possui compromisso nessa data e horário", 409);
  }

  // const validateProperty = await propertyRepo.findOneBy({ id: propertyId });

  // if (!validateProperty) {
  //   throw new AppError("Propriedade inválida", 404);
  // }

  const newSchedule = await schedulesRepo
    .createQueryBuilder("schedules_users_properties")
    .insert()
    .into(Schedules)
    .values([
      { user: user, property: property, date: data.date, hour: data.hour },
    ])
    .execute();

  if (!newSchedule) {
    throw new AppError("erro", 404);
  }

  console.log("****************************************");
  console.log(newSchedule);

  return { message: "Agendamento criado" };
};

export default createScheduleService;

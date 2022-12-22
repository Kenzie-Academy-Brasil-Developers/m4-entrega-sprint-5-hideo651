import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";
import { IScheduleRequest } from "../interfaces/schedules";
import { IUser, IUserUpdate } from "../interfaces/users";

const userSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email(),
  name: yup.string(),
  password: yup.string(),
});

const userNoPassword: SchemaOf<IUser> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
  id: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const propertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  address: new yup.ObjectSchema().required(),
  categoryId: yup.string().required(),
});

const schedulesSchema: SchemaOf<IScheduleRequest> = yup.object().shape({
  userId: yup.string().notRequired(),
  propertyId: yup.string().required(),
  date: yup.string().required(),
  hour: yup.string().required(),
});

export { userSchema, userNoPassword, propertySchema, schedulesSchema };

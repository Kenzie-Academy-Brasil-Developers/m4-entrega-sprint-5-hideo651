import * as yup from "yup";
import { SchemaOf } from "yup";
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

export { userSchema, userNoPassword };

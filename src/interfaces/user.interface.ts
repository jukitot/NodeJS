import { RoleEnum } from "../enums/role.enum";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  role: RoleEnum;
  phone?: string;
  isDeleted: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type IUserCreateDto = Pick<
  IUser,
  "name" | "email" | "age" | "password" | "phone"
>;

export type IUserUpdateDto = Pick<IUser, "name" | "age" | "password" | "phone">;

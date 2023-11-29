import { Model, Schema, model } from "mongoose";

// user interface
export type IUser = {
  name: string;
  email: string;
  password: string;
  address?: string;
};

// user Model
export type UserModel = Model<IUser, Record<string, unknown>>;

// Food Schama
export const UserSchama = new Schema<IUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser, UserModel>("Users", UserSchama);

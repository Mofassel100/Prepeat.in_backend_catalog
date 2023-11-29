import httpStatus from "http-status";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { IUser, User } from "../model/users.model";

// create User
const createUserStore = async (UserData: IUser): Promise<IUser | null> => {
  const isExitUser = User.findOne({
    email: UserData?.email,
  });
  if (isExitUser?.email === UserData?.email) {
    throw new Error("User already exists. Please add another USer.");
  }
  const newUser = await User.create(UserData);
  return newUser;
};

// get all fro DB
const getAllFromDB = async () => {
  const result = await User.find();
  return result;
};

// get all fro DB
const getSingFromDB = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

// update User
const updateFromDB = async (
  id: string,
  UserData: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate(
    { _id: new ObjectId(id) },
    UserData,
    {
      new: true,
    }
  );
  return result;
};

// deleted Deleted
const deleteByIdFromDB = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserStore = {
  createUserStore,
  getAllFromDB,
  getSingFromDB,
  updateFromDB,
  deleteByIdFromDB,
};

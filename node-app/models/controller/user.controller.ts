import { Request, Response } from "express";
import httpStatus from "http-status";
import { UserStore } from "../store/user.store";

const createUserStore = async (req: Request, res: Response) => {
  const { ...UserData } = req.body;
  const result = await UserStore.createUserStore(UserData);
  res.send({
    success: httpStatus.OK,
    message: "User created Success fylly !",
    data: result,
  });
};
const getAllFromDB = async (req: Request, res: Response) => {
  const result = await UserStore.getAllFromDB();
  res.send({
    success: httpStatus.OK,
    message: "All User Get Success fylly !",
    data: result,
  });
};
const getSingFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserStore.getSingFromDB(id);
  res.send({
    success: httpStatus.OK,
    message: "User get single Success fylly !",
    data: result,
  });
};
const updateFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...UserData } = req.body;
  const result = await UserStore.updateFromDB(id, UserData);
  res.send({
    success: httpStatus.OK,
    message: "User updated Success fylly !",
    data: result,
  });
};
const deleteByIdFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserStore.deleteByIdFromDB(id);
  res.send({
    success: httpStatus.OK,
    message: "User Deleted Success fylly !",
    data: result,
  });
};

export const UserController = {
  createUserStore,
  getAllFromDB,
  getSingFromDB,
  updateFromDB,
  deleteByIdFromDB,
};

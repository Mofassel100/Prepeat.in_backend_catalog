import { Request, Response } from "express";
import httpStatus from "http-status";
import { FoodStore } from "../store/food.store";

const CreateFoode = async (req: Request, res: Response) => {
  const { ...FoodData } = req.body;
  const result = await FoodStore.createFoodStore(FoodData);
  res.send({
    success: httpStatus.OK,
    message: "Food created Success fylly !",
    data: result,
  });
};
const getAllFromDB = async (req: Request, res: Response) => {
  const result = await FoodStore.getAllFromDB();
  res.send({
    success: httpStatus.OK,
    message: "Food Get Success fylly !",
    data: result,
  });
};
const getSingFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FoodStore.getSingFromDB(id);
  res.send({
    success: httpStatus.OK,
    message: "Food get single Success fylly !",
    data: result,
  });
};
const updateFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...FoodData } = req.body;
  const result = await FoodStore.updateFromDB(id, FoodData);
  res.send({
    success: httpStatus.OK,
    message: "Food updated Success fylly !",
    data: result,
  });
};
const deleteByIdFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FoodStore.deleteByIdFromDB(id);
  res.send({
    success: httpStatus.OK,
    message: "Food Deleted Success fylly !",
    data: result,
  });
};

export const FoodController = {
  CreateFoode,
  getAllFromDB,
  getSingFromDB,
  updateFromDB,
  deleteByIdFromDB,
};

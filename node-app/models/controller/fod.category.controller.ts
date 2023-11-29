import { Request, Response } from "express";
import httpStatus from "http-status";
import { FoodCategoryStore } from "../store/food.store";

const CreateFoodeCategory = async (req: Request, res: Response) => {
  const { ...FoodCategoryData } = req.body;
  const result = await FoodCategoryStore.createFoodCategoryStore(
    FoodCategoryData
  );
  res.send({
    success: httpStatus.OK,
    message: "FoodCategory created Success fylly !",
    data: result,
  });
};
const getAllFromDB = async (req: Request, res: Response) => {
  const result = await FoodCategoryStore.getAllFromDB();
  res.send({
    success: httpStatus.OK,
    message: "FoodCategory Get Success fylly !",
    data: result,
  });
};
const getSingFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FoodCategoryStore.getSingFromDB(id);
  res.send({
    success: httpStatus.OK,
    message: "FoodCategory get single Success fylly !",
    data: result,
  });
};
const updateFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...FoodCategoryData } = req.body;
  const result = await FoodCategoryStore.updateFromDB(id, FoodCategoryData);
  res.send({
    success: httpStatus.OK,
    message: "FoodCategory updated Success fylly !",
    data: result,
  });
};
const deleteByIdFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FoodCategoryStore.deleteByIdFromDB(id);
  res.send({
    success: httpStatus.OK,
    message: "FoodCategory Deleted Success fylly !",
    data: result,
  });
};

export const FoodCategoryController = {
  CreateFoodeCategory,
  getAllFromDB,
  getSingFromDB,
  updateFromDB,
  deleteByIdFromDB,
};

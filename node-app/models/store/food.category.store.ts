import httpStatus from "http-status";
import mongoose from "mongoose";
import { FoodCategory, IFoodCategory } from "../model/foodCategory.model";
import { ObjectId } from "mongodb";

// create food category
const createFoodCategoryStore = async (
  FoodCategoryData: IFoodCategory
): Promise<IFoodCategory | null> => {
  const isExitFoodCategory = FoodCategory.findOne({
    title: FoodCategoryData?.title,
  });
  if (isExitFoodCategory?.title === FoodCategoryData?.title) {
    throw new Error("Food category already exists. Please add another food.");
  }
  const newFoodCategory = await FoodCategory.create(FoodCategoryData);
  return newFoodCategory;
};

// get all fro DB
const getAllFromDB = async () => {
  const result = await FoodCategory.find();
  return result;
};

// get all fro DB
const getSingFromDB = async (id: string): Promise<IFoodCategory | null> => {
  const result = await FoodCategory.findById(id);
  return result;
};

// update food category
const updateFromDB = async (
  id: string,
  FoodCategoryData: Partial<IFoodCategory>
): Promise<IFoodCategory | null> => {
  const result = await FoodCategory.findOneAndUpdate(
    { _id: new ObjectId(id) },
    FoodCategoryData,
    {
      new: true,
    }
  );
  return result;
};

// deleted Food Category
const deleteByIdFromDB = async (id: string): Promise<IFoodCategory | null> => {
  const result = await FoodCategory.findByIdAndDelete(id);
  return result;
};

export const FoodCategoryStore = {
  createFoodCategoryStore,
  getAllFromDB,
  getSingFromDB,
  updateFromDB,
  deleteByIdFromDB,
};

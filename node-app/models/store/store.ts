import httpStatus from "http-status";
import mongoose from "mongoose";
import { FoodCategory, IFoodCategory } from "../model/foodCategory.model";

const createFoodCategoryStore = async (
  FoodCategoryData: IFoodCategory
): Promise<IFoodCategory | null> => {
  const isExitFoodCategory = FoodCategory.findOne({
    title: FoodCategoryData?.title,
  });
  // if (isExitFoodCategory) {
  //   throw new Error("Food category already exists. Please add another food.");
  // }
  const newFoodCategory = await FoodCategory.create(FoodCategoryData);
  return newFoodCategory;
};
export const FoodCategoryStore = {
  createFoodCategoryStore,
};

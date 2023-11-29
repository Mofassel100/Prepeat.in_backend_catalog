import httpStatus from "http-status";
import mongoose from "mongoose";

import { ObjectId } from "mongodb";
import { Food, IFood } from "../model/food.model";
import { FoodCategory } from "../model/foodCategory.model";

// create food
const createFoodStore = async (FoodData: IFood): Promise<IFood | null> => {
  const isExitFood = FoodCategory.findOne({
    title: FoodData?.title,
  });
  // if (isExitFood?.title !== FoodData?.title) {
  //   throw new Error(
  //     "Food no matched already exists. Please add another mached food."
  //   );
  // }
  const newFood = await Food.create(FoodData);
  return newFood;
};

// get all fro DB
const getAllFromDB = async () => {
  const result = await Food.find();
  return result;
};

// get all fro DB
const getSingFromDB = async (id: string): Promise<IFood | null> => {
  const result = await Food.findById(id);
  return result;
};

// update food
const updateFromDB = async (
  id: string,
  FoodData: Partial<IFood>
): Promise<IFood | null> => {
  const result = await Food.findOneAndUpdate(
    { _id: new ObjectId(id) },
    FoodData,
    {
      new: true,
    }
  );
  return result;
};

// deleted Food
const deleteByIdFromDB = async (id: string): Promise<IFood | null> => {
  const result = await Food.findByIdAndDelete(id);
  return result;
};

export const FoodStore = {
  createFoodStore,
  getAllFromDB,
  getSingFromDB,
  updateFromDB,
  deleteByIdFromDB,
};

import { Model, Schema, model } from "mongoose";
// food category interface
export type IFoodCategory = {
  title: string;
  name: string;
  foodImage: string;
  location: string;
};
// FoodCategory Model
export type FoodCategoryModel = Model<IFoodCategory, Record<string, unknown>>;

// Food categorySchama
const FoodCategorySchama = new Schema<IFoodCategory, FoodCategoryModel>(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    foodImage: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FoodCategory = model<IFoodCategory, FoodCategoryModel>(
  "foodCategory",
  FoodCategorySchama
);

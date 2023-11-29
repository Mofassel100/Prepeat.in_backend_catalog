import { Model, Schema, model } from "mongoose";

// food interface
export type IFood = {
  title: string;
  name: string;
  foodImage: string;
  oldPrice: number;
  price: number;
  location: string;
};
// Food Model
export type FoodModel = Model<IFood, Record<string, unknown>>;
// Food Schama
export const FoodSchama = new Schema<IFood, FoodModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    foodImage: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
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

export const Food = model<IFood, FoodModel>("food", FoodSchama);

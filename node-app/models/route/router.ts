import express from "express";
import { FoodCategoryController } from "../controller/controler";
const router = express.Router();

router.post("/create", FoodCategoryController.CreateFoodeCategory);

export const FoodCategoryRoutes = router;

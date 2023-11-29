import express from "express";
import { FoodCategoryController } from "../controller/fod.category.controller";
const router = express.Router();

router.post("/create", FoodCategoryController.CreateFoodeCategory);
router.get("/:id", FoodCategoryController.getSingFromDB);
router.get("/", FoodCategoryController.getAllFromDB);
router.put("/:id", FoodCategoryController.updateFromDB);
router.delete("/:id", FoodCategoryController.deleteByIdFromDB);

export const FoodCategoryRoutes = router;

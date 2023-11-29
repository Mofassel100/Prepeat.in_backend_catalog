import express from "express";
import { FoodCategoryController } from "../controller/fod.category.controller";
import { FoodController } from "../controller/food.controller";
const router = express.Router();

router.post("/create", FoodController.CreateFoode);
router.get("/:id", FoodController.getSingFromDB);
router.get("/", FoodController.getAllFromDB);
router.put("/:id", FoodController.updateFromDB);
router.delete("/:id", FoodController.deleteByIdFromDB);

export const FoodRoutes = router;

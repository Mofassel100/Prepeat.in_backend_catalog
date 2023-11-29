import express from "express";
import { FoodCategoryRoutes } from "../route/food.category.router";
import { FoodRoutes } from "../route/food.route";
import { UserRoutes } from "../route/user.route";

export const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/food-category",
    route: FoodCategoryRoutes,
  },
  {
    path: "/food",
    route: FoodRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

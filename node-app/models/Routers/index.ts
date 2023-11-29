import express from "express";
import { FoodCategoryRoutes } from "../route/router";

export const router = express.Router();

const moduleRoutes = [
  {
    path: "/food-category",
    route: FoodCategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

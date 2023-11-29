import { Request, Response } from "express";
import httpStatus from "http-status";
import { FoodCategoryStore } from "../store/store";

const CreateFoodeCategory = async (req: Request, res: Response) => {
  const { ...FoodCategoryData } = req.body;
  const result = await FoodCategoryStore.createFoodCategoryStore(
    FoodCategoryData
  );
  res.send({
    success: httpStatus.OK,
    message: "FoodCategory created Success fylly !",
    data: result,
  });
};

//   sendResponse<IAdmin[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Admins retrieved successfully !",
//     meta: result.meta,
//     data: result.data,
//   });
// });

export const FoodCategoryController = {
  CreateFoodeCategory,
};

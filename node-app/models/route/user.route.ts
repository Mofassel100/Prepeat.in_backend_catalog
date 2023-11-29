import express from "express";
import { UserController } from "../controller/user.controller";

const router = express.Router();

router.post("/create", UserController.createUserStore);
router.get("/:id", UserController.getSingFromDB);
router.get("/", UserController.getAllFromDB);
router.put("/:id", UserController.updateFromDB);
router.delete("/:id", UserController.deleteByIdFromDB);

export const UserRoutes = router;

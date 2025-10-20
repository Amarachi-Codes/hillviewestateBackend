import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRouter = Router();

const userController = new UserController

userRouter.post("/signup", userController.signup);
userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getUserById);


export default userRouter;
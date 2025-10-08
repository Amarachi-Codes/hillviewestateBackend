import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const userRouter = Router();

const userController = new UserController

userRouter.post("/signup", userController.signup);


export default userRouter;
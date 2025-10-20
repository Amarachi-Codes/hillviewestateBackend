import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { dtovalidationMiddleware } from "../middleware/validationMiddleware.middleware";
import { LoginDto } from "../auth/request/login.dto";


const authRouter = Router();
const authController = new AuthController();
authRouter.post("/login", dtovalidationMiddleware(LoginDto), authController.login);


export default authRouter;
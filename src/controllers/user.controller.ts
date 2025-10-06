import type { Response, Request } from "express";
import { SignUpDto } from "../dtos/user/request/create-user.dtos.js";
import { UserServiceImpl } from "../services/impl/user.service.impl.js";
import { dtovalidationMiddleware } from "../middleware/validationMiddleware.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { AppError } from "../exception/AppError.js";


export class UserController{
    private userService = new UserServiceImpl()
    signup =[
        dtovalidationMiddleware(SignUpDto), 
        asyncHandler(async(req:Request, res: Response) => {
            const user = await this.userService.createUser(req.body);
            if(!user){
                throw new AppError("User failed to be created", 400);
            }
            res.status(201).json(user)
        }),

    ];
}
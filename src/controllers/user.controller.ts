import type { Response, Request } from "express";
import { SignUpDto } from "../dtos/user/request/create-user.dtos";
import { UserServiceImpl } from "../services/impl/user.service.impl";
import { dtovalidationMiddleware } from "../middleware/validationMiddleware.middleware";
import { asyncHandler } from "../utils/asyncHandler.utils";
import { AppError } from "../exception/AppError";


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

    getAllUser= asyncHandler(async(req:Request, res: Response)=>{
        const users= await this.userService.getAllUser();
        res.status(200).json(users)
    })

    getUserById = asyncHandler(async(req: Request, res: Response)=>{
        const {id }= req.params
        const users = await this.userService.getUserById(id)
        res.status(200).json(users)
    })
    deleteUser = asyncHandler(async(req: Request, res: Response)=>{
        const {id} = req.params
        await this.userService.deleteUser(id)
        res.status(204).send();
    })
}
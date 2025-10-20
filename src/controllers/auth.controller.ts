import { Request, Response } from "express";
import { AppError } from "../exception/AppError";
import { AuthServiceImpl } from "../services/impl/auth.service.impl";
import { asyncHandler } from "../utils/asyncHandler.utils";

export class AuthController{
    private authService = new AuthServiceImpl();
    login = asyncHandler(async(req:Request, res:Response)=>{
        const authResponse = await this.authService.login(req.body);
        if(!authResponse){
            throw new AppError ("Invalid credentials", 401)
        }
        res.status(200).json(authResponse)
    })
}
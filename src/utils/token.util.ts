import jwt,{ Secret, SignOptions } from "jsonwebtoken";
import configuration from "../config/config";
import { AppError } from "../exception/AppError";

const jwtSecret: Secret = configuration.jwt.secret;

export const generatedAccessToken = (payload: object): string =>{
    if(!jwtSecret){
        throw new AppError("JWT Secret is not defined", 500);
    }
    const options:SignOptions = {
        expiresIn: configuration.jwt.expires,
    };
    return jwt.sign (payload, jwtSecret, options);
}

export const generatedRefreshToken = (payload: object): string =>{
    if(!jwtSecret){
        throw new AppError("JWT secret is not defined", 500);
    }
    const options: SignOptions ={
        expiresIn: configuration.jwt.refresh_expires,
    }
    return jwt.sign(payload, jwtSecret, options);
}
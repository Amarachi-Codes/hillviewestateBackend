
import { db } from "../../config/db.js";
import { SignUpDto } from "../../dtos/user/request/create-user.dtos.js";
import { UserResponseDTO } from "../../dtos/user/response/user-response-dto.js";
import { AppError } from "../../exception/AppError.js";
import { hashPassword } from "../../utils/password.utils.js";
import type { UserService } from "../user.service.js";





export class UserServiceImpl implements UserService
{
    async createUser(data: SignUpDto): Promise<UserResponseDTO> {
        
        const userFound = await db.user.findUnique({
            where: {
                email: data.email
            },
        });
        if(userFound){
            throw new AppError("Email already exists", 409);
        }
        const hashedPassword = await hashPassword(data.password)
        const newUser = await db.user.create({
        data: {
            email: data.email,
            password: hashedPassword,
            firstName: data.firstName,
            lastName: data.lastName,
            // role: Role.RESIDENT,
        },
        select:{
            id:true,
            email:true,
            firstName: true,
            lastName:true,
            role:true,
            createdAt:true,
            updatedAt:true,
        }
        });
        return newUser;
    }
}
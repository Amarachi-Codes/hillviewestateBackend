
import { User } from "@prisma/client";
import { db } from "../../config/db";
import { SignUpDto } from "../../dtos/user/request/create-user.dtos";
import { UserResponseDTO } from "../../dtos/user/response/user-response-dto";
import { AppError } from "../../exception/AppError";
import { hashPassword } from "../../utils/password.utils";
import type { UserService } from "../user.service";

export class UserServiceImpl implements UserService {
 
 
  async deleteUser(userId: string): Promise<void> {
try {
  await db.user.delete({
    where:{id: userId}
  })
} catch (error:any) {
   throw new AppError("User not Found", 404);
}
  }


  async getUserById(userId: string): Promise<User | null> {
    const user= await db.user.findUnique({
      where: {id : userId}
    })
    if(!user){
        throw new AppError("User not Found", 404);
    }
    return user
    
  }


  async getAllUser(): Promise<User[]> {
    const allUser = await db.user.findMany({});
    return allUser
    
  }

  
  async createUser(data: SignUpDto): Promise<UserResponseDTO> {
    // Check if email already exists
    const userFound = await db.user.findUnique({
      where: { email: data.email },
    });

    if (userFound) {
      throw new AppError("Email already exists", 409);
    }

    // Hash password
    const hashedPassword = await hashPassword(data.password);

    // Create new user
    const newUser = await db.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        residentIdNo: data.residentIdNo,
        role: "RESIDENT",
      },
    });

    // Map to DTO
    return {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      role: newUser.role,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };
  }
}
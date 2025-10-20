import { User } from "@prisma/client";
import { SignUpDto } from "../dtos/user/request/create-user.dtos";
import { UserResponseDTO } from "../dtos/user/response/user-response-dto";

export interface UserService {
  createUser(data: SignUpDto): Promise<UserResponseDTO>;
  getAllUser():Promise<User[]>
  getUserById(userId: string):Promise<User | null>
  deleteUser(userId: string): Promise<void>
}

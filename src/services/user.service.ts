import { SignUpDto } from "../dtos/user/request/create-user.dtos.js";
import { UserResponseDTO } from "../dtos/user/response/user-response-dto.js";

export interface UserService {
  createUser(data: SignUpDto): Promise<UserResponseDTO>;
}

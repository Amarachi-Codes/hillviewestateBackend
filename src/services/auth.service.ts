import { LoginDto } from "../auth/request/login.dto";
import { UserAuthResponseDto } from "../auth/response/userResponse.dto";

export interface AuthService{

login(data:LoginDto):Promise<UserAuthResponseDto>

}
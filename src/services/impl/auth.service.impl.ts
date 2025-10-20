import { LoginDto } from "../../auth/request/login.dto";
import { UserAuthResponseDto } from "../../auth/response/userResponse.dto";
import { db } from "../../config/db";
import { AppError } from "../../exception/AppError";
import { comparePassword } from "../../utils/password.utils";
import { generatedAccessToken, generatedRefreshToken } from "../../utils/token.util";
import { AuthService } from "../auth.service";

export class AuthServiceImpl implements AuthService{ 
    async login (data: LoginDto): Promise<UserAuthResponseDto> {
        const user = await db.user.findUnique({
            where: {
                email: data.email,
            }
        })
        if(!user){
throw new AppError("Invalid credentials", 401);
    }

    const  isPassword = await comparePassword(data.password, user.password);
    if(!isPassword){
        throw new AppError("Invalid credentials", 401);
    } 
    const accessToken = generatedAccessToken({sub:user.id, role: user.role, email: user.email})
       
    const refreshToken = generatedRefreshToken({sub:user.id});
    return{
        accessToken,
        refreshToken,
    }
}
    } 
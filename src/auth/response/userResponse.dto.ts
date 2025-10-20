import { Role } from "@prisma/client";

export class UserAuthResponseDto{
    accessToken!:string;
    refreshToken!: string


}
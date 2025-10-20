import { Trim } from "class-sanitizer";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";


export class LoginDto{ 
        @IsEmail()
        @Transform(({value})=>value.toLowerCase())
        @Trim()
        email!: string;

        @IsNotEmpty()
        password!: string
}


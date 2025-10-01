 import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Trim} from "class-sanitizer";


export class SignUpDto{
    @IsEmail()
    @Transform(({value}) => value.toLowerCase())
    @Trim()
    email!:string;

    
    @IsNotEmpty()
    @MinLength(6)
    password!:string

    @IsNotEmpty()
    @Trim()
    firstName!: string

    @IsNotEmpty()
    @Trim()
    lastName!: string

}






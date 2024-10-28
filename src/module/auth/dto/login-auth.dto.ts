import { IsEmail, IsNotEmpty, MinLength, MaxLength } from "class-validator";
import { User } from "src/module/users/entities/user.entity";


export class LoginAuthDto implements User{
   @IsEmail()
   @IsNotEmpty()
   email: string;
   @MinLength(6)
   @MaxLength(25)
   @IsNotEmpty()
   password: string;
}
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
//colocar o tratamento de erros aqui
// https://docs.nestjs.com/techniques/validation
export class UserBody {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    name: string;
     
}
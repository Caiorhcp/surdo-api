import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/user/useCase/createUserUseCase/createUserUseCase';
import { UserBody } from './dtos/userBody';
import { UserViewModel } from './viewModel/userViewModel';

@Controller('users')
export class UserController {

    constructor(private createUserUseCase: CreateUserUseCase){}

    @Post()
    async createPost(@Body() body: UserBody) { 

        const { name, email } = body;

        const user = await this.createUserUseCase.execute({ name, email });   

        return UserViewModel.toHTTP(user);
 }
} 
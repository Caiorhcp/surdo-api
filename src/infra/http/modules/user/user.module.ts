import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from 'src/modules/user/useCase/createUserUseCase/createUserUseCase';
import { DatabaseModule } from 'src/infra/database/Database.Module';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [CreateUserUseCase],
})

export class UserModule {}
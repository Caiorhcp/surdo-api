import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserRepository";
import { UserRepository } from "src/modules/user/repositories/UserRepository";


 @Module({
    providers: [PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository //basicamente aqui da pra trocar o banco de dados usado trocando aqui.
        }
    ], 
    exports: [UserRepository],

}) 

export class DatabaseModule {}
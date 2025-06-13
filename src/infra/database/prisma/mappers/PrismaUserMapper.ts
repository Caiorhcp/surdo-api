import { User } from "src/modules/user/entities/User";
import { Aluno as UserRaw } from "../../../../../generated/prisma";

export class PrismaUserMapper {
    static toPrisma(user: User): UserRaw {
        return { 
            id: user.id,
            name: user.name, // <-- use o getter name
            email: user.email,
            createdAt: user.createdAt,
        };
    }
}
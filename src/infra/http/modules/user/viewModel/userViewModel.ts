import { User } from "src/modules/user/entities/User";

export class UserViewModel {
    static toHTTP({ createdAt, id, email, name}: User) {
        return {
            id,
            name,
            email,
            createdAt: createdAt.toISOString(),
        };
    }
}
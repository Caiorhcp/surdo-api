import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface UserSchema {
    name: string;
    email: string;
    createdAt: Date;
    professorId?: string;
    }

export class User {
    props: UserSchema;
    _id: string;
    /**
     * Cria uma instância de User.
     * param props - Propriedades do usuário, incluindo nome, email e data de criação.
     * param id - ID opcional do usuário. Se não fornecido, será gerado um UUID.
     */
    constructor(props: Replace<UserSchema, { createdAt?: Date}>, id?: string) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
        };
        this._id = id || randomUUID();
    };

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this.props.name;
    }

    get email(): string {
        return this.props.email;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }
    get professorId(): string | undefined {
        return this.props.professorId;
    }
    set professorId(professorId: string | undefined) {
        this.props.professorId = professorId;
    }
    set name(name: string) {
        this.props.name = name;
    }
    set email(email: string) {
        this.props.email = email;
    }
    toJSON(): UserSchema {
        return {
            name: this.name,
            email: this.email,
            createdAt: this.createdAt,
            professorId: this.professorId,
            // Não inclua _id no JSON, pois é gerado automaticamente
        };
    }

}
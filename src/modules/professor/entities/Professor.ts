import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface ProfessorSchema {
    nome: string;
    email: string;
    createdAt: Date;
}

export class Professor {
    props: ProfessorSchema;
    _id: string;

    constructor(props: Replace<ProfessorSchema, { createdAt?: Date }>, id?: string) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
        };
        this._id = id || randomUUID();
    }

    get id(): string {
        return this._id;
    }

    get nome(): string {
        return this.props.nome;
    }

    set nome(nome: string) {
        this.props.nome = nome;
    }

    get email(): string {
        return this.props.email;
    }

    set email(email: string) {
        this.props.email = email;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    toJSON(): ProfessorSchema & { id: string } {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            createdAt: this.createdAt,
        };
    }
}
import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface UserSchema {
    name: string;
    email: string;
    createdAt: Date;
    }

export class User {
    props: UserSchema;
    _id: string;
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
        };
    }

}
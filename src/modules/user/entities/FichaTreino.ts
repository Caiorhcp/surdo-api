import { Replace } from "src/utils/replace";
import { randomUUID } from "crypto";

interface FichaTreinoSchema {
    nome: string;
    exercicios: string[]; 
    dataCriacao: Date;
}

export class FichaTreino {
    props: FichaTreinoSchema;
    _id: string;

    constructor(
        props: Replace<FichaTreinoSchema, { dataCriacao?: Date }>,
        id?: string
    ) {
        this.props = {
            ...props,
            dataCriacao: props.dataCriacao || new Date(),
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

    get exercicios(): string[] {
        return this.props.exercicios;
    }

    set exercicios(exercicios: string[]) {
        this.props.exercicios = exercicios;
    }

    get dataCriacao(): Date {
        return this.props.dataCriacao;
    }

    toJSON(): FichaTreinoSchema & { id: string } {
        return {
            id: this.id,
            nome: this.nome,
            exercicios: this.exercicios,
            dataCriacao: this.dataCriacao,
        };
    }
}
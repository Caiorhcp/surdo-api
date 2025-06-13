import { Replace } from "src/utils/replace";
import { randomUUID } from "crypto";

interface ExercicioSchema {
    nome: string;
    descricao: string;
    professorId?: number;
    dataCriacao: Date;
}

export class Exercicio {
   private props: ExercicioSchema;
   private _id: string;

    constructor(props: Replace<ExercicioSchema, { dataCriacao?: Date }>, id?: string) {
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

    get descricao(): string {
        return this.props.descricao;
    }

    set descricao(descricao: string) {
        this.props.descricao = descricao;
    }

    get professorId(): number | undefined {
        return this.props.professorId;
    }

    set professorId(professorId: number | undefined) {
        this.props.professorId = professorId;
    }

    get dataCriacao(): Date {
        return this.props.dataCriacao;
    }

    toJSON(): ExercicioSchema & { id: string } {
        return {
            id: this.id,
            nome: this.nome,
            descricao: this.descricao,
            professorId: this.professorId,
            dataCriacao: this.dataCriacao,
        };
    }
}
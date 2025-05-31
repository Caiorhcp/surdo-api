import { Replace } from "src/utils/replace";
import { randomUUID } from "crypto";

interface ExercicioFichaTreinoSchema {
    fichaTreinoId: string;
    exercicioId: string;
    ordem: number;
    repeticoes: number;
    series: number;
    createdAt: Date;
}

export class ExercicioFichaTreino {
    props: ExercicioFichaTreinoSchema;
    _id: string;

    constructor(
        props: Replace<ExercicioFichaTreinoSchema, { createdAt?: Date }>,
        id?: string
    ) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
        };
        this._id = id || randomUUID();
    }

    get id(): string {
        return this._id;
    }

    get fichaTreinoId(): string {
        return this.props.fichaTreinoId;
    }

    set fichaTreinoId(fichaTreinoId: string) {
        this.props.fichaTreinoId = fichaTreinoId;
    }

    get exercicioId(): string {
        return this.props.exercicioId;
    }

    set exercicioId(exercicioId: string) {
        this.props.exercicioId = exercicioId;
    }

    get ordem(): number {
        return this.props.ordem;
    }

    set ordem(ordem: number) {
        this.props.ordem = ordem;
    }

    get repeticoes(): number {
        return this.props.repeticoes;
    }

    set repeticoes(repeticoes: number) {
        this.props.repeticoes = repeticoes;
    }

    get series(): number {
        return this.props.series;
    }

    set series(series: number) {
        this.props.series = series;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    toJSON(): ExercicioFichaTreinoSchema & { id: string } {
        return {
            id: this.id,
            fichaTreinoId: this.fichaTreinoId,
            exercicioId: this.exercicioId,
            ordem: this.ordem,
            repeticoes: this.repeticoes,
            series: this.series,
            createdAt: this.createdAt,
        };
    }
}
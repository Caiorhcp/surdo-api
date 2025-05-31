import { Injectable } from "@nestjs/common";
import { ExercicioFichaTreino } from "../../entities/ExercicioFichaTreino";
import { ExercicioFichaTreinoRepository } from "../../repositories/ExercicioFichaTreinoRepository";

interface CreateExercicioFichaTreinoRequest {
    fichaTreinoId: string;
    exercicioId: string;
    ordem: number;
    repeticoes: number;
    series: number;
}

@Injectable()
export class CreateExercicioFichaTreinoUseCase {
    constructor(private exercicioFichaTreinoRepository: ExercicioFichaTreinoRepository) {}

    async execute({
        fichaTreinoId,
        exercicioId,
        ordem,
        repeticoes,
        series,
    }: CreateExercicioFichaTreinoRequest) {
        const exercicioFichaTreino = new ExercicioFichaTreino({
            fichaTreinoId,
            exercicioId,
            ordem,
            repeticoes,
            series,
        });

        await this.exercicioFichaTreinoRepository.create(exercicioFichaTreino);

        return exercicioFichaTreino;
    }
}
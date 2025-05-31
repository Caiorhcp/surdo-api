import { Injectable } from "@nestjs/common";
import { Exercicio } from "../../entities/Exercicio";
import { ExercicioRepository } from "../../repositories/ExercicioRepository";

interface CreateExercicioRequest {
    nome: string;
    descricao: string;
    professorId?: number;
}

@Injectable()
export class CreateExercicioUseCase {
    constructor(private exercicioRepository: ExercicioRepository) {}

    async execute({ nome, descricao, professorId }: CreateExercicioRequest) {
        const exercicio = new Exercicio({
            nome,
            descricao,
            professorId,
        });

        await this.exercicioRepository.create(exercicio);

        return exercicio;
    }
}
import { Injectable } from "@nestjs/common";
import { FichaTreino } from "../../entities/FichaTreino";
import { FichaTreinoRepository } from "../../repositories/FichaTreinoRepository";

interface CreateFichaTreinoRequest {
    nome: string;
    exercicios: string[];
}

@Injectable()
export class CreateFichaTreinoUseCase {
    constructor(private fichaTreinoRepository: FichaTreinoRepository) {}

    async execute({ nome, exercicios }: CreateFichaTreinoRequest) {
        const fichaTreino = new FichaTreino({
            nome,
            exercicios,
        });

        await this.fichaTreinoRepository.create(fichaTreino);

        return fichaTreino;
    }
}
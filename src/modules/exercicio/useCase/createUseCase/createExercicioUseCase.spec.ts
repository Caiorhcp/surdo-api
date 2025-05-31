import { CreateExercicioUseCase } from './createExercicioUseCase';
import { ExercicioRepositoryInMemory } from '../../repositories/ExercicioRepositoryInMemory';

let createExercicioUseCase: CreateExercicioUseCase;
let exercicioRepositoryInMemory: ExercicioRepositoryInMemory;

describe("Create Exercicio", () => {

    beforeEach(() => {
        exercicioRepositoryInMemory = new ExercicioRepositoryInMemory();
        createExercicioUseCase = new CreateExercicioUseCase(exercicioRepositoryInMemory);
    });

    it("should be able to create a new exercicio", async () => {
        expect(exercicioRepositoryInMemory.exercicios).toEqual([]);

        const exercicio = await createExercicioUseCase.execute({
            nome: "Supino Reto",
            descricao: "Exercicio para peitoral",
            professorId: 1
        });

        expect(exercicioRepositoryInMemory.exercicios).toEqual([exercicio]);
    });

    it("should be able to create a new exercicio without professorId", async () => {
        const exercicio = await createExercicioUseCase.execute({
            nome: "Agachamento Livre",
            descricao: "Exercicio para pernas"
            // professorId não informado
        });

        expect(exercicio.nome).toBe("Agachamento Livre");
        expect(exercicio.professorId).toBeUndefined();
    });
});
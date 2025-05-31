import { CreateExercicioFichaTreinoUseCase } from './createExercicioFichaTreinoUseCase';
import { ExercicioFichaTreinoRepositoryInMemory } from '../../repositories/ExercicioFichaTreinoRepositoryInMemory';

let createExercicioFichaTreinoUseCase: CreateExercicioFichaTreinoUseCase;
let exercicioFichaTreinoRepositoryInMemory: ExercicioFichaTreinoRepositoryInMemory;

describe("Create ExercicioFichaTreino", () => {

    beforeEach(() => {
        exercicioFichaTreinoRepositoryInMemory = new ExercicioFichaTreinoRepositoryInMemory();
        createExercicioFichaTreinoUseCase = new CreateExercicioFichaTreinoUseCase(exercicioFichaTreinoRepositoryInMemory);
    });

    it("should be able to create a new ExercicioFichaTreino", async () => {
        expect(exercicioFichaTreinoRepositoryInMemory.exerciciosFichaTreino).toEqual([]);

        const exercicioFichaTreino = await createExercicioFichaTreinoUseCase.execute({
            fichaTreinoId: "ficha-1",
            exercicioId: "exercicio-1",
            ordem: 1,
            repeticoes: 12,
            series: 4,
        });

        expect(exercicioFichaTreinoRepositoryInMemory.exerciciosFichaTreino).toEqual([exercicioFichaTreino]);
        expect(exercicioFichaTreino.fichaTreinoId).toBe("ficha-1");
        expect(exercicioFichaTreino.exercicioId).toBe("exercicio-1");
        expect(exercicioFichaTreino.ordem).toBe(1);
        expect(exercicioFichaTreino.repeticoes).toBe(12);
        expect(exercicioFichaTreino.series).toBe(4);
    });
});
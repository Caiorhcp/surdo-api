import { CreateFichaTreinoUseCase } from './createFichaTreinoUseCase';
import { FichaTreinoRepositoryInMemory } from '../../repositories/FichaTreinoRepositoryInMemory';

let createFichaTreinoUseCase: CreateFichaTreinoUseCase;
let fichaTreinoRepositoryInMemory: FichaTreinoRepositoryInMemory;

describe("Create FichaTreino", () => {

    beforeEach(() => {
        fichaTreinoRepositoryInMemory = new FichaTreinoRepositoryInMemory();
        createFichaTreinoUseCase = new CreateFichaTreinoUseCase(fichaTreinoRepositoryInMemory);
    });

it("should be able to create a new FichaTreino", async () => {
    expect(fichaTreinoRepositoryInMemory.fichaTreino).toEqual([]);

    const fichaTreino = await createFichaTreinoUseCase.execute({
        nome: "Treino A",
        exercicios: ["exercicio-1", "exercicio-2"],
    });

    expect(fichaTreinoRepositoryInMemory.fichaTreino).toEqual([fichaTreino]);
    expect(fichaTreino.nome).toBe("Treino A");
    expect(fichaTreino.exercicios).toEqual(["exercicio-1", "exercicio-2"]);
});
});
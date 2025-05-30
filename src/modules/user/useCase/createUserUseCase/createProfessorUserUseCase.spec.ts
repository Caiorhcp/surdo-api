//testes unitários aqui
import { CreateProfessorUserUseCase } from './createProfessorUserUseCase';
import { ProfessorRepositoryInMemory } from '../../repositories/ProfessorRepositoryInMemory';

let createProfessorUserUseCase: CreateProfessorUserUseCase;
let professorRepositoryInMemory: ProfessorRepositoryInMemory;

describe("Create Professor", () => {

    beforeEach((): void => {
        professorRepositoryInMemory = new ProfessorRepositoryInMemory();
        createProfessorUserUseCase = new CreateProfessorUserUseCase(professorRepositoryInMemory);
    });

    it("should be able to create a new professor", async (): Promise<void> => {
        expect(professorRepositoryInMemory.professores).toEqual([]);

        const professor = await createProfessorUserUseCase.execute({
            nome: "Professor Girafales",
            email: "girafales@escola.com"
        });

        expect(professorRepositoryInMemory.professores).toEqual([professor]);
    });
});
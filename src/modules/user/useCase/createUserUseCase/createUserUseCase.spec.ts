//testes unitatios aqui
import { CreateUserUseCase } from './createUserUseCase';
import { UserRepositoryInMemory } from '../../repositories/UserRepositoryInMemory';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory; 

describe("Create User", () => {
 
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    })

    it("should be able to create a new user", async () => { 
      expect(userRepositoryInMemory.users).toEqual([]);

      const user = await createUserUseCase.execute({
        name: "Giovanny Pintinho Mole", 
        email: "pintinhomole123@gmail.com",
        professorId: undefined, 
      })

      expect(userRepositoryInMemory.users).toEqual([user]);
});
});
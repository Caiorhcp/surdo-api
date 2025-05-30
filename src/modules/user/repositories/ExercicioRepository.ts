import { Exercicio } from '../entities/Exercicio';

export abstract class ExercicioRepository {
    abstract create(exercicio: Exercicio): Promise<void>; 
}
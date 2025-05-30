import { ExercicioRepository } from '../repositories/ExercicioRepository';
import { Exercicio } from './../entities/Exercicio';

export class ExercicioRepositoryInMemory implements ExercicioRepository {
    public exercicios: Exercicio[] = [];

    async create(exercicio: Exercicio): Promise<void> {
        this.exercicios.push(exercicio);
        return Promise.resolve();
    }        
}
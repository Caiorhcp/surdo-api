import { ExercicioFichaTreinoRepository } from './ExercicioFichaTreinoRepository';
import { ExercicioFichaTreino } from '../entities/ExercicioFichaTreino';

export class ExercicioFichaTreinoRepositoryInMemory implements ExercicioFichaTreinoRepository {
    public exerciciosFichaTreino: ExercicioFichaTreino [] = [];

    async create(exercicioFichaTreino : ExercicioFichaTreino ): Promise<void> {
        this.exerciciosFichaTreino.push(exercicioFichaTreino );
        return Promise.resolve();
    }        
}
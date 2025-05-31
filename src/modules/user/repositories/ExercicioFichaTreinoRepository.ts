import { ExercicioFichaTreino } from '../entities/ExercicioFichaTreino';

export abstract class ExercicioFichaTreinoRepository {
    abstract create(exercicioFichaTreino: ExercicioFichaTreino ): Promise<void>; 
}
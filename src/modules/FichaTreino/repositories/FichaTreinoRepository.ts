import { FichaTreino } from '../entities/FichaTreino';

export abstract class FichaTreinoRepository {
    abstract create(fichaTreino: FichaTreino ): Promise<void>; 
}
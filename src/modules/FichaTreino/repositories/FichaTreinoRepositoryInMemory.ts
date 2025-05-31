import { FichaTreinoRepository } from './FichaTreinoRepository';
import { FichaTreino } from '../entities/FichaTreino';

export class FichaTreinoRepositoryInMemory implements FichaTreinoRepository {
    public fichaTreino: FichaTreino [] = [];

    async create(fichaTreino : FichaTreino ): Promise<void> {
        this.fichaTreino.push(fichaTreino );
        return Promise.resolve();
    }        
}
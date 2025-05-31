import { ProfessorRepository } from '../repositories/ProfessorRepository';
import { Professor } from '../entities/Professor';

export class ProfessorRepositoryInMemory implements ProfessorRepository {
    public professores: Professor[] = [];

    async create(professor: Professor): Promise<void> {
        this.professores.push(professor);
        return Promise.resolve();
    }        
}
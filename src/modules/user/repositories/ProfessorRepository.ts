import { Professor } from '../entities/Professor';

export abstract class ProfessorRepository {
    abstract create(professor: Professor): Promise<void>; 
}
import { Professor } from '../../professor/entities/Professor';

export abstract class ProfessorRepository {
    abstract create(professor: Professor): Promise<void>; 
}
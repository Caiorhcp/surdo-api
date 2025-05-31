import { Injectable } from '@nestjs/common';
import { Professor } from '../../entities/Professor';
import { ProfessorRepository } from '../../repositories/ProfessorRepository';

interface CreateProfessorRequest {
  nome: string;
  email: string;
}

@Injectable()
export class CreateProfessorUserUseCase {
  constructor(private professorRepository: ProfessorRepository) {}

  async execute({ nome, email }: CreateProfessorRequest) {
    const professor = new Professor({
      nome,
      email,
    });

    await this.professorRepository.create(professor);

    return professor;
  }
}
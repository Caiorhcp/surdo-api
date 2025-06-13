import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User'; // Certifique-se de importar o User

interface CreateUserRequest {
  name: string;
  email: string;
  professorId?: string; // Opcional, se não for necessário
}
@Injectable()
export class CreateUserUseCase {

  constructor (private userRepository: UserRepository) {}
    
  async execute({ name, email }: CreateUserRequest) {
    const user = new User({
      name,
      email,  
      professorId: undefined, // Defina como undefined se não for necessário
    });
    await this.userRepository.create(user);
    return user; 

  } 
}
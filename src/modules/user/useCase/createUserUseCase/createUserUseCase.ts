import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User'; // Certifique-se de importar o User

interface CreateUserRequest {
  name: string;
  email: string;
}

@Injectable()
export class CreateUserUseCase {

  constructor (private userRepository: UserRepository) {}
    
  async execute({ name, email }: CreateUserRequest) {
    const user = new User({
      name,
      email     
    });
//caso for usar senha Giovanny, usar o bcryot para criptografar a senha
    // const passwordHash = await bcrypt.hash(password, 10) por exemplo
    // user.password = passwordHash; // Defina a senha criptografada no usuário
    await this.userRepository.create(user);
    return user; 

  } 
}
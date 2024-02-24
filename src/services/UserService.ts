import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/classes/dtos/UserDTO';
import { UserEntity } from 'src/entities/UserEntity';
import { UserRepository } from 'src/repositories/UserRepository';
import { generateHash } from 'src/utils/HashFunction';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userDTO: UserDTO) {
    const { name, email, password } = userDTO;
    await this.userRepository.checkIfMailExist(email);
    const hash = await generateHash(password);
    const user = new UserEntity(name, email, hash);
    return await this.userRepository.save(user);
  }

  async find(id: string) {
    return await this.userRepository.findUser(id);
  }

  async update(id: string) {
    const user = await this.userRepository.getById(id);
    return await this.userRepository.save(user);
  }

  async delete(id: string) {
    const user = await this.userRepository.getById(id);
    return await this.userRepository.softRemove(user);
  }
}

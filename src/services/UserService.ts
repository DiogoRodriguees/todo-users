import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/classes/dtos/UserDTO';
import { UserEntity } from 'src/entities/UserEntity';
import { UserRepository } from 'src/repositories/UserRepository';
import { generateHash } from 'src/utils/HashFunction';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userDTO: UserDTO) {
    await this.userRepository.checkIfMailExist(userDTO.email);
    userDTO.password = await generateHash(userDTO.password);
    const user = new UserEntity(userDTO);
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

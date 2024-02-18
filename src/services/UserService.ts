import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from 'src/classes/dtos/UserDTO';
import { UserEntity } from 'src/entities/UserEntity';
import { UserRepository } from 'src/repositories/UserRepository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(newUser: UserDTO) {
    const userExist = await this.userRepository.findOne({
      where: { email: newUser.email },
    });

    if (userExist) throw new HttpException('Email já esta cadastrado', HttpStatus.CONFLICT);

    const user = new UserEntity(newUser);

    return await this.userRepository.save(user);
  }
}

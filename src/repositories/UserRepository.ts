import { ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/UserEntity';
import { IsNull, Repository } from 'typeorm';

export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async getById(id: string) {
    const user = await this.findOne({ where: { id: id, deletedAt: IsNull() } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async checkIfMailExist(email: string) {
    const user = await this.findOne({
      where: { email: email, deletedAt: IsNull() },
    });
    if (user) throw new ConflictException('Mail already registered');
  }

  async findUser(id: string) {
    const user = await this.findOne({
      select: { id: true, name: true, email: true },
      where: { id: id, deletedAt: IsNull() },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}

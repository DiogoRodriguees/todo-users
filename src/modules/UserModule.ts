import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/UserController';
import { UserEntity } from 'src/entities/UserEntity';
import { UserRepository } from 'src/repositories/UserRepository';
import { UserService } from 'src/services/UserService';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}

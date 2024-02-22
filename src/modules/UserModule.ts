import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/UserController';
import { UserEntity } from 'src/entities/UserEntity';
import { UserRepository } from 'src/repositories/UserRepository';
import { UserService } from 'src/services/UserService';
import { AuthModule } from './AuthModule';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}

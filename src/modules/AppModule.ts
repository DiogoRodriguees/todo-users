import { Module } from '@nestjs/common';
import { AppController } from '../controllers/AppController';
import { DatabaseModule } from './DatabaseModule';
import { UserModule } from './UserModule';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

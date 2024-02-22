import { Module } from '@nestjs/common';
import { DatabaseModule } from './DatabaseModule';
import { UserModule } from './UserModule';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

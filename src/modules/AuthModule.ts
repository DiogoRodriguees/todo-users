import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import JwtModuleConfig from 'src/configs/JwtModuleConfig';
import { AuthGuard } from 'src/guards/AuthGuard';
import AuthGuardProvider from 'src/providers/AuthGuardProvider';

@Module({
  imports: [JwtModule.register(JwtModuleConfig)],
  providers: [AuthGuard, AuthGuardProvider],
  exports: [AuthGuard],
})
export class AuthModule {}

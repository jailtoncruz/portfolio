import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import environment from '../../core/environments';
import { UsersModule } from '../../models/users/users.module';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: environment.JWT_SECRET,
      signOptions: { expiresIn: '7 day' },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule { }

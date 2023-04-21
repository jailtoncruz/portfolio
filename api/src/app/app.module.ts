import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from '../models/projects/project.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProjectModule, AuthenticationModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AuthenticationGuard
  }],
})
export class AppModule { }

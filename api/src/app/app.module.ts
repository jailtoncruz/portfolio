import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { ProjectModule } from '../models/projects/project.module';
import { AuthenticationGuard } from '../modules/authentication/authentication.guard';
import { AuthenticationModule } from '../modules/authentication/authentication.module';
import { FileModule } from '../modules/file/file.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  ServeStaticModule.forRoot({
    rootPath: resolve(process.cwd(), 'workdir', 'uploads'),
    serveRoot: '/files'
  }),
    ProjectModule, AuthenticationModule, FileModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AuthenticationGuard
  }],
})
export class AppModule { }

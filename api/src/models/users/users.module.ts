import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelperService } from '../../common/helpers/helper.service';
import { PrismaService } from '../../lib/prisma.service';
import { AuthenticationService } from '../../modules/authentication/authentication.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [ConfigModule],
  providers: [UsersService, PrismaService, HelperService, AuthenticationService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule { }

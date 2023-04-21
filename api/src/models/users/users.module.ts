import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users.service';
import { PrismaService } from '../../lib/prisma.service';
import { UsersController } from './users.controller';
import { HelperService } from '../../common/helpers/helper.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Module({
  imports: [ConfigModule],
  providers: [UsersService, PrismaService, HelperService, AuthenticationService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule { }

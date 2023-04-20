import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { PrismaService } from '../../lib/prisma.service';
import { HelperService } from '../../common/helpers/helper.service';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService, HelperService],
})
export class ProjectModule { }

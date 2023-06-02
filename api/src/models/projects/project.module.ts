import { Logger, Module } from '@nestjs/common';
import { HelperService } from '../../common/helpers/helper.service';
import { PrismaService } from '../../lib/prisma.service';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService, HelperService, Logger],
})
export class ProjectModule { }

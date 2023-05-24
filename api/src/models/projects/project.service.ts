import { Injectable, Logger } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
import { HelperService } from '../../common/helpers/helper.service';
import { PrismaService } from '../../lib/prisma.service';

@Injectable()
export class ProjectService {

  constructor(
    private prisma: PrismaService,
    private helper: HelperService,
    private logger: Logger
  ) {
    this.logger = new Logger('ProjectService')
  }

  async project(
    userWhereUniqueInput: Prisma.ProjectWhereUniqueInput,
  ): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: userWhereUniqueInput,
      include: {
        tags: true
      }
    });
  }

  async projects(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProjectWhereUniqueInput;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput;
  }): Promise<Project[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.project.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createProject(data: Prisma.ProjectCreateInput, include?: Prisma.ProjectInclude): Promise<Project> {
    const project = await this.prisma.project.create({
      data,
      include
    });

    this.logger.log(`Project created with ${project.tags.length} tags`)

    return project
  }

  async updateProject(params: {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.ProjectUpdateInput;
  }): Promise<Project> {
    const { where, data } = params;
    return this.prisma.project.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.ProjectWhereUniqueInput): Promise<Project> {
    return this.prisma.project.delete({
      where,
    });
  }
}
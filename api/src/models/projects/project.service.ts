import { Injectable, Logger } from '@nestjs/common';
import { Prisma, Project, Tag } from '@prisma/client';
import { HelperService } from '../../common/helpers/helper.service';
import { PrismaService } from '../../lib/prisma.service';
import { ProjectDTO } from './interfaces/project-dto';

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
  ): Promise<ProjectDTO | null> {
    const project = await this.prisma.project.findUnique({
      where: userWhereUniqueInput,
      include: {
        tags: {
          include: {
            tag: true
          }
        }
      }
    });

    return { ...project, tags: project.tags.map(tag => tag.tag.name) }
  }

  async projects(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProjectWhereUniqueInput;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    const projects = await this.prisma.project.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        tags: {
          include: {
            tag: true
          }
        }
      }
    });

    return projects
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

  async unlinkTag(project: ProjectDTO, tags: Tag[]) {
    await this.prisma.projectTags.deleteMany({
      where: {
        project_id: project.id,
        tag_id: {
          in: tags.map(tag => tag.id)
        }
      }
    })

  }

  async deleteUser(where: Prisma.ProjectWhereUniqueInput): Promise<Project> {
    return this.prisma.project.delete({
      where,
    });
  }

  async getTags(tags: string[]): Promise<Tag[]> {
    return this.prisma.tag.findMany({
      where: {
        name: {
          in: tags
        }
      }
    })
  }
}
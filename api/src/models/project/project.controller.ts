import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project as ProjectModel } from '@prisma/client'
import { HelperService } from '../../common/helpers/helper.service';
import { CreateProjectDTO } from './interfaces/create-project-dto';
import { ProjectDTO } from './interfaces/project.dto';

@Controller("project")
export class ProjectController {
  constructor(
    private readonly service: ProjectService,
    private readonly helper: HelperService) { }

  @Get(":id")
  getProjectById(@Param('id') id: string): Promise<ProjectModel> {
    return this.service.project({ id });
  }

  @Get()
  findAll(): Promise<ProjectModel[]> {
    return this.service.projects();
  }

  @Post()
  async createProject(@Body() data: CreateProjectDTO): Promise<ProjectDTO> {
    const tags = data.tags;
    delete data.tags;

    let project = await this.service.createProject({
      id: this.helper.getID(),
      ...data,
      tags: {
        create: [...tags.map(t => {
          return {
            tag: {
              connectOrCreate: {
                create: {
                  id: this.helper.getID(),
                  name: t
                },
                where: {
                  name: t,
                }
              }
            },
            id: this.helper.getID()
          }
        })]
      }
    }, {
      tags: {
        include: { tag: true }
      },

    });


    return project as ProjectDTO;
  }
}

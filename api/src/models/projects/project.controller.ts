import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { Project as ProjectModel } from '@prisma/client';
import { Public } from '../../common/decorators/public';
import { HelperService } from '../../common/helpers/helper.service';
import { CreateProjectDTO } from './interfaces/create-project-dto';
import { ProjectService } from './project.service';

@ApiBearerAuth()
@Controller("project")
export class ProjectController {
  constructor(
    private readonly service: ProjectService,
    private readonly helper: HelperService) { }

  @Get(":id")
  getProjectById(@Param('id') id: string): Promise<ProjectModel> {
    return this.service.project({ id });
  }

  @ApiQuery({ name: 'page_size', required: false })
  @ApiQuery({ name: 'page_number', required: false })
  @Public()
  @Get()
  findAll(
    @Query('page_size') pageSize: number = 10,
    @Query('page_number') pageNumber: number = 0): Promise<ProjectModel[]> {

    return this.service.projects({
      take: Number(pageSize),
      skip: Number(pageSize * pageNumber)
    });
  }

  @Post()
  async createProject(@Body() data: CreateProjectDTO) {
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


    return project;
  }
}

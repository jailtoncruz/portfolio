import { Body, Controller, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { Public } from '../../common/decorators/public';
import { HelperService } from '../../common/helpers/helper.service';
import { CreateProjectDTO } from './interfaces/create-project-dto';
import { ProjectDTO } from './interfaces/project-dto';
import { ProjectService } from './project.service';

@ApiBearerAuth()
@Controller("project")
export class ProjectController {
  constructor(
    private readonly service: ProjectService,
    private readonly helper: HelperService) { }

  @Get(":id")
  getProjectById(@Param('id') id: string): Promise<ProjectDTO> {
    return this.service.project({ id });
  }

  @ApiQuery({ name: 'page_size', required: false })
  @ApiQuery({ name: 'page_number', required: false })
  @Public()
  @Get()
  async findAll(
    @Query('page_size') pageSize: number = 10,
    @Query('page_number') pageNumber: number = 0): Promise<ProjectDTO[]> {

    const projects = await this.service.projects({
      take: Number(pageSize),
      skip: Number(pageSize * pageNumber),
    });

    return projects.map(project => {
      const dto: ProjectDTO = {
        ...project,
        tags: project.tags.map(tag => {
          return tag.tag.name
        })
      }

      return dto
    })
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

  @Put(":id")
  async updateProject(@Param('id') id: string, @Body() data: CreateProjectDTO) {
    const project = await this.service.project({
      id
    })

    if (!project) throw new NotFoundException();

    const existingTags = await this.service.getTags(project.tags);

    const updatedProject = await this.service.updateProject({
      where: {
        id
      },
      data: {
        name: data.name,
        description: data.description,
        app_url: data.app_url,
        cover_url: data.cover_url,
        repository_url: data.repository_url,
        tags: {
          connectOrCreate: data.tags.map(tag => {
            return {
              create: {
                tag: {
                  connectOrCreate: {
                    create: {
                      name: tag,
                      id: this.helper.getID(),
                    },
                    where: {
                      name: tag
                    }
                  }
                },
                id: this.helper.getID()
              },
              where: {
                project_id_tag_id: {
                  project_id: id,
                  tag_id: existingTags.find(t => t.name === tag)?.id ?? ''
                }
              }
            }
          })
        }
      },
    })

    const tagsToUnlink = existingTags.filter(tag => !data.tags.includes(tag.name))
    if (tagsToUnlink.length > 0) await this.service.unlinkTag(project, tagsToUnlink);

    return { ...updatedProject, tags: data.tags };
  }

}

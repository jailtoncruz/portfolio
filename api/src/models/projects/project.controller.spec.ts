import { Test, TestingModule } from '@nestjs/testing';
import { HelperService } from '../../common/helpers/helper.service';
import { PrismaService } from '../../lib/prisma.service';
import { ProjectController } from "./project.controller";
import { ProjectService } from './project.service';

describe('ProjectController', () => {
  let projectController: ProjectController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [ProjectService, HelperService, PrismaService],
    }).compile();

    projectController = app.get<ProjectController>(ProjectController);
  });

  afterAll(async () => {
    const prisma = new PrismaService()
    const deleteProjectTags = prisma.projectTags.deleteMany()
    const deleteProjects = prisma.project.deleteMany()
    const deleteTags = prisma.tag.deleteMany()

    await prisma.$transaction([
      deleteProjectTags,
      deleteProjects,
      deleteTags
    ])

    await prisma.$disconnect()
  })

  describe('Endpoints', () => {
    it('should be create new project', async () => {
      const project = await projectController.createProject({
        app_url: 'http://localhost:3333',
        description: 'Projeto gerado pelos testes de unidade',
        name: "Projeto Test Unitario Nest",
        repository_url: "https://github.com/jailtoncruz/portifolio",
        tags: ["NodeJS", "ReactJS", "NestJS"]
      });

      expect(project).toBeDefined();
      expect(project.tags).toHaveLength(3);
      expect(project.name).toBeDefined();
    });
  });
});

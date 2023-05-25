import { Project } from '@prisma/client';

export interface ProjectTagsDTO extends Project {
  id: string;
  name: string;
  description: string | null;
  repository_url: string | null;
  app_url: string | null;
  created_at: Date;
  tags: {
    id: string,
    project_id: string,
    tag_id: string,
    tag: {
      id: string,
      name: string
    }
  }
}


export interface ProjectDTO extends Project {
  tags: string[]
}

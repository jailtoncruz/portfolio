export class ProjectDTO {
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
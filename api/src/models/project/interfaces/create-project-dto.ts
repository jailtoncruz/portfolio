import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateProjectDTO {

  @IsNotEmpty()
  name: string

  description?: string

  @IsUrl()
  repository_url?: string

  @IsUrl()
  app_url?: string

  tags?: string[]
}
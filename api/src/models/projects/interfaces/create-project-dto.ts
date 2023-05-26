import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateProjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  @IsUrl()
  repository_url?: string;

  @ApiProperty()
  @IsUrl()
  cover_url?: string;

  @ApiProperty()
  @IsUrl()
  app_url?: string;

  @ApiProperty()
  tags?: string[];
}

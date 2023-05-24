import { Controller, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { Request } from 'express';
import { diskStorage } from 'multer';
import ShortUniqueId from 'short-unique-id';
import { HelperService } from '../../common/helpers/helper.service';
import { fileModuleConstants } from './constants';

@ApiBearerAuth()
@Controller('files')
export class FileController {

  constructor(private helperService: HelperService) { }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', {
    dest: fileModuleConstants.dir,
    storage: diskStorage({
      destination: fileModuleConstants.dir,
      filename(req, file, callback) {
        const hash = new ShortUniqueId({ length: 5 });
        const fileName = `${hash()}-${file.originalname}`;

        callback(null, fileName);
      }
    })
  }))
  upload(@Req() req: Request, @UploadedFile() file: Express.Multer.File) {
    const API_URL = this.helperService.getAPIUrl(req);

    return {
      url: `${API_URL}/files/${file.filename}`
    }
  }
}


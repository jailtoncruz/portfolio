import { Module } from '@nestjs/common';
import { HelperService } from '../../common/helpers/helper.service';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  controllers: [FileController],
  providers: [FileService, HelperService],
})
export class FileModule { }

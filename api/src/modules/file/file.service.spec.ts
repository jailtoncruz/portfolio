import { Test, TestingModule } from '@nestjs/testing';
import { HelperService } from '../../common/helpers/helper.service';
import { FileService } from './file.service';

describe('FileService', () => {
  let service: FileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileService, HelperService],
    }).compile();

    service = module.get<FileService>(FileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

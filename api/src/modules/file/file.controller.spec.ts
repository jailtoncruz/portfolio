import { Test, TestingModule } from '@nestjs/testing';
import { HelperService } from '../../common/helpers/helper.service';
import { FileController } from './file.controller';

describe('FileController', () => {
  let controller: FileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileController],
      providers: [HelperService]
    }).compile();

    controller = module.get<FileController>(FileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

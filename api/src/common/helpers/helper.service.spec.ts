import { Test, TestingModule } from "@nestjs/testing";
import { HelperService } from "./helper.service";

describe('UsersService', () => {
  let service: HelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelperService]
    }).compile();

    service = module.get<HelperService>(HelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be get random string with size defined (16)', () => {
    const size = 16;
    expect(service.randomString(size)).toHaveLength(16);
  });

  it('should be get id with size defined (10)', () => {
    expect(service.getID()).toHaveLength(10);
  });
});
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { JwtModule } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { HelperService } from '../../common/helpers/helper.service';
import environment from '../../core/environments';
import { PrismaService } from '../../lib/prisma.service';
import { AuthenticationService } from '../../modules/authentication/authentication.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let helper: HelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        PrismaService,
        HelperService,
        AuthenticationService,
      ],
      imports: [
        ConfigModule,
        JwtModule.register({
          global: true,
          secret: environment.JWT_SECRET,
          signOptions: { expiresIn: '60s' },
        }),
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    helper = module.get<HelperService>(HelperService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be create new user', async () => {
    const user = await controller.create({
      name: 'User test',
      password: helper.randomString(32),
      username: `${randomUUID()}@tomcruz.dev`,
    });

    expect(user).toBeDefined();
    expect(user).toHaveProperty('access');
    expect(user).toHaveProperty('id');
  });
});

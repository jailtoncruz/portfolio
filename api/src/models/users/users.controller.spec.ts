import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { HelperService } from '../../common/helpers/helper.service';
import { PrismaService } from '../../lib/prisma.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../authentication/constants';

describe('UsersController', () => {
  let controller: UsersController;
  let helper: HelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService, HelperService, AuthenticationService],
      imports: [ConfigModule, JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' }
      })]
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
      username: 'testing_user@tomcruz.dev'
    })

    expect(user).toBeDefined();
    expect(user).toHaveProperty('access')
    expect(user).toHaveProperty('id')
  });
});

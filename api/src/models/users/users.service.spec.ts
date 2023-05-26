import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import ShortUniqueId from 'short-unique-id';
import { User } from '@prisma/client';

import { UsersService } from './users.service';
import { PrismaService } from '../../lib/prisma.service';
import { HelperService } from '../../common/helpers/helper.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../authentication/constants';

describe('UsersService', () => {
  const prisma = new PrismaService();
  const helper = new HelperService();
  let service: UsersService;
  let user: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  beforeAll(async () => {
    const uid = new ShortUniqueId({ length: 16 });

    user = await prisma.user.create({
      data: {
        id: helper.getID(),
        name: 'Test User',
        username: 'testing_user',
        password: uid(),
      },
    });
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be find user', async () => {
    await expect(service.findByUsername('')).resolves.toBeNull();
    await expect(service.findByUsername(user.username)).resolves.toBeDefined();
    await expect(service.findByUsername(user.username)).resolves.toHaveProperty(
      'name',
      user.name,
    );
  });

  it('should be hash password and compare hash with password', async () => {
    const password = helper.randomString(32);
    const hash = await service.hashPassword(password);

    expect(hash).toBeDefined();
    await expect(service.comparePassword(password, hash)).resolves.toBeTruthy();
  });
});

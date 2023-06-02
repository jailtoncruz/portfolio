import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import ShortUniqueId from 'short-unique-id';

import { JwtModule } from '@nestjs/jwt';
import { HelperService } from '../../common/helpers/helper.service';
import environment from '../../core/environments';
import { PrismaService } from '../../lib/prisma.service';
import { AuthenticationService } from '../../modules/authentication/authentication.service';
import { UsersService } from './users.service';

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
          secret: environment.JWT_SECRET,
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

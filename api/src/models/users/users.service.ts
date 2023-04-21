import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../lib/prisma.service';
import { CreateUserDTO } from './interfaces/create-user-dto';
import { HelperService } from '../../common/helpers/helper.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    private prisma: PrismaService,
    private helperService: HelperService,
    private configService: ConfigService) {
  }

  findByUsername(username: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        username
      }
    })
  }

  create(data: User): Promise<User> {
    return this.prisma.user.create({
      data
    })
  }

  async hashPassword(password: string): Promise<string> {
    const salts = 12;
    const salt = await bcrypt.genSalt(salts);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}

import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { Request } from 'express';
import ShortUniqueId from 'short-unique-id';

export const uid = new ShortUniqueId({ length: 10 });

@Injectable()
export class HelperService {
  getID(): string {
    return uid();
  }

  randomString(size: number): string {
    const rb = randomBytes(128);
    return rb.toString('ascii').slice(0, size);
  }

  getAPIUrl(req: Request) {
    const { protocol, hostname } = req;

    return `${protocol}://${hostname}${
      process.env.NODE_ENV === 'production' ? '' : ':3000'
    }`;
  }
}

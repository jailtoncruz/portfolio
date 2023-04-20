import { Injectable } from '@nestjs/common';
import ShortUniqueId from 'short-unique-id';

export const uid = new ShortUniqueId({ length: 10 });

@Injectable()
export class HelperService {
  getID() {
    return uid();
  }
}
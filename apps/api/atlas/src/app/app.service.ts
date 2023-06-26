import { Injectable } from '@nestjs/common';
import { name } from '../../project.json';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: `Welcome to ${name}` };
  }
}

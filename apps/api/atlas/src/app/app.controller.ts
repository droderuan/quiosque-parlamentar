import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { MirrorService } from '../mirrorTasks/mirrorTasks.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mirror: MirrorService
  ) { }

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get("/deputados")
  getdeputados() {
    return this.mirror.getData();
  }
}

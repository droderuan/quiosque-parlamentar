import { Module } from '@nestjs/common';

import { VeritasModule } from '@quiosque-parlamentar/database-connection/veritas'

import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { MirrorTasksModule } from '../mirrorTasks/mirrorTasks.module';

@Module({
  imports: [VeritasModule, MirrorTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

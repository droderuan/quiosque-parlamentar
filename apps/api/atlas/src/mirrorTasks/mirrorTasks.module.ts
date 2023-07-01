import { Module } from '@nestjs/common';
import { MirrorService } from './mirrorTasks.service';

@Module({
  imports: [],
  providers: [MirrorService],
  exports: [MirrorService],
})
export class MirrorTasksModule { }

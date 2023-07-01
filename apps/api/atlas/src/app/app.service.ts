import { Injectable } from '@nestjs/common';
import { name } from '../../project.json';
import { VeritasService } from '@quiosque-parlamentar/database-connection/veritas';
import { Deputado, TipoDespesa } from '@quiosque-parlamentar/models/veritas';
import { MirrorService } from '../mirrorTasks/mirrorTasks.service';

@Injectable()
export class AppService {
  constructor(private mirror: MirrorService) { }
  async getData() {
    const deputados = await this.mirror.getData()
    return { message: `Welcome to ${name}`, deputados: deputados };
  }
}

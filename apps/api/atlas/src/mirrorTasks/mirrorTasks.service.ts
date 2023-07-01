import { Injectable } from '@nestjs/common';
import { dadosAbertosClient } from '@quiosque-parlamentar/client/dados-abertos';
import axios, { AxiosInstance } from 'axios';
import { FullInfoDeputadoResponseDTO } from 'libs/client/dados-abertos/src/lib/dto/types';

@Injectable()
export class MirrorService {
  client: AxiosInstance


  async getData(): Promise<{ deputados: FullInfoDeputadoResponseDTO }> {
    const deputados = await dadosAbertosClient.deputados.listOne(204528)
    return { deputados: deputados.data };
  }
}

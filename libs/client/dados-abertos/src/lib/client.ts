import axios, { AxiosRequestConfig } from "axios";
import { LisDespesasDeputadoResponseDTO, DeputadoSituacoesPossiveisResponseDTO, DeputadosResponseDTO, FullInfoDeputadoResponseDTO, TiposDespesasResponseDTO, PartidosResponseDTO } from "./dto/types";

const axiosClient = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/api/v2"
})

export default {
  referencia: {
    async deputadoSituacoesPossiveis(options?: AxiosRequestConfig) {
      return axiosClient.get<DeputadoSituacoesPossiveisResponseDTO>("/referencias/deputados/codSituacao", options)
    },
    async tiposDespesas(options?: AxiosRequestConfig) {
      return axiosClient.get<TiposDespesasResponseDTO>("/referencias/deputados/tipoDespesa", options)
    },
  },
  deputados: {
    async list(options?: AxiosRequestConfig) {
      return axiosClient.get<DeputadosResponseDTO>("/deputados", options)
    },
    async listOne(codDeputado: string | number, options?: AxiosRequestConfig) {
      return axiosClient.get<FullInfoDeputadoResponseDTO>(`/deputados/${codDeputado}`, options)
    },
    async listDespesas(codDeputado: string | number, options?: AxiosRequestConfig) {
      return axiosClient.get<LisDespesasDeputadoResponseDTO>(`/deputados/${codDeputado}/despesas`, options)
    },
  },
  partidos: {
    async list(options?: AxiosRequestConfig) {
      return axiosClient.get<PartidosResponseDTO>("/partidos", options)
    },
  }
}
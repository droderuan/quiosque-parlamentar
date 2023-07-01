interface HrefLink {
  rel: "self" | "next" | "first" | "last"
  href: string
}

type Links = Links[]

export interface DeputadoDTO {
  id: number
  uri: string
  nome: string
  siglaPartido: string
  uriPartido: string
  siglaUf: string
  idLegislatura: number
  urlFoto: string
  email: string
}

export interface DeputadosResponseDTO {
  dados: DeputadoDTO[]
  links: Links
}

export interface FullInfoDeputadoDTO {
  id: number
  uri: string
  nomeCivil: string
  nome: string
  cpf: string
  sexo: string
  urlWebSite: string | null
  redeSocial: string[]
  dataNascimento: string
  dataFalecimento: string
  ufNascimento: string
  municipioNascimento: string
  escolaridade: string
  ultimoStatus: {
    id: number
    uri: string
    nome: string
    siglaPartido: string
    uriPartido: string
    siglaUf: string
    idLegislatura: number
    urlFoto: string
    email: string
    data: string
    nomeEleitoral: string
    gabinete: {
      nome: string
      predio: string
      sala: string
      andar: string
      telefone: string
      email: string
    }
    situacao: string
    condicaoEleitoral: string
    descricaoStatus: string | null
  }
}

export interface FullInfoDeputadoResponseDTO {
  dados: FullInfoDeputadoDTO[]
  links: Links
}

export interface DespesaDeputadoDTO {
  ano: number
  mes: number
  tipoDespesa: string
  codDocumento: number
  tipoDocumento: string
  codTipoDocumento: number
  dataDocumento: string
  numDocumento: string
  valorDocumento: number
  urlDocumento: string
  nomeFornecedor: string
  cnpjCpfFornecedor: string
  valorLiquido: number
  valorGlosa: number
  numRessarcimento: string
  codLote: number
  parcela: number
}

export interface LisDespesasDeputadoResponseDTO {
  dados: DespesaDeputadoDTO[]
  links: Links
}

export interface SituacaoPossivelDeputadoDTO {
  cod: string
  sigla: string
  nome: string
  descricao: string
}

export interface DeputadoSituacoesPossiveisResponseDTO {
  dados: SituacaoPossivelDeputadoDTO[]
  links: Links
}

export interface TiposDespesasDTO {
  cod: string
  sigla: string
  nome: string
  descricao: string
}

export interface TiposDespesasResponseDTO {
  dados: TiposDespesasDTO[]
  links: Links
}

export interface PartidoDTO {
  id: number
  sigla: string
  nome: string
  uri: string
}

export interface PartidosResponseDTO {
  dados: PartidoDTO[]
  links: Links
}


export interface FullInfoPartidoDTO {
  id: number
  sigla: string
  nome: string
  uri: string
  status: {
    data: string
    idLegislatura: string
    situacao: string
    totalPosse: string
    totalMembros: string
    uriMembros: string
    lider: {
      uri: string
      nome: string
      siglaPartido: string
      uriPartido: string
      uf: string
      idLegislatura: number
      urlFoto: string
    }
  }
  numeroEleitoral: number | null
  urlLogo: string
  urlWebSite: string | null
  urlFacebook: string | null
}

export interface FullInfoPartidoResponseDTO {
  dados: FullInfoPartidoDTO[]
  links: Links
}

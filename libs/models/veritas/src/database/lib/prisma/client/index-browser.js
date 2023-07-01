
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PartidoScalarFieldEnum = {
  id: 'id',
  idExterno: 'idExterno',
  sigla: 'sigla',
  nome: 'nome',
  uri: 'uri',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  idDeputado: 'idDeputado'
};

exports.Prisma.LegislaturaScalarFieldEnum = {
  id: 'id',
  idExterno: 'idExterno',
  dataInicio: 'dataInicio',
  dataFim: 'dataFim',
  uri: 'uri',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  idDeputado: 'idDeputado'
};

exports.Prisma.RedeSocialScalarFieldEnum = {
  id: 'id',
  url: 'url',
  rede: 'rede',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  idDeputado: 'idDeputado'
};

exports.Prisma.DeputadoScalarFieldEnum = {
  id: 'id',
  idExterno: 'idExterno',
  uri: 'uri',
  nome: 'nome',
  nomeCivil: 'nomeCivil',
  nomeEleitoral: 'nomeEleitoral',
  siglaUf: 'siglaUf',
  urlFoto: 'urlFoto',
  email: 'email',
  situacao: 'situacao',
  condicaoEleitoral: 'condicaoEleitoral',
  cpf: 'cpf',
  sexo: 'sexo',
  urlWebSite: 'urlWebSite',
  dataNascimento: 'dataNascimento',
  dataFalecimento: 'dataFalecimento',
  ufNascimento: 'ufNascimento',
  municipioNascimento: 'municipioNascimento',
  escolaridade: 'escolaridade',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DespesaScalarFieldEnum = {
  id: 'id',
  ano: 'ano',
  mes: 'mes',
  codDocumento: 'codDocumento',
  tipoDocumento: 'tipoDocumento',
  codTipoDocumento: 'codTipoDocumento',
  dataDocumento: 'dataDocumento',
  numDocumento: 'numDocumento',
  valorDocumento: 'valorDocumento',
  urlDocumento: 'urlDocumento',
  valorLiquido: 'valorLiquido',
  valorGlosa: 'valorGlosa',
  numRessarcimento: 'numRessarcimento',
  codLote: 'codLote',
  parcela: 'parcela',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  idFornecedor: 'idFornecedor',
  idTipoDespesa: 'idTipoDespesa',
  idDeputadoId: 'idDeputadoId'
};

exports.Prisma.FornecedorScalarFieldEnum = {
  id: 'id',
  cpfCnpj: 'cpfCnpj',
  nome: 'nome',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TipoDespesaScalarFieldEnum = {
  id: 'id',
  idExterno: 'idExterno',
  tipo: 'tipo',
  descricao: 'descricao',
  sigla: 'sigla',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Partido: 'Partido',
  Legislatura: 'Legislatura',
  RedeSocial: 'RedeSocial',
  Deputado: 'Deputado',
  Despesa: 'Despesa',
  Fornecedor: 'Fornecedor',
  TipoDespesa: 'TipoDespesa'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

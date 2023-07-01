
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type PartidoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Partido"
  objects: {
    deputado: DeputadoPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    idExterno: number
    sigla: string
    nome: string
    uri: string
    createdAt: Date
    updatedAt: Date
    idDeputado: number | null
  }, ExtArgs["result"]["partido"]>
  composites: {}
}

/**
 * Model Partido
 * 
 */
export type Partido = runtime.Types.DefaultSelection<PartidoPayload>
export type LegislaturaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Legislatura"
  objects: {
    deputado: DeputadoPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    idExterno: number
    dataInicio: Date
    dataFim: Date
    uri: string
    createdAt: Date
    updatedAt: Date
    idDeputado: number | null
  }, ExtArgs["result"]["legislatura"]>
  composites: {}
}

/**
 * Model Legislatura
 * 
 */
export type Legislatura = runtime.Types.DefaultSelection<LegislaturaPayload>
export type RedeSocialPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "RedeSocial"
  objects: {
    deputado: DeputadoPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    url: string
    rede: string
    createdAt: Date
    updatedAt: Date
    idDeputado: number
  }, ExtArgs["result"]["redeSocial"]>
  composites: {}
}

/**
 * Model RedeSocial
 * 
 */
export type RedeSocial = runtime.Types.DefaultSelection<RedeSocialPayload>
export type DeputadoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Deputado"
  objects: {
    redeSocial: RedeSocialPayload<ExtArgs>[]
    partido: PartidoPayload<ExtArgs>[]
    legislatura: LegislaturaPayload<ExtArgs>[]
    depesa: DespesaPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date
    dataFalecimento: Date
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["deputado"]>
  composites: {}
}

/**
 * Model Deputado
 * 
 */
export type Deputado = runtime.Types.DefaultSelection<DeputadoPayload>
export type DespesaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Despesa"
  objects: {
    fornecedor: FornecedorPayload<ExtArgs>
    tipoDespesa: TipoDespesaPayload<ExtArgs>
    deputado: DeputadoPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date
    numDocumento: string
    valorDocumento: Prisma.Decimal
    urlDocumento: string
    valorLiquido: Prisma.Decimal
    valorGlosa: Prisma.Decimal
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt: Date
    updatedAt: Date
    idFornecedor: number
    idTipoDespesa: number
    idDeputadoId: number | null
  }, ExtArgs["result"]["despesa"]>
  composites: {}
}

/**
 * Model Despesa
 * 
 */
export type Despesa = runtime.Types.DefaultSelection<DespesaPayload>
export type FornecedorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Fornecedor"
  objects: {
    despesa: DespesaPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    cpfCnpj: string
    nome: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["fornecedor"]>
  composites: {}
}

/**
 * Model Fornecedor
 * 
 */
export type Fornecedor = runtime.Types.DefaultSelection<FornecedorPayload>
export type TipoDespesaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "TipoDespesa"
  objects: {
    Despesa: DespesaPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    idExterno: number
    tipo: string
    descricao: string
    sigla: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["tipoDespesa"]>
  composites: {}
}

/**
 * Model TipoDespesa
 * 
 */
export type TipoDespesa = runtime.Types.DefaultSelection<TipoDespesaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Partidos
 * const partidos = await prisma.partido.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Partidos
   * const partidos = await prisma.partido.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.partido`: Exposes CRUD operations for the **Partido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partidos
    * const partidos = await prisma.partido.findMany()
    * ```
    */
  get partido(): Prisma.PartidoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.legislatura`: Exposes CRUD operations for the **Legislatura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legislaturas
    * const legislaturas = await prisma.legislatura.findMany()
    * ```
    */
  get legislatura(): Prisma.LegislaturaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.redeSocial`: Exposes CRUD operations for the **RedeSocial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RedeSocials
    * const redeSocials = await prisma.redeSocial.findMany()
    * ```
    */
  get redeSocial(): Prisma.RedeSocialDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.deputado`: Exposes CRUD operations for the **Deputado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deputados
    * const deputados = await prisma.deputado.findMany()
    * ```
    */
  get deputado(): Prisma.DeputadoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.despesa`: Exposes CRUD operations for the **Despesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Despesas
    * const despesas = await prisma.despesa.findMany()
    * ```
    */
  get despesa(): Prisma.DespesaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.fornecedor`: Exposes CRUD operations for the **Fornecedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fornecedors
    * const fornecedors = await prisma.fornecedor.findMany()
    * ```
    */
  get fornecedor(): Prisma.FornecedorDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.tipoDespesa`: Exposes CRUD operations for the **TipoDespesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoDespesas
    * const tipoDespesas = await prisma.tipoDespesa.findMany()
    * ```
    */
  get tipoDespesa(): Prisma.TipoDespesaDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Partido: 'Partido',
    Legislatura: 'Legislatura',
    RedeSocial: 'RedeSocial',
    Deputado: 'Deputado',
    Despesa: 'Despesa',
    Fornecedor: 'Fornecedor',
    TipoDespesa: 'TipoDespesa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'partido' | 'legislatura' | 'redeSocial' | 'deputado' | 'despesa' | 'fornecedor' | 'tipoDespesa'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Partido: {
        payload: PartidoPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PartidoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartidoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartidoPayload>
          }
          findFirst: {
            args: Prisma.PartidoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartidoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartidoPayload>
          }
          findMany: {
            args: Prisma.PartidoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartidoPayload>[]
          }
          create: {
            args: Prisma.PartidoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartidoPayload>
          }
          createMany: {
            args: Prisma.PartidoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PartidoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartidoPayload>
          }
          update: {
            args: Prisma.PartidoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartidoPayload>
          }
          deleteMany: {
            args: Prisma.PartidoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PartidoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PartidoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartidoPayload>
          }
          aggregate: {
            args: Prisma.PartidoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePartido>
          }
          groupBy: {
            args: Prisma.PartidoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PartidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartidoCountArgs<ExtArgs>,
            result: $Utils.Optional<PartidoCountAggregateOutputType> | number
          }
        }
      }
      Legislatura: {
        payload: LegislaturaPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.LegislaturaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LegislaturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegislaturaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LegislaturaPayload>
          }
          findFirst: {
            args: Prisma.LegislaturaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LegislaturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegislaturaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LegislaturaPayload>
          }
          findMany: {
            args: Prisma.LegislaturaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LegislaturaPayload>[]
          }
          create: {
            args: Prisma.LegislaturaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LegislaturaPayload>
          }
          createMany: {
            args: Prisma.LegislaturaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LegislaturaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LegislaturaPayload>
          }
          update: {
            args: Prisma.LegislaturaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LegislaturaPayload>
          }
          deleteMany: {
            args: Prisma.LegislaturaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LegislaturaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LegislaturaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LegislaturaPayload>
          }
          aggregate: {
            args: Prisma.LegislaturaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLegislatura>
          }
          groupBy: {
            args: Prisma.LegislaturaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LegislaturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegislaturaCountArgs<ExtArgs>,
            result: $Utils.Optional<LegislaturaCountAggregateOutputType> | number
          }
        }
      }
      RedeSocial: {
        payload: RedeSocialPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.RedeSocialFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RedeSocialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RedeSocialFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RedeSocialPayload>
          }
          findFirst: {
            args: Prisma.RedeSocialFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RedeSocialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RedeSocialFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RedeSocialPayload>
          }
          findMany: {
            args: Prisma.RedeSocialFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RedeSocialPayload>[]
          }
          create: {
            args: Prisma.RedeSocialCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RedeSocialPayload>
          }
          createMany: {
            args: Prisma.RedeSocialCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RedeSocialDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RedeSocialPayload>
          }
          update: {
            args: Prisma.RedeSocialUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RedeSocialPayload>
          }
          deleteMany: {
            args: Prisma.RedeSocialDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RedeSocialUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RedeSocialUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RedeSocialPayload>
          }
          aggregate: {
            args: Prisma.RedeSocialAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRedeSocial>
          }
          groupBy: {
            args: Prisma.RedeSocialGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RedeSocialGroupByOutputType>[]
          }
          count: {
            args: Prisma.RedeSocialCountArgs<ExtArgs>,
            result: $Utils.Optional<RedeSocialCountAggregateOutputType> | number
          }
        }
      }
      Deputado: {
        payload: DeputadoPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DeputadoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DeputadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeputadoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DeputadoPayload>
          }
          findFirst: {
            args: Prisma.DeputadoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DeputadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeputadoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DeputadoPayload>
          }
          findMany: {
            args: Prisma.DeputadoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DeputadoPayload>[]
          }
          create: {
            args: Prisma.DeputadoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DeputadoPayload>
          }
          createMany: {
            args: Prisma.DeputadoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DeputadoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DeputadoPayload>
          }
          update: {
            args: Prisma.DeputadoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DeputadoPayload>
          }
          deleteMany: {
            args: Prisma.DeputadoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DeputadoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DeputadoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DeputadoPayload>
          }
          aggregate: {
            args: Prisma.DeputadoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDeputado>
          }
          groupBy: {
            args: Prisma.DeputadoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DeputadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeputadoCountArgs<ExtArgs>,
            result: $Utils.Optional<DeputadoCountAggregateOutputType> | number
          }
        }
      }
      Despesa: {
        payload: DespesaPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DespesaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DespesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DespesaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DespesaPayload>
          }
          findFirst: {
            args: Prisma.DespesaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DespesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DespesaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DespesaPayload>
          }
          findMany: {
            args: Prisma.DespesaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DespesaPayload>[]
          }
          create: {
            args: Prisma.DespesaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DespesaPayload>
          }
          createMany: {
            args: Prisma.DespesaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DespesaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DespesaPayload>
          }
          update: {
            args: Prisma.DespesaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DespesaPayload>
          }
          deleteMany: {
            args: Prisma.DespesaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DespesaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DespesaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DespesaPayload>
          }
          aggregate: {
            args: Prisma.DespesaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDespesa>
          }
          groupBy: {
            args: Prisma.DespesaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DespesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DespesaCountArgs<ExtArgs>,
            result: $Utils.Optional<DespesaCountAggregateOutputType> | number
          }
        }
      }
      Fornecedor: {
        payload: FornecedorPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.FornecedorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FornecedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FornecedorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FornecedorPayload>
          }
          findFirst: {
            args: Prisma.FornecedorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FornecedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FornecedorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FornecedorPayload>
          }
          findMany: {
            args: Prisma.FornecedorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FornecedorPayload>[]
          }
          create: {
            args: Prisma.FornecedorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FornecedorPayload>
          }
          createMany: {
            args: Prisma.FornecedorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FornecedorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FornecedorPayload>
          }
          update: {
            args: Prisma.FornecedorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FornecedorPayload>
          }
          deleteMany: {
            args: Prisma.FornecedorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FornecedorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FornecedorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FornecedorPayload>
          }
          aggregate: {
            args: Prisma.FornecedorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFornecedor>
          }
          groupBy: {
            args: Prisma.FornecedorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FornecedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FornecedorCountArgs<ExtArgs>,
            result: $Utils.Optional<FornecedorCountAggregateOutputType> | number
          }
        }
      }
      TipoDespesa: {
        payload: TipoDespesaPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TipoDespesaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TipoDespesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoDespesaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TipoDespesaPayload>
          }
          findFirst: {
            args: Prisma.TipoDespesaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TipoDespesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoDespesaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TipoDespesaPayload>
          }
          findMany: {
            args: Prisma.TipoDespesaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TipoDespesaPayload>[]
          }
          create: {
            args: Prisma.TipoDespesaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TipoDespesaPayload>
          }
          createMany: {
            args: Prisma.TipoDespesaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TipoDespesaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TipoDespesaPayload>
          }
          update: {
            args: Prisma.TipoDespesaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TipoDespesaPayload>
          }
          deleteMany: {
            args: Prisma.TipoDespesaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TipoDespesaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TipoDespesaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TipoDespesaPayload>
          }
          aggregate: {
            args: Prisma.TipoDespesaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTipoDespesa>
          }
          groupBy: {
            args: Prisma.TipoDespesaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TipoDespesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoDespesaCountArgs<ExtArgs>,
            result: $Utils.Optional<TipoDespesaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DeputadoCountOutputType
   */


  export type DeputadoCountOutputType = {
    redeSocial: number
    partido: number
    legislatura: number
    depesa: number
  }

  export type DeputadoCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    redeSocial?: boolean | DeputadoCountOutputTypeCountRedeSocialArgs
    partido?: boolean | DeputadoCountOutputTypeCountPartidoArgs
    legislatura?: boolean | DeputadoCountOutputTypeCountLegislaturaArgs
    depesa?: boolean | DeputadoCountOutputTypeCountDepesaArgs
  }

  // Custom InputTypes

  /**
   * DeputadoCountOutputType without action
   */
  export type DeputadoCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeputadoCountOutputType
     */
    select?: DeputadoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DeputadoCountOutputType without action
   */
  export type DeputadoCountOutputTypeCountRedeSocialArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RedeSocialWhereInput
  }


  /**
   * DeputadoCountOutputType without action
   */
  export type DeputadoCountOutputTypeCountPartidoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PartidoWhereInput
  }


  /**
   * DeputadoCountOutputType without action
   */
  export type DeputadoCountOutputTypeCountLegislaturaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LegislaturaWhereInput
  }


  /**
   * DeputadoCountOutputType without action
   */
  export type DeputadoCountOutputTypeCountDepesaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DespesaWhereInput
  }



  /**
   * Count Type FornecedorCountOutputType
   */


  export type FornecedorCountOutputType = {
    despesa: number
  }

  export type FornecedorCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    despesa?: boolean | FornecedorCountOutputTypeCountDespesaArgs
  }

  // Custom InputTypes

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorCountOutputType
     */
    select?: FornecedorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountDespesaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DespesaWhereInput
  }



  /**
   * Count Type TipoDespesaCountOutputType
   */


  export type TipoDespesaCountOutputType = {
    Despesa: number
  }

  export type TipoDespesaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Despesa?: boolean | TipoDespesaCountOutputTypeCountDespesaArgs
  }

  // Custom InputTypes

  /**
   * TipoDespesaCountOutputType without action
   */
  export type TipoDespesaCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesaCountOutputType
     */
    select?: TipoDespesaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TipoDespesaCountOutputType without action
   */
  export type TipoDespesaCountOutputTypeCountDespesaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DespesaWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Partido
   */


  export type AggregatePartido = {
    _count: PartidoCountAggregateOutputType | null
    _avg: PartidoAvgAggregateOutputType | null
    _sum: PartidoSumAggregateOutputType | null
    _min: PartidoMinAggregateOutputType | null
    _max: PartidoMaxAggregateOutputType | null
  }

  export type PartidoAvgAggregateOutputType = {
    id: number | null
    idExterno: number | null
    idDeputado: number | null
  }

  export type PartidoSumAggregateOutputType = {
    id: number | null
    idExterno: number | null
    idDeputado: number | null
  }

  export type PartidoMinAggregateOutputType = {
    id: number | null
    idExterno: number | null
    sigla: string | null
    nome: string | null
    uri: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idDeputado: number | null
  }

  export type PartidoMaxAggregateOutputType = {
    id: number | null
    idExterno: number | null
    sigla: string | null
    nome: string | null
    uri: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idDeputado: number | null
  }

  export type PartidoCountAggregateOutputType = {
    id: number
    idExterno: number
    sigla: number
    nome: number
    uri: number
    createdAt: number
    updatedAt: number
    idDeputado: number
    _all: number
  }


  export type PartidoAvgAggregateInputType = {
    id?: true
    idExterno?: true
    idDeputado?: true
  }

  export type PartidoSumAggregateInputType = {
    id?: true
    idExterno?: true
    idDeputado?: true
  }

  export type PartidoMinAggregateInputType = {
    id?: true
    idExterno?: true
    sigla?: true
    nome?: true
    uri?: true
    createdAt?: true
    updatedAt?: true
    idDeputado?: true
  }

  export type PartidoMaxAggregateInputType = {
    id?: true
    idExterno?: true
    sigla?: true
    nome?: true
    uri?: true
    createdAt?: true
    updatedAt?: true
    idDeputado?: true
  }

  export type PartidoCountAggregateInputType = {
    id?: true
    idExterno?: true
    sigla?: true
    nome?: true
    uri?: true
    createdAt?: true
    updatedAt?: true
    idDeputado?: true
    _all?: true
  }

  export type PartidoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partido to aggregate.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: Enumerable<PartidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partidos
    **/
    _count?: true | PartidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartidoMaxAggregateInputType
  }

  export type GetPartidoAggregateType<T extends PartidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePartido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartido[P]>
      : GetScalarType<T[P], AggregatePartido[P]>
  }




  export type PartidoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PartidoWhereInput
    orderBy?: Enumerable<PartidoOrderByWithAggregationInput>
    by: PartidoScalarFieldEnum[]
    having?: PartidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartidoCountAggregateInputType | true
    _avg?: PartidoAvgAggregateInputType
    _sum?: PartidoSumAggregateInputType
    _min?: PartidoMinAggregateInputType
    _max?: PartidoMaxAggregateInputType
  }


  export type PartidoGroupByOutputType = {
    id: number
    idExterno: number
    sigla: string
    nome: string
    uri: string
    createdAt: Date
    updatedAt: Date
    idDeputado: number | null
    _count: PartidoCountAggregateOutputType | null
    _avg: PartidoAvgAggregateOutputType | null
    _sum: PartidoSumAggregateOutputType | null
    _min: PartidoMinAggregateOutputType | null
    _max: PartidoMaxAggregateOutputType | null
  }

  type GetPartidoGroupByPayload<T extends PartidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PartidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartidoGroupByOutputType[P]>
            : GetScalarType<T[P], PartidoGroupByOutputType[P]>
        }
      >
    >


  export type PartidoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idExterno?: boolean
    sigla?: boolean
    nome?: boolean
    uri?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idDeputado?: boolean
    deputado?: boolean | DeputadoArgs<ExtArgs>
  }, ExtArgs["result"]["partido"]>

  export type PartidoSelectScalar = {
    id?: boolean
    idExterno?: boolean
    sigla?: boolean
    nome?: boolean
    uri?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idDeputado?: boolean
  }

  export type PartidoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    deputado?: boolean | DeputadoArgs<ExtArgs>
  }


  type PartidoGetPayload<S extends boolean | null | undefined | PartidoArgs> = $Types.GetResult<PartidoPayload, S>

  type PartidoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PartidoFindManyArgs, 'select' | 'include'> & {
      select?: PartidoCountAggregateInputType | true
    }

  export interface PartidoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partido'], meta: { name: 'Partido' } }
    /**
     * Find zero or one Partido that matches the filter.
     * @param {PartidoFindUniqueArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PartidoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PartidoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Partido'> extends True ? Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Partido that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PartidoFindUniqueOrThrowArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PartidoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PartidoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Partido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoFindFirstArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PartidoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PartidoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Partido'> extends True ? Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Partido that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoFindFirstOrThrowArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PartidoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PartidoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Partidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partidos
     * const partidos = await prisma.partido.findMany()
     * 
     * // Get first 10 Partidos
     * const partidos = await prisma.partido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partidoWithIdOnly = await prisma.partido.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PartidoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartidoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Partido.
     * @param {PartidoCreateArgs} args - Arguments to create a Partido.
     * @example
     * // Create one Partido
     * const Partido = await prisma.partido.create({
     *   data: {
     *     // ... data to create a Partido
     *   }
     * })
     * 
    **/
    create<T extends PartidoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PartidoCreateArgs<ExtArgs>>
    ): Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Partidos.
     *     @param {PartidoCreateManyArgs} args - Arguments to create many Partidos.
     *     @example
     *     // Create many Partidos
     *     const partido = await prisma.partido.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PartidoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartidoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Partido.
     * @param {PartidoDeleteArgs} args - Arguments to delete one Partido.
     * @example
     * // Delete one Partido
     * const Partido = await prisma.partido.delete({
     *   where: {
     *     // ... filter to delete one Partido
     *   }
     * })
     * 
    **/
    delete<T extends PartidoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PartidoDeleteArgs<ExtArgs>>
    ): Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Partido.
     * @param {PartidoUpdateArgs} args - Arguments to update one Partido.
     * @example
     * // Update one Partido
     * const partido = await prisma.partido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PartidoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PartidoUpdateArgs<ExtArgs>>
    ): Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Partidos.
     * @param {PartidoDeleteManyArgs} args - Arguments to filter Partidos to delete.
     * @example
     * // Delete a few Partidos
     * const { count } = await prisma.partido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PartidoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartidoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partidos
     * const partido = await prisma.partido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PartidoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PartidoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partido.
     * @param {PartidoUpsertArgs} args - Arguments to update or create a Partido.
     * @example
     * // Update or create a Partido
     * const partido = await prisma.partido.upsert({
     *   create: {
     *     // ... data to create a Partido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partido we want to update
     *   }
     * })
    **/
    upsert<T extends PartidoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PartidoUpsertArgs<ExtArgs>>
    ): Prisma__PartidoClient<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Partidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoCountArgs} args - Arguments to filter Partidos to count.
     * @example
     * // Count the number of Partidos
     * const count = await prisma.partido.count({
     *   where: {
     *     // ... the filter for the Partidos we want to count
     *   }
     * })
    **/
    count<T extends PartidoCountArgs>(
      args?: Subset<T, PartidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartidoAggregateArgs>(args: Subset<T, PartidoAggregateArgs>): Prisma.PrismaPromise<GetPartidoAggregateType<T>>

    /**
     * Group by Partido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartidoGroupByArgs['orderBy'] }
        : { orderBy?: PartidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Partido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PartidoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    deputado<T extends DeputadoArgs<ExtArgs> = {}>(args?: Subset<T, DeputadoArgs<ExtArgs>>): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Partido base type for findUnique actions
   */
  export type PartidoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where: PartidoWhereUniqueInput
  }

  /**
   * Partido findUnique
   */
  export interface PartidoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PartidoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Partido findUniqueOrThrow
   */
  export type PartidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where: PartidoWhereUniqueInput
  }


  /**
   * Partido base type for findFirst actions
   */
  export type PartidoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: Enumerable<PartidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidos.
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidos.
     */
    distinct?: Enumerable<PartidoScalarFieldEnum>
  }

  /**
   * Partido findFirst
   */
  export interface PartidoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PartidoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Partido findFirstOrThrow
   */
  export type PartidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: Enumerable<PartidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidos.
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidos.
     */
    distinct?: Enumerable<PartidoScalarFieldEnum>
  }


  /**
   * Partido findMany
   */
  export type PartidoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partidos to fetch.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: Enumerable<PartidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partidos.
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    distinct?: Enumerable<PartidoScalarFieldEnum>
  }


  /**
   * Partido create
   */
  export type PartidoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Partido.
     */
    data: XOR<PartidoCreateInput, PartidoUncheckedCreateInput>
  }


  /**
   * Partido createMany
   */
  export type PartidoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partidos.
     */
    data: Enumerable<PartidoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Partido update
   */
  export type PartidoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Partido.
     */
    data: XOR<PartidoUpdateInput, PartidoUncheckedUpdateInput>
    /**
     * Choose, which Partido to update.
     */
    where: PartidoWhereUniqueInput
  }


  /**
   * Partido updateMany
   */
  export type PartidoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partidos.
     */
    data: XOR<PartidoUpdateManyMutationInput, PartidoUncheckedUpdateManyInput>
    /**
     * Filter which Partidos to update
     */
    where?: PartidoWhereInput
  }


  /**
   * Partido upsert
   */
  export type PartidoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Partido to update in case it exists.
     */
    where: PartidoWhereUniqueInput
    /**
     * In case the Partido found by the `where` argument doesn't exist, create a new Partido with this data.
     */
    create: XOR<PartidoCreateInput, PartidoUncheckedCreateInput>
    /**
     * In case the Partido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartidoUpdateInput, PartidoUncheckedUpdateInput>
  }


  /**
   * Partido delete
   */
  export type PartidoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter which Partido to delete.
     */
    where: PartidoWhereUniqueInput
  }


  /**
   * Partido deleteMany
   */
  export type PartidoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partidos to delete
     */
    where?: PartidoWhereInput
  }


  /**
   * Partido without action
   */
  export type PartidoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
  }



  /**
   * Model Legislatura
   */


  export type AggregateLegislatura = {
    _count: LegislaturaCountAggregateOutputType | null
    _avg: LegislaturaAvgAggregateOutputType | null
    _sum: LegislaturaSumAggregateOutputType | null
    _min: LegislaturaMinAggregateOutputType | null
    _max: LegislaturaMaxAggregateOutputType | null
  }

  export type LegislaturaAvgAggregateOutputType = {
    id: number | null
    idExterno: number | null
    idDeputado: number | null
  }

  export type LegislaturaSumAggregateOutputType = {
    id: number | null
    idExterno: number | null
    idDeputado: number | null
  }

  export type LegislaturaMinAggregateOutputType = {
    id: number | null
    idExterno: number | null
    dataInicio: Date | null
    dataFim: Date | null
    uri: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idDeputado: number | null
  }

  export type LegislaturaMaxAggregateOutputType = {
    id: number | null
    idExterno: number | null
    dataInicio: Date | null
    dataFim: Date | null
    uri: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idDeputado: number | null
  }

  export type LegislaturaCountAggregateOutputType = {
    id: number
    idExterno: number
    dataInicio: number
    dataFim: number
    uri: number
    createdAt: number
    updatedAt: number
    idDeputado: number
    _all: number
  }


  export type LegislaturaAvgAggregateInputType = {
    id?: true
    idExterno?: true
    idDeputado?: true
  }

  export type LegislaturaSumAggregateInputType = {
    id?: true
    idExterno?: true
    idDeputado?: true
  }

  export type LegislaturaMinAggregateInputType = {
    id?: true
    idExterno?: true
    dataInicio?: true
    dataFim?: true
    uri?: true
    createdAt?: true
    updatedAt?: true
    idDeputado?: true
  }

  export type LegislaturaMaxAggregateInputType = {
    id?: true
    idExterno?: true
    dataInicio?: true
    dataFim?: true
    uri?: true
    createdAt?: true
    updatedAt?: true
    idDeputado?: true
  }

  export type LegislaturaCountAggregateInputType = {
    id?: true
    idExterno?: true
    dataInicio?: true
    dataFim?: true
    uri?: true
    createdAt?: true
    updatedAt?: true
    idDeputado?: true
    _all?: true
  }

  export type LegislaturaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legislatura to aggregate.
     */
    where?: LegislaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legislaturas to fetch.
     */
    orderBy?: Enumerable<LegislaturaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegislaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legislaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legislaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Legislaturas
    **/
    _count?: true | LegislaturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegislaturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegislaturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegislaturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegislaturaMaxAggregateInputType
  }

  export type GetLegislaturaAggregateType<T extends LegislaturaAggregateArgs> = {
        [P in keyof T & keyof AggregateLegislatura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegislatura[P]>
      : GetScalarType<T[P], AggregateLegislatura[P]>
  }




  export type LegislaturaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LegislaturaWhereInput
    orderBy?: Enumerable<LegislaturaOrderByWithAggregationInput>
    by: LegislaturaScalarFieldEnum[]
    having?: LegislaturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegislaturaCountAggregateInputType | true
    _avg?: LegislaturaAvgAggregateInputType
    _sum?: LegislaturaSumAggregateInputType
    _min?: LegislaturaMinAggregateInputType
    _max?: LegislaturaMaxAggregateInputType
  }


  export type LegislaturaGroupByOutputType = {
    id: number
    idExterno: number
    dataInicio: Date
    dataFim: Date
    uri: string
    createdAt: Date
    updatedAt: Date
    idDeputado: number | null
    _count: LegislaturaCountAggregateOutputType | null
    _avg: LegislaturaAvgAggregateOutputType | null
    _sum: LegislaturaSumAggregateOutputType | null
    _min: LegislaturaMinAggregateOutputType | null
    _max: LegislaturaMaxAggregateOutputType | null
  }

  type GetLegislaturaGroupByPayload<T extends LegislaturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LegislaturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegislaturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegislaturaGroupByOutputType[P]>
            : GetScalarType<T[P], LegislaturaGroupByOutputType[P]>
        }
      >
    >


  export type LegislaturaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idExterno?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    uri?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idDeputado?: boolean
    deputado?: boolean | DeputadoArgs<ExtArgs>
  }, ExtArgs["result"]["legislatura"]>

  export type LegislaturaSelectScalar = {
    id?: boolean
    idExterno?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    uri?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idDeputado?: boolean
  }

  export type LegislaturaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    deputado?: boolean | DeputadoArgs<ExtArgs>
  }


  type LegislaturaGetPayload<S extends boolean | null | undefined | LegislaturaArgs> = $Types.GetResult<LegislaturaPayload, S>

  type LegislaturaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<LegislaturaFindManyArgs, 'select' | 'include'> & {
      select?: LegislaturaCountAggregateInputType | true
    }

  export interface LegislaturaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Legislatura'], meta: { name: 'Legislatura' } }
    /**
     * Find zero or one Legislatura that matches the filter.
     * @param {LegislaturaFindUniqueArgs} args - Arguments to find a Legislatura
     * @example
     * // Get one Legislatura
     * const legislatura = await prisma.legislatura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LegislaturaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LegislaturaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Legislatura'> extends True ? Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Legislatura that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LegislaturaFindUniqueOrThrowArgs} args - Arguments to find a Legislatura
     * @example
     * // Get one Legislatura
     * const legislatura = await prisma.legislatura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LegislaturaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegislaturaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Legislatura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegislaturaFindFirstArgs} args - Arguments to find a Legislatura
     * @example
     * // Get one Legislatura
     * const legislatura = await prisma.legislatura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LegislaturaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LegislaturaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Legislatura'> extends True ? Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Legislatura that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegislaturaFindFirstOrThrowArgs} args - Arguments to find a Legislatura
     * @example
     * // Get one Legislatura
     * const legislatura = await prisma.legislatura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LegislaturaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegislaturaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Legislaturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegislaturaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legislaturas
     * const legislaturas = await prisma.legislatura.findMany()
     * 
     * // Get first 10 Legislaturas
     * const legislaturas = await prisma.legislatura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legislaturaWithIdOnly = await prisma.legislatura.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LegislaturaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegislaturaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Legislatura.
     * @param {LegislaturaCreateArgs} args - Arguments to create a Legislatura.
     * @example
     * // Create one Legislatura
     * const Legislatura = await prisma.legislatura.create({
     *   data: {
     *     // ... data to create a Legislatura
     *   }
     * })
     * 
    **/
    create<T extends LegislaturaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LegislaturaCreateArgs<ExtArgs>>
    ): Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Legislaturas.
     *     @param {LegislaturaCreateManyArgs} args - Arguments to create many Legislaturas.
     *     @example
     *     // Create many Legislaturas
     *     const legislatura = await prisma.legislatura.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LegislaturaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegislaturaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Legislatura.
     * @param {LegislaturaDeleteArgs} args - Arguments to delete one Legislatura.
     * @example
     * // Delete one Legislatura
     * const Legislatura = await prisma.legislatura.delete({
     *   where: {
     *     // ... filter to delete one Legislatura
     *   }
     * })
     * 
    **/
    delete<T extends LegislaturaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LegislaturaDeleteArgs<ExtArgs>>
    ): Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Legislatura.
     * @param {LegislaturaUpdateArgs} args - Arguments to update one Legislatura.
     * @example
     * // Update one Legislatura
     * const legislatura = await prisma.legislatura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LegislaturaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LegislaturaUpdateArgs<ExtArgs>>
    ): Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Legislaturas.
     * @param {LegislaturaDeleteManyArgs} args - Arguments to filter Legislaturas to delete.
     * @example
     * // Delete a few Legislaturas
     * const { count } = await prisma.legislatura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LegislaturaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegislaturaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legislaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegislaturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legislaturas
     * const legislatura = await prisma.legislatura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LegislaturaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LegislaturaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Legislatura.
     * @param {LegislaturaUpsertArgs} args - Arguments to update or create a Legislatura.
     * @example
     * // Update or create a Legislatura
     * const legislatura = await prisma.legislatura.upsert({
     *   create: {
     *     // ... data to create a Legislatura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Legislatura we want to update
     *   }
     * })
    **/
    upsert<T extends LegislaturaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LegislaturaUpsertArgs<ExtArgs>>
    ): Prisma__LegislaturaClient<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Legislaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegislaturaCountArgs} args - Arguments to filter Legislaturas to count.
     * @example
     * // Count the number of Legislaturas
     * const count = await prisma.legislatura.count({
     *   where: {
     *     // ... the filter for the Legislaturas we want to count
     *   }
     * })
    **/
    count<T extends LegislaturaCountArgs>(
      args?: Subset<T, LegislaturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegislaturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Legislatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegislaturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegislaturaAggregateArgs>(args: Subset<T, LegislaturaAggregateArgs>): Prisma.PrismaPromise<GetLegislaturaAggregateType<T>>

    /**
     * Group by Legislatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegislaturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LegislaturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegislaturaGroupByArgs['orderBy'] }
        : { orderBy?: LegislaturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LegislaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegislaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Legislatura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LegislaturaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    deputado<T extends DeputadoArgs<ExtArgs> = {}>(args?: Subset<T, DeputadoArgs<ExtArgs>>): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Legislatura base type for findUnique actions
   */
  export type LegislaturaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    /**
     * Filter, which Legislatura to fetch.
     */
    where: LegislaturaWhereUniqueInput
  }

  /**
   * Legislatura findUnique
   */
  export interface LegislaturaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LegislaturaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Legislatura findUniqueOrThrow
   */
  export type LegislaturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    /**
     * Filter, which Legislatura to fetch.
     */
    where: LegislaturaWhereUniqueInput
  }


  /**
   * Legislatura base type for findFirst actions
   */
  export type LegislaturaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    /**
     * Filter, which Legislatura to fetch.
     */
    where?: LegislaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legislaturas to fetch.
     */
    orderBy?: Enumerable<LegislaturaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legislaturas.
     */
    cursor?: LegislaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legislaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legislaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legislaturas.
     */
    distinct?: Enumerable<LegislaturaScalarFieldEnum>
  }

  /**
   * Legislatura findFirst
   */
  export interface LegislaturaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LegislaturaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Legislatura findFirstOrThrow
   */
  export type LegislaturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    /**
     * Filter, which Legislatura to fetch.
     */
    where?: LegislaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legislaturas to fetch.
     */
    orderBy?: Enumerable<LegislaturaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legislaturas.
     */
    cursor?: LegislaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legislaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legislaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legislaturas.
     */
    distinct?: Enumerable<LegislaturaScalarFieldEnum>
  }


  /**
   * Legislatura findMany
   */
  export type LegislaturaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    /**
     * Filter, which Legislaturas to fetch.
     */
    where?: LegislaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legislaturas to fetch.
     */
    orderBy?: Enumerable<LegislaturaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Legislaturas.
     */
    cursor?: LegislaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legislaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legislaturas.
     */
    skip?: number
    distinct?: Enumerable<LegislaturaScalarFieldEnum>
  }


  /**
   * Legislatura create
   */
  export type LegislaturaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Legislatura.
     */
    data: XOR<LegislaturaCreateInput, LegislaturaUncheckedCreateInput>
  }


  /**
   * Legislatura createMany
   */
  export type LegislaturaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Legislaturas.
     */
    data: Enumerable<LegislaturaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Legislatura update
   */
  export type LegislaturaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Legislatura.
     */
    data: XOR<LegislaturaUpdateInput, LegislaturaUncheckedUpdateInput>
    /**
     * Choose, which Legislatura to update.
     */
    where: LegislaturaWhereUniqueInput
  }


  /**
   * Legislatura updateMany
   */
  export type LegislaturaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Legislaturas.
     */
    data: XOR<LegislaturaUpdateManyMutationInput, LegislaturaUncheckedUpdateManyInput>
    /**
     * Filter which Legislaturas to update
     */
    where?: LegislaturaWhereInput
  }


  /**
   * Legislatura upsert
   */
  export type LegislaturaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Legislatura to update in case it exists.
     */
    where: LegislaturaWhereUniqueInput
    /**
     * In case the Legislatura found by the `where` argument doesn't exist, create a new Legislatura with this data.
     */
    create: XOR<LegislaturaCreateInput, LegislaturaUncheckedCreateInput>
    /**
     * In case the Legislatura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegislaturaUpdateInput, LegislaturaUncheckedUpdateInput>
  }


  /**
   * Legislatura delete
   */
  export type LegislaturaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    /**
     * Filter which Legislatura to delete.
     */
    where: LegislaturaWhereUniqueInput
  }


  /**
   * Legislatura deleteMany
   */
  export type LegislaturaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legislaturas to delete
     */
    where?: LegislaturaWhereInput
  }


  /**
   * Legislatura without action
   */
  export type LegislaturaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
  }



  /**
   * Model RedeSocial
   */


  export type AggregateRedeSocial = {
    _count: RedeSocialCountAggregateOutputType | null
    _avg: RedeSocialAvgAggregateOutputType | null
    _sum: RedeSocialSumAggregateOutputType | null
    _min: RedeSocialMinAggregateOutputType | null
    _max: RedeSocialMaxAggregateOutputType | null
  }

  export type RedeSocialAvgAggregateOutputType = {
    id: number | null
    idDeputado: number | null
  }

  export type RedeSocialSumAggregateOutputType = {
    id: number | null
    idDeputado: number | null
  }

  export type RedeSocialMinAggregateOutputType = {
    id: number | null
    url: string | null
    rede: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idDeputado: number | null
  }

  export type RedeSocialMaxAggregateOutputType = {
    id: number | null
    url: string | null
    rede: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idDeputado: number | null
  }

  export type RedeSocialCountAggregateOutputType = {
    id: number
    url: number
    rede: number
    createdAt: number
    updatedAt: number
    idDeputado: number
    _all: number
  }


  export type RedeSocialAvgAggregateInputType = {
    id?: true
    idDeputado?: true
  }

  export type RedeSocialSumAggregateInputType = {
    id?: true
    idDeputado?: true
  }

  export type RedeSocialMinAggregateInputType = {
    id?: true
    url?: true
    rede?: true
    createdAt?: true
    updatedAt?: true
    idDeputado?: true
  }

  export type RedeSocialMaxAggregateInputType = {
    id?: true
    url?: true
    rede?: true
    createdAt?: true
    updatedAt?: true
    idDeputado?: true
  }

  export type RedeSocialCountAggregateInputType = {
    id?: true
    url?: true
    rede?: true
    createdAt?: true
    updatedAt?: true
    idDeputado?: true
    _all?: true
  }

  export type RedeSocialAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedeSocial to aggregate.
     */
    where?: RedeSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeSocials to fetch.
     */
    orderBy?: Enumerable<RedeSocialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RedeSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeSocials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RedeSocials
    **/
    _count?: true | RedeSocialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RedeSocialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RedeSocialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedeSocialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedeSocialMaxAggregateInputType
  }

  export type GetRedeSocialAggregateType<T extends RedeSocialAggregateArgs> = {
        [P in keyof T & keyof AggregateRedeSocial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedeSocial[P]>
      : GetScalarType<T[P], AggregateRedeSocial[P]>
  }




  export type RedeSocialGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RedeSocialWhereInput
    orderBy?: Enumerable<RedeSocialOrderByWithAggregationInput>
    by: RedeSocialScalarFieldEnum[]
    having?: RedeSocialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedeSocialCountAggregateInputType | true
    _avg?: RedeSocialAvgAggregateInputType
    _sum?: RedeSocialSumAggregateInputType
    _min?: RedeSocialMinAggregateInputType
    _max?: RedeSocialMaxAggregateInputType
  }


  export type RedeSocialGroupByOutputType = {
    id: number
    url: string
    rede: string
    createdAt: Date
    updatedAt: Date
    idDeputado: number
    _count: RedeSocialCountAggregateOutputType | null
    _avg: RedeSocialAvgAggregateOutputType | null
    _sum: RedeSocialSumAggregateOutputType | null
    _min: RedeSocialMinAggregateOutputType | null
    _max: RedeSocialMaxAggregateOutputType | null
  }

  type GetRedeSocialGroupByPayload<T extends RedeSocialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RedeSocialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedeSocialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedeSocialGroupByOutputType[P]>
            : GetScalarType<T[P], RedeSocialGroupByOutputType[P]>
        }
      >
    >


  export type RedeSocialSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    rede?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idDeputado?: boolean
    deputado?: boolean | DeputadoArgs<ExtArgs>
  }, ExtArgs["result"]["redeSocial"]>

  export type RedeSocialSelectScalar = {
    id?: boolean
    url?: boolean
    rede?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idDeputado?: boolean
  }

  export type RedeSocialInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    deputado?: boolean | DeputadoArgs<ExtArgs>
  }


  type RedeSocialGetPayload<S extends boolean | null | undefined | RedeSocialArgs> = $Types.GetResult<RedeSocialPayload, S>

  type RedeSocialCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<RedeSocialFindManyArgs, 'select' | 'include'> & {
      select?: RedeSocialCountAggregateInputType | true
    }

  export interface RedeSocialDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RedeSocial'], meta: { name: 'RedeSocial' } }
    /**
     * Find zero or one RedeSocial that matches the filter.
     * @param {RedeSocialFindUniqueArgs} args - Arguments to find a RedeSocial
     * @example
     * // Get one RedeSocial
     * const redeSocial = await prisma.redeSocial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RedeSocialFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RedeSocialFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RedeSocial'> extends True ? Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one RedeSocial that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RedeSocialFindUniqueOrThrowArgs} args - Arguments to find a RedeSocial
     * @example
     * // Get one RedeSocial
     * const redeSocial = await prisma.redeSocial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RedeSocialFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RedeSocialFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first RedeSocial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeSocialFindFirstArgs} args - Arguments to find a RedeSocial
     * @example
     * // Get one RedeSocial
     * const redeSocial = await prisma.redeSocial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RedeSocialFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RedeSocialFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RedeSocial'> extends True ? Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first RedeSocial that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeSocialFindFirstOrThrowArgs} args - Arguments to find a RedeSocial
     * @example
     * // Get one RedeSocial
     * const redeSocial = await prisma.redeSocial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RedeSocialFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RedeSocialFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more RedeSocials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeSocialFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RedeSocials
     * const redeSocials = await prisma.redeSocial.findMany()
     * 
     * // Get first 10 RedeSocials
     * const redeSocials = await prisma.redeSocial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redeSocialWithIdOnly = await prisma.redeSocial.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RedeSocialFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RedeSocialFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a RedeSocial.
     * @param {RedeSocialCreateArgs} args - Arguments to create a RedeSocial.
     * @example
     * // Create one RedeSocial
     * const RedeSocial = await prisma.redeSocial.create({
     *   data: {
     *     // ... data to create a RedeSocial
     *   }
     * })
     * 
    **/
    create<T extends RedeSocialCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RedeSocialCreateArgs<ExtArgs>>
    ): Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many RedeSocials.
     *     @param {RedeSocialCreateManyArgs} args - Arguments to create many RedeSocials.
     *     @example
     *     // Create many RedeSocials
     *     const redeSocial = await prisma.redeSocial.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RedeSocialCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RedeSocialCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RedeSocial.
     * @param {RedeSocialDeleteArgs} args - Arguments to delete one RedeSocial.
     * @example
     * // Delete one RedeSocial
     * const RedeSocial = await prisma.redeSocial.delete({
     *   where: {
     *     // ... filter to delete one RedeSocial
     *   }
     * })
     * 
    **/
    delete<T extends RedeSocialDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RedeSocialDeleteArgs<ExtArgs>>
    ): Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one RedeSocial.
     * @param {RedeSocialUpdateArgs} args - Arguments to update one RedeSocial.
     * @example
     * // Update one RedeSocial
     * const redeSocial = await prisma.redeSocial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RedeSocialUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RedeSocialUpdateArgs<ExtArgs>>
    ): Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more RedeSocials.
     * @param {RedeSocialDeleteManyArgs} args - Arguments to filter RedeSocials to delete.
     * @example
     * // Delete a few RedeSocials
     * const { count } = await prisma.redeSocial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RedeSocialDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RedeSocialDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedeSocials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeSocialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RedeSocials
     * const redeSocial = await prisma.redeSocial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RedeSocialUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RedeSocialUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RedeSocial.
     * @param {RedeSocialUpsertArgs} args - Arguments to update or create a RedeSocial.
     * @example
     * // Update or create a RedeSocial
     * const redeSocial = await prisma.redeSocial.upsert({
     *   create: {
     *     // ... data to create a RedeSocial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RedeSocial we want to update
     *   }
     * })
    **/
    upsert<T extends RedeSocialUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RedeSocialUpsertArgs<ExtArgs>>
    ): Prisma__RedeSocialClient<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of RedeSocials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeSocialCountArgs} args - Arguments to filter RedeSocials to count.
     * @example
     * // Count the number of RedeSocials
     * const count = await prisma.redeSocial.count({
     *   where: {
     *     // ... the filter for the RedeSocials we want to count
     *   }
     * })
    **/
    count<T extends RedeSocialCountArgs>(
      args?: Subset<T, RedeSocialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedeSocialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RedeSocial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeSocialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RedeSocialAggregateArgs>(args: Subset<T, RedeSocialAggregateArgs>): Prisma.PrismaPromise<GetRedeSocialAggregateType<T>>

    /**
     * Group by RedeSocial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeSocialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RedeSocialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedeSocialGroupByArgs['orderBy'] }
        : { orderBy?: RedeSocialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RedeSocialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedeSocialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RedeSocial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RedeSocialClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    deputado<T extends DeputadoArgs<ExtArgs> = {}>(args?: Subset<T, DeputadoArgs<ExtArgs>>): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RedeSocial base type for findUnique actions
   */
  export type RedeSocialFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    /**
     * Filter, which RedeSocial to fetch.
     */
    where: RedeSocialWhereUniqueInput
  }

  /**
   * RedeSocial findUnique
   */
  export interface RedeSocialFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RedeSocialFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RedeSocial findUniqueOrThrow
   */
  export type RedeSocialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    /**
     * Filter, which RedeSocial to fetch.
     */
    where: RedeSocialWhereUniqueInput
  }


  /**
   * RedeSocial base type for findFirst actions
   */
  export type RedeSocialFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    /**
     * Filter, which RedeSocial to fetch.
     */
    where?: RedeSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeSocials to fetch.
     */
    orderBy?: Enumerable<RedeSocialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedeSocials.
     */
    cursor?: RedeSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeSocials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedeSocials.
     */
    distinct?: Enumerable<RedeSocialScalarFieldEnum>
  }

  /**
   * RedeSocial findFirst
   */
  export interface RedeSocialFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RedeSocialFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RedeSocial findFirstOrThrow
   */
  export type RedeSocialFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    /**
     * Filter, which RedeSocial to fetch.
     */
    where?: RedeSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeSocials to fetch.
     */
    orderBy?: Enumerable<RedeSocialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedeSocials.
     */
    cursor?: RedeSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeSocials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedeSocials.
     */
    distinct?: Enumerable<RedeSocialScalarFieldEnum>
  }


  /**
   * RedeSocial findMany
   */
  export type RedeSocialFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    /**
     * Filter, which RedeSocials to fetch.
     */
    where?: RedeSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeSocials to fetch.
     */
    orderBy?: Enumerable<RedeSocialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RedeSocials.
     */
    cursor?: RedeSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeSocials.
     */
    skip?: number
    distinct?: Enumerable<RedeSocialScalarFieldEnum>
  }


  /**
   * RedeSocial create
   */
  export type RedeSocialCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    /**
     * The data needed to create a RedeSocial.
     */
    data: XOR<RedeSocialCreateInput, RedeSocialUncheckedCreateInput>
  }


  /**
   * RedeSocial createMany
   */
  export type RedeSocialCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RedeSocials.
     */
    data: Enumerable<RedeSocialCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RedeSocial update
   */
  export type RedeSocialUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    /**
     * The data needed to update a RedeSocial.
     */
    data: XOR<RedeSocialUpdateInput, RedeSocialUncheckedUpdateInput>
    /**
     * Choose, which RedeSocial to update.
     */
    where: RedeSocialWhereUniqueInput
  }


  /**
   * RedeSocial updateMany
   */
  export type RedeSocialUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RedeSocials.
     */
    data: XOR<RedeSocialUpdateManyMutationInput, RedeSocialUncheckedUpdateManyInput>
    /**
     * Filter which RedeSocials to update
     */
    where?: RedeSocialWhereInput
  }


  /**
   * RedeSocial upsert
   */
  export type RedeSocialUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    /**
     * The filter to search for the RedeSocial to update in case it exists.
     */
    where: RedeSocialWhereUniqueInput
    /**
     * In case the RedeSocial found by the `where` argument doesn't exist, create a new RedeSocial with this data.
     */
    create: XOR<RedeSocialCreateInput, RedeSocialUncheckedCreateInput>
    /**
     * In case the RedeSocial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RedeSocialUpdateInput, RedeSocialUncheckedUpdateInput>
  }


  /**
   * RedeSocial delete
   */
  export type RedeSocialDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    /**
     * Filter which RedeSocial to delete.
     */
    where: RedeSocialWhereUniqueInput
  }


  /**
   * RedeSocial deleteMany
   */
  export type RedeSocialDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedeSocials to delete
     */
    where?: RedeSocialWhereInput
  }


  /**
   * RedeSocial without action
   */
  export type RedeSocialArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
  }



  /**
   * Model Deputado
   */


  export type AggregateDeputado = {
    _count: DeputadoCountAggregateOutputType | null
    _avg: DeputadoAvgAggregateOutputType | null
    _sum: DeputadoSumAggregateOutputType | null
    _min: DeputadoMinAggregateOutputType | null
    _max: DeputadoMaxAggregateOutputType | null
  }

  export type DeputadoAvgAggregateOutputType = {
    id: number | null
    idExterno: number | null
  }

  export type DeputadoSumAggregateOutputType = {
    id: number | null
    idExterno: number | null
  }

  export type DeputadoMinAggregateOutputType = {
    id: number | null
    idExterno: number | null
    uri: string | null
    nome: string | null
    nomeCivil: string | null
    nomeEleitoral: string | null
    siglaUf: string | null
    urlFoto: string | null
    email: string | null
    situacao: string | null
    condicaoEleitoral: string | null
    cpf: string | null
    sexo: string | null
    urlWebSite: string | null
    dataNascimento: Date | null
    dataFalecimento: Date | null
    ufNascimento: string | null
    municipioNascimento: string | null
    escolaridade: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeputadoMaxAggregateOutputType = {
    id: number | null
    idExterno: number | null
    uri: string | null
    nome: string | null
    nomeCivil: string | null
    nomeEleitoral: string | null
    siglaUf: string | null
    urlFoto: string | null
    email: string | null
    situacao: string | null
    condicaoEleitoral: string | null
    cpf: string | null
    sexo: string | null
    urlWebSite: string | null
    dataNascimento: Date | null
    dataFalecimento: Date | null
    ufNascimento: string | null
    municipioNascimento: string | null
    escolaridade: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeputadoCountAggregateOutputType = {
    id: number
    idExterno: number
    uri: number
    nome: number
    nomeCivil: number
    nomeEleitoral: number
    siglaUf: number
    urlFoto: number
    email: number
    situacao: number
    condicaoEleitoral: number
    cpf: number
    sexo: number
    urlWebSite: number
    dataNascimento: number
    dataFalecimento: number
    ufNascimento: number
    municipioNascimento: number
    escolaridade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeputadoAvgAggregateInputType = {
    id?: true
    idExterno?: true
  }

  export type DeputadoSumAggregateInputType = {
    id?: true
    idExterno?: true
  }

  export type DeputadoMinAggregateInputType = {
    id?: true
    idExterno?: true
    uri?: true
    nome?: true
    nomeCivil?: true
    nomeEleitoral?: true
    siglaUf?: true
    urlFoto?: true
    email?: true
    situacao?: true
    condicaoEleitoral?: true
    cpf?: true
    sexo?: true
    urlWebSite?: true
    dataNascimento?: true
    dataFalecimento?: true
    ufNascimento?: true
    municipioNascimento?: true
    escolaridade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeputadoMaxAggregateInputType = {
    id?: true
    idExterno?: true
    uri?: true
    nome?: true
    nomeCivil?: true
    nomeEleitoral?: true
    siglaUf?: true
    urlFoto?: true
    email?: true
    situacao?: true
    condicaoEleitoral?: true
    cpf?: true
    sexo?: true
    urlWebSite?: true
    dataNascimento?: true
    dataFalecimento?: true
    ufNascimento?: true
    municipioNascimento?: true
    escolaridade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeputadoCountAggregateInputType = {
    id?: true
    idExterno?: true
    uri?: true
    nome?: true
    nomeCivil?: true
    nomeEleitoral?: true
    siglaUf?: true
    urlFoto?: true
    email?: true
    situacao?: true
    condicaoEleitoral?: true
    cpf?: true
    sexo?: true
    urlWebSite?: true
    dataNascimento?: true
    dataFalecimento?: true
    ufNascimento?: true
    municipioNascimento?: true
    escolaridade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeputadoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deputado to aggregate.
     */
    where?: DeputadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deputados to fetch.
     */
    orderBy?: Enumerable<DeputadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeputadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deputados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deputados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deputados
    **/
    _count?: true | DeputadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeputadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeputadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeputadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeputadoMaxAggregateInputType
  }

  export type GetDeputadoAggregateType<T extends DeputadoAggregateArgs> = {
        [P in keyof T & keyof AggregateDeputado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeputado[P]>
      : GetScalarType<T[P], AggregateDeputado[P]>
  }




  export type DeputadoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DeputadoWhereInput
    orderBy?: Enumerable<DeputadoOrderByWithAggregationInput>
    by: DeputadoScalarFieldEnum[]
    having?: DeputadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeputadoCountAggregateInputType | true
    _avg?: DeputadoAvgAggregateInputType
    _sum?: DeputadoSumAggregateInputType
    _min?: DeputadoMinAggregateInputType
    _max?: DeputadoMaxAggregateInputType
  }


  export type DeputadoGroupByOutputType = {
    id: number
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date
    dataFalecimento: Date
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt: Date
    updatedAt: Date
    _count: DeputadoCountAggregateOutputType | null
    _avg: DeputadoAvgAggregateOutputType | null
    _sum: DeputadoSumAggregateOutputType | null
    _min: DeputadoMinAggregateOutputType | null
    _max: DeputadoMaxAggregateOutputType | null
  }

  type GetDeputadoGroupByPayload<T extends DeputadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DeputadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeputadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeputadoGroupByOutputType[P]>
            : GetScalarType<T[P], DeputadoGroupByOutputType[P]>
        }
      >
    >


  export type DeputadoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idExterno?: boolean
    uri?: boolean
    nome?: boolean
    nomeCivil?: boolean
    nomeEleitoral?: boolean
    siglaUf?: boolean
    urlFoto?: boolean
    email?: boolean
    situacao?: boolean
    condicaoEleitoral?: boolean
    cpf?: boolean
    sexo?: boolean
    urlWebSite?: boolean
    dataNascimento?: boolean
    dataFalecimento?: boolean
    ufNascimento?: boolean
    municipioNascimento?: boolean
    escolaridade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    redeSocial?: boolean | Deputado$redeSocialArgs<ExtArgs>
    partido?: boolean | Deputado$partidoArgs<ExtArgs>
    legislatura?: boolean | Deputado$legislaturaArgs<ExtArgs>
    depesa?: boolean | Deputado$depesaArgs<ExtArgs>
    _count?: boolean | DeputadoCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["deputado"]>

  export type DeputadoSelectScalar = {
    id?: boolean
    idExterno?: boolean
    uri?: boolean
    nome?: boolean
    nomeCivil?: boolean
    nomeEleitoral?: boolean
    siglaUf?: boolean
    urlFoto?: boolean
    email?: boolean
    situacao?: boolean
    condicaoEleitoral?: boolean
    cpf?: boolean
    sexo?: boolean
    urlWebSite?: boolean
    dataNascimento?: boolean
    dataFalecimento?: boolean
    ufNascimento?: boolean
    municipioNascimento?: boolean
    escolaridade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeputadoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    redeSocial?: boolean | Deputado$redeSocialArgs<ExtArgs>
    partido?: boolean | Deputado$partidoArgs<ExtArgs>
    legislatura?: boolean | Deputado$legislaturaArgs<ExtArgs>
    depesa?: boolean | Deputado$depesaArgs<ExtArgs>
    _count?: boolean | DeputadoCountOutputTypeArgs<ExtArgs>
  }


  type DeputadoGetPayload<S extends boolean | null | undefined | DeputadoArgs> = $Types.GetResult<DeputadoPayload, S>

  type DeputadoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DeputadoFindManyArgs, 'select' | 'include'> & {
      select?: DeputadoCountAggregateInputType | true
    }

  export interface DeputadoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deputado'], meta: { name: 'Deputado' } }
    /**
     * Find zero or one Deputado that matches the filter.
     * @param {DeputadoFindUniqueArgs} args - Arguments to find a Deputado
     * @example
     * // Get one Deputado
     * const deputado = await prisma.deputado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DeputadoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DeputadoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Deputado'> extends True ? Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Deputado that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DeputadoFindUniqueOrThrowArgs} args - Arguments to find a Deputado
     * @example
     * // Get one Deputado
     * const deputado = await prisma.deputado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DeputadoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeputadoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Deputado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeputadoFindFirstArgs} args - Arguments to find a Deputado
     * @example
     * // Get one Deputado
     * const deputado = await prisma.deputado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DeputadoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DeputadoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Deputado'> extends True ? Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Deputado that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeputadoFindFirstOrThrowArgs} args - Arguments to find a Deputado
     * @example
     * // Get one Deputado
     * const deputado = await prisma.deputado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DeputadoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeputadoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Deputados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeputadoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deputados
     * const deputados = await prisma.deputado.findMany()
     * 
     * // Get first 10 Deputados
     * const deputados = await prisma.deputado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deputadoWithIdOnly = await prisma.deputado.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DeputadoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeputadoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Deputado.
     * @param {DeputadoCreateArgs} args - Arguments to create a Deputado.
     * @example
     * // Create one Deputado
     * const Deputado = await prisma.deputado.create({
     *   data: {
     *     // ... data to create a Deputado
     *   }
     * })
     * 
    **/
    create<T extends DeputadoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DeputadoCreateArgs<ExtArgs>>
    ): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Deputados.
     *     @param {DeputadoCreateManyArgs} args - Arguments to create many Deputados.
     *     @example
     *     // Create many Deputados
     *     const deputado = await prisma.deputado.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DeputadoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeputadoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Deputado.
     * @param {DeputadoDeleteArgs} args - Arguments to delete one Deputado.
     * @example
     * // Delete one Deputado
     * const Deputado = await prisma.deputado.delete({
     *   where: {
     *     // ... filter to delete one Deputado
     *   }
     * })
     * 
    **/
    delete<T extends DeputadoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DeputadoDeleteArgs<ExtArgs>>
    ): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Deputado.
     * @param {DeputadoUpdateArgs} args - Arguments to update one Deputado.
     * @example
     * // Update one Deputado
     * const deputado = await prisma.deputado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DeputadoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DeputadoUpdateArgs<ExtArgs>>
    ): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Deputados.
     * @param {DeputadoDeleteManyArgs} args - Arguments to filter Deputados to delete.
     * @example
     * // Delete a few Deputados
     * const { count } = await prisma.deputado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DeputadoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeputadoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deputados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeputadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deputados
     * const deputado = await prisma.deputado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DeputadoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DeputadoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deputado.
     * @param {DeputadoUpsertArgs} args - Arguments to update or create a Deputado.
     * @example
     * // Update or create a Deputado
     * const deputado = await prisma.deputado.upsert({
     *   create: {
     *     // ... data to create a Deputado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deputado we want to update
     *   }
     * })
    **/
    upsert<T extends DeputadoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DeputadoUpsertArgs<ExtArgs>>
    ): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Deputados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeputadoCountArgs} args - Arguments to filter Deputados to count.
     * @example
     * // Count the number of Deputados
     * const count = await prisma.deputado.count({
     *   where: {
     *     // ... the filter for the Deputados we want to count
     *   }
     * })
    **/
    count<T extends DeputadoCountArgs>(
      args?: Subset<T, DeputadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeputadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deputado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeputadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeputadoAggregateArgs>(args: Subset<T, DeputadoAggregateArgs>): Prisma.PrismaPromise<GetDeputadoAggregateType<T>>

    /**
     * Group by Deputado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeputadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeputadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeputadoGroupByArgs['orderBy'] }
        : { orderBy?: DeputadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeputadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeputadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Deputado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DeputadoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    redeSocial<T extends Deputado$redeSocialArgs<ExtArgs> = {}>(args?: Subset<T, Deputado$redeSocialArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<RedeSocialPayload<ExtArgs>, T, 'findMany', never>| Null>;

    partido<T extends Deputado$partidoArgs<ExtArgs> = {}>(args?: Subset<T, Deputado$partidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PartidoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    legislatura<T extends Deputado$legislaturaArgs<ExtArgs> = {}>(args?: Subset<T, Deputado$legislaturaArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<LegislaturaPayload<ExtArgs>, T, 'findMany', never>| Null>;

    depesa<T extends Deputado$depesaArgs<ExtArgs> = {}>(args?: Subset<T, Deputado$depesaArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Deputado base type for findUnique actions
   */
  export type DeputadoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
    /**
     * Filter, which Deputado to fetch.
     */
    where: DeputadoWhereUniqueInput
  }

  /**
   * Deputado findUnique
   */
  export interface DeputadoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DeputadoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Deputado findUniqueOrThrow
   */
  export type DeputadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
    /**
     * Filter, which Deputado to fetch.
     */
    where: DeputadoWhereUniqueInput
  }


  /**
   * Deputado base type for findFirst actions
   */
  export type DeputadoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
    /**
     * Filter, which Deputado to fetch.
     */
    where?: DeputadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deputados to fetch.
     */
    orderBy?: Enumerable<DeputadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deputados.
     */
    cursor?: DeputadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deputados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deputados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deputados.
     */
    distinct?: Enumerable<DeputadoScalarFieldEnum>
  }

  /**
   * Deputado findFirst
   */
  export interface DeputadoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DeputadoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Deputado findFirstOrThrow
   */
  export type DeputadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
    /**
     * Filter, which Deputado to fetch.
     */
    where?: DeputadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deputados to fetch.
     */
    orderBy?: Enumerable<DeputadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deputados.
     */
    cursor?: DeputadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deputados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deputados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deputados.
     */
    distinct?: Enumerable<DeputadoScalarFieldEnum>
  }


  /**
   * Deputado findMany
   */
  export type DeputadoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
    /**
     * Filter, which Deputados to fetch.
     */
    where?: DeputadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deputados to fetch.
     */
    orderBy?: Enumerable<DeputadoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deputados.
     */
    cursor?: DeputadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deputados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deputados.
     */
    skip?: number
    distinct?: Enumerable<DeputadoScalarFieldEnum>
  }


  /**
   * Deputado create
   */
  export type DeputadoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Deputado.
     */
    data: XOR<DeputadoCreateInput, DeputadoUncheckedCreateInput>
  }


  /**
   * Deputado createMany
   */
  export type DeputadoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deputados.
     */
    data: Enumerable<DeputadoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Deputado update
   */
  export type DeputadoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Deputado.
     */
    data: XOR<DeputadoUpdateInput, DeputadoUncheckedUpdateInput>
    /**
     * Choose, which Deputado to update.
     */
    where: DeputadoWhereUniqueInput
  }


  /**
   * Deputado updateMany
   */
  export type DeputadoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deputados.
     */
    data: XOR<DeputadoUpdateManyMutationInput, DeputadoUncheckedUpdateManyInput>
    /**
     * Filter which Deputados to update
     */
    where?: DeputadoWhereInput
  }


  /**
   * Deputado upsert
   */
  export type DeputadoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Deputado to update in case it exists.
     */
    where: DeputadoWhereUniqueInput
    /**
     * In case the Deputado found by the `where` argument doesn't exist, create a new Deputado with this data.
     */
    create: XOR<DeputadoCreateInput, DeputadoUncheckedCreateInput>
    /**
     * In case the Deputado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeputadoUpdateInput, DeputadoUncheckedUpdateInput>
  }


  /**
   * Deputado delete
   */
  export type DeputadoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
    /**
     * Filter which Deputado to delete.
     */
    where: DeputadoWhereUniqueInput
  }


  /**
   * Deputado deleteMany
   */
  export type DeputadoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deputados to delete
     */
    where?: DeputadoWhereInput
  }


  /**
   * Deputado.redeSocial
   */
  export type Deputado$redeSocialArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeSocial
     */
    select?: RedeSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RedeSocialInclude<ExtArgs> | null
    where?: RedeSocialWhereInput
    orderBy?: Enumerable<RedeSocialOrderByWithRelationInput>
    cursor?: RedeSocialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RedeSocialScalarFieldEnum>
  }


  /**
   * Deputado.partido
   */
  export type Deputado$partidoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartidoInclude<ExtArgs> | null
    where?: PartidoWhereInput
    orderBy?: Enumerable<PartidoOrderByWithRelationInput>
    cursor?: PartidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PartidoScalarFieldEnum>
  }


  /**
   * Deputado.legislatura
   */
  export type Deputado$legislaturaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legislatura
     */
    select?: LegislaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegislaturaInclude<ExtArgs> | null
    where?: LegislaturaWhereInput
    orderBy?: Enumerable<LegislaturaOrderByWithRelationInput>
    cursor?: LegislaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LegislaturaScalarFieldEnum>
  }


  /**
   * Deputado.depesa
   */
  export type Deputado$depesaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    where?: DespesaWhereInput
    orderBy?: Enumerable<DespesaOrderByWithRelationInput>
    cursor?: DespesaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DespesaScalarFieldEnum>
  }


  /**
   * Deputado without action
   */
  export type DeputadoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deputado
     */
    select?: DeputadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeputadoInclude<ExtArgs> | null
  }



  /**
   * Model Despesa
   */


  export type AggregateDespesa = {
    _count: DespesaCountAggregateOutputType | null
    _avg: DespesaAvgAggregateOutputType | null
    _sum: DespesaSumAggregateOutputType | null
    _min: DespesaMinAggregateOutputType | null
    _max: DespesaMaxAggregateOutputType | null
  }

  export type DespesaAvgAggregateOutputType = {
    id: number | null
    ano: number | null
    mes: number | null
    codTipoDocumento: number | null
    valorDocumento: Decimal | null
    valorLiquido: Decimal | null
    valorGlosa: Decimal | null
    codLote: number | null
    parcela: number | null
    idFornecedor: number | null
    idTipoDespesa: number | null
    idDeputadoId: number | null
  }

  export type DespesaSumAggregateOutputType = {
    id: number | null
    ano: number | null
    mes: number | null
    codTipoDocumento: number | null
    valorDocumento: Decimal | null
    valorLiquido: Decimal | null
    valorGlosa: Decimal | null
    codLote: number | null
    parcela: number | null
    idFornecedor: number | null
    idTipoDespesa: number | null
    idDeputadoId: number | null
  }

  export type DespesaMinAggregateOutputType = {
    id: number | null
    ano: number | null
    mes: number | null
    codDocumento: string | null
    tipoDocumento: string | null
    codTipoDocumento: number | null
    dataDocumento: Date | null
    numDocumento: string | null
    valorDocumento: Decimal | null
    urlDocumento: string | null
    valorLiquido: Decimal | null
    valorGlosa: Decimal | null
    numRessarcimento: string | null
    codLote: number | null
    parcela: number | null
    createdAt: Date | null
    updatedAt: Date | null
    idFornecedor: number | null
    idTipoDespesa: number | null
    idDeputadoId: number | null
  }

  export type DespesaMaxAggregateOutputType = {
    id: number | null
    ano: number | null
    mes: number | null
    codDocumento: string | null
    tipoDocumento: string | null
    codTipoDocumento: number | null
    dataDocumento: Date | null
    numDocumento: string | null
    valorDocumento: Decimal | null
    urlDocumento: string | null
    valorLiquido: Decimal | null
    valorGlosa: Decimal | null
    numRessarcimento: string | null
    codLote: number | null
    parcela: number | null
    createdAt: Date | null
    updatedAt: Date | null
    idFornecedor: number | null
    idTipoDespesa: number | null
    idDeputadoId: number | null
  }

  export type DespesaCountAggregateOutputType = {
    id: number
    ano: number
    mes: number
    codDocumento: number
    tipoDocumento: number
    codTipoDocumento: number
    dataDocumento: number
    numDocumento: number
    valorDocumento: number
    urlDocumento: number
    valorLiquido: number
    valorGlosa: number
    numRessarcimento: number
    codLote: number
    parcela: number
    createdAt: number
    updatedAt: number
    idFornecedor: number
    idTipoDespesa: number
    idDeputadoId: number
    _all: number
  }


  export type DespesaAvgAggregateInputType = {
    id?: true
    ano?: true
    mes?: true
    codTipoDocumento?: true
    valorDocumento?: true
    valorLiquido?: true
    valorGlosa?: true
    codLote?: true
    parcela?: true
    idFornecedor?: true
    idTipoDespesa?: true
    idDeputadoId?: true
  }

  export type DespesaSumAggregateInputType = {
    id?: true
    ano?: true
    mes?: true
    codTipoDocumento?: true
    valorDocumento?: true
    valorLiquido?: true
    valorGlosa?: true
    codLote?: true
    parcela?: true
    idFornecedor?: true
    idTipoDespesa?: true
    idDeputadoId?: true
  }

  export type DespesaMinAggregateInputType = {
    id?: true
    ano?: true
    mes?: true
    codDocumento?: true
    tipoDocumento?: true
    codTipoDocumento?: true
    dataDocumento?: true
    numDocumento?: true
    valorDocumento?: true
    urlDocumento?: true
    valorLiquido?: true
    valorGlosa?: true
    numRessarcimento?: true
    codLote?: true
    parcela?: true
    createdAt?: true
    updatedAt?: true
    idFornecedor?: true
    idTipoDespesa?: true
    idDeputadoId?: true
  }

  export type DespesaMaxAggregateInputType = {
    id?: true
    ano?: true
    mes?: true
    codDocumento?: true
    tipoDocumento?: true
    codTipoDocumento?: true
    dataDocumento?: true
    numDocumento?: true
    valorDocumento?: true
    urlDocumento?: true
    valorLiquido?: true
    valorGlosa?: true
    numRessarcimento?: true
    codLote?: true
    parcela?: true
    createdAt?: true
    updatedAt?: true
    idFornecedor?: true
    idTipoDespesa?: true
    idDeputadoId?: true
  }

  export type DespesaCountAggregateInputType = {
    id?: true
    ano?: true
    mes?: true
    codDocumento?: true
    tipoDocumento?: true
    codTipoDocumento?: true
    dataDocumento?: true
    numDocumento?: true
    valorDocumento?: true
    urlDocumento?: true
    valorLiquido?: true
    valorGlosa?: true
    numRessarcimento?: true
    codLote?: true
    parcela?: true
    createdAt?: true
    updatedAt?: true
    idFornecedor?: true
    idTipoDespesa?: true
    idDeputadoId?: true
    _all?: true
  }

  export type DespesaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Despesa to aggregate.
     */
    where?: DespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Despesas to fetch.
     */
    orderBy?: Enumerable<DespesaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Despesas
    **/
    _count?: true | DespesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DespesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DespesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DespesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DespesaMaxAggregateInputType
  }

  export type GetDespesaAggregateType<T extends DespesaAggregateArgs> = {
        [P in keyof T & keyof AggregateDespesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDespesa[P]>
      : GetScalarType<T[P], AggregateDespesa[P]>
  }




  export type DespesaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DespesaWhereInput
    orderBy?: Enumerable<DespesaOrderByWithAggregationInput>
    by: DespesaScalarFieldEnum[]
    having?: DespesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DespesaCountAggregateInputType | true
    _avg?: DespesaAvgAggregateInputType
    _sum?: DespesaSumAggregateInputType
    _min?: DespesaMinAggregateInputType
    _max?: DespesaMaxAggregateInputType
  }


  export type DespesaGroupByOutputType = {
    id: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date
    numDocumento: string
    valorDocumento: Decimal
    urlDocumento: string
    valorLiquido: Decimal
    valorGlosa: Decimal
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt: Date
    updatedAt: Date
    idFornecedor: number
    idTipoDespesa: number
    idDeputadoId: number | null
    _count: DespesaCountAggregateOutputType | null
    _avg: DespesaAvgAggregateOutputType | null
    _sum: DespesaSumAggregateOutputType | null
    _min: DespesaMinAggregateOutputType | null
    _max: DespesaMaxAggregateOutputType | null
  }

  type GetDespesaGroupByPayload<T extends DespesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DespesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DespesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DespesaGroupByOutputType[P]>
            : GetScalarType<T[P], DespesaGroupByOutputType[P]>
        }
      >
    >


  export type DespesaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ano?: boolean
    mes?: boolean
    codDocumento?: boolean
    tipoDocumento?: boolean
    codTipoDocumento?: boolean
    dataDocumento?: boolean
    numDocumento?: boolean
    valorDocumento?: boolean
    urlDocumento?: boolean
    valorLiquido?: boolean
    valorGlosa?: boolean
    numRessarcimento?: boolean
    codLote?: boolean
    parcela?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idFornecedor?: boolean
    idTipoDespesa?: boolean
    idDeputadoId?: boolean
    fornecedor?: boolean | FornecedorArgs<ExtArgs>
    tipoDespesa?: boolean | TipoDespesaArgs<ExtArgs>
    deputado?: boolean | DeputadoArgs<ExtArgs>
  }, ExtArgs["result"]["despesa"]>

  export type DespesaSelectScalar = {
    id?: boolean
    ano?: boolean
    mes?: boolean
    codDocumento?: boolean
    tipoDocumento?: boolean
    codTipoDocumento?: boolean
    dataDocumento?: boolean
    numDocumento?: boolean
    valorDocumento?: boolean
    urlDocumento?: boolean
    valorLiquido?: boolean
    valorGlosa?: boolean
    numRessarcimento?: boolean
    codLote?: boolean
    parcela?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idFornecedor?: boolean
    idTipoDespesa?: boolean
    idDeputadoId?: boolean
  }

  export type DespesaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorArgs<ExtArgs>
    tipoDespesa?: boolean | TipoDespesaArgs<ExtArgs>
    deputado?: boolean | DeputadoArgs<ExtArgs>
  }


  type DespesaGetPayload<S extends boolean | null | undefined | DespesaArgs> = $Types.GetResult<DespesaPayload, S>

  type DespesaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DespesaFindManyArgs, 'select' | 'include'> & {
      select?: DespesaCountAggregateInputType | true
    }

  export interface DespesaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Despesa'], meta: { name: 'Despesa' } }
    /**
     * Find zero or one Despesa that matches the filter.
     * @param {DespesaFindUniqueArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DespesaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DespesaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Despesa'> extends True ? Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Despesa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DespesaFindUniqueOrThrowArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DespesaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DespesaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Despesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaFindFirstArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DespesaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DespesaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Despesa'> extends True ? Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Despesa that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaFindFirstOrThrowArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DespesaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DespesaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Despesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Despesas
     * const despesas = await prisma.despesa.findMany()
     * 
     * // Get first 10 Despesas
     * const despesas = await prisma.despesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const despesaWithIdOnly = await prisma.despesa.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DespesaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DespesaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Despesa.
     * @param {DespesaCreateArgs} args - Arguments to create a Despesa.
     * @example
     * // Create one Despesa
     * const Despesa = await prisma.despesa.create({
     *   data: {
     *     // ... data to create a Despesa
     *   }
     * })
     * 
    **/
    create<T extends DespesaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DespesaCreateArgs<ExtArgs>>
    ): Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Despesas.
     *     @param {DespesaCreateManyArgs} args - Arguments to create many Despesas.
     *     @example
     *     // Create many Despesas
     *     const despesa = await prisma.despesa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DespesaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DespesaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Despesa.
     * @param {DespesaDeleteArgs} args - Arguments to delete one Despesa.
     * @example
     * // Delete one Despesa
     * const Despesa = await prisma.despesa.delete({
     *   where: {
     *     // ... filter to delete one Despesa
     *   }
     * })
     * 
    **/
    delete<T extends DespesaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DespesaDeleteArgs<ExtArgs>>
    ): Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Despesa.
     * @param {DespesaUpdateArgs} args - Arguments to update one Despesa.
     * @example
     * // Update one Despesa
     * const despesa = await prisma.despesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DespesaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DespesaUpdateArgs<ExtArgs>>
    ): Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Despesas.
     * @param {DespesaDeleteManyArgs} args - Arguments to filter Despesas to delete.
     * @example
     * // Delete a few Despesas
     * const { count } = await prisma.despesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DespesaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DespesaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Despesas
     * const despesa = await prisma.despesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DespesaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DespesaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Despesa.
     * @param {DespesaUpsertArgs} args - Arguments to update or create a Despesa.
     * @example
     * // Update or create a Despesa
     * const despesa = await prisma.despesa.upsert({
     *   create: {
     *     // ... data to create a Despesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Despesa we want to update
     *   }
     * })
    **/
    upsert<T extends DespesaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DespesaUpsertArgs<ExtArgs>>
    ): Prisma__DespesaClient<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaCountArgs} args - Arguments to filter Despesas to count.
     * @example
     * // Count the number of Despesas
     * const count = await prisma.despesa.count({
     *   where: {
     *     // ... the filter for the Despesas we want to count
     *   }
     * })
    **/
    count<T extends DespesaCountArgs>(
      args?: Subset<T, DespesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DespesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Despesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DespesaAggregateArgs>(args: Subset<T, DespesaAggregateArgs>): Prisma.PrismaPromise<GetDespesaAggregateType<T>>

    /**
     * Group by Despesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DespesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DespesaGroupByArgs['orderBy'] }
        : { orderBy?: DespesaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DespesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDespesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Despesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DespesaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    fornecedor<T extends FornecedorArgs<ExtArgs> = {}>(args?: Subset<T, FornecedorArgs<ExtArgs>>): Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    tipoDespesa<T extends TipoDespesaArgs<ExtArgs> = {}>(args?: Subset<T, TipoDespesaArgs<ExtArgs>>): Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    deputado<T extends DeputadoArgs<ExtArgs> = {}>(args?: Subset<T, DeputadoArgs<ExtArgs>>): Prisma__DeputadoClient<$Types.GetResult<DeputadoPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Despesa base type for findUnique actions
   */
  export type DespesaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    /**
     * Filter, which Despesa to fetch.
     */
    where: DespesaWhereUniqueInput
  }

  /**
   * Despesa findUnique
   */
  export interface DespesaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DespesaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Despesa findUniqueOrThrow
   */
  export type DespesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    /**
     * Filter, which Despesa to fetch.
     */
    where: DespesaWhereUniqueInput
  }


  /**
   * Despesa base type for findFirst actions
   */
  export type DespesaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    /**
     * Filter, which Despesa to fetch.
     */
    where?: DespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Despesas to fetch.
     */
    orderBy?: Enumerable<DespesaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Despesas.
     */
    cursor?: DespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Despesas.
     */
    distinct?: Enumerable<DespesaScalarFieldEnum>
  }

  /**
   * Despesa findFirst
   */
  export interface DespesaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DespesaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Despesa findFirstOrThrow
   */
  export type DespesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    /**
     * Filter, which Despesa to fetch.
     */
    where?: DespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Despesas to fetch.
     */
    orderBy?: Enumerable<DespesaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Despesas.
     */
    cursor?: DespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Despesas.
     */
    distinct?: Enumerable<DespesaScalarFieldEnum>
  }


  /**
   * Despesa findMany
   */
  export type DespesaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    /**
     * Filter, which Despesas to fetch.
     */
    where?: DespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Despesas to fetch.
     */
    orderBy?: Enumerable<DespesaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Despesas.
     */
    cursor?: DespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Despesas.
     */
    skip?: number
    distinct?: Enumerable<DespesaScalarFieldEnum>
  }


  /**
   * Despesa create
   */
  export type DespesaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    /**
     * The data needed to create a Despesa.
     */
    data: XOR<DespesaCreateInput, DespesaUncheckedCreateInput>
  }


  /**
   * Despesa createMany
   */
  export type DespesaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Despesas.
     */
    data: Enumerable<DespesaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Despesa update
   */
  export type DespesaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    /**
     * The data needed to update a Despesa.
     */
    data: XOR<DespesaUpdateInput, DespesaUncheckedUpdateInput>
    /**
     * Choose, which Despesa to update.
     */
    where: DespesaWhereUniqueInput
  }


  /**
   * Despesa updateMany
   */
  export type DespesaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Despesas.
     */
    data: XOR<DespesaUpdateManyMutationInput, DespesaUncheckedUpdateManyInput>
    /**
     * Filter which Despesas to update
     */
    where?: DespesaWhereInput
  }


  /**
   * Despesa upsert
   */
  export type DespesaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    /**
     * The filter to search for the Despesa to update in case it exists.
     */
    where: DespesaWhereUniqueInput
    /**
     * In case the Despesa found by the `where` argument doesn't exist, create a new Despesa with this data.
     */
    create: XOR<DespesaCreateInput, DespesaUncheckedCreateInput>
    /**
     * In case the Despesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DespesaUpdateInput, DespesaUncheckedUpdateInput>
  }


  /**
   * Despesa delete
   */
  export type DespesaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    /**
     * Filter which Despesa to delete.
     */
    where: DespesaWhereUniqueInput
  }


  /**
   * Despesa deleteMany
   */
  export type DespesaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Despesas to delete
     */
    where?: DespesaWhereInput
  }


  /**
   * Despesa without action
   */
  export type DespesaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
  }



  /**
   * Model Fornecedor
   */


  export type AggregateFornecedor = {
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  export type FornecedorAvgAggregateOutputType = {
    id: number | null
  }

  export type FornecedorSumAggregateOutputType = {
    id: number | null
  }

  export type FornecedorMinAggregateOutputType = {
    id: number | null
    cpfCnpj: string | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorMaxAggregateOutputType = {
    id: number | null
    cpfCnpj: string | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorCountAggregateOutputType = {
    id: number
    cpfCnpj: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FornecedorAvgAggregateInputType = {
    id?: true
  }

  export type FornecedorSumAggregateInputType = {
    id?: true
  }

  export type FornecedorMinAggregateInputType = {
    id?: true
    cpfCnpj?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorMaxAggregateInputType = {
    id?: true
    cpfCnpj?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorCountAggregateInputType = {
    id?: true
    cpfCnpj?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FornecedorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedor to aggregate.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: Enumerable<FornecedorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fornecedors
    **/
    _count?: true | FornecedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FornecedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FornecedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorMaxAggregateInputType
  }

  export type GetFornecedorAggregateType<T extends FornecedorAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedor[P]>
      : GetScalarType<T[P], AggregateFornecedor[P]>
  }




  export type FornecedorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FornecedorWhereInput
    orderBy?: Enumerable<FornecedorOrderByWithAggregationInput>
    by: FornecedorScalarFieldEnum[]
    having?: FornecedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorCountAggregateInputType | true
    _avg?: FornecedorAvgAggregateInputType
    _sum?: FornecedorSumAggregateInputType
    _min?: FornecedorMinAggregateInputType
    _max?: FornecedorMaxAggregateInputType
  }


  export type FornecedorGroupByOutputType = {
    id: number
    cpfCnpj: string
    nome: string
    createdAt: Date
    updatedAt: Date
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  type GetFornecedorGroupByPayload<T extends FornecedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FornecedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
        }
      >
    >


  export type FornecedorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpfCnpj?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    despesa?: boolean | Fornecedor$despesaArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>

  export type FornecedorSelectScalar = {
    id?: boolean
    cpfCnpj?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FornecedorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    despesa?: boolean | Fornecedor$despesaArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeArgs<ExtArgs>
  }


  type FornecedorGetPayload<S extends boolean | null | undefined | FornecedorArgs> = $Types.GetResult<FornecedorPayload, S>

  type FornecedorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FornecedorFindManyArgs, 'select' | 'include'> & {
      select?: FornecedorCountAggregateInputType | true
    }

  export interface FornecedorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fornecedor'], meta: { name: 'Fornecedor' } }
    /**
     * Find zero or one Fornecedor that matches the filter.
     * @param {FornecedorFindUniqueArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FornecedorFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FornecedorFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Fornecedor'> extends True ? Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Fornecedor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FornecedorFindUniqueOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FornecedorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FornecedorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FornecedorFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FornecedorFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Fornecedor'> extends True ? Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Fornecedor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FornecedorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FornecedorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany()
     * 
     * // Get first 10 Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FornecedorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FornecedorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Fornecedor.
     * @param {FornecedorCreateArgs} args - Arguments to create a Fornecedor.
     * @example
     * // Create one Fornecedor
     * const Fornecedor = await prisma.fornecedor.create({
     *   data: {
     *     // ... data to create a Fornecedor
     *   }
     * })
     * 
    **/
    create<T extends FornecedorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FornecedorCreateArgs<ExtArgs>>
    ): Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Fornecedors.
     *     @param {FornecedorCreateManyArgs} args - Arguments to create many Fornecedors.
     *     @example
     *     // Create many Fornecedors
     *     const fornecedor = await prisma.fornecedor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FornecedorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FornecedorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fornecedor.
     * @param {FornecedorDeleteArgs} args - Arguments to delete one Fornecedor.
     * @example
     * // Delete one Fornecedor
     * const Fornecedor = await prisma.fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Fornecedor
     *   }
     * })
     * 
    **/
    delete<T extends FornecedorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FornecedorDeleteArgs<ExtArgs>>
    ): Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Fornecedor.
     * @param {FornecedorUpdateArgs} args - Arguments to update one Fornecedor.
     * @example
     * // Update one Fornecedor
     * const fornecedor = await prisma.fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FornecedorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FornecedorUpdateArgs<ExtArgs>>
    ): Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Fornecedors.
     * @param {FornecedorDeleteManyArgs} args - Arguments to filter Fornecedors to delete.
     * @example
     * // Delete a few Fornecedors
     * const { count } = await prisma.fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FornecedorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FornecedorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FornecedorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FornecedorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fornecedor.
     * @param {FornecedorUpsertArgs} args - Arguments to update or create a Fornecedor.
     * @example
     * // Update or create a Fornecedor
     * const fornecedor = await prisma.fornecedor.upsert({
     *   create: {
     *     // ... data to create a Fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fornecedor we want to update
     *   }
     * })
    **/
    upsert<T extends FornecedorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FornecedorUpsertArgs<ExtArgs>>
    ): Prisma__FornecedorClient<$Types.GetResult<FornecedorPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorCountArgs} args - Arguments to filter Fornecedors to count.
     * @example
     * // Count the number of Fornecedors
     * const count = await prisma.fornecedor.count({
     *   where: {
     *     // ... the filter for the Fornecedors we want to count
     *   }
     * })
    **/
    count<T extends FornecedorCountArgs>(
      args?: Subset<T, FornecedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FornecedorAggregateArgs>(args: Subset<T, FornecedorAggregateArgs>): Prisma.PrismaPromise<GetFornecedorAggregateType<T>>

    /**
     * Group by Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FornecedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FornecedorGroupByArgs['orderBy'] }
        : { orderBy?: FornecedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Fornecedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FornecedorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    despesa<T extends Fornecedor$despesaArgs<ExtArgs> = {}>(args?: Subset<T, Fornecedor$despesaArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Fornecedor base type for findUnique actions
   */
  export type FornecedorFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findUnique
   */
  export interface FornecedorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FornecedorFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Fornecedor findUniqueOrThrow
   */
  export type FornecedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }


  /**
   * Fornecedor base type for findFirst actions
   */
  export type FornecedorFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: Enumerable<FornecedorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: Enumerable<FornecedorScalarFieldEnum>
  }

  /**
   * Fornecedor findFirst
   */
  export interface FornecedorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FornecedorFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Fornecedor findFirstOrThrow
   */
  export type FornecedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: Enumerable<FornecedorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: Enumerable<FornecedorScalarFieldEnum>
  }


  /**
   * Fornecedor findMany
   */
  export type FornecedorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedors to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: Enumerable<FornecedorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    distinct?: Enumerable<FornecedorScalarFieldEnum>
  }


  /**
   * Fornecedor create
   */
  export type FornecedorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Fornecedor.
     */
    data: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
  }


  /**
   * Fornecedor createMany
   */
  export type FornecedorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fornecedors.
     */
    data: Enumerable<FornecedorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Fornecedor update
   */
  export type FornecedorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Fornecedor.
     */
    data: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
    /**
     * Choose, which Fornecedor to update.
     */
    where: FornecedorWhereUniqueInput
  }


  /**
   * Fornecedor updateMany
   */
  export type FornecedorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fornecedors.
     */
    data: XOR<FornecedorUpdateManyMutationInput, FornecedorUncheckedUpdateManyInput>
    /**
     * Filter which Fornecedors to update
     */
    where?: FornecedorWhereInput
  }


  /**
   * Fornecedor upsert
   */
  export type FornecedorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Fornecedor to update in case it exists.
     */
    where: FornecedorWhereUniqueInput
    /**
     * In case the Fornecedor found by the `where` argument doesn't exist, create a new Fornecedor with this data.
     */
    create: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
    /**
     * In case the Fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
  }


  /**
   * Fornecedor delete
   */
  export type FornecedorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter which Fornecedor to delete.
     */
    where: FornecedorWhereUniqueInput
  }


  /**
   * Fornecedor deleteMany
   */
  export type FornecedorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedors to delete
     */
    where?: FornecedorWhereInput
  }


  /**
   * Fornecedor.despesa
   */
  export type Fornecedor$despesaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    where?: DespesaWhereInput
    orderBy?: Enumerable<DespesaOrderByWithRelationInput>
    cursor?: DespesaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DespesaScalarFieldEnum>
  }


  /**
   * Fornecedor without action
   */
  export type FornecedorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FornecedorInclude<ExtArgs> | null
  }



  /**
   * Model TipoDespesa
   */


  export type AggregateTipoDespesa = {
    _count: TipoDespesaCountAggregateOutputType | null
    _avg: TipoDespesaAvgAggregateOutputType | null
    _sum: TipoDespesaSumAggregateOutputType | null
    _min: TipoDespesaMinAggregateOutputType | null
    _max: TipoDespesaMaxAggregateOutputType | null
  }

  export type TipoDespesaAvgAggregateOutputType = {
    id: number | null
    idExterno: number | null
  }

  export type TipoDespesaSumAggregateOutputType = {
    id: number | null
    idExterno: number | null
  }

  export type TipoDespesaMinAggregateOutputType = {
    id: number | null
    idExterno: number | null
    tipo: string | null
    descricao: string | null
    sigla: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoDespesaMaxAggregateOutputType = {
    id: number | null
    idExterno: number | null
    tipo: string | null
    descricao: string | null
    sigla: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoDespesaCountAggregateOutputType = {
    id: number
    idExterno: number
    tipo: number
    descricao: number
    sigla: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TipoDespesaAvgAggregateInputType = {
    id?: true
    idExterno?: true
  }

  export type TipoDespesaSumAggregateInputType = {
    id?: true
    idExterno?: true
  }

  export type TipoDespesaMinAggregateInputType = {
    id?: true
    idExterno?: true
    tipo?: true
    descricao?: true
    sigla?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoDespesaMaxAggregateInputType = {
    id?: true
    idExterno?: true
    tipo?: true
    descricao?: true
    sigla?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoDespesaCountAggregateInputType = {
    id?: true
    idExterno?: true
    tipo?: true
    descricao?: true
    sigla?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TipoDespesaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDespesa to aggregate.
     */
    where?: TipoDespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDespesas to fetch.
     */
    orderBy?: Enumerable<TipoDespesaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoDespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDespesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDespesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoDespesas
    **/
    _count?: true | TipoDespesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoDespesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoDespesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoDespesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoDespesaMaxAggregateInputType
  }

  export type GetTipoDespesaAggregateType<T extends TipoDespesaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoDespesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoDespesa[P]>
      : GetScalarType<T[P], AggregateTipoDespesa[P]>
  }




  export type TipoDespesaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TipoDespesaWhereInput
    orderBy?: Enumerable<TipoDespesaOrderByWithAggregationInput>
    by: TipoDespesaScalarFieldEnum[]
    having?: TipoDespesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoDespesaCountAggregateInputType | true
    _avg?: TipoDespesaAvgAggregateInputType
    _sum?: TipoDespesaSumAggregateInputType
    _min?: TipoDespesaMinAggregateInputType
    _max?: TipoDespesaMaxAggregateInputType
  }


  export type TipoDespesaGroupByOutputType = {
    id: number
    idExterno: number
    tipo: string
    descricao: string
    sigla: string
    createdAt: Date
    updatedAt: Date
    _count: TipoDespesaCountAggregateOutputType | null
    _avg: TipoDespesaAvgAggregateOutputType | null
    _sum: TipoDespesaSumAggregateOutputType | null
    _min: TipoDespesaMinAggregateOutputType | null
    _max: TipoDespesaMaxAggregateOutputType | null
  }

  type GetTipoDespesaGroupByPayload<T extends TipoDespesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TipoDespesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoDespesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoDespesaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoDespesaGroupByOutputType[P]>
        }
      >
    >


  export type TipoDespesaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idExterno?: boolean
    tipo?: boolean
    descricao?: boolean
    sigla?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Despesa?: boolean | TipoDespesa$DespesaArgs<ExtArgs>
    _count?: boolean | TipoDespesaCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["tipoDespesa"]>

  export type TipoDespesaSelectScalar = {
    id?: boolean
    idExterno?: boolean
    tipo?: boolean
    descricao?: boolean
    sigla?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TipoDespesaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Despesa?: boolean | TipoDespesa$DespesaArgs<ExtArgs>
    _count?: boolean | TipoDespesaCountOutputTypeArgs<ExtArgs>
  }


  type TipoDespesaGetPayload<S extends boolean | null | undefined | TipoDespesaArgs> = $Types.GetResult<TipoDespesaPayload, S>

  type TipoDespesaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TipoDespesaFindManyArgs, 'select' | 'include'> & {
      select?: TipoDespesaCountAggregateInputType | true
    }

  export interface TipoDespesaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoDespesa'], meta: { name: 'TipoDespesa' } }
    /**
     * Find zero or one TipoDespesa that matches the filter.
     * @param {TipoDespesaFindUniqueArgs} args - Arguments to find a TipoDespesa
     * @example
     * // Get one TipoDespesa
     * const tipoDespesa = await prisma.tipoDespesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TipoDespesaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TipoDespesaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TipoDespesa'> extends True ? Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one TipoDespesa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TipoDespesaFindUniqueOrThrowArgs} args - Arguments to find a TipoDespesa
     * @example
     * // Get one TipoDespesa
     * const tipoDespesa = await prisma.tipoDespesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TipoDespesaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoDespesaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first TipoDespesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDespesaFindFirstArgs} args - Arguments to find a TipoDespesa
     * @example
     * // Get one TipoDespesa
     * const tipoDespesa = await prisma.tipoDespesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TipoDespesaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TipoDespesaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TipoDespesa'> extends True ? Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first TipoDespesa that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDespesaFindFirstOrThrowArgs} args - Arguments to find a TipoDespesa
     * @example
     * // Get one TipoDespesa
     * const tipoDespesa = await prisma.tipoDespesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TipoDespesaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoDespesaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more TipoDespesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDespesaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoDespesas
     * const tipoDespesas = await prisma.tipoDespesa.findMany()
     * 
     * // Get first 10 TipoDespesas
     * const tipoDespesas = await prisma.tipoDespesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoDespesaWithIdOnly = await prisma.tipoDespesa.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TipoDespesaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoDespesaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a TipoDespesa.
     * @param {TipoDespesaCreateArgs} args - Arguments to create a TipoDespesa.
     * @example
     * // Create one TipoDespesa
     * const TipoDespesa = await prisma.tipoDespesa.create({
     *   data: {
     *     // ... data to create a TipoDespesa
     *   }
     * })
     * 
    **/
    create<T extends TipoDespesaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TipoDespesaCreateArgs<ExtArgs>>
    ): Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many TipoDespesas.
     *     @param {TipoDespesaCreateManyArgs} args - Arguments to create many TipoDespesas.
     *     @example
     *     // Create many TipoDespesas
     *     const tipoDespesa = await prisma.tipoDespesa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TipoDespesaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoDespesaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoDespesa.
     * @param {TipoDespesaDeleteArgs} args - Arguments to delete one TipoDespesa.
     * @example
     * // Delete one TipoDespesa
     * const TipoDespesa = await prisma.tipoDespesa.delete({
     *   where: {
     *     // ... filter to delete one TipoDespesa
     *   }
     * })
     * 
    **/
    delete<T extends TipoDespesaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TipoDespesaDeleteArgs<ExtArgs>>
    ): Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one TipoDespesa.
     * @param {TipoDespesaUpdateArgs} args - Arguments to update one TipoDespesa.
     * @example
     * // Update one TipoDespesa
     * const tipoDespesa = await prisma.tipoDespesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TipoDespesaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TipoDespesaUpdateArgs<ExtArgs>>
    ): Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more TipoDespesas.
     * @param {TipoDespesaDeleteManyArgs} args - Arguments to filter TipoDespesas to delete.
     * @example
     * // Delete a few TipoDespesas
     * const { count } = await prisma.tipoDespesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TipoDespesaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoDespesaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoDespesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDespesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoDespesas
     * const tipoDespesa = await prisma.tipoDespesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TipoDespesaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TipoDespesaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoDespesa.
     * @param {TipoDespesaUpsertArgs} args - Arguments to update or create a TipoDespesa.
     * @example
     * // Update or create a TipoDespesa
     * const tipoDespesa = await prisma.tipoDespesa.upsert({
     *   create: {
     *     // ... data to create a TipoDespesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoDespesa we want to update
     *   }
     * })
    **/
    upsert<T extends TipoDespesaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TipoDespesaUpsertArgs<ExtArgs>>
    ): Prisma__TipoDespesaClient<$Types.GetResult<TipoDespesaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of TipoDespesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDespesaCountArgs} args - Arguments to filter TipoDespesas to count.
     * @example
     * // Count the number of TipoDespesas
     * const count = await prisma.tipoDespesa.count({
     *   where: {
     *     // ... the filter for the TipoDespesas we want to count
     *   }
     * })
    **/
    count<T extends TipoDespesaCountArgs>(
      args?: Subset<T, TipoDespesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoDespesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoDespesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDespesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoDespesaAggregateArgs>(args: Subset<T, TipoDespesaAggregateArgs>): Prisma.PrismaPromise<GetTipoDespesaAggregateType<T>>

    /**
     * Group by TipoDespesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDespesaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoDespesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoDespesaGroupByArgs['orderBy'] }
        : { orderBy?: TipoDespesaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoDespesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoDespesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoDespesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TipoDespesaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Despesa<T extends TipoDespesa$DespesaArgs<ExtArgs> = {}>(args?: Subset<T, TipoDespesa$DespesaArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DespesaPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TipoDespesa base type for findUnique actions
   */
  export type TipoDespesaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDespesa to fetch.
     */
    where: TipoDespesaWhereUniqueInput
  }

  /**
   * TipoDespesa findUnique
   */
  export interface TipoDespesaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TipoDespesaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TipoDespesa findUniqueOrThrow
   */
  export type TipoDespesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDespesa to fetch.
     */
    where: TipoDespesaWhereUniqueInput
  }


  /**
   * TipoDespesa base type for findFirst actions
   */
  export type TipoDespesaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDespesa to fetch.
     */
    where?: TipoDespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDespesas to fetch.
     */
    orderBy?: Enumerable<TipoDespesaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDespesas.
     */
    cursor?: TipoDespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDespesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDespesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDespesas.
     */
    distinct?: Enumerable<TipoDespesaScalarFieldEnum>
  }

  /**
   * TipoDespesa findFirst
   */
  export interface TipoDespesaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TipoDespesaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TipoDespesa findFirstOrThrow
   */
  export type TipoDespesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDespesa to fetch.
     */
    where?: TipoDespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDespesas to fetch.
     */
    orderBy?: Enumerable<TipoDespesaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDespesas.
     */
    cursor?: TipoDespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDespesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDespesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDespesas.
     */
    distinct?: Enumerable<TipoDespesaScalarFieldEnum>
  }


  /**
   * TipoDespesa findMany
   */
  export type TipoDespesaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDespesas to fetch.
     */
    where?: TipoDespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDespesas to fetch.
     */
    orderBy?: Enumerable<TipoDespesaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoDespesas.
     */
    cursor?: TipoDespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDespesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDespesas.
     */
    skip?: number
    distinct?: Enumerable<TipoDespesaScalarFieldEnum>
  }


  /**
   * TipoDespesa create
   */
  export type TipoDespesaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoDespesa.
     */
    data: XOR<TipoDespesaCreateInput, TipoDespesaUncheckedCreateInput>
  }


  /**
   * TipoDespesa createMany
   */
  export type TipoDespesaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoDespesas.
     */
    data: Enumerable<TipoDespesaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TipoDespesa update
   */
  export type TipoDespesaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoDespesa.
     */
    data: XOR<TipoDespesaUpdateInput, TipoDespesaUncheckedUpdateInput>
    /**
     * Choose, which TipoDespesa to update.
     */
    where: TipoDespesaWhereUniqueInput
  }


  /**
   * TipoDespesa updateMany
   */
  export type TipoDespesaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoDespesas.
     */
    data: XOR<TipoDespesaUpdateManyMutationInput, TipoDespesaUncheckedUpdateManyInput>
    /**
     * Filter which TipoDespesas to update
     */
    where?: TipoDespesaWhereInput
  }


  /**
   * TipoDespesa upsert
   */
  export type TipoDespesaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoDespesa to update in case it exists.
     */
    where: TipoDespesaWhereUniqueInput
    /**
     * In case the TipoDespesa found by the `where` argument doesn't exist, create a new TipoDespesa with this data.
     */
    create: XOR<TipoDespesaCreateInput, TipoDespesaUncheckedCreateInput>
    /**
     * In case the TipoDespesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoDespesaUpdateInput, TipoDespesaUncheckedUpdateInput>
  }


  /**
   * TipoDespesa delete
   */
  export type TipoDespesaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
    /**
     * Filter which TipoDespesa to delete.
     */
    where: TipoDespesaWhereUniqueInput
  }


  /**
   * TipoDespesa deleteMany
   */
  export type TipoDespesaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDespesas to delete
     */
    where?: TipoDespesaWhereInput
  }


  /**
   * TipoDespesa.Despesa
   */
  export type TipoDespesa$DespesaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DespesaInclude<ExtArgs> | null
    where?: DespesaWhereInput
    orderBy?: Enumerable<DespesaOrderByWithRelationInput>
    cursor?: DespesaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DespesaScalarFieldEnum>
  }


  /**
   * TipoDespesa without action
   */
  export type TipoDespesaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDespesa
     */
    select?: TipoDespesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoDespesaInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PartidoScalarFieldEnum: {
    id: 'id',
    idExterno: 'idExterno',
    sigla: 'sigla',
    nome: 'nome',
    uri: 'uri',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    idDeputado: 'idDeputado'
  };

  export type PartidoScalarFieldEnum = (typeof PartidoScalarFieldEnum)[keyof typeof PartidoScalarFieldEnum]


  export const LegislaturaScalarFieldEnum: {
    id: 'id',
    idExterno: 'idExterno',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    uri: 'uri',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    idDeputado: 'idDeputado'
  };

  export type LegislaturaScalarFieldEnum = (typeof LegislaturaScalarFieldEnum)[keyof typeof LegislaturaScalarFieldEnum]


  export const RedeSocialScalarFieldEnum: {
    id: 'id',
    url: 'url',
    rede: 'rede',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    idDeputado: 'idDeputado'
  };

  export type RedeSocialScalarFieldEnum = (typeof RedeSocialScalarFieldEnum)[keyof typeof RedeSocialScalarFieldEnum]


  export const DeputadoScalarFieldEnum: {
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

  export type DeputadoScalarFieldEnum = (typeof DeputadoScalarFieldEnum)[keyof typeof DeputadoScalarFieldEnum]


  export const DespesaScalarFieldEnum: {
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

  export type DespesaScalarFieldEnum = (typeof DespesaScalarFieldEnum)[keyof typeof DespesaScalarFieldEnum]


  export const FornecedorScalarFieldEnum: {
    id: 'id',
    cpfCnpj: 'cpfCnpj',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FornecedorScalarFieldEnum = (typeof FornecedorScalarFieldEnum)[keyof typeof FornecedorScalarFieldEnum]


  export const TipoDespesaScalarFieldEnum: {
    id: 'id',
    idExterno: 'idExterno',
    tipo: 'tipo',
    descricao: 'descricao',
    sigla: 'sigla',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TipoDespesaScalarFieldEnum = (typeof TipoDespesaScalarFieldEnum)[keyof typeof TipoDespesaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type PartidoWhereInput = {
    AND?: Enumerable<PartidoWhereInput>
    OR?: Enumerable<PartidoWhereInput>
    NOT?: Enumerable<PartidoWhereInput>
    id?: IntFilter | number
    idExterno?: IntFilter | number
    sigla?: StringFilter | string
    nome?: StringFilter | string
    uri?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    idDeputado?: IntNullableFilter | number | null
    deputado?: XOR<DeputadoRelationFilter, DeputadoWhereInput> | null
  }

  export type PartidoOrderByWithRelationInput = {
    id?: SortOrder
    idExterno?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrderInput | SortOrder
    deputado?: DeputadoOrderByWithRelationInput
  }

  export type PartidoWhereUniqueInput = {
    id?: number
    idExterno?: number
    sigla?: string
    nome?: string
    uri?: string
  }

  export type PartidoOrderByWithAggregationInput = {
    id?: SortOrder
    idExterno?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrderInput | SortOrder
    _count?: PartidoCountOrderByAggregateInput
    _avg?: PartidoAvgOrderByAggregateInput
    _max?: PartidoMaxOrderByAggregateInput
    _min?: PartidoMinOrderByAggregateInput
    _sum?: PartidoSumOrderByAggregateInput
  }

  export type PartidoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PartidoScalarWhereWithAggregatesInput>
    OR?: Enumerable<PartidoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PartidoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idExterno?: IntWithAggregatesFilter | number
    sigla?: StringWithAggregatesFilter | string
    nome?: StringWithAggregatesFilter | string
    uri?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    idDeputado?: IntNullableWithAggregatesFilter | number | null
  }

  export type LegislaturaWhereInput = {
    AND?: Enumerable<LegislaturaWhereInput>
    OR?: Enumerable<LegislaturaWhereInput>
    NOT?: Enumerable<LegislaturaWhereInput>
    id?: IntFilter | number
    idExterno?: IntFilter | number
    dataInicio?: DateTimeFilter | Date | string
    dataFim?: DateTimeFilter | Date | string
    uri?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    idDeputado?: IntNullableFilter | number | null
    deputado?: XOR<DeputadoRelationFilter, DeputadoWhereInput> | null
  }

  export type LegislaturaOrderByWithRelationInput = {
    id?: SortOrder
    idExterno?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrderInput | SortOrder
    deputado?: DeputadoOrderByWithRelationInput
  }

  export type LegislaturaWhereUniqueInput = {
    id?: number
    idExterno?: number
    dataInicio?: Date | string
    dataFim?: Date | string
    uri?: string
  }

  export type LegislaturaOrderByWithAggregationInput = {
    id?: SortOrder
    idExterno?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrderInput | SortOrder
    _count?: LegislaturaCountOrderByAggregateInput
    _avg?: LegislaturaAvgOrderByAggregateInput
    _max?: LegislaturaMaxOrderByAggregateInput
    _min?: LegislaturaMinOrderByAggregateInput
    _sum?: LegislaturaSumOrderByAggregateInput
  }

  export type LegislaturaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LegislaturaScalarWhereWithAggregatesInput>
    OR?: Enumerable<LegislaturaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LegislaturaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idExterno?: IntWithAggregatesFilter | number
    dataInicio?: DateTimeWithAggregatesFilter | Date | string
    dataFim?: DateTimeWithAggregatesFilter | Date | string
    uri?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    idDeputado?: IntNullableWithAggregatesFilter | number | null
  }

  export type RedeSocialWhereInput = {
    AND?: Enumerable<RedeSocialWhereInput>
    OR?: Enumerable<RedeSocialWhereInput>
    NOT?: Enumerable<RedeSocialWhereInput>
    id?: IntFilter | number
    url?: StringFilter | string
    rede?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    idDeputado?: IntFilter | number
    deputado?: XOR<DeputadoRelationFilter, DeputadoWhereInput>
  }

  export type RedeSocialOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    rede?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
    deputado?: DeputadoOrderByWithRelationInput
  }

  export type RedeSocialWhereUniqueInput = {
    id?: number
  }

  export type RedeSocialOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    rede?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
    _count?: RedeSocialCountOrderByAggregateInput
    _avg?: RedeSocialAvgOrderByAggregateInput
    _max?: RedeSocialMaxOrderByAggregateInput
    _min?: RedeSocialMinOrderByAggregateInput
    _sum?: RedeSocialSumOrderByAggregateInput
  }

  export type RedeSocialScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RedeSocialScalarWhereWithAggregatesInput>
    OR?: Enumerable<RedeSocialScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RedeSocialScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    rede?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    idDeputado?: IntWithAggregatesFilter | number
  }

  export type DeputadoWhereInput = {
    AND?: Enumerable<DeputadoWhereInput>
    OR?: Enumerable<DeputadoWhereInput>
    NOT?: Enumerable<DeputadoWhereInput>
    id?: IntFilter | number
    idExterno?: IntFilter | number
    uri?: StringFilter | string
    nome?: StringFilter | string
    nomeCivil?: StringFilter | string
    nomeEleitoral?: StringFilter | string
    siglaUf?: StringFilter | string
    urlFoto?: StringFilter | string
    email?: StringFilter | string
    situacao?: StringFilter | string
    condicaoEleitoral?: StringFilter | string
    cpf?: StringFilter | string
    sexo?: StringFilter | string
    urlWebSite?: StringFilter | string
    dataNascimento?: DateTimeFilter | Date | string
    dataFalecimento?: DateTimeFilter | Date | string
    ufNascimento?: StringFilter | string
    municipioNascimento?: StringFilter | string
    escolaridade?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    redeSocial?: RedeSocialListRelationFilter
    partido?: PartidoListRelationFilter
    legislatura?: LegislaturaListRelationFilter
    depesa?: DespesaListRelationFilter
  }

  export type DeputadoOrderByWithRelationInput = {
    id?: SortOrder
    idExterno?: SortOrder
    uri?: SortOrder
    nome?: SortOrder
    nomeCivil?: SortOrder
    nomeEleitoral?: SortOrder
    siglaUf?: SortOrder
    urlFoto?: SortOrder
    email?: SortOrder
    situacao?: SortOrder
    condicaoEleitoral?: SortOrder
    cpf?: SortOrder
    sexo?: SortOrder
    urlWebSite?: SortOrder
    dataNascimento?: SortOrder
    dataFalecimento?: SortOrder
    ufNascimento?: SortOrder
    municipioNascimento?: SortOrder
    escolaridade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    redeSocial?: RedeSocialOrderByRelationAggregateInput
    partido?: PartidoOrderByRelationAggregateInput
    legislatura?: LegislaturaOrderByRelationAggregateInput
    depesa?: DespesaOrderByRelationAggregateInput
  }

  export type DeputadoWhereUniqueInput = {
    id?: number
    idExterno?: number
    urlFoto?: string
    email?: string
    cpf?: string
  }

  export type DeputadoOrderByWithAggregationInput = {
    id?: SortOrder
    idExterno?: SortOrder
    uri?: SortOrder
    nome?: SortOrder
    nomeCivil?: SortOrder
    nomeEleitoral?: SortOrder
    siglaUf?: SortOrder
    urlFoto?: SortOrder
    email?: SortOrder
    situacao?: SortOrder
    condicaoEleitoral?: SortOrder
    cpf?: SortOrder
    sexo?: SortOrder
    urlWebSite?: SortOrder
    dataNascimento?: SortOrder
    dataFalecimento?: SortOrder
    ufNascimento?: SortOrder
    municipioNascimento?: SortOrder
    escolaridade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeputadoCountOrderByAggregateInput
    _avg?: DeputadoAvgOrderByAggregateInput
    _max?: DeputadoMaxOrderByAggregateInput
    _min?: DeputadoMinOrderByAggregateInput
    _sum?: DeputadoSumOrderByAggregateInput
  }

  export type DeputadoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DeputadoScalarWhereWithAggregatesInput>
    OR?: Enumerable<DeputadoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DeputadoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idExterno?: IntWithAggregatesFilter | number
    uri?: StringWithAggregatesFilter | string
    nome?: StringWithAggregatesFilter | string
    nomeCivil?: StringWithAggregatesFilter | string
    nomeEleitoral?: StringWithAggregatesFilter | string
    siglaUf?: StringWithAggregatesFilter | string
    urlFoto?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    situacao?: StringWithAggregatesFilter | string
    condicaoEleitoral?: StringWithAggregatesFilter | string
    cpf?: StringWithAggregatesFilter | string
    sexo?: StringWithAggregatesFilter | string
    urlWebSite?: StringWithAggregatesFilter | string
    dataNascimento?: DateTimeWithAggregatesFilter | Date | string
    dataFalecimento?: DateTimeWithAggregatesFilter | Date | string
    ufNascimento?: StringWithAggregatesFilter | string
    municipioNascimento?: StringWithAggregatesFilter | string
    escolaridade?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DespesaWhereInput = {
    AND?: Enumerable<DespesaWhereInput>
    OR?: Enumerable<DespesaWhereInput>
    NOT?: Enumerable<DespesaWhereInput>
    id?: IntFilter | number
    ano?: IntFilter | number
    mes?: IntFilter | number
    codDocumento?: StringFilter | string
    tipoDocumento?: StringFilter | string
    codTipoDocumento?: IntFilter | number
    dataDocumento?: DateTimeFilter | Date | string
    numDocumento?: StringFilter | string
    valorDocumento?: DecimalFilter | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFilter | string
    valorLiquido?: DecimalFilter | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFilter | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFilter | string
    codLote?: IntFilter | number
    parcela?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    idFornecedor?: IntFilter | number
    idTipoDespesa?: IntFilter | number
    idDeputadoId?: IntNullableFilter | number | null
    fornecedor?: XOR<FornecedorRelationFilter, FornecedorWhereInput>
    tipoDespesa?: XOR<TipoDespesaRelationFilter, TipoDespesaWhereInput>
    deputado?: XOR<DeputadoRelationFilter, DeputadoWhereInput> | null
  }

  export type DespesaOrderByWithRelationInput = {
    id?: SortOrder
    ano?: SortOrder
    mes?: SortOrder
    codDocumento?: SortOrder
    tipoDocumento?: SortOrder
    codTipoDocumento?: SortOrder
    dataDocumento?: SortOrder
    numDocumento?: SortOrder
    valorDocumento?: SortOrder
    urlDocumento?: SortOrder
    valorLiquido?: SortOrder
    valorGlosa?: SortOrder
    numRessarcimento?: SortOrder
    codLote?: SortOrder
    parcela?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idFornecedor?: SortOrder
    idTipoDespesa?: SortOrder
    idDeputadoId?: SortOrderInput | SortOrder
    fornecedor?: FornecedorOrderByWithRelationInput
    tipoDespesa?: TipoDespesaOrderByWithRelationInput
    deputado?: DeputadoOrderByWithRelationInput
  }

  export type DespesaWhereUniqueInput = {
    id?: number
  }

  export type DespesaOrderByWithAggregationInput = {
    id?: SortOrder
    ano?: SortOrder
    mes?: SortOrder
    codDocumento?: SortOrder
    tipoDocumento?: SortOrder
    codTipoDocumento?: SortOrder
    dataDocumento?: SortOrder
    numDocumento?: SortOrder
    valorDocumento?: SortOrder
    urlDocumento?: SortOrder
    valorLiquido?: SortOrder
    valorGlosa?: SortOrder
    numRessarcimento?: SortOrder
    codLote?: SortOrder
    parcela?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idFornecedor?: SortOrder
    idTipoDespesa?: SortOrder
    idDeputadoId?: SortOrderInput | SortOrder
    _count?: DespesaCountOrderByAggregateInput
    _avg?: DespesaAvgOrderByAggregateInput
    _max?: DespesaMaxOrderByAggregateInput
    _min?: DespesaMinOrderByAggregateInput
    _sum?: DespesaSumOrderByAggregateInput
  }

  export type DespesaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DespesaScalarWhereWithAggregatesInput>
    OR?: Enumerable<DespesaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DespesaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    ano?: IntWithAggregatesFilter | number
    mes?: IntWithAggregatesFilter | number
    codDocumento?: StringWithAggregatesFilter | string
    tipoDocumento?: StringWithAggregatesFilter | string
    codTipoDocumento?: IntWithAggregatesFilter | number
    dataDocumento?: DateTimeWithAggregatesFilter | Date | string
    numDocumento?: StringWithAggregatesFilter | string
    valorDocumento?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringWithAggregatesFilter | string
    valorLiquido?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringWithAggregatesFilter | string
    codLote?: IntWithAggregatesFilter | number
    parcela?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    idFornecedor?: IntWithAggregatesFilter | number
    idTipoDespesa?: IntWithAggregatesFilter | number
    idDeputadoId?: IntNullableWithAggregatesFilter | number | null
  }

  export type FornecedorWhereInput = {
    AND?: Enumerable<FornecedorWhereInput>
    OR?: Enumerable<FornecedorWhereInput>
    NOT?: Enumerable<FornecedorWhereInput>
    id?: IntFilter | number
    cpfCnpj?: StringFilter | string
    nome?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    despesa?: DespesaListRelationFilter
  }

  export type FornecedorOrderByWithRelationInput = {
    id?: SortOrder
    cpfCnpj?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    despesa?: DespesaOrderByRelationAggregateInput
  }

  export type FornecedorWhereUniqueInput = {
    id?: number
    cpfCnpj?: string
    nome?: string
  }

  export type FornecedorOrderByWithAggregationInput = {
    id?: SortOrder
    cpfCnpj?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FornecedorCountOrderByAggregateInput
    _avg?: FornecedorAvgOrderByAggregateInput
    _max?: FornecedorMaxOrderByAggregateInput
    _min?: FornecedorMinOrderByAggregateInput
    _sum?: FornecedorSumOrderByAggregateInput
  }

  export type FornecedorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FornecedorScalarWhereWithAggregatesInput>
    OR?: Enumerable<FornecedorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FornecedorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cpfCnpj?: StringWithAggregatesFilter | string
    nome?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TipoDespesaWhereInput = {
    AND?: Enumerable<TipoDespesaWhereInput>
    OR?: Enumerable<TipoDespesaWhereInput>
    NOT?: Enumerable<TipoDespesaWhereInput>
    id?: IntFilter | number
    idExterno?: IntFilter | number
    tipo?: StringFilter | string
    descricao?: StringFilter | string
    sigla?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Despesa?: DespesaListRelationFilter
  }

  export type TipoDespesaOrderByWithRelationInput = {
    id?: SortOrder
    idExterno?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    sigla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Despesa?: DespesaOrderByRelationAggregateInput
  }

  export type TipoDespesaWhereUniqueInput = {
    id?: number
    idExterno?: number
    tipo?: string
    descricao?: string
    sigla?: string
  }

  export type TipoDespesaOrderByWithAggregationInput = {
    id?: SortOrder
    idExterno?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    sigla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TipoDespesaCountOrderByAggregateInput
    _avg?: TipoDespesaAvgOrderByAggregateInput
    _max?: TipoDespesaMaxOrderByAggregateInput
    _min?: TipoDespesaMinOrderByAggregateInput
    _sum?: TipoDespesaSumOrderByAggregateInput
  }

  export type TipoDespesaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TipoDespesaScalarWhereWithAggregatesInput>
    OR?: Enumerable<TipoDespesaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TipoDespesaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idExterno?: IntWithAggregatesFilter | number
    tipo?: StringWithAggregatesFilter | string
    descricao?: StringWithAggregatesFilter | string
    sigla?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PartidoCreateInput = {
    idExterno: number
    sigla: string
    nome: string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deputado?: DeputadoCreateNestedOneWithoutPartidoInput
  }

  export type PartidoUncheckedCreateInput = {
    id?: number
    idExterno: number
    sigla: string
    nome: string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDeputado?: number | null
  }

  export type PartidoUpdateInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deputado?: DeputadoUpdateOneWithoutPartidoNestedInput
  }

  export type PartidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDeputado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartidoCreateManyInput = {
    id?: number
    idExterno: number
    sigla: string
    nome: string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDeputado?: number | null
  }

  export type PartidoUpdateManyMutationInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDeputado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LegislaturaCreateInput = {
    idExterno: number
    dataInicio: Date | string
    dataFim: Date | string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deputado?: DeputadoCreateNestedOneWithoutLegislaturaInput
  }

  export type LegislaturaUncheckedCreateInput = {
    id?: number
    idExterno: number
    dataInicio: Date | string
    dataFim: Date | string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDeputado?: number | null
  }

  export type LegislaturaUpdateInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deputado?: DeputadoUpdateOneWithoutLegislaturaNestedInput
  }

  export type LegislaturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDeputado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LegislaturaCreateManyInput = {
    id?: number
    idExterno: number
    dataInicio: Date | string
    dataFim: Date | string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDeputado?: number | null
  }

  export type LegislaturaUpdateManyMutationInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegislaturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDeputado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RedeSocialCreateInput = {
    url: string
    rede: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deputado: DeputadoCreateNestedOneWithoutRedeSocialInput
  }

  export type RedeSocialUncheckedCreateInput = {
    id?: number
    url: string
    rede: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDeputado: number
  }

  export type RedeSocialUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    rede?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deputado?: DeputadoUpdateOneRequiredWithoutRedeSocialNestedInput
  }

  export type RedeSocialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    rede?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDeputado?: IntFieldUpdateOperationsInput | number
  }

  export type RedeSocialCreateManyInput = {
    id?: number
    url: string
    rede: string
    createdAt?: Date | string
    updatedAt?: Date | string
    idDeputado: number
  }

  export type RedeSocialUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    rede?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeSocialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    rede?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idDeputado?: IntFieldUpdateOperationsInput | number
  }

  export type DeputadoCreateInput = {
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    redeSocial?: RedeSocialCreateNestedManyWithoutDeputadoInput
    partido?: PartidoCreateNestedManyWithoutDeputadoInput
    legislatura?: LegislaturaCreateNestedManyWithoutDeputadoInput
    depesa?: DespesaCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoUncheckedCreateInput = {
    id?: number
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    redeSocial?: RedeSocialUncheckedCreateNestedManyWithoutDeputadoInput
    partido?: PartidoUncheckedCreateNestedManyWithoutDeputadoInput
    legislatura?: LegislaturaUncheckedCreateNestedManyWithoutDeputadoInput
    depesa?: DespesaUncheckedCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoUpdateInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeSocial?: RedeSocialUpdateManyWithoutDeputadoNestedInput
    partido?: PartidoUpdateManyWithoutDeputadoNestedInput
    legislatura?: LegislaturaUpdateManyWithoutDeputadoNestedInput
    depesa?: DespesaUpdateManyWithoutDeputadoNestedInput
  }

  export type DeputadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeSocial?: RedeSocialUncheckedUpdateManyWithoutDeputadoNestedInput
    partido?: PartidoUncheckedUpdateManyWithoutDeputadoNestedInput
    legislatura?: LegislaturaUncheckedUpdateManyWithoutDeputadoNestedInput
    depesa?: DespesaUncheckedUpdateManyWithoutDeputadoNestedInput
  }

  export type DeputadoCreateManyInput = {
    id?: number
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeputadoUpdateManyMutationInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeputadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DespesaCreateInput = {
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutDespesaInput
    tipoDespesa: TipoDespesaCreateNestedOneWithoutDespesaInput
    deputado?: DeputadoCreateNestedOneWithoutDepesaInput
  }

  export type DespesaUncheckedCreateInput = {
    id?: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idFornecedor: number
    idTipoDespesa: number
    idDeputadoId?: number | null
  }

  export type DespesaUpdateInput = {
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutDespesaNestedInput
    tipoDespesa?: TipoDespesaUpdateOneRequiredWithoutDespesaNestedInput
    deputado?: DeputadoUpdateOneWithoutDepesaNestedInput
  }

  export type DespesaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFornecedor?: IntFieldUpdateOperationsInput | number
    idTipoDespesa?: IntFieldUpdateOperationsInput | number
    idDeputadoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DespesaCreateManyInput = {
    id?: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idFornecedor: number
    idTipoDespesa: number
    idDeputadoId?: number | null
  }

  export type DespesaUpdateManyMutationInput = {
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DespesaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFornecedor?: IntFieldUpdateOperationsInput | number
    idTipoDespesa?: IntFieldUpdateOperationsInput | number
    idDeputadoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FornecedorCreateInput = {
    cpfCnpj: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    despesa?: DespesaCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateInput = {
    id?: number
    cpfCnpj: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    despesa?: DespesaUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUpdateInput = {
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    despesa?: DespesaUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    despesa?: DespesaUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorCreateManyInput = {
    id?: number
    cpfCnpj: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorUpdateManyMutationInput = {
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoDespesaCreateInput = {
    idExterno: number
    tipo: string
    descricao: string
    sigla: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Despesa?: DespesaCreateNestedManyWithoutTipoDespesaInput
  }

  export type TipoDespesaUncheckedCreateInput = {
    id?: number
    idExterno: number
    tipo: string
    descricao: string
    sigla: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Despesa?: DespesaUncheckedCreateNestedManyWithoutTipoDespesaInput
  }

  export type TipoDespesaUpdateInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Despesa?: DespesaUpdateManyWithoutTipoDespesaNestedInput
  }

  export type TipoDespesaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Despesa?: DespesaUncheckedUpdateManyWithoutTipoDespesaNestedInput
  }

  export type TipoDespesaCreateManyInput = {
    id?: number
    idExterno: number
    tipo: string
    descricao: string
    sigla: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoDespesaUpdateManyMutationInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoDespesaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DeputadoRelationFilter = {
    is?: DeputadoWhereInput | null
    isNot?: DeputadoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PartidoCountOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
  }

  export type PartidoAvgOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    idDeputado?: SortOrder
  }

  export type PartidoMaxOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
  }

  export type PartidoMinOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    sigla?: SortOrder
    nome?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
  }

  export type PartidoSumOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    idDeputado?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type LegislaturaCountOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
  }

  export type LegislaturaAvgOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    idDeputado?: SortOrder
  }

  export type LegislaturaMaxOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
  }

  export type LegislaturaMinOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    uri?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
  }

  export type LegislaturaSumOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    idDeputado?: SortOrder
  }

  export type RedeSocialCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    rede?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
  }

  export type RedeSocialAvgOrderByAggregateInput = {
    id?: SortOrder
    idDeputado?: SortOrder
  }

  export type RedeSocialMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    rede?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
  }

  export type RedeSocialMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    rede?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idDeputado?: SortOrder
  }

  export type RedeSocialSumOrderByAggregateInput = {
    id?: SortOrder
    idDeputado?: SortOrder
  }

  export type RedeSocialListRelationFilter = {
    every?: RedeSocialWhereInput
    some?: RedeSocialWhereInput
    none?: RedeSocialWhereInput
  }

  export type PartidoListRelationFilter = {
    every?: PartidoWhereInput
    some?: PartidoWhereInput
    none?: PartidoWhereInput
  }

  export type LegislaturaListRelationFilter = {
    every?: LegislaturaWhereInput
    some?: LegislaturaWhereInput
    none?: LegislaturaWhereInput
  }

  export type DespesaListRelationFilter = {
    every?: DespesaWhereInput
    some?: DespesaWhereInput
    none?: DespesaWhereInput
  }

  export type RedeSocialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LegislaturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DespesaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeputadoCountOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    uri?: SortOrder
    nome?: SortOrder
    nomeCivil?: SortOrder
    nomeEleitoral?: SortOrder
    siglaUf?: SortOrder
    urlFoto?: SortOrder
    email?: SortOrder
    situacao?: SortOrder
    condicaoEleitoral?: SortOrder
    cpf?: SortOrder
    sexo?: SortOrder
    urlWebSite?: SortOrder
    dataNascimento?: SortOrder
    dataFalecimento?: SortOrder
    ufNascimento?: SortOrder
    municipioNascimento?: SortOrder
    escolaridade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeputadoAvgOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
  }

  export type DeputadoMaxOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    uri?: SortOrder
    nome?: SortOrder
    nomeCivil?: SortOrder
    nomeEleitoral?: SortOrder
    siglaUf?: SortOrder
    urlFoto?: SortOrder
    email?: SortOrder
    situacao?: SortOrder
    condicaoEleitoral?: SortOrder
    cpf?: SortOrder
    sexo?: SortOrder
    urlWebSite?: SortOrder
    dataNascimento?: SortOrder
    dataFalecimento?: SortOrder
    ufNascimento?: SortOrder
    municipioNascimento?: SortOrder
    escolaridade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeputadoMinOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    uri?: SortOrder
    nome?: SortOrder
    nomeCivil?: SortOrder
    nomeEleitoral?: SortOrder
    siglaUf?: SortOrder
    urlFoto?: SortOrder
    email?: SortOrder
    situacao?: SortOrder
    condicaoEleitoral?: SortOrder
    cpf?: SortOrder
    sexo?: SortOrder
    urlWebSite?: SortOrder
    dataNascimento?: SortOrder
    dataFalecimento?: SortOrder
    ufNascimento?: SortOrder
    municipioNascimento?: SortOrder
    escolaridade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeputadoSumOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type FornecedorRelationFilter = {
    is?: FornecedorWhereInput | null
    isNot?: FornecedorWhereInput | null
  }

  export type TipoDespesaRelationFilter = {
    is?: TipoDespesaWhereInput | null
    isNot?: TipoDespesaWhereInput | null
  }

  export type DespesaCountOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    mes?: SortOrder
    codDocumento?: SortOrder
    tipoDocumento?: SortOrder
    codTipoDocumento?: SortOrder
    dataDocumento?: SortOrder
    numDocumento?: SortOrder
    valorDocumento?: SortOrder
    urlDocumento?: SortOrder
    valorLiquido?: SortOrder
    valorGlosa?: SortOrder
    numRessarcimento?: SortOrder
    codLote?: SortOrder
    parcela?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idFornecedor?: SortOrder
    idTipoDespesa?: SortOrder
    idDeputadoId?: SortOrder
  }

  export type DespesaAvgOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    mes?: SortOrder
    codTipoDocumento?: SortOrder
    valorDocumento?: SortOrder
    valorLiquido?: SortOrder
    valorGlosa?: SortOrder
    codLote?: SortOrder
    parcela?: SortOrder
    idFornecedor?: SortOrder
    idTipoDespesa?: SortOrder
    idDeputadoId?: SortOrder
  }

  export type DespesaMaxOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    mes?: SortOrder
    codDocumento?: SortOrder
    tipoDocumento?: SortOrder
    codTipoDocumento?: SortOrder
    dataDocumento?: SortOrder
    numDocumento?: SortOrder
    valorDocumento?: SortOrder
    urlDocumento?: SortOrder
    valorLiquido?: SortOrder
    valorGlosa?: SortOrder
    numRessarcimento?: SortOrder
    codLote?: SortOrder
    parcela?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idFornecedor?: SortOrder
    idTipoDespesa?: SortOrder
    idDeputadoId?: SortOrder
  }

  export type DespesaMinOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    mes?: SortOrder
    codDocumento?: SortOrder
    tipoDocumento?: SortOrder
    codTipoDocumento?: SortOrder
    dataDocumento?: SortOrder
    numDocumento?: SortOrder
    valorDocumento?: SortOrder
    urlDocumento?: SortOrder
    valorLiquido?: SortOrder
    valorGlosa?: SortOrder
    numRessarcimento?: SortOrder
    codLote?: SortOrder
    parcela?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idFornecedor?: SortOrder
    idTipoDespesa?: SortOrder
    idDeputadoId?: SortOrder
  }

  export type DespesaSumOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    mes?: SortOrder
    codTipoDocumento?: SortOrder
    valorDocumento?: SortOrder
    valorLiquido?: SortOrder
    valorGlosa?: SortOrder
    codLote?: SortOrder
    parcela?: SortOrder
    idFornecedor?: SortOrder
    idTipoDespesa?: SortOrder
    idDeputadoId?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type FornecedorCountOrderByAggregateInput = {
    id?: SortOrder
    cpfCnpj?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FornecedorMaxOrderByAggregateInput = {
    id?: SortOrder
    cpfCnpj?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorMinOrderByAggregateInput = {
    id?: SortOrder
    cpfCnpj?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoDespesaCountOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    sigla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoDespesaAvgOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
  }

  export type TipoDespesaMaxOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    sigla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoDespesaMinOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    sigla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoDespesaSumOrderByAggregateInput = {
    id?: SortOrder
    idExterno?: SortOrder
  }

  export type DeputadoCreateNestedOneWithoutPartidoInput = {
    create?: XOR<DeputadoCreateWithoutPartidoInput, DeputadoUncheckedCreateWithoutPartidoInput>
    connectOrCreate?: DeputadoCreateOrConnectWithoutPartidoInput
    connect?: DeputadoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeputadoUpdateOneWithoutPartidoNestedInput = {
    create?: XOR<DeputadoCreateWithoutPartidoInput, DeputadoUncheckedCreateWithoutPartidoInput>
    connectOrCreate?: DeputadoCreateOrConnectWithoutPartidoInput
    upsert?: DeputadoUpsertWithoutPartidoInput
    disconnect?: boolean
    delete?: boolean
    connect?: DeputadoWhereUniqueInput
    update?: XOR<DeputadoUpdateWithoutPartidoInput, DeputadoUncheckedUpdateWithoutPartidoInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeputadoCreateNestedOneWithoutLegislaturaInput = {
    create?: XOR<DeputadoCreateWithoutLegislaturaInput, DeputadoUncheckedCreateWithoutLegislaturaInput>
    connectOrCreate?: DeputadoCreateOrConnectWithoutLegislaturaInput
    connect?: DeputadoWhereUniqueInput
  }

  export type DeputadoUpdateOneWithoutLegislaturaNestedInput = {
    create?: XOR<DeputadoCreateWithoutLegislaturaInput, DeputadoUncheckedCreateWithoutLegislaturaInput>
    connectOrCreate?: DeputadoCreateOrConnectWithoutLegislaturaInput
    upsert?: DeputadoUpsertWithoutLegislaturaInput
    disconnect?: boolean
    delete?: boolean
    connect?: DeputadoWhereUniqueInput
    update?: XOR<DeputadoUpdateWithoutLegislaturaInput, DeputadoUncheckedUpdateWithoutLegislaturaInput>
  }

  export type DeputadoCreateNestedOneWithoutRedeSocialInput = {
    create?: XOR<DeputadoCreateWithoutRedeSocialInput, DeputadoUncheckedCreateWithoutRedeSocialInput>
    connectOrCreate?: DeputadoCreateOrConnectWithoutRedeSocialInput
    connect?: DeputadoWhereUniqueInput
  }

  export type DeputadoUpdateOneRequiredWithoutRedeSocialNestedInput = {
    create?: XOR<DeputadoCreateWithoutRedeSocialInput, DeputadoUncheckedCreateWithoutRedeSocialInput>
    connectOrCreate?: DeputadoCreateOrConnectWithoutRedeSocialInput
    upsert?: DeputadoUpsertWithoutRedeSocialInput
    connect?: DeputadoWhereUniqueInput
    update?: XOR<DeputadoUpdateWithoutRedeSocialInput, DeputadoUncheckedUpdateWithoutRedeSocialInput>
  }

  export type RedeSocialCreateNestedManyWithoutDeputadoInput = {
    create?: XOR<Enumerable<RedeSocialCreateWithoutDeputadoInput>, Enumerable<RedeSocialUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<RedeSocialCreateOrConnectWithoutDeputadoInput>
    createMany?: RedeSocialCreateManyDeputadoInputEnvelope
    connect?: Enumerable<RedeSocialWhereUniqueInput>
  }

  export type PartidoCreateNestedManyWithoutDeputadoInput = {
    create?: XOR<Enumerable<PartidoCreateWithoutDeputadoInput>, Enumerable<PartidoUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<PartidoCreateOrConnectWithoutDeputadoInput>
    createMany?: PartidoCreateManyDeputadoInputEnvelope
    connect?: Enumerable<PartidoWhereUniqueInput>
  }

  export type LegislaturaCreateNestedManyWithoutDeputadoInput = {
    create?: XOR<Enumerable<LegislaturaCreateWithoutDeputadoInput>, Enumerable<LegislaturaUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<LegislaturaCreateOrConnectWithoutDeputadoInput>
    createMany?: LegislaturaCreateManyDeputadoInputEnvelope
    connect?: Enumerable<LegislaturaWhereUniqueInput>
  }

  export type DespesaCreateNestedManyWithoutDeputadoInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutDeputadoInput>, Enumerable<DespesaUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutDeputadoInput>
    createMany?: DespesaCreateManyDeputadoInputEnvelope
    connect?: Enumerable<DespesaWhereUniqueInput>
  }

  export type RedeSocialUncheckedCreateNestedManyWithoutDeputadoInput = {
    create?: XOR<Enumerable<RedeSocialCreateWithoutDeputadoInput>, Enumerable<RedeSocialUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<RedeSocialCreateOrConnectWithoutDeputadoInput>
    createMany?: RedeSocialCreateManyDeputadoInputEnvelope
    connect?: Enumerable<RedeSocialWhereUniqueInput>
  }

  export type PartidoUncheckedCreateNestedManyWithoutDeputadoInput = {
    create?: XOR<Enumerable<PartidoCreateWithoutDeputadoInput>, Enumerable<PartidoUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<PartidoCreateOrConnectWithoutDeputadoInput>
    createMany?: PartidoCreateManyDeputadoInputEnvelope
    connect?: Enumerable<PartidoWhereUniqueInput>
  }

  export type LegislaturaUncheckedCreateNestedManyWithoutDeputadoInput = {
    create?: XOR<Enumerable<LegislaturaCreateWithoutDeputadoInput>, Enumerable<LegislaturaUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<LegislaturaCreateOrConnectWithoutDeputadoInput>
    createMany?: LegislaturaCreateManyDeputadoInputEnvelope
    connect?: Enumerable<LegislaturaWhereUniqueInput>
  }

  export type DespesaUncheckedCreateNestedManyWithoutDeputadoInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutDeputadoInput>, Enumerable<DespesaUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutDeputadoInput>
    createMany?: DespesaCreateManyDeputadoInputEnvelope
    connect?: Enumerable<DespesaWhereUniqueInput>
  }

  export type RedeSocialUpdateManyWithoutDeputadoNestedInput = {
    create?: XOR<Enumerable<RedeSocialCreateWithoutDeputadoInput>, Enumerable<RedeSocialUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<RedeSocialCreateOrConnectWithoutDeputadoInput>
    upsert?: Enumerable<RedeSocialUpsertWithWhereUniqueWithoutDeputadoInput>
    createMany?: RedeSocialCreateManyDeputadoInputEnvelope
    set?: Enumerable<RedeSocialWhereUniqueInput>
    disconnect?: Enumerable<RedeSocialWhereUniqueInput>
    delete?: Enumerable<RedeSocialWhereUniqueInput>
    connect?: Enumerable<RedeSocialWhereUniqueInput>
    update?: Enumerable<RedeSocialUpdateWithWhereUniqueWithoutDeputadoInput>
    updateMany?: Enumerable<RedeSocialUpdateManyWithWhereWithoutDeputadoInput>
    deleteMany?: Enumerable<RedeSocialScalarWhereInput>
  }

  export type PartidoUpdateManyWithoutDeputadoNestedInput = {
    create?: XOR<Enumerable<PartidoCreateWithoutDeputadoInput>, Enumerable<PartidoUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<PartidoCreateOrConnectWithoutDeputadoInput>
    upsert?: Enumerable<PartidoUpsertWithWhereUniqueWithoutDeputadoInput>
    createMany?: PartidoCreateManyDeputadoInputEnvelope
    set?: Enumerable<PartidoWhereUniqueInput>
    disconnect?: Enumerable<PartidoWhereUniqueInput>
    delete?: Enumerable<PartidoWhereUniqueInput>
    connect?: Enumerable<PartidoWhereUniqueInput>
    update?: Enumerable<PartidoUpdateWithWhereUniqueWithoutDeputadoInput>
    updateMany?: Enumerable<PartidoUpdateManyWithWhereWithoutDeputadoInput>
    deleteMany?: Enumerable<PartidoScalarWhereInput>
  }

  export type LegislaturaUpdateManyWithoutDeputadoNestedInput = {
    create?: XOR<Enumerable<LegislaturaCreateWithoutDeputadoInput>, Enumerable<LegislaturaUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<LegislaturaCreateOrConnectWithoutDeputadoInput>
    upsert?: Enumerable<LegislaturaUpsertWithWhereUniqueWithoutDeputadoInput>
    createMany?: LegislaturaCreateManyDeputadoInputEnvelope
    set?: Enumerable<LegislaturaWhereUniqueInput>
    disconnect?: Enumerable<LegislaturaWhereUniqueInput>
    delete?: Enumerable<LegislaturaWhereUniqueInput>
    connect?: Enumerable<LegislaturaWhereUniqueInput>
    update?: Enumerable<LegislaturaUpdateWithWhereUniqueWithoutDeputadoInput>
    updateMany?: Enumerable<LegislaturaUpdateManyWithWhereWithoutDeputadoInput>
    deleteMany?: Enumerable<LegislaturaScalarWhereInput>
  }

  export type DespesaUpdateManyWithoutDeputadoNestedInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutDeputadoInput>, Enumerable<DespesaUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutDeputadoInput>
    upsert?: Enumerable<DespesaUpsertWithWhereUniqueWithoutDeputadoInput>
    createMany?: DespesaCreateManyDeputadoInputEnvelope
    set?: Enumerable<DespesaWhereUniqueInput>
    disconnect?: Enumerable<DespesaWhereUniqueInput>
    delete?: Enumerable<DespesaWhereUniqueInput>
    connect?: Enumerable<DespesaWhereUniqueInput>
    update?: Enumerable<DespesaUpdateWithWhereUniqueWithoutDeputadoInput>
    updateMany?: Enumerable<DespesaUpdateManyWithWhereWithoutDeputadoInput>
    deleteMany?: Enumerable<DespesaScalarWhereInput>
  }

  export type RedeSocialUncheckedUpdateManyWithoutDeputadoNestedInput = {
    create?: XOR<Enumerable<RedeSocialCreateWithoutDeputadoInput>, Enumerable<RedeSocialUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<RedeSocialCreateOrConnectWithoutDeputadoInput>
    upsert?: Enumerable<RedeSocialUpsertWithWhereUniqueWithoutDeputadoInput>
    createMany?: RedeSocialCreateManyDeputadoInputEnvelope
    set?: Enumerable<RedeSocialWhereUniqueInput>
    disconnect?: Enumerable<RedeSocialWhereUniqueInput>
    delete?: Enumerable<RedeSocialWhereUniqueInput>
    connect?: Enumerable<RedeSocialWhereUniqueInput>
    update?: Enumerable<RedeSocialUpdateWithWhereUniqueWithoutDeputadoInput>
    updateMany?: Enumerable<RedeSocialUpdateManyWithWhereWithoutDeputadoInput>
    deleteMany?: Enumerable<RedeSocialScalarWhereInput>
  }

  export type PartidoUncheckedUpdateManyWithoutDeputadoNestedInput = {
    create?: XOR<Enumerable<PartidoCreateWithoutDeputadoInput>, Enumerable<PartidoUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<PartidoCreateOrConnectWithoutDeputadoInput>
    upsert?: Enumerable<PartidoUpsertWithWhereUniqueWithoutDeputadoInput>
    createMany?: PartidoCreateManyDeputadoInputEnvelope
    set?: Enumerable<PartidoWhereUniqueInput>
    disconnect?: Enumerable<PartidoWhereUniqueInput>
    delete?: Enumerable<PartidoWhereUniqueInput>
    connect?: Enumerable<PartidoWhereUniqueInput>
    update?: Enumerable<PartidoUpdateWithWhereUniqueWithoutDeputadoInput>
    updateMany?: Enumerable<PartidoUpdateManyWithWhereWithoutDeputadoInput>
    deleteMany?: Enumerable<PartidoScalarWhereInput>
  }

  export type LegislaturaUncheckedUpdateManyWithoutDeputadoNestedInput = {
    create?: XOR<Enumerable<LegislaturaCreateWithoutDeputadoInput>, Enumerable<LegislaturaUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<LegislaturaCreateOrConnectWithoutDeputadoInput>
    upsert?: Enumerable<LegislaturaUpsertWithWhereUniqueWithoutDeputadoInput>
    createMany?: LegislaturaCreateManyDeputadoInputEnvelope
    set?: Enumerable<LegislaturaWhereUniqueInput>
    disconnect?: Enumerable<LegislaturaWhereUniqueInput>
    delete?: Enumerable<LegislaturaWhereUniqueInput>
    connect?: Enumerable<LegislaturaWhereUniqueInput>
    update?: Enumerable<LegislaturaUpdateWithWhereUniqueWithoutDeputadoInput>
    updateMany?: Enumerable<LegislaturaUpdateManyWithWhereWithoutDeputadoInput>
    deleteMany?: Enumerable<LegislaturaScalarWhereInput>
  }

  export type DespesaUncheckedUpdateManyWithoutDeputadoNestedInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutDeputadoInput>, Enumerable<DespesaUncheckedCreateWithoutDeputadoInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutDeputadoInput>
    upsert?: Enumerable<DespesaUpsertWithWhereUniqueWithoutDeputadoInput>
    createMany?: DespesaCreateManyDeputadoInputEnvelope
    set?: Enumerable<DespesaWhereUniqueInput>
    disconnect?: Enumerable<DespesaWhereUniqueInput>
    delete?: Enumerable<DespesaWhereUniqueInput>
    connect?: Enumerable<DespesaWhereUniqueInput>
    update?: Enumerable<DespesaUpdateWithWhereUniqueWithoutDeputadoInput>
    updateMany?: Enumerable<DespesaUpdateManyWithWhereWithoutDeputadoInput>
    deleteMany?: Enumerable<DespesaScalarWhereInput>
  }

  export type FornecedorCreateNestedOneWithoutDespesaInput = {
    create?: XOR<FornecedorCreateWithoutDespesaInput, FornecedorUncheckedCreateWithoutDespesaInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutDespesaInput
    connect?: FornecedorWhereUniqueInput
  }

  export type TipoDespesaCreateNestedOneWithoutDespesaInput = {
    create?: XOR<TipoDespesaCreateWithoutDespesaInput, TipoDespesaUncheckedCreateWithoutDespesaInput>
    connectOrCreate?: TipoDespesaCreateOrConnectWithoutDespesaInput
    connect?: TipoDespesaWhereUniqueInput
  }

  export type DeputadoCreateNestedOneWithoutDepesaInput = {
    create?: XOR<DeputadoCreateWithoutDepesaInput, DeputadoUncheckedCreateWithoutDepesaInput>
    connectOrCreate?: DeputadoCreateOrConnectWithoutDepesaInput
    connect?: DeputadoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FornecedorUpdateOneRequiredWithoutDespesaNestedInput = {
    create?: XOR<FornecedorCreateWithoutDespesaInput, FornecedorUncheckedCreateWithoutDespesaInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutDespesaInput
    upsert?: FornecedorUpsertWithoutDespesaInput
    connect?: FornecedorWhereUniqueInput
    update?: XOR<FornecedorUpdateWithoutDespesaInput, FornecedorUncheckedUpdateWithoutDespesaInput>
  }

  export type TipoDespesaUpdateOneRequiredWithoutDespesaNestedInput = {
    create?: XOR<TipoDespesaCreateWithoutDespesaInput, TipoDespesaUncheckedCreateWithoutDespesaInput>
    connectOrCreate?: TipoDespesaCreateOrConnectWithoutDespesaInput
    upsert?: TipoDespesaUpsertWithoutDespesaInput
    connect?: TipoDespesaWhereUniqueInput
    update?: XOR<TipoDespesaUpdateWithoutDespesaInput, TipoDespesaUncheckedUpdateWithoutDespesaInput>
  }

  export type DeputadoUpdateOneWithoutDepesaNestedInput = {
    create?: XOR<DeputadoCreateWithoutDepesaInput, DeputadoUncheckedCreateWithoutDepesaInput>
    connectOrCreate?: DeputadoCreateOrConnectWithoutDepesaInput
    upsert?: DeputadoUpsertWithoutDepesaInput
    disconnect?: boolean
    delete?: boolean
    connect?: DeputadoWhereUniqueInput
    update?: XOR<DeputadoUpdateWithoutDepesaInput, DeputadoUncheckedUpdateWithoutDepesaInput>
  }

  export type DespesaCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutFornecedorInput>, Enumerable<DespesaUncheckedCreateWithoutFornecedorInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutFornecedorInput>
    createMany?: DespesaCreateManyFornecedorInputEnvelope
    connect?: Enumerable<DespesaWhereUniqueInput>
  }

  export type DespesaUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutFornecedorInput>, Enumerable<DespesaUncheckedCreateWithoutFornecedorInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutFornecedorInput>
    createMany?: DespesaCreateManyFornecedorInputEnvelope
    connect?: Enumerable<DespesaWhereUniqueInput>
  }

  export type DespesaUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutFornecedorInput>, Enumerable<DespesaUncheckedCreateWithoutFornecedorInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutFornecedorInput>
    upsert?: Enumerable<DespesaUpsertWithWhereUniqueWithoutFornecedorInput>
    createMany?: DespesaCreateManyFornecedorInputEnvelope
    set?: Enumerable<DespesaWhereUniqueInput>
    disconnect?: Enumerable<DespesaWhereUniqueInput>
    delete?: Enumerable<DespesaWhereUniqueInput>
    connect?: Enumerable<DespesaWhereUniqueInput>
    update?: Enumerable<DespesaUpdateWithWhereUniqueWithoutFornecedorInput>
    updateMany?: Enumerable<DespesaUpdateManyWithWhereWithoutFornecedorInput>
    deleteMany?: Enumerable<DespesaScalarWhereInput>
  }

  export type DespesaUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutFornecedorInput>, Enumerable<DespesaUncheckedCreateWithoutFornecedorInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutFornecedorInput>
    upsert?: Enumerable<DespesaUpsertWithWhereUniqueWithoutFornecedorInput>
    createMany?: DespesaCreateManyFornecedorInputEnvelope
    set?: Enumerable<DespesaWhereUniqueInput>
    disconnect?: Enumerable<DespesaWhereUniqueInput>
    delete?: Enumerable<DespesaWhereUniqueInput>
    connect?: Enumerable<DespesaWhereUniqueInput>
    update?: Enumerable<DespesaUpdateWithWhereUniqueWithoutFornecedorInput>
    updateMany?: Enumerable<DespesaUpdateManyWithWhereWithoutFornecedorInput>
    deleteMany?: Enumerable<DespesaScalarWhereInput>
  }

  export type DespesaCreateNestedManyWithoutTipoDespesaInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutTipoDespesaInput>, Enumerable<DespesaUncheckedCreateWithoutTipoDespesaInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutTipoDespesaInput>
    createMany?: DespesaCreateManyTipoDespesaInputEnvelope
    connect?: Enumerable<DespesaWhereUniqueInput>
  }

  export type DespesaUncheckedCreateNestedManyWithoutTipoDespesaInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutTipoDespesaInput>, Enumerable<DespesaUncheckedCreateWithoutTipoDespesaInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutTipoDespesaInput>
    createMany?: DespesaCreateManyTipoDespesaInputEnvelope
    connect?: Enumerable<DespesaWhereUniqueInput>
  }

  export type DespesaUpdateManyWithoutTipoDespesaNestedInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutTipoDespesaInput>, Enumerable<DespesaUncheckedCreateWithoutTipoDespesaInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutTipoDespesaInput>
    upsert?: Enumerable<DespesaUpsertWithWhereUniqueWithoutTipoDespesaInput>
    createMany?: DespesaCreateManyTipoDespesaInputEnvelope
    set?: Enumerable<DespesaWhereUniqueInput>
    disconnect?: Enumerable<DespesaWhereUniqueInput>
    delete?: Enumerable<DespesaWhereUniqueInput>
    connect?: Enumerable<DespesaWhereUniqueInput>
    update?: Enumerable<DespesaUpdateWithWhereUniqueWithoutTipoDespesaInput>
    updateMany?: Enumerable<DespesaUpdateManyWithWhereWithoutTipoDespesaInput>
    deleteMany?: Enumerable<DespesaScalarWhereInput>
  }

  export type DespesaUncheckedUpdateManyWithoutTipoDespesaNestedInput = {
    create?: XOR<Enumerable<DespesaCreateWithoutTipoDespesaInput>, Enumerable<DespesaUncheckedCreateWithoutTipoDespesaInput>>
    connectOrCreate?: Enumerable<DespesaCreateOrConnectWithoutTipoDespesaInput>
    upsert?: Enumerable<DespesaUpsertWithWhereUniqueWithoutTipoDespesaInput>
    createMany?: DespesaCreateManyTipoDespesaInputEnvelope
    set?: Enumerable<DespesaWhereUniqueInput>
    disconnect?: Enumerable<DespesaWhereUniqueInput>
    delete?: Enumerable<DespesaWhereUniqueInput>
    connect?: Enumerable<DespesaWhereUniqueInput>
    update?: Enumerable<DespesaUpdateWithWhereUniqueWithoutTipoDespesaInput>
    updateMany?: Enumerable<DespesaUpdateManyWithWhereWithoutTipoDespesaInput>
    deleteMany?: Enumerable<DespesaScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type DeputadoCreateWithoutPartidoInput = {
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    redeSocial?: RedeSocialCreateNestedManyWithoutDeputadoInput
    legislatura?: LegislaturaCreateNestedManyWithoutDeputadoInput
    depesa?: DespesaCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoUncheckedCreateWithoutPartidoInput = {
    id?: number
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    redeSocial?: RedeSocialUncheckedCreateNestedManyWithoutDeputadoInput
    legislatura?: LegislaturaUncheckedCreateNestedManyWithoutDeputadoInput
    depesa?: DespesaUncheckedCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoCreateOrConnectWithoutPartidoInput = {
    where: DeputadoWhereUniqueInput
    create: XOR<DeputadoCreateWithoutPartidoInput, DeputadoUncheckedCreateWithoutPartidoInput>
  }

  export type DeputadoUpsertWithoutPartidoInput = {
    update: XOR<DeputadoUpdateWithoutPartidoInput, DeputadoUncheckedUpdateWithoutPartidoInput>
    create: XOR<DeputadoCreateWithoutPartidoInput, DeputadoUncheckedCreateWithoutPartidoInput>
  }

  export type DeputadoUpdateWithoutPartidoInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeSocial?: RedeSocialUpdateManyWithoutDeputadoNestedInput
    legislatura?: LegislaturaUpdateManyWithoutDeputadoNestedInput
    depesa?: DespesaUpdateManyWithoutDeputadoNestedInput
  }

  export type DeputadoUncheckedUpdateWithoutPartidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeSocial?: RedeSocialUncheckedUpdateManyWithoutDeputadoNestedInput
    legislatura?: LegislaturaUncheckedUpdateManyWithoutDeputadoNestedInput
    depesa?: DespesaUncheckedUpdateManyWithoutDeputadoNestedInput
  }

  export type DeputadoCreateWithoutLegislaturaInput = {
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    redeSocial?: RedeSocialCreateNestedManyWithoutDeputadoInput
    partido?: PartidoCreateNestedManyWithoutDeputadoInput
    depesa?: DespesaCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoUncheckedCreateWithoutLegislaturaInput = {
    id?: number
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    redeSocial?: RedeSocialUncheckedCreateNestedManyWithoutDeputadoInput
    partido?: PartidoUncheckedCreateNestedManyWithoutDeputadoInput
    depesa?: DespesaUncheckedCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoCreateOrConnectWithoutLegislaturaInput = {
    where: DeputadoWhereUniqueInput
    create: XOR<DeputadoCreateWithoutLegislaturaInput, DeputadoUncheckedCreateWithoutLegislaturaInput>
  }

  export type DeputadoUpsertWithoutLegislaturaInput = {
    update: XOR<DeputadoUpdateWithoutLegislaturaInput, DeputadoUncheckedUpdateWithoutLegislaturaInput>
    create: XOR<DeputadoCreateWithoutLegislaturaInput, DeputadoUncheckedCreateWithoutLegislaturaInput>
  }

  export type DeputadoUpdateWithoutLegislaturaInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeSocial?: RedeSocialUpdateManyWithoutDeputadoNestedInput
    partido?: PartidoUpdateManyWithoutDeputadoNestedInput
    depesa?: DespesaUpdateManyWithoutDeputadoNestedInput
  }

  export type DeputadoUncheckedUpdateWithoutLegislaturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeSocial?: RedeSocialUncheckedUpdateManyWithoutDeputadoNestedInput
    partido?: PartidoUncheckedUpdateManyWithoutDeputadoNestedInput
    depesa?: DespesaUncheckedUpdateManyWithoutDeputadoNestedInput
  }

  export type DeputadoCreateWithoutRedeSocialInput = {
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partido?: PartidoCreateNestedManyWithoutDeputadoInput
    legislatura?: LegislaturaCreateNestedManyWithoutDeputadoInput
    depesa?: DespesaCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoUncheckedCreateWithoutRedeSocialInput = {
    id?: number
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partido?: PartidoUncheckedCreateNestedManyWithoutDeputadoInput
    legislatura?: LegislaturaUncheckedCreateNestedManyWithoutDeputadoInput
    depesa?: DespesaUncheckedCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoCreateOrConnectWithoutRedeSocialInput = {
    where: DeputadoWhereUniqueInput
    create: XOR<DeputadoCreateWithoutRedeSocialInput, DeputadoUncheckedCreateWithoutRedeSocialInput>
  }

  export type DeputadoUpsertWithoutRedeSocialInput = {
    update: XOR<DeputadoUpdateWithoutRedeSocialInput, DeputadoUncheckedUpdateWithoutRedeSocialInput>
    create: XOR<DeputadoCreateWithoutRedeSocialInput, DeputadoUncheckedCreateWithoutRedeSocialInput>
  }

  export type DeputadoUpdateWithoutRedeSocialInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partido?: PartidoUpdateManyWithoutDeputadoNestedInput
    legislatura?: LegislaturaUpdateManyWithoutDeputadoNestedInput
    depesa?: DespesaUpdateManyWithoutDeputadoNestedInput
  }

  export type DeputadoUncheckedUpdateWithoutRedeSocialInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partido?: PartidoUncheckedUpdateManyWithoutDeputadoNestedInput
    legislatura?: LegislaturaUncheckedUpdateManyWithoutDeputadoNestedInput
    depesa?: DespesaUncheckedUpdateManyWithoutDeputadoNestedInput
  }

  export type RedeSocialCreateWithoutDeputadoInput = {
    url: string
    rede: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RedeSocialUncheckedCreateWithoutDeputadoInput = {
    id?: number
    url: string
    rede: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RedeSocialCreateOrConnectWithoutDeputadoInput = {
    where: RedeSocialWhereUniqueInput
    create: XOR<RedeSocialCreateWithoutDeputadoInput, RedeSocialUncheckedCreateWithoutDeputadoInput>
  }

  export type RedeSocialCreateManyDeputadoInputEnvelope = {
    data: Enumerable<RedeSocialCreateManyDeputadoInput>
    skipDuplicates?: boolean
  }

  export type PartidoCreateWithoutDeputadoInput = {
    idExterno: number
    sigla: string
    nome: string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidoUncheckedCreateWithoutDeputadoInput = {
    id?: number
    idExterno: number
    sigla: string
    nome: string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidoCreateOrConnectWithoutDeputadoInput = {
    where: PartidoWhereUniqueInput
    create: XOR<PartidoCreateWithoutDeputadoInput, PartidoUncheckedCreateWithoutDeputadoInput>
  }

  export type PartidoCreateManyDeputadoInputEnvelope = {
    data: Enumerable<PartidoCreateManyDeputadoInput>
    skipDuplicates?: boolean
  }

  export type LegislaturaCreateWithoutDeputadoInput = {
    idExterno: number
    dataInicio: Date | string
    dataFim: Date | string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegislaturaUncheckedCreateWithoutDeputadoInput = {
    id?: number
    idExterno: number
    dataInicio: Date | string
    dataFim: Date | string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegislaturaCreateOrConnectWithoutDeputadoInput = {
    where: LegislaturaWhereUniqueInput
    create: XOR<LegislaturaCreateWithoutDeputadoInput, LegislaturaUncheckedCreateWithoutDeputadoInput>
  }

  export type LegislaturaCreateManyDeputadoInputEnvelope = {
    data: Enumerable<LegislaturaCreateManyDeputadoInput>
    skipDuplicates?: boolean
  }

  export type DespesaCreateWithoutDeputadoInput = {
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutDespesaInput
    tipoDespesa: TipoDespesaCreateNestedOneWithoutDespesaInput
  }

  export type DespesaUncheckedCreateWithoutDeputadoInput = {
    id?: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idFornecedor: number
    idTipoDespesa: number
  }

  export type DespesaCreateOrConnectWithoutDeputadoInput = {
    where: DespesaWhereUniqueInput
    create: XOR<DespesaCreateWithoutDeputadoInput, DespesaUncheckedCreateWithoutDeputadoInput>
  }

  export type DespesaCreateManyDeputadoInputEnvelope = {
    data: Enumerable<DespesaCreateManyDeputadoInput>
    skipDuplicates?: boolean
  }

  export type RedeSocialUpsertWithWhereUniqueWithoutDeputadoInput = {
    where: RedeSocialWhereUniqueInput
    update: XOR<RedeSocialUpdateWithoutDeputadoInput, RedeSocialUncheckedUpdateWithoutDeputadoInput>
    create: XOR<RedeSocialCreateWithoutDeputadoInput, RedeSocialUncheckedCreateWithoutDeputadoInput>
  }

  export type RedeSocialUpdateWithWhereUniqueWithoutDeputadoInput = {
    where: RedeSocialWhereUniqueInput
    data: XOR<RedeSocialUpdateWithoutDeputadoInput, RedeSocialUncheckedUpdateWithoutDeputadoInput>
  }

  export type RedeSocialUpdateManyWithWhereWithoutDeputadoInput = {
    where: RedeSocialScalarWhereInput
    data: XOR<RedeSocialUpdateManyMutationInput, RedeSocialUncheckedUpdateManyWithoutRedeSocialInput>
  }

  export type RedeSocialScalarWhereInput = {
    AND?: Enumerable<RedeSocialScalarWhereInput>
    OR?: Enumerable<RedeSocialScalarWhereInput>
    NOT?: Enumerable<RedeSocialScalarWhereInput>
    id?: IntFilter | number
    url?: StringFilter | string
    rede?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    idDeputado?: IntFilter | number
  }

  export type PartidoUpsertWithWhereUniqueWithoutDeputadoInput = {
    where: PartidoWhereUniqueInput
    update: XOR<PartidoUpdateWithoutDeputadoInput, PartidoUncheckedUpdateWithoutDeputadoInput>
    create: XOR<PartidoCreateWithoutDeputadoInput, PartidoUncheckedCreateWithoutDeputadoInput>
  }

  export type PartidoUpdateWithWhereUniqueWithoutDeputadoInput = {
    where: PartidoWhereUniqueInput
    data: XOR<PartidoUpdateWithoutDeputadoInput, PartidoUncheckedUpdateWithoutDeputadoInput>
  }

  export type PartidoUpdateManyWithWhereWithoutDeputadoInput = {
    where: PartidoScalarWhereInput
    data: XOR<PartidoUpdateManyMutationInput, PartidoUncheckedUpdateManyWithoutPartidoInput>
  }

  export type PartidoScalarWhereInput = {
    AND?: Enumerable<PartidoScalarWhereInput>
    OR?: Enumerable<PartidoScalarWhereInput>
    NOT?: Enumerable<PartidoScalarWhereInput>
    id?: IntFilter | number
    idExterno?: IntFilter | number
    sigla?: StringFilter | string
    nome?: StringFilter | string
    uri?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    idDeputado?: IntNullableFilter | number | null
  }

  export type LegislaturaUpsertWithWhereUniqueWithoutDeputadoInput = {
    where: LegislaturaWhereUniqueInput
    update: XOR<LegislaturaUpdateWithoutDeputadoInput, LegislaturaUncheckedUpdateWithoutDeputadoInput>
    create: XOR<LegislaturaCreateWithoutDeputadoInput, LegislaturaUncheckedCreateWithoutDeputadoInput>
  }

  export type LegislaturaUpdateWithWhereUniqueWithoutDeputadoInput = {
    where: LegislaturaWhereUniqueInput
    data: XOR<LegislaturaUpdateWithoutDeputadoInput, LegislaturaUncheckedUpdateWithoutDeputadoInput>
  }

  export type LegislaturaUpdateManyWithWhereWithoutDeputadoInput = {
    where: LegislaturaScalarWhereInput
    data: XOR<LegislaturaUpdateManyMutationInput, LegislaturaUncheckedUpdateManyWithoutLegislaturaInput>
  }

  export type LegislaturaScalarWhereInput = {
    AND?: Enumerable<LegislaturaScalarWhereInput>
    OR?: Enumerable<LegislaturaScalarWhereInput>
    NOT?: Enumerable<LegislaturaScalarWhereInput>
    id?: IntFilter | number
    idExterno?: IntFilter | number
    dataInicio?: DateTimeFilter | Date | string
    dataFim?: DateTimeFilter | Date | string
    uri?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    idDeputado?: IntNullableFilter | number | null
  }

  export type DespesaUpsertWithWhereUniqueWithoutDeputadoInput = {
    where: DespesaWhereUniqueInput
    update: XOR<DespesaUpdateWithoutDeputadoInput, DespesaUncheckedUpdateWithoutDeputadoInput>
    create: XOR<DespesaCreateWithoutDeputadoInput, DespesaUncheckedCreateWithoutDeputadoInput>
  }

  export type DespesaUpdateWithWhereUniqueWithoutDeputadoInput = {
    where: DespesaWhereUniqueInput
    data: XOR<DespesaUpdateWithoutDeputadoInput, DespesaUncheckedUpdateWithoutDeputadoInput>
  }

  export type DespesaUpdateManyWithWhereWithoutDeputadoInput = {
    where: DespesaScalarWhereInput
    data: XOR<DespesaUpdateManyMutationInput, DespesaUncheckedUpdateManyWithoutDepesaInput>
  }

  export type DespesaScalarWhereInput = {
    AND?: Enumerable<DespesaScalarWhereInput>
    OR?: Enumerable<DespesaScalarWhereInput>
    NOT?: Enumerable<DespesaScalarWhereInput>
    id?: IntFilter | number
    ano?: IntFilter | number
    mes?: IntFilter | number
    codDocumento?: StringFilter | string
    tipoDocumento?: StringFilter | string
    codTipoDocumento?: IntFilter | number
    dataDocumento?: DateTimeFilter | Date | string
    numDocumento?: StringFilter | string
    valorDocumento?: DecimalFilter | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFilter | string
    valorLiquido?: DecimalFilter | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFilter | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFilter | string
    codLote?: IntFilter | number
    parcela?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    idFornecedor?: IntFilter | number
    idTipoDespesa?: IntFilter | number
    idDeputadoId?: IntNullableFilter | number | null
  }

  export type FornecedorCreateWithoutDespesaInput = {
    cpfCnpj: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorUncheckedCreateWithoutDespesaInput = {
    id?: number
    cpfCnpj: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorCreateOrConnectWithoutDespesaInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutDespesaInput, FornecedorUncheckedCreateWithoutDespesaInput>
  }

  export type TipoDespesaCreateWithoutDespesaInput = {
    idExterno: number
    tipo: string
    descricao: string
    sigla: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoDespesaUncheckedCreateWithoutDespesaInput = {
    id?: number
    idExterno: number
    tipo: string
    descricao: string
    sigla: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoDespesaCreateOrConnectWithoutDespesaInput = {
    where: TipoDespesaWhereUniqueInput
    create: XOR<TipoDespesaCreateWithoutDespesaInput, TipoDespesaUncheckedCreateWithoutDespesaInput>
  }

  export type DeputadoCreateWithoutDepesaInput = {
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    redeSocial?: RedeSocialCreateNestedManyWithoutDeputadoInput
    partido?: PartidoCreateNestedManyWithoutDeputadoInput
    legislatura?: LegislaturaCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoUncheckedCreateWithoutDepesaInput = {
    id?: number
    idExterno: number
    uri: string
    nome: string
    nomeCivil: string
    nomeEleitoral: string
    siglaUf: string
    urlFoto: string
    email: string
    situacao: string
    condicaoEleitoral: string
    cpf: string
    sexo: string
    urlWebSite: string
    dataNascimento: Date | string
    dataFalecimento: Date | string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    redeSocial?: RedeSocialUncheckedCreateNestedManyWithoutDeputadoInput
    partido?: PartidoUncheckedCreateNestedManyWithoutDeputadoInput
    legislatura?: LegislaturaUncheckedCreateNestedManyWithoutDeputadoInput
  }

  export type DeputadoCreateOrConnectWithoutDepesaInput = {
    where: DeputadoWhereUniqueInput
    create: XOR<DeputadoCreateWithoutDepesaInput, DeputadoUncheckedCreateWithoutDepesaInput>
  }

  export type FornecedorUpsertWithoutDespesaInput = {
    update: XOR<FornecedorUpdateWithoutDespesaInput, FornecedorUncheckedUpdateWithoutDespesaInput>
    create: XOR<FornecedorCreateWithoutDespesaInput, FornecedorUncheckedCreateWithoutDespesaInput>
  }

  export type FornecedorUpdateWithoutDespesaInput = {
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorUncheckedUpdateWithoutDespesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoDespesaUpsertWithoutDespesaInput = {
    update: XOR<TipoDespesaUpdateWithoutDespesaInput, TipoDespesaUncheckedUpdateWithoutDespesaInput>
    create: XOR<TipoDespesaCreateWithoutDespesaInput, TipoDespesaUncheckedCreateWithoutDespesaInput>
  }

  export type TipoDespesaUpdateWithoutDespesaInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoDespesaUncheckedUpdateWithoutDespesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeputadoUpsertWithoutDepesaInput = {
    update: XOR<DeputadoUpdateWithoutDepesaInput, DeputadoUncheckedUpdateWithoutDepesaInput>
    create: XOR<DeputadoCreateWithoutDepesaInput, DeputadoUncheckedCreateWithoutDepesaInput>
  }

  export type DeputadoUpdateWithoutDepesaInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeSocial?: RedeSocialUpdateManyWithoutDeputadoNestedInput
    partido?: PartidoUpdateManyWithoutDeputadoNestedInput
    legislatura?: LegislaturaUpdateManyWithoutDeputadoNestedInput
  }

  export type DeputadoUncheckedUpdateWithoutDepesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nomeCivil?: StringFieldUpdateOperationsInput | string
    nomeEleitoral?: StringFieldUpdateOperationsInput | string
    siglaUf?: StringFieldUpdateOperationsInput | string
    urlFoto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacao?: StringFieldUpdateOperationsInput | string
    condicaoEleitoral?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    urlWebSite?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFalecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    ufNascimento?: StringFieldUpdateOperationsInput | string
    municipioNascimento?: StringFieldUpdateOperationsInput | string
    escolaridade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeSocial?: RedeSocialUncheckedUpdateManyWithoutDeputadoNestedInput
    partido?: PartidoUncheckedUpdateManyWithoutDeputadoNestedInput
    legislatura?: LegislaturaUncheckedUpdateManyWithoutDeputadoNestedInput
  }

  export type DespesaCreateWithoutFornecedorInput = {
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipoDespesa: TipoDespesaCreateNestedOneWithoutDespesaInput
    deputado?: DeputadoCreateNestedOneWithoutDepesaInput
  }

  export type DespesaUncheckedCreateWithoutFornecedorInput = {
    id?: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idTipoDespesa: number
    idDeputadoId?: number | null
  }

  export type DespesaCreateOrConnectWithoutFornecedorInput = {
    where: DespesaWhereUniqueInput
    create: XOR<DespesaCreateWithoutFornecedorInput, DespesaUncheckedCreateWithoutFornecedorInput>
  }

  export type DespesaCreateManyFornecedorInputEnvelope = {
    data: Enumerable<DespesaCreateManyFornecedorInput>
    skipDuplicates?: boolean
  }

  export type DespesaUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: DespesaWhereUniqueInput
    update: XOR<DespesaUpdateWithoutFornecedorInput, DespesaUncheckedUpdateWithoutFornecedorInput>
    create: XOR<DespesaCreateWithoutFornecedorInput, DespesaUncheckedCreateWithoutFornecedorInput>
  }

  export type DespesaUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: DespesaWhereUniqueInput
    data: XOR<DespesaUpdateWithoutFornecedorInput, DespesaUncheckedUpdateWithoutFornecedorInput>
  }

  export type DespesaUpdateManyWithWhereWithoutFornecedorInput = {
    where: DespesaScalarWhereInput
    data: XOR<DespesaUpdateManyMutationInput, DespesaUncheckedUpdateManyWithoutDespesaInput>
  }

  export type DespesaCreateWithoutTipoDespesaInput = {
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutDespesaInput
    deputado?: DeputadoCreateNestedOneWithoutDepesaInput
  }

  export type DespesaUncheckedCreateWithoutTipoDespesaInput = {
    id?: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idFornecedor: number
    idDeputadoId?: number | null
  }

  export type DespesaCreateOrConnectWithoutTipoDespesaInput = {
    where: DespesaWhereUniqueInput
    create: XOR<DespesaCreateWithoutTipoDespesaInput, DespesaUncheckedCreateWithoutTipoDespesaInput>
  }

  export type DespesaCreateManyTipoDespesaInputEnvelope = {
    data: Enumerable<DespesaCreateManyTipoDespesaInput>
    skipDuplicates?: boolean
  }

  export type DespesaUpsertWithWhereUniqueWithoutTipoDespesaInput = {
    where: DespesaWhereUniqueInput
    update: XOR<DespesaUpdateWithoutTipoDespesaInput, DespesaUncheckedUpdateWithoutTipoDespesaInput>
    create: XOR<DespesaCreateWithoutTipoDespesaInput, DespesaUncheckedCreateWithoutTipoDespesaInput>
  }

  export type DespesaUpdateWithWhereUniqueWithoutTipoDespesaInput = {
    where: DespesaWhereUniqueInput
    data: XOR<DespesaUpdateWithoutTipoDespesaInput, DespesaUncheckedUpdateWithoutTipoDespesaInput>
  }

  export type DespesaUpdateManyWithWhereWithoutTipoDespesaInput = {
    where: DespesaScalarWhereInput
    data: XOR<DespesaUpdateManyMutationInput, DespesaUncheckedUpdateManyWithoutDespesaInput>
  }

  export type RedeSocialCreateManyDeputadoInput = {
    id?: number
    url: string
    rede: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidoCreateManyDeputadoInput = {
    id?: number
    idExterno: number
    sigla: string
    nome: string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegislaturaCreateManyDeputadoInput = {
    id?: number
    idExterno: number
    dataInicio: Date | string
    dataFim: Date | string
    uri: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DespesaCreateManyDeputadoInput = {
    id?: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idFornecedor: number
    idTipoDespesa: number
  }

  export type RedeSocialUpdateWithoutDeputadoInput = {
    url?: StringFieldUpdateOperationsInput | string
    rede?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeSocialUncheckedUpdateWithoutDeputadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    rede?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeSocialUncheckedUpdateManyWithoutRedeSocialInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    rede?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidoUpdateWithoutDeputadoInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidoUncheckedUpdateWithoutDeputadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidoUncheckedUpdateManyWithoutPartidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegislaturaUpdateWithoutDeputadoInput = {
    idExterno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegislaturaUncheckedUpdateWithoutDeputadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegislaturaUncheckedUpdateManyWithoutLegislaturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExterno?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DespesaUpdateWithoutDeputadoInput = {
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutDespesaNestedInput
    tipoDespesa?: TipoDespesaUpdateOneRequiredWithoutDespesaNestedInput
  }

  export type DespesaUncheckedUpdateWithoutDeputadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFornecedor?: IntFieldUpdateOperationsInput | number
    idTipoDespesa?: IntFieldUpdateOperationsInput | number
  }

  export type DespesaUncheckedUpdateManyWithoutDepesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFornecedor?: IntFieldUpdateOperationsInput | number
    idTipoDespesa?: IntFieldUpdateOperationsInput | number
  }

  export type DespesaCreateManyFornecedorInput = {
    id?: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idTipoDespesa: number
    idDeputadoId?: number | null
  }

  export type DespesaUpdateWithoutFornecedorInput = {
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoDespesa?: TipoDespesaUpdateOneRequiredWithoutDespesaNestedInput
    deputado?: DeputadoUpdateOneWithoutDepesaNestedInput
  }

  export type DespesaUncheckedUpdateWithoutFornecedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idTipoDespesa?: IntFieldUpdateOperationsInput | number
    idDeputadoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DespesaUncheckedUpdateManyWithoutDespesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idTipoDespesa?: IntFieldUpdateOperationsInput | number
    idDeputadoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DespesaCreateManyTipoDespesaInput = {
    id?: number
    ano: number
    mes: number
    codDocumento: string
    tipoDocumento: string
    codTipoDocumento: number
    dataDocumento: Date | string
    numDocumento: string
    valorDocumento: Decimal | DecimalJsLike | number | string
    urlDocumento: string
    valorLiquido: Decimal | DecimalJsLike | number | string
    valorGlosa: Decimal | DecimalJsLike | number | string
    numRessarcimento: string
    codLote: number
    parcela: number
    createdAt?: Date | string
    updatedAt?: Date | string
    idFornecedor: number
    idDeputadoId?: number | null
  }

  export type DespesaUpdateWithoutTipoDespesaInput = {
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutDespesaNestedInput
    deputado?: DeputadoUpdateOneWithoutDepesaNestedInput
  }

  export type DespesaUncheckedUpdateWithoutTipoDespesaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    codDocumento?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    codTipoDocumento?: IntFieldUpdateOperationsInput | number
    dataDocumento?: DateTimeFieldUpdateOperationsInput | Date | string
    numDocumento?: StringFieldUpdateOperationsInput | string
    valorDocumento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    urlDocumento?: StringFieldUpdateOperationsInput | string
    valorLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorGlosa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numRessarcimento?: StringFieldUpdateOperationsInput | string
    codLote?: IntFieldUpdateOperationsInput | number
    parcela?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFornecedor?: IntFieldUpdateOperationsInput | number
    idDeputadoId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
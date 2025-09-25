
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Accounts
 * 
 */
export type Accounts = $Result.DefaultSelection<Prisma.$AccountsPayload>
/**
 * Model Authentications
 * 
 */
export type Authentications = $Result.DefaultSelection<Prisma.$AuthenticationsPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>
/**
 * Model TwoFactorAuth
 * 
 */
export type TwoFactorAuth = $Result.DefaultSelection<Prisma.$TwoFactorAuthPayload>
/**
 * Model Contacts
 * 
 */
export type Contacts = $Result.DefaultSelection<Prisma.$ContactsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model addresses
 * 
 */
export type addresses = $Result.DefaultSelection<Prisma.$addressesPayload>
/**
 * Model ProductsCategories
 * 
 */
export type ProductsCategories = $Result.DefaultSelection<Prisma.$ProductsCategoriesPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model ProductsImages
 * 
 */
export type ProductsImages = $Result.DefaultSelection<Prisma.$ProductsImagesPayload>
/**
 * Model productsReviews
 * 
 */
export type productsReviews = $Result.DefaultSelection<Prisma.$productsReviewsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderItems
 * 
 */
export type OrderItems = $Result.DefaultSelection<Prisma.$OrderItemsPayload>
/**
 * Model Carts
 * 
 */
export type Carts = $Result.DefaultSelection<Prisma.$CartsPayload>
/**
 * Model CartItems
 * 
 */
export type CartItems = $Result.DefaultSelection<Prisma.$CartItemsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UsersTypes: {
  admin: 'admin',
  client: 'client'
};

export type UsersTypes = (typeof UsersTypes)[keyof typeof UsersTypes]


export const OrderStatus: {
  pending: 'pending',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const CartStatus: {
  waiting: 'waiting',
  active: 'active',
  ordered: 'ordered',
  cancelled: 'cancelled'
};

export type CartStatus = (typeof CartStatus)[keyof typeof CartStatus]


export const AuthenticationsTypes: {
  by_token: 'by_token',
  by_otp: 'by_otp'
};

export type AuthenticationsTypes = (typeof AuthenticationsTypes)[keyof typeof AuthenticationsTypes]


export const TokenTypes: {
  refreshToken: 'refreshToken',
  resetPassword: 'resetPassword'
};

export type TokenTypes = (typeof TokenTypes)[keyof typeof TokenTypes]

}

export type UsersTypes = $Enums.UsersTypes

export const UsersTypes: typeof $Enums.UsersTypes

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type CartStatus = $Enums.CartStatus

export const CartStatus: typeof $Enums.CartStatus

export type AuthenticationsTypes = $Enums.AuthenticationsTypes

export const AuthenticationsTypes: typeof $Enums.AuthenticationsTypes

export type TokenTypes = $Enums.TokenTypes

export const TokenTypes: typeof $Enums.TokenTypes

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **Accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.AccountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authentications`: Exposes CRUD operations for the **Authentications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authentications
    * const authentications = await prisma.authentications.findMany()
    * ```
    */
  get authentications(): Prisma.AuthenticationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.twoFactorAuth`: Exposes CRUD operations for the **TwoFactorAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwoFactorAuths
    * const twoFactorAuths = await prisma.twoFactorAuth.findMany()
    * ```
    */
  get twoFactorAuth(): Prisma.TwoFactorAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacts`: Exposes CRUD operations for the **Contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.ContactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addresses`: Exposes CRUD operations for the **addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.addresses.findMany()
    * ```
    */
  get addresses(): Prisma.addressesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productsCategories`: Exposes CRUD operations for the **ProductsCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsCategories
    * const productsCategories = await prisma.productsCategories.findMany()
    * ```
    */
  get productsCategories(): Prisma.ProductsCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productsImages`: Exposes CRUD operations for the **ProductsImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsImages
    * const productsImages = await prisma.productsImages.findMany()
    * ```
    */
  get productsImages(): Prisma.ProductsImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productsReviews`: Exposes CRUD operations for the **productsReviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsReviews
    * const productsReviews = await prisma.productsReviews.findMany()
    * ```
    */
  get productsReviews(): Prisma.productsReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **OrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.OrderItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **Carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.CartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItems`: Exposes CRUD operations for the **CartItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItems.findMany()
    * ```
    */
  get cartItems(): Prisma.CartItemsDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Accounts: 'Accounts',
    Authentications: 'Authentications',
    Tokens: 'Tokens',
    TwoFactorAuth: 'TwoFactorAuth',
    Contacts: 'Contacts',
    Users: 'Users',
    addresses: 'addresses',
    ProductsCategories: 'ProductsCategories',
    Products: 'Products',
    ProductsImages: 'ProductsImages',
    productsReviews: 'productsReviews',
    Orders: 'Orders',
    OrderItems: 'OrderItems',
    Carts: 'Carts',
    CartItems: 'CartItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "accounts" | "authentications" | "tokens" | "twoFactorAuth" | "contacts" | "users" | "addresses" | "productsCategories" | "products" | "productsImages" | "productsReviews" | "orders" | "orderItems" | "carts" | "cartItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Accounts: {
        payload: Prisma.$AccountsPayload<ExtArgs>
        fields: Prisma.AccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findFirst: {
            args: Prisma.AccountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findMany: {
            args: Prisma.AccountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          create: {
            args: Prisma.AccountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          createMany: {
            args: Prisma.AccountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          delete: {
            args: Prisma.AccountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          update: {
            args: Prisma.AccountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          deleteMany: {
            args: Prisma.AccountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          upsert: {
            args: Prisma.AccountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.AccountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      Authentications: {
        payload: Prisma.$AuthenticationsPayload<ExtArgs>
        fields: Prisma.AuthenticationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload>
          }
          findFirst: {
            args: Prisma.AuthenticationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload>
          }
          findMany: {
            args: Prisma.AuthenticationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload>[]
          }
          create: {
            args: Prisma.AuthenticationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload>
          }
          createMany: {
            args: Prisma.AuthenticationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthenticationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload>[]
          }
          delete: {
            args: Prisma.AuthenticationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload>
          }
          update: {
            args: Prisma.AuthenticationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthenticationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload>[]
          }
          upsert: {
            args: Prisma.AuthenticationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticationsPayload>
          }
          aggregate: {
            args: Prisma.AuthenticationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthentications>
          }
          groupBy: {
            args: Prisma.AuthenticationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticationsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticationsCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      TwoFactorAuth: {
        payload: Prisma.$TwoFactorAuthPayload<ExtArgs>
        fields: Prisma.TwoFactorAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TwoFactorAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TwoFactorAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          findFirst: {
            args: Prisma.TwoFactorAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TwoFactorAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          findMany: {
            args: Prisma.TwoFactorAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>[]
          }
          create: {
            args: Prisma.TwoFactorAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          createMany: {
            args: Prisma.TwoFactorAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TwoFactorAuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>[]
          }
          delete: {
            args: Prisma.TwoFactorAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          update: {
            args: Prisma.TwoFactorAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          deleteMany: {
            args: Prisma.TwoFactorAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TwoFactorAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TwoFactorAuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>[]
          }
          upsert: {
            args: Prisma.TwoFactorAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          aggregate: {
            args: Prisma.TwoFactorAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTwoFactorAuth>
          }
          groupBy: {
            args: Prisma.TwoFactorAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.TwoFactorAuthCountArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorAuthCountAggregateOutputType> | number
          }
        }
      }
      Contacts: {
        payload: Prisma.$ContactsPayload<ExtArgs>
        fields: Prisma.ContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findFirst: {
            args: Prisma.ContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findMany: {
            args: Prisma.ContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          create: {
            args: Prisma.ContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          createMany: {
            args: Prisma.ContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          delete: {
            args: Prisma.ContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          update: {
            args: Prisma.ContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          deleteMany: {
            args: Prisma.ContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          upsert: {
            args: Prisma.ContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.ContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      addresses: {
        payload: Prisma.$addressesPayload<ExtArgs>
        fields: Prisma.addressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findFirst: {
            args: Prisma.addressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findMany: {
            args: Prisma.addressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          create: {
            args: Prisma.addressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          createMany: {
            args: Prisma.addressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addressesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          delete: {
            args: Prisma.addressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          update: {
            args: Prisma.addressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          deleteMany: {
            args: Prisma.addressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addressesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          upsert: {
            args: Prisma.addressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          aggregate: {
            args: Prisma.AddressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddresses>
          }
          groupBy: {
            args: Prisma.addressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressesCountArgs<ExtArgs>
            result: $Utils.Optional<AddressesCountAggregateOutputType> | number
          }
        }
      }
      ProductsCategories: {
        payload: Prisma.$ProductsCategoriesPayload<ExtArgs>
        fields: Prisma.ProductsCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload>
          }
          findFirst: {
            args: Prisma.ProductsCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload>
          }
          findMany: {
            args: Prisma.ProductsCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload>[]
          }
          create: {
            args: Prisma.ProductsCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload>
          }
          createMany: {
            args: Prisma.ProductsCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload>[]
          }
          delete: {
            args: Prisma.ProductsCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload>
          }
          update: {
            args: Prisma.ProductsCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.ProductsCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsCategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload>[]
          }
          upsert: {
            args: Prisma.ProductsCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsCategoriesPayload>
          }
          aggregate: {
            args: Prisma.ProductsCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsCategories>
          }
          groupBy: {
            args: Prisma.ProductsCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCategoriesCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      ProductsImages: {
        payload: Prisma.$ProductsImagesPayload<ExtArgs>
        fields: Prisma.ProductsImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload>
          }
          findFirst: {
            args: Prisma.ProductsImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload>
          }
          findMany: {
            args: Prisma.ProductsImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload>[]
          }
          create: {
            args: Prisma.ProductsImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload>
          }
          createMany: {
            args: Prisma.ProductsImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload>[]
          }
          delete: {
            args: Prisma.ProductsImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload>
          }
          update: {
            args: Prisma.ProductsImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload>
          }
          deleteMany: {
            args: Prisma.ProductsImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload>[]
          }
          upsert: {
            args: Prisma.ProductsImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsImagesPayload>
          }
          aggregate: {
            args: Prisma.ProductsImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsImages>
          }
          groupBy: {
            args: Prisma.ProductsImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsImagesCountAggregateOutputType> | number
          }
        }
      }
      productsReviews: {
        payload: Prisma.$productsReviewsPayload<ExtArgs>
        fields: Prisma.productsReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload>
          }
          findFirst: {
            args: Prisma.productsReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload>
          }
          findMany: {
            args: Prisma.productsReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload>[]
          }
          create: {
            args: Prisma.productsReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload>
          }
          createMany: {
            args: Prisma.productsReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload>[]
          }
          delete: {
            args: Prisma.productsReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload>
          }
          update: {
            args: Prisma.productsReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload>
          }
          deleteMany: {
            args: Prisma.productsReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload>[]
          }
          upsert: {
            args: Prisma.productsReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsReviewsPayload>
          }
          aggregate: {
            args: Prisma.ProductsReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsReviews>
          }
          groupBy: {
            args: Prisma.productsReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsReviewsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderItems: {
        payload: Prisma.$OrderItemsPayload<ExtArgs>
        fields: Prisma.OrderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findFirst: {
            args: Prisma.OrderItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findMany: {
            args: Prisma.OrderItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          create: {
            args: Prisma.OrderItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          createMany: {
            args: Prisma.OrderItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          delete: {
            args: Prisma.OrderItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          update: {
            args: Prisma.OrderItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItems>
          }
          groupBy: {
            args: Prisma.OrderItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsCountAggregateOutputType> | number
          }
        }
      }
      Carts: {
        payload: Prisma.$CartsPayload<ExtArgs>
        fields: Prisma.CartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findFirst: {
            args: Prisma.CartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findMany: {
            args: Prisma.CartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          create: {
            args: Prisma.CartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          createMany: {
            args: Prisma.CartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          delete: {
            args: Prisma.CartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          update: {
            args: Prisma.CartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          deleteMany: {
            args: Prisma.CartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          upsert: {
            args: Prisma.CartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.CartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      CartItems: {
        payload: Prisma.$CartItemsPayload<ExtArgs>
        fields: Prisma.CartItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          findFirst: {
            args: Prisma.CartItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          findMany: {
            args: Prisma.CartItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          create: {
            args: Prisma.CartItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          createMany: {
            args: Prisma.CartItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          delete: {
            args: Prisma.CartItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          update: {
            args: Prisma.CartItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          deleteMany: {
            args: Prisma.CartItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          upsert: {
            args: Prisma.CartItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          aggregate: {
            args: Prisma.CartItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItems>
          }
          groupBy: {
            args: Prisma.CartItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemsCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    accounts?: AccountsOmit
    authentications?: AuthenticationsOmit
    tokens?: TokensOmit
    twoFactorAuth?: TwoFactorAuthOmit
    contacts?: ContactsOmit
    users?: UsersOmit
    addresses?: addressesOmit
    productsCategories?: ProductsCategoriesOmit
    products?: ProductsOmit
    productsImages?: ProductsImagesOmit
    productsReviews?: productsReviewsOmit
    orders?: OrdersOmit
    orderItems?: OrderItemsOmit
    carts?: CartsOmit
    cartItems?: CartItemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    authentication_details: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication_details?: boolean | AccountsCountOutputTypeCountAuthentication_detailsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountAuthentication_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticationsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    my_contacts: number
    my_addresses: number
    my_orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    my_contacts?: boolean | UsersCountOutputTypeCountMy_contactsArgs
    my_addresses?: boolean | UsersCountOutputTypeCountMy_addressesArgs
    my_orders?: boolean | UsersCountOutputTypeCountMy_ordersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMy_contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMy_addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMy_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type ProductsCategoriesCountOutputType
   */

  export type ProductsCategoriesCountOutputType = {
    products: number
  }

  export type ProductsCategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsCategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCategoriesCountOutputType without action
   */
  export type ProductsCategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategoriesCountOutputType
     */
    select?: ProductsCategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCategoriesCountOutputType without action
   */
  export type ProductsCategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    images: number
    reviews: number
    order_items: number
    cart_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductsCountOutputTypeCountImagesArgs
    reviews?: boolean | ProductsCountOutputTypeCountReviewsArgs
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
    cart_items?: boolean | ProductsCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsImagesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsReviewsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }


  /**
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cart_items: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    id_account: string | null
    email: string | null
    password: string | null
    verified: boolean | null
    providerId: string | null
    provider: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id_account: string | null
    email: string | null
    password: string | null
    verified: boolean | null
    providerId: string | null
    provider: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id_account: number
    email: number
    password: number
    verified: number
    providerId: number
    provider: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    id_account?: true
    email?: true
    password?: true
    verified?: true
    providerId?: true
    provider?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsMaxAggregateInputType = {
    id_account?: true
    email?: true
    password?: true
    verified?: true
    providerId?: true
    provider?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsCountAggregateInputType = {
    id_account?: true
    email?: true
    password?: true
    verified?: true
    providerId?: true
    provider?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to aggregate.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithAggregationInput | AccountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: AccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id_account: string
    email: string
    password: string
    verified: boolean | null
    providerId: string | null
    provider: string | null
    created_at: Date
    updated_at: Date
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type AccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_account?: boolean
    email?: boolean
    password?: boolean
    verified?: boolean
    providerId?: boolean
    provider?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | Accounts$user_detailsArgs<ExtArgs>
    authentication_details?: boolean | Accounts$authentication_detailsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_account?: boolean
    email?: boolean
    password?: boolean
    verified?: boolean
    providerId?: boolean
    provider?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_account?: boolean
    email?: boolean
    password?: boolean
    verified?: boolean
    providerId?: boolean
    provider?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectScalar = {
    id_account?: boolean
    email?: boolean
    password?: boolean
    verified?: boolean
    providerId?: boolean
    provider?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AccountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_account" | "email" | "password" | "verified" | "providerId" | "provider" | "created_at" | "updated_at", ExtArgs["result"]["accounts"]>
  export type AccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | Accounts$user_detailsArgs<ExtArgs>
    authentication_details?: boolean | Accounts$authentication_detailsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accounts"
    objects: {
      user_details: Prisma.$UsersPayload<ExtArgs> | null
      authentication_details: Prisma.$AuthenticationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_account: string
      email: string
      password: string
      verified: boolean | null
      providerId: string | null
      provider: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type AccountsGetPayload<S extends boolean | null | undefined | AccountsDefaultArgs> = $Result.GetResult<Prisma.$AccountsPayload, S>

  type AccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface AccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accounts'], meta: { name: 'Accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {AccountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountsFindUniqueArgs>(args: SelectSubset<T, AccountsFindUniqueArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountsFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountsFindFirstArgs>(args?: SelectSubset<T, AccountsFindFirstArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountsFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id_account`
     * const accountsWithId_accountOnly = await prisma.accounts.findMany({ select: { id_account: true } })
     * 
     */
    findMany<T extends AccountsFindManyArgs>(args?: SelectSubset<T, AccountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {AccountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends AccountsCreateArgs>(args: SelectSubset<T, AccountsCreateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountsCreateManyArgs>(args?: SelectSubset<T, AccountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id_account`
     * const accountsWithId_accountOnly = await prisma.accounts.createManyAndReturn({
     *   select: { id_account: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountsCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {AccountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends AccountsDeleteArgs>(args: SelectSubset<T, AccountsDeleteArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {AccountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountsUpdateArgs>(args: SelectSubset<T, AccountsUpdateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountsDeleteManyArgs>(args?: SelectSubset<T, AccountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountsUpdateManyArgs>(args: SelectSubset<T, AccountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id_account`
     * const accountsWithId_accountOnly = await prisma.accounts.updateManyAndReturn({
     *   select: { id_account: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountsUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {AccountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends AccountsUpsertArgs>(args: SelectSubset<T, AccountsUpsertArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountsCountArgs>(
      args?: Subset<T, AccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
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
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accounts model
   */
  readonly fields: AccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_details<T extends Accounts$user_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$user_detailsArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    authentication_details<T extends Accounts$authentication_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$authentication_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Accounts model
   */
  interface AccountsFieldRefs {
    readonly id_account: FieldRef<"Accounts", 'String'>
    readonly email: FieldRef<"Accounts", 'String'>
    readonly password: FieldRef<"Accounts", 'String'>
    readonly verified: FieldRef<"Accounts", 'Boolean'>
    readonly providerId: FieldRef<"Accounts", 'String'>
    readonly provider: FieldRef<"Accounts", 'String'>
    readonly created_at: FieldRef<"Accounts", 'DateTime'>
    readonly updated_at: FieldRef<"Accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accounts findUnique
   */
  export type AccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findUniqueOrThrow
   */
  export type AccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findFirst
   */
  export type AccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findFirstOrThrow
   */
  export type AccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findMany
   */
  export type AccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts create
   */
  export type AccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a Accounts.
     */
    data: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
  }

  /**
   * Accounts createMany
   */
  export type AccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accounts createManyAndReturn
   */
  export type AccountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accounts update
   */
  export type AccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a Accounts.
     */
    data: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
    /**
     * Choose, which Accounts to update.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts updateMany
   */
  export type AccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Accounts updateManyAndReturn
   */
  export type AccountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Accounts upsert
   */
  export type AccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the Accounts to update in case it exists.
     */
    where: AccountsWhereUniqueInput
    /**
     * In case the Accounts found by the `where` argument doesn't exist, create a new Accounts with this data.
     */
    create: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
    /**
     * In case the Accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
  }

  /**
   * Accounts delete
   */
  export type AccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter which Accounts to delete.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts deleteMany
   */
  export type AccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Accounts.user_details
   */
  export type Accounts$user_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Accounts.authentication_details
   */
  export type Accounts$authentication_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    where?: AuthenticationsWhereInput
    orderBy?: AuthenticationsOrderByWithRelationInput | AuthenticationsOrderByWithRelationInput[]
    cursor?: AuthenticationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticationsScalarFieldEnum | AuthenticationsScalarFieldEnum[]
  }

  /**
   * Accounts without action
   */
  export type AccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
  }


  /**
   * Model Authentications
   */

  export type AggregateAuthentications = {
    _count: AuthenticationsCountAggregateOutputType | null
    _min: AuthenticationsMinAggregateOutputType | null
    _max: AuthenticationsMaxAggregateOutputType | null
  }

  export type AuthenticationsMinAggregateOutputType = {
    id_authentication: string | null
    type: $Enums.AuthenticationsTypes | null
    expireIn: Date | null
    used: boolean | null
    id_account_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuthenticationsMaxAggregateOutputType = {
    id_authentication: string | null
    type: $Enums.AuthenticationsTypes | null
    expireIn: Date | null
    used: boolean | null
    id_account_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuthenticationsCountAggregateOutputType = {
    id_authentication: number
    type: number
    expireIn: number
    used: number
    id_account_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AuthenticationsMinAggregateInputType = {
    id_authentication?: true
    type?: true
    expireIn?: true
    used?: true
    id_account_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type AuthenticationsMaxAggregateInputType = {
    id_authentication?: true
    type?: true
    expireIn?: true
    used?: true
    id_account_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type AuthenticationsCountAggregateInputType = {
    id_authentication?: true
    type?: true
    expireIn?: true
    used?: true
    id_account_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AuthenticationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authentications to aggregate.
     */
    where?: AuthenticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: AuthenticationsOrderByWithRelationInput | AuthenticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authentications
    **/
    _count?: true | AuthenticationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticationsMaxAggregateInputType
  }

  export type GetAuthenticationsAggregateType<T extends AuthenticationsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthentications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthentications[P]>
      : GetScalarType<T[P], AggregateAuthentications[P]>
  }




  export type AuthenticationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticationsWhereInput
    orderBy?: AuthenticationsOrderByWithAggregationInput | AuthenticationsOrderByWithAggregationInput[]
    by: AuthenticationsScalarFieldEnum[] | AuthenticationsScalarFieldEnum
    having?: AuthenticationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticationsCountAggregateInputType | true
    _min?: AuthenticationsMinAggregateInputType
    _max?: AuthenticationsMaxAggregateInputType
  }

  export type AuthenticationsGroupByOutputType = {
    id_authentication: string
    type: $Enums.AuthenticationsTypes
    expireIn: Date
    used: boolean
    id_account_fk: string
    created_at: Date
    updated_at: Date
    _count: AuthenticationsCountAggregateOutputType | null
    _min: AuthenticationsMinAggregateOutputType | null
    _max: AuthenticationsMaxAggregateOutputType | null
  }

  type GetAuthenticationsGroupByPayload<T extends AuthenticationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticationsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticationsGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_authentication?: boolean
    type?: boolean
    expireIn?: boolean
    used?: boolean
    id_account_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
    token_details?: boolean | Authentications$token_detailsArgs<ExtArgs>
    twoFactorAuth_details?: boolean | Authentications$twoFactorAuth_detailsArgs<ExtArgs>
  }, ExtArgs["result"]["authentications"]>

  export type AuthenticationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_authentication?: boolean
    type?: boolean
    expireIn?: boolean
    used?: boolean
    id_account_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authentications"]>

  export type AuthenticationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_authentication?: boolean
    type?: boolean
    expireIn?: boolean
    used?: boolean
    id_account_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authentications"]>

  export type AuthenticationsSelectScalar = {
    id_authentication?: boolean
    type?: boolean
    expireIn?: boolean
    used?: boolean
    id_account_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AuthenticationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_authentication" | "type" | "expireIn" | "used" | "id_account_fk" | "created_at" | "updated_at", ExtArgs["result"]["authentications"]>
  export type AuthenticationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
    token_details?: boolean | Authentications$token_detailsArgs<ExtArgs>
    twoFactorAuth_details?: boolean | Authentications$twoFactorAuth_detailsArgs<ExtArgs>
  }
  export type AuthenticationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type AuthenticationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $AuthenticationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authentications"
    objects: {
      account_details: Prisma.$AccountsPayload<ExtArgs>
      token_details: Prisma.$TokensPayload<ExtArgs> | null
      twoFactorAuth_details: Prisma.$TwoFactorAuthPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_authentication: string
      type: $Enums.AuthenticationsTypes
      expireIn: Date
      used: boolean
      id_account_fk: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["authentications"]>
    composites: {}
  }

  type AuthenticationsGetPayload<S extends boolean | null | undefined | AuthenticationsDefaultArgs> = $Result.GetResult<Prisma.$AuthenticationsPayload, S>

  type AuthenticationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticationsCountAggregateInputType | true
    }

  export interface AuthenticationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authentications'], meta: { name: 'Authentications' } }
    /**
     * Find zero or one Authentications that matches the filter.
     * @param {AuthenticationsFindUniqueArgs} args - Arguments to find a Authentications
     * @example
     * // Get one Authentications
     * const authentications = await prisma.authentications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticationsFindUniqueArgs>(args: SelectSubset<T, AuthenticationsFindUniqueArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authentications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticationsFindUniqueOrThrowArgs} args - Arguments to find a Authentications
     * @example
     * // Get one Authentications
     * const authentications = await prisma.authentications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticationsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthenticationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationsFindFirstArgs} args - Arguments to find a Authentications
     * @example
     * // Get one Authentications
     * const authentications = await prisma.authentications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticationsFindFirstArgs>(args?: SelectSubset<T, AuthenticationsFindFirstArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationsFindFirstOrThrowArgs} args - Arguments to find a Authentications
     * @example
     * // Get one Authentications
     * const authentications = await prisma.authentications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticationsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthenticationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authentications
     * const authentications = await prisma.authentications.findMany()
     * 
     * // Get first 10 Authentications
     * const authentications = await prisma.authentications.findMany({ take: 10 })
     * 
     * // Only select the `id_authentication`
     * const authenticationsWithId_authenticationOnly = await prisma.authentications.findMany({ select: { id_authentication: true } })
     * 
     */
    findMany<T extends AuthenticationsFindManyArgs>(args?: SelectSubset<T, AuthenticationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authentications.
     * @param {AuthenticationsCreateArgs} args - Arguments to create a Authentications.
     * @example
     * // Create one Authentications
     * const Authentications = await prisma.authentications.create({
     *   data: {
     *     // ... data to create a Authentications
     *   }
     * })
     * 
     */
    create<T extends AuthenticationsCreateArgs>(args: SelectSubset<T, AuthenticationsCreateArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authentications.
     * @param {AuthenticationsCreateManyArgs} args - Arguments to create many Authentications.
     * @example
     * // Create many Authentications
     * const authentications = await prisma.authentications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthenticationsCreateManyArgs>(args?: SelectSubset<T, AuthenticationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authentications and returns the data saved in the database.
     * @param {AuthenticationsCreateManyAndReturnArgs} args - Arguments to create many Authentications.
     * @example
     * // Create many Authentications
     * const authentications = await prisma.authentications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authentications and only return the `id_authentication`
     * const authenticationsWithId_authenticationOnly = await prisma.authentications.createManyAndReturn({
     *   select: { id_authentication: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthenticationsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthenticationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authentications.
     * @param {AuthenticationsDeleteArgs} args - Arguments to delete one Authentications.
     * @example
     * // Delete one Authentications
     * const Authentications = await prisma.authentications.delete({
     *   where: {
     *     // ... filter to delete one Authentications
     *   }
     * })
     * 
     */
    delete<T extends AuthenticationsDeleteArgs>(args: SelectSubset<T, AuthenticationsDeleteArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authentications.
     * @param {AuthenticationsUpdateArgs} args - Arguments to update one Authentications.
     * @example
     * // Update one Authentications
     * const authentications = await prisma.authentications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthenticationsUpdateArgs>(args: SelectSubset<T, AuthenticationsUpdateArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authentications.
     * @param {AuthenticationsDeleteManyArgs} args - Arguments to filter Authentications to delete.
     * @example
     * // Delete a few Authentications
     * const { count } = await prisma.authentications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthenticationsDeleteManyArgs>(args?: SelectSubset<T, AuthenticationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authentications
     * const authentications = await prisma.authentications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthenticationsUpdateManyArgs>(args: SelectSubset<T, AuthenticationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentications and returns the data updated in the database.
     * @param {AuthenticationsUpdateManyAndReturnArgs} args - Arguments to update many Authentications.
     * @example
     * // Update many Authentications
     * const authentications = await prisma.authentications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authentications and only return the `id_authentication`
     * const authenticationsWithId_authenticationOnly = await prisma.authentications.updateManyAndReturn({
     *   select: { id_authentication: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthenticationsUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthenticationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authentications.
     * @param {AuthenticationsUpsertArgs} args - Arguments to update or create a Authentications.
     * @example
     * // Update or create a Authentications
     * const authentications = await prisma.authentications.upsert({
     *   create: {
     *     // ... data to create a Authentications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authentications we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticationsUpsertArgs>(args: SelectSubset<T, AuthenticationsUpsertArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationsCountArgs} args - Arguments to filter Authentications to count.
     * @example
     * // Count the number of Authentications
     * const count = await prisma.authentications.count({
     *   where: {
     *     // ... the filter for the Authentications we want to count
     *   }
     * })
    **/
    count<T extends AuthenticationsCountArgs>(
      args?: Subset<T, AuthenticationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthenticationsAggregateArgs>(args: Subset<T, AuthenticationsAggregateArgs>): Prisma.PrismaPromise<GetAuthenticationsAggregateType<T>>

    /**
     * Group by Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationsGroupByArgs} args - Group by arguments.
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
      T extends AuthenticationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticationsGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AuthenticationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authentications model
   */
  readonly fields: AuthenticationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authentications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account_details<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    token_details<T extends Authentications$token_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Authentications$token_detailsArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    twoFactorAuth_details<T extends Authentications$twoFactorAuth_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Authentications$twoFactorAuth_detailsArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Authentications model
   */
  interface AuthenticationsFieldRefs {
    readonly id_authentication: FieldRef<"Authentications", 'String'>
    readonly type: FieldRef<"Authentications", 'AuthenticationsTypes'>
    readonly expireIn: FieldRef<"Authentications", 'DateTime'>
    readonly used: FieldRef<"Authentications", 'Boolean'>
    readonly id_account_fk: FieldRef<"Authentications", 'String'>
    readonly created_at: FieldRef<"Authentications", 'DateTime'>
    readonly updated_at: FieldRef<"Authentications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Authentications findUnique
   */
  export type AuthenticationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    /**
     * Filter, which Authentications to fetch.
     */
    where: AuthenticationsWhereUniqueInput
  }

  /**
   * Authentications findUniqueOrThrow
   */
  export type AuthenticationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    /**
     * Filter, which Authentications to fetch.
     */
    where: AuthenticationsWhereUniqueInput
  }

  /**
   * Authentications findFirst
   */
  export type AuthenticationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    /**
     * Filter, which Authentications to fetch.
     */
    where?: AuthenticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: AuthenticationsOrderByWithRelationInput | AuthenticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authentications.
     */
    cursor?: AuthenticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authentications.
     */
    distinct?: AuthenticationsScalarFieldEnum | AuthenticationsScalarFieldEnum[]
  }

  /**
   * Authentications findFirstOrThrow
   */
  export type AuthenticationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    /**
     * Filter, which Authentications to fetch.
     */
    where?: AuthenticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: AuthenticationsOrderByWithRelationInput | AuthenticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authentications.
     */
    cursor?: AuthenticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authentications.
     */
    distinct?: AuthenticationsScalarFieldEnum | AuthenticationsScalarFieldEnum[]
  }

  /**
   * Authentications findMany
   */
  export type AuthenticationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    /**
     * Filter, which Authentications to fetch.
     */
    where?: AuthenticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: AuthenticationsOrderByWithRelationInput | AuthenticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authentications.
     */
    cursor?: AuthenticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    distinct?: AuthenticationsScalarFieldEnum | AuthenticationsScalarFieldEnum[]
  }

  /**
   * Authentications create
   */
  export type AuthenticationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Authentications.
     */
    data: XOR<AuthenticationsCreateInput, AuthenticationsUncheckedCreateInput>
  }

  /**
   * Authentications createMany
   */
  export type AuthenticationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authentications.
     */
    data: AuthenticationsCreateManyInput | AuthenticationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authentications createManyAndReturn
   */
  export type AuthenticationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * The data used to create many Authentications.
     */
    data: AuthenticationsCreateManyInput | AuthenticationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authentications update
   */
  export type AuthenticationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Authentications.
     */
    data: XOR<AuthenticationsUpdateInput, AuthenticationsUncheckedUpdateInput>
    /**
     * Choose, which Authentications to update.
     */
    where: AuthenticationsWhereUniqueInput
  }

  /**
   * Authentications updateMany
   */
  export type AuthenticationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authentications.
     */
    data: XOR<AuthenticationsUpdateManyMutationInput, AuthenticationsUncheckedUpdateManyInput>
    /**
     * Filter which Authentications to update
     */
    where?: AuthenticationsWhereInput
    /**
     * Limit how many Authentications to update.
     */
    limit?: number
  }

  /**
   * Authentications updateManyAndReturn
   */
  export type AuthenticationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * The data used to update Authentications.
     */
    data: XOR<AuthenticationsUpdateManyMutationInput, AuthenticationsUncheckedUpdateManyInput>
    /**
     * Filter which Authentications to update
     */
    where?: AuthenticationsWhereInput
    /**
     * Limit how many Authentications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authentications upsert
   */
  export type AuthenticationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Authentications to update in case it exists.
     */
    where: AuthenticationsWhereUniqueInput
    /**
     * In case the Authentications found by the `where` argument doesn't exist, create a new Authentications with this data.
     */
    create: XOR<AuthenticationsCreateInput, AuthenticationsUncheckedCreateInput>
    /**
     * In case the Authentications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticationsUpdateInput, AuthenticationsUncheckedUpdateInput>
  }

  /**
   * Authentications delete
   */
  export type AuthenticationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    /**
     * Filter which Authentications to delete.
     */
    where: AuthenticationsWhereUniqueInput
  }

  /**
   * Authentications deleteMany
   */
  export type AuthenticationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authentications to delete
     */
    where?: AuthenticationsWhereInput
    /**
     * Limit how many Authentications to delete.
     */
    limit?: number
  }

  /**
   * Authentications.token_details
   */
  export type Authentications$token_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    where?: TokensWhereInput
  }

  /**
   * Authentications.twoFactorAuth_details
   */
  export type Authentications$twoFactorAuth_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    where?: TwoFactorAuthWhereInput
  }

  /**
   * Authentications without action
   */
  export type AuthenticationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
  }


  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensMinAggregateOutputType = {
    id_token: string | null
    token: string | null
    token_type: $Enums.TokenTypes | null
    id_authentication: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TokensMaxAggregateOutputType = {
    id_token: string | null
    token: string | null
    token_type: $Enums.TokenTypes | null
    id_authentication: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TokensCountAggregateOutputType = {
    id_token: number
    token: number
    token_type: number
    id_authentication: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TokensMinAggregateInputType = {
    id_token?: true
    token?: true
    token_type?: true
    id_authentication?: true
    created_at?: true
    updated_at?: true
  }

  export type TokensMaxAggregateInputType = {
    id_token?: true
    token?: true
    token_type?: true
    id_authentication?: true
    created_at?: true
    updated_at?: true
  }

  export type TokensCountAggregateInputType = {
    id_token?: true
    token?: true
    token_type?: true
    id_authentication?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id_token: string
    token: string
    token_type: $Enums.TokenTypes
    id_authentication: string
    created_at: Date
    updated_at: Date
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_token?: boolean
    token?: boolean
    token_type?: boolean
    id_authentication?: boolean
    created_at?: boolean
    updated_at?: boolean
    authentication_details?: boolean | Tokens$authentication_detailsArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_token?: boolean
    token?: boolean
    token_type?: boolean
    id_authentication?: boolean
    created_at?: boolean
    updated_at?: boolean
    authentication_details?: boolean | Tokens$authentication_detailsArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_token?: boolean
    token?: boolean
    token_type?: boolean
    id_authentication?: boolean
    created_at?: boolean
    updated_at?: boolean
    authentication_details?: boolean | Tokens$authentication_detailsArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectScalar = {
    id_token?: boolean
    token?: boolean
    token_type?: boolean
    id_authentication?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_token" | "token" | "token_type" | "id_authentication" | "created_at" | "updated_at", ExtArgs["result"]["tokens"]>
  export type TokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication_details?: boolean | Tokens$authentication_detailsArgs<ExtArgs>
  }
  export type TokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication_details?: boolean | Tokens$authentication_detailsArgs<ExtArgs>
  }
  export type TokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication_details?: boolean | Tokens$authentication_detailsArgs<ExtArgs>
  }

  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {
      authentication_details: Prisma.$AuthenticationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_token: string
      token: string
      token_type: $Enums.TokenTypes
      id_authentication: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id_token`
     * const tokensWithId_tokenOnly = await prisma.tokens.findMany({ select: { id_token: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id_token`
     * const tokensWithId_tokenOnly = await prisma.tokens.createManyAndReturn({
     *   select: { id_token: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokensCreateManyAndReturnArgs>(args?: SelectSubset<T, TokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokensUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id_token`
     * const tokensWithId_tokenOnly = await prisma.tokens.updateManyAndReturn({
     *   select: { id_token: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokensUpdateManyAndReturnArgs>(args: SelectSubset<T, TokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
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
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authentication_details<T extends Tokens$authentication_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Tokens$authentication_detailsArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tokens model
   */
  interface TokensFieldRefs {
    readonly id_token: FieldRef<"Tokens", 'String'>
    readonly token: FieldRef<"Tokens", 'String'>
    readonly token_type: FieldRef<"Tokens", 'TokenTypes'>
    readonly id_authentication: FieldRef<"Tokens", 'String'>
    readonly created_at: FieldRef<"Tokens", 'DateTime'>
    readonly updated_at: FieldRef<"Tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens createManyAndReturn
   */
  export type TokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens updateManyAndReturn
   */
  export type TokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Tokens.authentication_details
   */
  export type Tokens$authentication_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    where?: AuthenticationsWhereInput
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
  }


  /**
   * Model TwoFactorAuth
   */

  export type AggregateTwoFactorAuth = {
    _count: TwoFactorAuthCountAggregateOutputType | null
    _avg: TwoFactorAuthAvgAggregateOutputType | null
    _sum: TwoFactorAuthSumAggregateOutputType | null
    _min: TwoFactorAuthMinAggregateOutputType | null
    _max: TwoFactorAuthMaxAggregateOutputType | null
  }

  export type TwoFactorAuthAvgAggregateOutputType = {
    otp_code: number | null
  }

  export type TwoFactorAuthSumAggregateOutputType = {
    otp_code: number | null
  }

  export type TwoFactorAuthMinAggregateOutputType = {
    id_two_factor_auth: string | null
    otp_code: number | null
    id_authentication_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TwoFactorAuthMaxAggregateOutputType = {
    id_two_factor_auth: string | null
    otp_code: number | null
    id_authentication_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TwoFactorAuthCountAggregateOutputType = {
    id_two_factor_auth: number
    otp_code: number
    id_authentication_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TwoFactorAuthAvgAggregateInputType = {
    otp_code?: true
  }

  export type TwoFactorAuthSumAggregateInputType = {
    otp_code?: true
  }

  export type TwoFactorAuthMinAggregateInputType = {
    id_two_factor_auth?: true
    otp_code?: true
    id_authentication_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type TwoFactorAuthMaxAggregateInputType = {
    id_two_factor_auth?: true
    otp_code?: true
    id_authentication_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type TwoFactorAuthCountAggregateInputType = {
    id_two_factor_auth?: true
    otp_code?: true
    id_authentication_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TwoFactorAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorAuth to aggregate.
     */
    where?: TwoFactorAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorAuths to fetch.
     */
    orderBy?: TwoFactorAuthOrderByWithRelationInput | TwoFactorAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwoFactorAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwoFactorAuths
    **/
    _count?: true | TwoFactorAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwoFactorAuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwoFactorAuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwoFactorAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwoFactorAuthMaxAggregateInputType
  }

  export type GetTwoFactorAuthAggregateType<T extends TwoFactorAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateTwoFactorAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwoFactorAuth[P]>
      : GetScalarType<T[P], AggregateTwoFactorAuth[P]>
  }




  export type TwoFactorAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwoFactorAuthWhereInput
    orderBy?: TwoFactorAuthOrderByWithAggregationInput | TwoFactorAuthOrderByWithAggregationInput[]
    by: TwoFactorAuthScalarFieldEnum[] | TwoFactorAuthScalarFieldEnum
    having?: TwoFactorAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwoFactorAuthCountAggregateInputType | true
    _avg?: TwoFactorAuthAvgAggregateInputType
    _sum?: TwoFactorAuthSumAggregateInputType
    _min?: TwoFactorAuthMinAggregateInputType
    _max?: TwoFactorAuthMaxAggregateInputType
  }

  export type TwoFactorAuthGroupByOutputType = {
    id_two_factor_auth: string
    otp_code: number
    id_authentication_fk: string
    created_at: Date
    updated_at: Date
    _count: TwoFactorAuthCountAggregateOutputType | null
    _avg: TwoFactorAuthAvgAggregateOutputType | null
    _sum: TwoFactorAuthSumAggregateOutputType | null
    _min: TwoFactorAuthMinAggregateOutputType | null
    _max: TwoFactorAuthMaxAggregateOutputType | null
  }

  type GetTwoFactorAuthGroupByPayload<T extends TwoFactorAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TwoFactorAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwoFactorAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwoFactorAuthGroupByOutputType[P]>
            : GetScalarType<T[P], TwoFactorAuthGroupByOutputType[P]>
        }
      >
    >


  export type TwoFactorAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_two_factor_auth?: boolean
    otp_code?: boolean
    id_authentication_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    authentication_details?: boolean | TwoFactorAuth$authentication_detailsArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactorAuth"]>

  export type TwoFactorAuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_two_factor_auth?: boolean
    otp_code?: boolean
    id_authentication_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    authentication_details?: boolean | TwoFactorAuth$authentication_detailsArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactorAuth"]>

  export type TwoFactorAuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_two_factor_auth?: boolean
    otp_code?: boolean
    id_authentication_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    authentication_details?: boolean | TwoFactorAuth$authentication_detailsArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactorAuth"]>

  export type TwoFactorAuthSelectScalar = {
    id_two_factor_auth?: boolean
    otp_code?: boolean
    id_authentication_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TwoFactorAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_two_factor_auth" | "otp_code" | "id_authentication_fk" | "created_at" | "updated_at", ExtArgs["result"]["twoFactorAuth"]>
  export type TwoFactorAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication_details?: boolean | TwoFactorAuth$authentication_detailsArgs<ExtArgs>
  }
  export type TwoFactorAuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication_details?: boolean | TwoFactorAuth$authentication_detailsArgs<ExtArgs>
  }
  export type TwoFactorAuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication_details?: boolean | TwoFactorAuth$authentication_detailsArgs<ExtArgs>
  }

  export type $TwoFactorAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TwoFactorAuth"
    objects: {
      authentication_details: Prisma.$AuthenticationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_two_factor_auth: string
      otp_code: number
      id_authentication_fk: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["twoFactorAuth"]>
    composites: {}
  }

  type TwoFactorAuthGetPayload<S extends boolean | null | undefined | TwoFactorAuthDefaultArgs> = $Result.GetResult<Prisma.$TwoFactorAuthPayload, S>

  type TwoFactorAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TwoFactorAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TwoFactorAuthCountAggregateInputType | true
    }

  export interface TwoFactorAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TwoFactorAuth'], meta: { name: 'TwoFactorAuth' } }
    /**
     * Find zero or one TwoFactorAuth that matches the filter.
     * @param {TwoFactorAuthFindUniqueArgs} args - Arguments to find a TwoFactorAuth
     * @example
     * // Get one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TwoFactorAuthFindUniqueArgs>(args: SelectSubset<T, TwoFactorAuthFindUniqueArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TwoFactorAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TwoFactorAuthFindUniqueOrThrowArgs} args - Arguments to find a TwoFactorAuth
     * @example
     * // Get one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TwoFactorAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, TwoFactorAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwoFactorAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthFindFirstArgs} args - Arguments to find a TwoFactorAuth
     * @example
     * // Get one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TwoFactorAuthFindFirstArgs>(args?: SelectSubset<T, TwoFactorAuthFindFirstArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwoFactorAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthFindFirstOrThrowArgs} args - Arguments to find a TwoFactorAuth
     * @example
     * // Get one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TwoFactorAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, TwoFactorAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TwoFactorAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwoFactorAuths
     * const twoFactorAuths = await prisma.twoFactorAuth.findMany()
     * 
     * // Get first 10 TwoFactorAuths
     * const twoFactorAuths = await prisma.twoFactorAuth.findMany({ take: 10 })
     * 
     * // Only select the `id_two_factor_auth`
     * const twoFactorAuthWithId_two_factor_authOnly = await prisma.twoFactorAuth.findMany({ select: { id_two_factor_auth: true } })
     * 
     */
    findMany<T extends TwoFactorAuthFindManyArgs>(args?: SelectSubset<T, TwoFactorAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TwoFactorAuth.
     * @param {TwoFactorAuthCreateArgs} args - Arguments to create a TwoFactorAuth.
     * @example
     * // Create one TwoFactorAuth
     * const TwoFactorAuth = await prisma.twoFactorAuth.create({
     *   data: {
     *     // ... data to create a TwoFactorAuth
     *   }
     * })
     * 
     */
    create<T extends TwoFactorAuthCreateArgs>(args: SelectSubset<T, TwoFactorAuthCreateArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TwoFactorAuths.
     * @param {TwoFactorAuthCreateManyArgs} args - Arguments to create many TwoFactorAuths.
     * @example
     * // Create many TwoFactorAuths
     * const twoFactorAuth = await prisma.twoFactorAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TwoFactorAuthCreateManyArgs>(args?: SelectSubset<T, TwoFactorAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TwoFactorAuths and returns the data saved in the database.
     * @param {TwoFactorAuthCreateManyAndReturnArgs} args - Arguments to create many TwoFactorAuths.
     * @example
     * // Create many TwoFactorAuths
     * const twoFactorAuth = await prisma.twoFactorAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TwoFactorAuths and only return the `id_two_factor_auth`
     * const twoFactorAuthWithId_two_factor_authOnly = await prisma.twoFactorAuth.createManyAndReturn({
     *   select: { id_two_factor_auth: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TwoFactorAuthCreateManyAndReturnArgs>(args?: SelectSubset<T, TwoFactorAuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TwoFactorAuth.
     * @param {TwoFactorAuthDeleteArgs} args - Arguments to delete one TwoFactorAuth.
     * @example
     * // Delete one TwoFactorAuth
     * const TwoFactorAuth = await prisma.twoFactorAuth.delete({
     *   where: {
     *     // ... filter to delete one TwoFactorAuth
     *   }
     * })
     * 
     */
    delete<T extends TwoFactorAuthDeleteArgs>(args: SelectSubset<T, TwoFactorAuthDeleteArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TwoFactorAuth.
     * @param {TwoFactorAuthUpdateArgs} args - Arguments to update one TwoFactorAuth.
     * @example
     * // Update one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TwoFactorAuthUpdateArgs>(args: SelectSubset<T, TwoFactorAuthUpdateArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TwoFactorAuths.
     * @param {TwoFactorAuthDeleteManyArgs} args - Arguments to filter TwoFactorAuths to delete.
     * @example
     * // Delete a few TwoFactorAuths
     * const { count } = await prisma.twoFactorAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TwoFactorAuthDeleteManyArgs>(args?: SelectSubset<T, TwoFactorAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwoFactorAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwoFactorAuths
     * const twoFactorAuth = await prisma.twoFactorAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TwoFactorAuthUpdateManyArgs>(args: SelectSubset<T, TwoFactorAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwoFactorAuths and returns the data updated in the database.
     * @param {TwoFactorAuthUpdateManyAndReturnArgs} args - Arguments to update many TwoFactorAuths.
     * @example
     * // Update many TwoFactorAuths
     * const twoFactorAuth = await prisma.twoFactorAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TwoFactorAuths and only return the `id_two_factor_auth`
     * const twoFactorAuthWithId_two_factor_authOnly = await prisma.twoFactorAuth.updateManyAndReturn({
     *   select: { id_two_factor_auth: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TwoFactorAuthUpdateManyAndReturnArgs>(args: SelectSubset<T, TwoFactorAuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TwoFactorAuth.
     * @param {TwoFactorAuthUpsertArgs} args - Arguments to update or create a TwoFactorAuth.
     * @example
     * // Update or create a TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.upsert({
     *   create: {
     *     // ... data to create a TwoFactorAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwoFactorAuth we want to update
     *   }
     * })
     */
    upsert<T extends TwoFactorAuthUpsertArgs>(args: SelectSubset<T, TwoFactorAuthUpsertArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TwoFactorAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthCountArgs} args - Arguments to filter TwoFactorAuths to count.
     * @example
     * // Count the number of TwoFactorAuths
     * const count = await prisma.twoFactorAuth.count({
     *   where: {
     *     // ... the filter for the TwoFactorAuths we want to count
     *   }
     * })
    **/
    count<T extends TwoFactorAuthCountArgs>(
      args?: Subset<T, TwoFactorAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwoFactorAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwoFactorAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwoFactorAuthAggregateArgs>(args: Subset<T, TwoFactorAuthAggregateArgs>): Prisma.PrismaPromise<GetTwoFactorAuthAggregateType<T>>

    /**
     * Group by TwoFactorAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthGroupByArgs} args - Group by arguments.
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
      T extends TwoFactorAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwoFactorAuthGroupByArgs['orderBy'] }
        : { orderBy?: TwoFactorAuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TwoFactorAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwoFactorAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TwoFactorAuth model
   */
  readonly fields: TwoFactorAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TwoFactorAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TwoFactorAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authentication_details<T extends TwoFactorAuth$authentication_detailsArgs<ExtArgs> = {}>(args?: Subset<T, TwoFactorAuth$authentication_detailsArgs<ExtArgs>>): Prisma__AuthenticationsClient<$Result.GetResult<Prisma.$AuthenticationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TwoFactorAuth model
   */
  interface TwoFactorAuthFieldRefs {
    readonly id_two_factor_auth: FieldRef<"TwoFactorAuth", 'String'>
    readonly otp_code: FieldRef<"TwoFactorAuth", 'Int'>
    readonly id_authentication_fk: FieldRef<"TwoFactorAuth", 'String'>
    readonly created_at: FieldRef<"TwoFactorAuth", 'DateTime'>
    readonly updated_at: FieldRef<"TwoFactorAuth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TwoFactorAuth findUnique
   */
  export type TwoFactorAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuth to fetch.
     */
    where: TwoFactorAuthWhereUniqueInput
  }

  /**
   * TwoFactorAuth findUniqueOrThrow
   */
  export type TwoFactorAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuth to fetch.
     */
    where: TwoFactorAuthWhereUniqueInput
  }

  /**
   * TwoFactorAuth findFirst
   */
  export type TwoFactorAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuth to fetch.
     */
    where?: TwoFactorAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorAuths to fetch.
     */
    orderBy?: TwoFactorAuthOrderByWithRelationInput | TwoFactorAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorAuths.
     */
    cursor?: TwoFactorAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorAuths.
     */
    distinct?: TwoFactorAuthScalarFieldEnum | TwoFactorAuthScalarFieldEnum[]
  }

  /**
   * TwoFactorAuth findFirstOrThrow
   */
  export type TwoFactorAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuth to fetch.
     */
    where?: TwoFactorAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorAuths to fetch.
     */
    orderBy?: TwoFactorAuthOrderByWithRelationInput | TwoFactorAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorAuths.
     */
    cursor?: TwoFactorAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorAuths.
     */
    distinct?: TwoFactorAuthScalarFieldEnum | TwoFactorAuthScalarFieldEnum[]
  }

  /**
   * TwoFactorAuth findMany
   */
  export type TwoFactorAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuths to fetch.
     */
    where?: TwoFactorAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorAuths to fetch.
     */
    orderBy?: TwoFactorAuthOrderByWithRelationInput | TwoFactorAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwoFactorAuths.
     */
    cursor?: TwoFactorAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorAuths.
     */
    skip?: number
    distinct?: TwoFactorAuthScalarFieldEnum | TwoFactorAuthScalarFieldEnum[]
  }

  /**
   * TwoFactorAuth create
   */
  export type TwoFactorAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a TwoFactorAuth.
     */
    data: XOR<TwoFactorAuthCreateInput, TwoFactorAuthUncheckedCreateInput>
  }

  /**
   * TwoFactorAuth createMany
   */
  export type TwoFactorAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TwoFactorAuths.
     */
    data: TwoFactorAuthCreateManyInput | TwoFactorAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TwoFactorAuth createManyAndReturn
   */
  export type TwoFactorAuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * The data used to create many TwoFactorAuths.
     */
    data: TwoFactorAuthCreateManyInput | TwoFactorAuthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TwoFactorAuth update
   */
  export type TwoFactorAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a TwoFactorAuth.
     */
    data: XOR<TwoFactorAuthUpdateInput, TwoFactorAuthUncheckedUpdateInput>
    /**
     * Choose, which TwoFactorAuth to update.
     */
    where: TwoFactorAuthWhereUniqueInput
  }

  /**
   * TwoFactorAuth updateMany
   */
  export type TwoFactorAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TwoFactorAuths.
     */
    data: XOR<TwoFactorAuthUpdateManyMutationInput, TwoFactorAuthUncheckedUpdateManyInput>
    /**
     * Filter which TwoFactorAuths to update
     */
    where?: TwoFactorAuthWhereInput
    /**
     * Limit how many TwoFactorAuths to update.
     */
    limit?: number
  }

  /**
   * TwoFactorAuth updateManyAndReturn
   */
  export type TwoFactorAuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * The data used to update TwoFactorAuths.
     */
    data: XOR<TwoFactorAuthUpdateManyMutationInput, TwoFactorAuthUncheckedUpdateManyInput>
    /**
     * Filter which TwoFactorAuths to update
     */
    where?: TwoFactorAuthWhereInput
    /**
     * Limit how many TwoFactorAuths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TwoFactorAuth upsert
   */
  export type TwoFactorAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the TwoFactorAuth to update in case it exists.
     */
    where: TwoFactorAuthWhereUniqueInput
    /**
     * In case the TwoFactorAuth found by the `where` argument doesn't exist, create a new TwoFactorAuth with this data.
     */
    create: XOR<TwoFactorAuthCreateInput, TwoFactorAuthUncheckedCreateInput>
    /**
     * In case the TwoFactorAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwoFactorAuthUpdateInput, TwoFactorAuthUncheckedUpdateInput>
  }

  /**
   * TwoFactorAuth delete
   */
  export type TwoFactorAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter which TwoFactorAuth to delete.
     */
    where: TwoFactorAuthWhereUniqueInput
  }

  /**
   * TwoFactorAuth deleteMany
   */
  export type TwoFactorAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorAuths to delete
     */
    where?: TwoFactorAuthWhereInput
    /**
     * Limit how many TwoFactorAuths to delete.
     */
    limit?: number
  }

  /**
   * TwoFactorAuth.authentication_details
   */
  export type TwoFactorAuth$authentication_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentications
     */
    select?: AuthenticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentications
     */
    omit?: AuthenticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticationsInclude<ExtArgs> | null
    where?: AuthenticationsWhereInput
  }

  /**
   * TwoFactorAuth without action
   */
  export type TwoFactorAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
  }


  /**
   * Model Contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsMinAggregateOutputType = {
    id_contact: string | null
    phone_number: string | null
    id_user_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContactsMaxAggregateOutputType = {
    id_contact: string | null
    phone_number: string | null
    id_user_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContactsCountAggregateOutputType = {
    id_contact: number
    phone_number: number
    id_user_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ContactsMinAggregateInputType = {
    id_contact?: true
    phone_number?: true
    id_user_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type ContactsMaxAggregateInputType = {
    id_contact?: true
    phone_number?: true
    id_user_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type ContactsCountAggregateInputType = {
    id_contact?: true
    phone_number?: true
    id_user_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to aggregate.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type ContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithAggregationInput | ContactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: ContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id_contact: string
    phone_number: string
    id_user_fk: string
    created_at: Date
    updated_at: Date
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends ContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type ContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contact?: boolean
    phone_number?: boolean
    id_user_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contact?: boolean
    phone_number?: boolean
    id_user_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contact?: boolean
    phone_number?: boolean
    id_user_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectScalar = {
    id_contact?: boolean
    phone_number?: boolean
    id_user_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_contact" | "phone_number" | "id_user_fk" | "created_at" | "updated_at", ExtArgs["result"]["contacts"]>
  export type ContactsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ContactsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ContactsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacts"
    objects: {
      user_details: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_contact: string
      phone_number: string
      id_user_fk: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type ContactsGetPayload<S extends boolean | null | undefined | ContactsDefaultArgs> = $Result.GetResult<Prisma.$ContactsPayload, S>

  type ContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface ContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacts'], meta: { name: 'Contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {ContactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactsFindUniqueArgs>(args: SelectSubset<T, ContactsFindUniqueArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactsFindFirstArgs>(args?: SelectSubset<T, ContactsFindFirstArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id_contact`
     * const contactsWithId_contactOnly = await prisma.contacts.findMany({ select: { id_contact: true } })
     * 
     */
    findMany<T extends ContactsFindManyArgs>(args?: SelectSubset<T, ContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacts.
     * @param {ContactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends ContactsCreateArgs>(args: SelectSubset<T, ContactsCreateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactsCreateManyArgs>(args?: SelectSubset<T, ContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactsCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id_contact`
     * const contactsWithId_contactOnly = await prisma.contacts.createManyAndReturn({
     *   select: { id_contact: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacts.
     * @param {ContactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends ContactsDeleteArgs>(args: SelectSubset<T, ContactsDeleteArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacts.
     * @param {ContactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactsUpdateArgs>(args: SelectSubset<T, ContactsUpdateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactsDeleteManyArgs>(args?: SelectSubset<T, ContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactsUpdateManyArgs>(args: SelectSubset<T, ContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactsUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id_contact`
     * const contactsWithId_contactOnly = await prisma.contacts.updateManyAndReturn({
     *   select: { id_contact: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactsUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacts.
     * @param {ContactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends ContactsUpsertArgs>(args: SelectSubset<T, ContactsUpsertArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactsCountArgs>(
      args?: Subset<T, ContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsGroupByArgs} args - Group by arguments.
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
      T extends ContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsGroupByArgs['orderBy'] }
        : { orderBy?: ContactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacts model
   */
  readonly fields: ContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_details<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contacts model
   */
  interface ContactsFieldRefs {
    readonly id_contact: FieldRef<"Contacts", 'String'>
    readonly phone_number: FieldRef<"Contacts", 'String'>
    readonly id_user_fk: FieldRef<"Contacts", 'String'>
    readonly created_at: FieldRef<"Contacts", 'DateTime'>
    readonly updated_at: FieldRef<"Contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contacts findUnique
   */
  export type ContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findUniqueOrThrow
   */
  export type ContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findFirst
   */
  export type ContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findFirstOrThrow
   */
  export type ContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findMany
   */
  export type ContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts create
   */
  export type ContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contacts.
     */
    data: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
  }

  /**
   * Contacts createMany
   */
  export type ContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts createManyAndReturn
   */
  export type ContactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contacts update
   */
  export type ContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contacts.
     */
    data: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
    /**
     * Choose, which Contacts to update.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts updateMany
   */
  export type ContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contacts updateManyAndReturn
   */
  export type ContactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contacts upsert
   */
  export type ContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contacts to update in case it exists.
     */
    where: ContactsWhereUniqueInput
    /**
     * In case the Contacts found by the `where` argument doesn't exist, create a new Contacts with this data.
     */
    create: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
    /**
     * In case the Contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
  }

  /**
   * Contacts delete
   */
  export type ContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter which Contacts to delete.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts deleteMany
   */
  export type ContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contacts without action
   */
  export type ContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id_user: string | null
    first_name: string | null
    last_name: string | null
    user_type: $Enums.UsersTypes | null
    id_account_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id_user: string | null
    first_name: string | null
    last_name: string | null
    user_type: $Enums.UsersTypes | null
    id_account_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id_user: number
    first_name: number
    last_name: number
    user_type: number
    id_account_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id_user?: true
    first_name?: true
    last_name?: true
    user_type?: true
    id_account_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id_user?: true
    first_name?: true
    last_name?: true
    user_type?: true
    id_account_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id_user?: true
    first_name?: true
    last_name?: true
    user_type?: true
    id_account_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id_user: string
    first_name: string
    last_name: string
    user_type: $Enums.UsersTypes
    id_account_fk: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    first_name?: boolean
    last_name?: boolean
    user_type?: boolean
    id_account_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    my_contacts?: boolean | Users$my_contactsArgs<ExtArgs>
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
    my_addresses?: boolean | Users$my_addressesArgs<ExtArgs>
    my_orders?: boolean | Users$my_ordersArgs<ExtArgs>
    my_cart?: boolean | Users$my_cartArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    first_name?: boolean
    last_name?: boolean
    user_type?: boolean
    id_account_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    first_name?: boolean
    last_name?: boolean
    user_type?: boolean
    id_account_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id_user?: boolean
    first_name?: boolean
    last_name?: boolean
    user_type?: boolean
    id_account_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "first_name" | "last_name" | "user_type" | "id_account_fk" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    my_contacts?: boolean | Users$my_contactsArgs<ExtArgs>
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
    my_addresses?: boolean | Users$my_addressesArgs<ExtArgs>
    my_orders?: boolean | Users$my_ordersArgs<ExtArgs>
    my_cart?: boolean | Users$my_cartArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_details?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      my_contacts: Prisma.$ContactsPayload<ExtArgs>[]
      account_details: Prisma.$AccountsPayload<ExtArgs>
      my_addresses: Prisma.$addressesPayload<ExtArgs>[]
      my_orders: Prisma.$OrdersPayload<ExtArgs>[]
      my_cart: Prisma.$CartsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      first_name: string
      last_name: string
      user_type: $Enums.UsersTypes
      id_account_fk: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const usersWithId_userOnly = await prisma.users.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id_user`
     * const usersWithId_userOnly = await prisma.users.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id_user`
     * const usersWithId_userOnly = await prisma.users.updateManyAndReturn({
     *   select: { id_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    my_contacts<T extends Users$my_contactsArgs<ExtArgs> = {}>(args?: Subset<T, Users$my_contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    account_details<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    my_addresses<T extends Users$my_addressesArgs<ExtArgs> = {}>(args?: Subset<T, Users$my_addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    my_orders<T extends Users$my_ordersArgs<ExtArgs> = {}>(args?: Subset<T, Users$my_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    my_cart<T extends Users$my_cartArgs<ExtArgs> = {}>(args?: Subset<T, Users$my_cartArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id_user: FieldRef<"Users", 'String'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly user_type: FieldRef<"Users", 'UsersTypes'>
    readonly id_account_fk: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.my_contacts
   */
  export type Users$my_contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    cursor?: ContactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Users.my_addresses
   */
  export type Users$my_addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    cursor?: addressesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * Users.my_orders
   */
  export type Users$my_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users.my_cart
   */
  export type Users$my_cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    where?: CartsWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model addresses
   */

  export type AggregateAddresses = {
    _count: AddressesCountAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  export type AddressesMinAggregateOutputType = {
    id_address: string | null
    street: string | null
    city: string | null
    country: string | null
    id_user_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesMaxAggregateOutputType = {
    id_address: string | null
    street: string | null
    city: string | null
    country: string | null
    id_user_fk: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesCountAggregateOutputType = {
    id_address: number
    street: number
    city: number
    country: number
    id_user_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AddressesMinAggregateInputType = {
    id_address?: true
    street?: true
    city?: true
    country?: true
    id_user_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesMaxAggregateInputType = {
    id_address?: true
    street?: true
    city?: true
    country?: true
    id_user_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesCountAggregateInputType = {
    id_address?: true
    street?: true
    city?: true
    country?: true
    id_user_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AddressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to aggregate.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressesMaxAggregateInputType
  }

  export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
        [P in keyof T & keyof AggregateAddresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddresses[P]>
      : GetScalarType<T[P], AggregateAddresses[P]>
  }




  export type addressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithAggregationInput | addressesOrderByWithAggregationInput[]
    by: AddressesScalarFieldEnum[] | AddressesScalarFieldEnum
    having?: addressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressesCountAggregateInputType | true
    _min?: AddressesMinAggregateInputType
    _max?: AddressesMaxAggregateInputType
  }

  export type AddressesGroupByOutputType = {
    id_address: string
    street: string
    city: string
    country: string
    id_user_fk: string
    created_at: Date
    updated_at: Date
    _count: AddressesCountAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  type GetAddressesGroupByPayload<T extends addressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressesGroupByOutputType[P]>
            : GetScalarType<T[P], AddressesGroupByOutputType[P]>
        }
      >
    >


  export type addressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_address?: boolean
    street?: boolean
    city?: boolean
    country?: boolean
    id_user_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_address?: boolean
    street?: boolean
    city?: boolean
    country?: boolean
    id_user_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_address?: boolean
    street?: boolean
    city?: boolean
    country?: boolean
    id_user_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectScalar = {
    id_address?: boolean
    street?: boolean
    city?: boolean
    country?: boolean
    id_user_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type addressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_address" | "street" | "city" | "country" | "id_user_fk" | "created_at" | "updated_at", ExtArgs["result"]["addresses"]>
  export type addressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type addressesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type addressesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $addressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addresses"
    objects: {
      user_details: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_address: string
      street: string
      city: string
      country: string
      id_user_fk: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["addresses"]>
    composites: {}
  }

  type addressesGetPayload<S extends boolean | null | undefined | addressesDefaultArgs> = $Result.GetResult<Prisma.$addressesPayload, S>

  type addressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressesCountAggregateInputType | true
    }

  export interface addressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addresses'], meta: { name: 'addresses' } }
    /**
     * Find zero or one Addresses that matches the filter.
     * @param {addressesFindUniqueArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressesFindUniqueArgs>(args: SelectSubset<T, addressesFindUniqueArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressesFindUniqueOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressesFindUniqueOrThrowArgs>(args: SelectSubset<T, addressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressesFindFirstArgs>(args?: SelectSubset<T, addressesFindFirstArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressesFindFirstOrThrowArgs>(args?: SelectSubset<T, addressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.addresses.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.addresses.findMany({ take: 10 })
     * 
     * // Only select the `id_address`
     * const addressesWithId_addressOnly = await prisma.addresses.findMany({ select: { id_address: true } })
     * 
     */
    findMany<T extends addressesFindManyArgs>(args?: SelectSubset<T, addressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addresses.
     * @param {addressesCreateArgs} args - Arguments to create a Addresses.
     * @example
     * // Create one Addresses
     * const Addresses = await prisma.addresses.create({
     *   data: {
     *     // ... data to create a Addresses
     *   }
     * })
     * 
     */
    create<T extends addressesCreateArgs>(args: SelectSubset<T, addressesCreateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressesCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressesCreateManyArgs>(args?: SelectSubset<T, addressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {addressesCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id_address`
     * const addressesWithId_addressOnly = await prisma.addresses.createManyAndReturn({
     *   select: { id_address: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addressesCreateManyAndReturnArgs>(args?: SelectSubset<T, addressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Addresses.
     * @param {addressesDeleteArgs} args - Arguments to delete one Addresses.
     * @example
     * // Delete one Addresses
     * const Addresses = await prisma.addresses.delete({
     *   where: {
     *     // ... filter to delete one Addresses
     *   }
     * })
     * 
     */
    delete<T extends addressesDeleteArgs>(args: SelectSubset<T, addressesDeleteArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addresses.
     * @param {addressesUpdateArgs} args - Arguments to update one Addresses.
     * @example
     * // Update one Addresses
     * const addresses = await prisma.addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressesUpdateArgs>(args: SelectSubset<T, addressesUpdateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressesDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressesDeleteManyArgs>(args?: SelectSubset<T, addressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressesUpdateManyArgs>(args: SelectSubset<T, addressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {addressesUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id_address`
     * const addressesWithId_addressOnly = await prisma.addresses.updateManyAndReturn({
     *   select: { id_address: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends addressesUpdateManyAndReturnArgs>(args: SelectSubset<T, addressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Addresses.
     * @param {addressesUpsertArgs} args - Arguments to update or create a Addresses.
     * @example
     * // Update or create a Addresses
     * const addresses = await prisma.addresses.upsert({
     *   create: {
     *     // ... data to create a Addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addresses we want to update
     *   }
     * })
     */
    upsert<T extends addressesUpsertArgs>(args: SelectSubset<T, addressesUpsertArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.addresses.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressesCountArgs>(
      args?: Subset<T, addressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressesAggregateArgs>(args: Subset<T, AddressesAggregateArgs>): Prisma.PrismaPromise<GetAddressesAggregateType<T>>

    /**
     * Group by Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesGroupByArgs} args - Group by arguments.
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
      T extends addressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressesGroupByArgs['orderBy'] }
        : { orderBy?: addressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, addressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addresses model
   */
  readonly fields: addressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_details<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the addresses model
   */
  interface addressesFieldRefs {
    readonly id_address: FieldRef<"addresses", 'String'>
    readonly street: FieldRef<"addresses", 'String'>
    readonly city: FieldRef<"addresses", 'String'>
    readonly country: FieldRef<"addresses", 'String'>
    readonly id_user_fk: FieldRef<"addresses", 'String'>
    readonly created_at: FieldRef<"addresses", 'DateTime'>
    readonly updated_at: FieldRef<"addresses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * addresses findUnique
   */
  export type addressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findUniqueOrThrow
   */
  export type addressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findFirst
   */
  export type addressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findFirstOrThrow
   */
  export type addressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findMany
   */
  export type addressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses create
   */
  export type addressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to create a addresses.
     */
    data: XOR<addressesCreateInput, addressesUncheckedCreateInput>
  }

  /**
   * addresses createMany
   */
  export type addressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * addresses createManyAndReturn
   */
  export type addressesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses update
   */
  export type addressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to update a addresses.
     */
    data: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
    /**
     * Choose, which addresses to update.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses updateMany
   */
  export type addressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * addresses updateManyAndReturn
   */
  export type addressesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses upsert
   */
  export type addressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The filter to search for the addresses to update in case it exists.
     */
    where: addressesWhereUniqueInput
    /**
     * In case the addresses found by the `where` argument doesn't exist, create a new addresses with this data.
     */
    create: XOR<addressesCreateInput, addressesUncheckedCreateInput>
    /**
     * In case the addresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
  }

  /**
   * addresses delete
   */
  export type addressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter which addresses to delete.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses deleteMany
   */
  export type addressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * addresses without action
   */
  export type addressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
  }


  /**
   * Model ProductsCategories
   */

  export type AggregateProductsCategories = {
    _count: ProductsCategoriesCountAggregateOutputType | null
    _avg: ProductsCategoriesAvgAggregateOutputType | null
    _sum: ProductsCategoriesSumAggregateOutputType | null
    _min: ProductsCategoriesMinAggregateOutputType | null
    _max: ProductsCategoriesMaxAggregateOutputType | null
  }

  export type ProductsCategoriesAvgAggregateOutputType = {
    id_category: number | null
  }

  export type ProductsCategoriesSumAggregateOutputType = {
    id_category: number | null
  }

  export type ProductsCategoriesMinAggregateOutputType = {
    id_category: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCategoriesMaxAggregateOutputType = {
    id_category: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCategoriesCountAggregateOutputType = {
    id_category: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsCategoriesAvgAggregateInputType = {
    id_category?: true
  }

  export type ProductsCategoriesSumAggregateInputType = {
    id_category?: true
  }

  export type ProductsCategoriesMinAggregateInputType = {
    id_category?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCategoriesMaxAggregateInputType = {
    id_category?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCategoriesCountAggregateInputType = {
    id_category?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsCategories to aggregate.
     */
    where?: ProductsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsCategories to fetch.
     */
    orderBy?: ProductsCategoriesOrderByWithRelationInput | ProductsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsCategories
    **/
    _count?: true | ProductsCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsCategoriesMaxAggregateInputType
  }

  export type GetProductsCategoriesAggregateType<T extends ProductsCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsCategories[P]>
      : GetScalarType<T[P], AggregateProductsCategories[P]>
  }




  export type ProductsCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsCategoriesWhereInput
    orderBy?: ProductsCategoriesOrderByWithAggregationInput | ProductsCategoriesOrderByWithAggregationInput[]
    by: ProductsCategoriesScalarFieldEnum[] | ProductsCategoriesScalarFieldEnum
    having?: ProductsCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCategoriesCountAggregateInputType | true
    _avg?: ProductsCategoriesAvgAggregateInputType
    _sum?: ProductsCategoriesSumAggregateInputType
    _min?: ProductsCategoriesMinAggregateInputType
    _max?: ProductsCategoriesMaxAggregateInputType
  }

  export type ProductsCategoriesGroupByOutputType = {
    id_category: number
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: ProductsCategoriesCountAggregateOutputType | null
    _avg: ProductsCategoriesAvgAggregateOutputType | null
    _sum: ProductsCategoriesSumAggregateOutputType | null
    _min: ProductsCategoriesMinAggregateOutputType | null
    _max: ProductsCategoriesMaxAggregateOutputType | null
  }

  type GetProductsCategoriesGroupByPayload<T extends ProductsCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type ProductsCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_category?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | ProductsCategories$productsArgs<ExtArgs>
    _count?: boolean | ProductsCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsCategories"]>

  export type ProductsCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_category?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["productsCategories"]>

  export type ProductsCategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_category?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["productsCategories"]>

  export type ProductsCategoriesSelectScalar = {
    id_category?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductsCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_category" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["productsCategories"]>
  export type ProductsCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsCategories$productsArgs<ExtArgs>
    _count?: boolean | ProductsCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductsCategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductsCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductsCategories"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_category: number
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["productsCategories"]>
    composites: {}
  }

  type ProductsCategoriesGetPayload<S extends boolean | null | undefined | ProductsCategoriesDefaultArgs> = $Result.GetResult<Prisma.$ProductsCategoriesPayload, S>

  type ProductsCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCategoriesCountAggregateInputType | true
    }

  export interface ProductsCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductsCategories'], meta: { name: 'ProductsCategories' } }
    /**
     * Find zero or one ProductsCategories that matches the filter.
     * @param {ProductsCategoriesFindUniqueArgs} args - Arguments to find a ProductsCategories
     * @example
     * // Get one ProductsCategories
     * const productsCategories = await prisma.productsCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsCategoriesFindUniqueArgs>(args: SelectSubset<T, ProductsCategoriesFindUniqueArgs<ExtArgs>>): Prisma__ProductsCategoriesClient<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductsCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsCategoriesFindUniqueOrThrowArgs} args - Arguments to find a ProductsCategories
     * @example
     * // Get one ProductsCategories
     * const productsCategories = await prisma.productsCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsCategoriesClient<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCategoriesFindFirstArgs} args - Arguments to find a ProductsCategories
     * @example
     * // Get one ProductsCategories
     * const productsCategories = await prisma.productsCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsCategoriesFindFirstArgs>(args?: SelectSubset<T, ProductsCategoriesFindFirstArgs<ExtArgs>>): Prisma__ProductsCategoriesClient<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCategoriesFindFirstOrThrowArgs} args - Arguments to find a ProductsCategories
     * @example
     * // Get one ProductsCategories
     * const productsCategories = await prisma.productsCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsCategoriesClient<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsCategories
     * const productsCategories = await prisma.productsCategories.findMany()
     * 
     * // Get first 10 ProductsCategories
     * const productsCategories = await prisma.productsCategories.findMany({ take: 10 })
     * 
     * // Only select the `id_category`
     * const productsCategoriesWithId_categoryOnly = await prisma.productsCategories.findMany({ select: { id_category: true } })
     * 
     */
    findMany<T extends ProductsCategoriesFindManyArgs>(args?: SelectSubset<T, ProductsCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductsCategories.
     * @param {ProductsCategoriesCreateArgs} args - Arguments to create a ProductsCategories.
     * @example
     * // Create one ProductsCategories
     * const ProductsCategories = await prisma.productsCategories.create({
     *   data: {
     *     // ... data to create a ProductsCategories
     *   }
     * })
     * 
     */
    create<T extends ProductsCategoriesCreateArgs>(args: SelectSubset<T, ProductsCategoriesCreateArgs<ExtArgs>>): Prisma__ProductsCategoriesClient<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductsCategories.
     * @param {ProductsCategoriesCreateManyArgs} args - Arguments to create many ProductsCategories.
     * @example
     * // Create many ProductsCategories
     * const productsCategories = await prisma.productsCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCategoriesCreateManyArgs>(args?: SelectSubset<T, ProductsCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsCategories and returns the data saved in the database.
     * @param {ProductsCategoriesCreateManyAndReturnArgs} args - Arguments to create many ProductsCategories.
     * @example
     * // Create many ProductsCategories
     * const productsCategories = await prisma.productsCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsCategories and only return the `id_category`
     * const productsCategoriesWithId_categoryOnly = await prisma.productsCategories.createManyAndReturn({
     *   select: { id_category: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductsCategories.
     * @param {ProductsCategoriesDeleteArgs} args - Arguments to delete one ProductsCategories.
     * @example
     * // Delete one ProductsCategories
     * const ProductsCategories = await prisma.productsCategories.delete({
     *   where: {
     *     // ... filter to delete one ProductsCategories
     *   }
     * })
     * 
     */
    delete<T extends ProductsCategoriesDeleteArgs>(args: SelectSubset<T, ProductsCategoriesDeleteArgs<ExtArgs>>): Prisma__ProductsCategoriesClient<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductsCategories.
     * @param {ProductsCategoriesUpdateArgs} args - Arguments to update one ProductsCategories.
     * @example
     * // Update one ProductsCategories
     * const productsCategories = await prisma.productsCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsCategoriesUpdateArgs>(args: SelectSubset<T, ProductsCategoriesUpdateArgs<ExtArgs>>): Prisma__ProductsCategoriesClient<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductsCategories.
     * @param {ProductsCategoriesDeleteManyArgs} args - Arguments to filter ProductsCategories to delete.
     * @example
     * // Delete a few ProductsCategories
     * const { count } = await prisma.productsCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsCategoriesDeleteManyArgs>(args?: SelectSubset<T, ProductsCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsCategories
     * const productsCategories = await prisma.productsCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsCategoriesUpdateManyArgs>(args: SelectSubset<T, ProductsCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsCategories and returns the data updated in the database.
     * @param {ProductsCategoriesUpdateManyAndReturnArgs} args - Arguments to update many ProductsCategories.
     * @example
     * // Update many ProductsCategories
     * const productsCategories = await prisma.productsCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductsCategories and only return the `id_category`
     * const productsCategoriesWithId_categoryOnly = await prisma.productsCategories.updateManyAndReturn({
     *   select: { id_category: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsCategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductsCategories.
     * @param {ProductsCategoriesUpsertArgs} args - Arguments to update or create a ProductsCategories.
     * @example
     * // Update or create a ProductsCategories
     * const productsCategories = await prisma.productsCategories.upsert({
     *   create: {
     *     // ... data to create a ProductsCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsCategories we want to update
     *   }
     * })
     */
    upsert<T extends ProductsCategoriesUpsertArgs>(args: SelectSubset<T, ProductsCategoriesUpsertArgs<ExtArgs>>): Prisma__ProductsCategoriesClient<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCategoriesCountArgs} args - Arguments to filter ProductsCategories to count.
     * @example
     * // Count the number of ProductsCategories
     * const count = await prisma.productsCategories.count({
     *   where: {
     *     // ... the filter for the ProductsCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductsCategoriesCountArgs>(
      args?: Subset<T, ProductsCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsCategoriesAggregateArgs>(args: Subset<T, ProductsCategoriesAggregateArgs>): Prisma.PrismaPromise<GetProductsCategoriesAggregateType<T>>

    /**
     * Group by ProductsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCategoriesGroupByArgs} args - Group by arguments.
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
      T extends ProductsCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: ProductsCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductsCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductsCategories model
   */
  readonly fields: ProductsCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductsCategories$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductsCategories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductsCategories model
   */
  interface ProductsCategoriesFieldRefs {
    readonly id_category: FieldRef<"ProductsCategories", 'Int'>
    readonly name: FieldRef<"ProductsCategories", 'String'>
    readonly description: FieldRef<"ProductsCategories", 'String'>
    readonly created_at: FieldRef<"ProductsCategories", 'DateTime'>
    readonly updated_at: FieldRef<"ProductsCategories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductsCategories findUnique
   */
  export type ProductsCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsCategories to fetch.
     */
    where: ProductsCategoriesWhereUniqueInput
  }

  /**
   * ProductsCategories findUniqueOrThrow
   */
  export type ProductsCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsCategories to fetch.
     */
    where: ProductsCategoriesWhereUniqueInput
  }

  /**
   * ProductsCategories findFirst
   */
  export type ProductsCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsCategories to fetch.
     */
    where?: ProductsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsCategories to fetch.
     */
    orderBy?: ProductsCategoriesOrderByWithRelationInput | ProductsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsCategories.
     */
    cursor?: ProductsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsCategories.
     */
    distinct?: ProductsCategoriesScalarFieldEnum | ProductsCategoriesScalarFieldEnum[]
  }

  /**
   * ProductsCategories findFirstOrThrow
   */
  export type ProductsCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsCategories to fetch.
     */
    where?: ProductsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsCategories to fetch.
     */
    orderBy?: ProductsCategoriesOrderByWithRelationInput | ProductsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsCategories.
     */
    cursor?: ProductsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsCategories.
     */
    distinct?: ProductsCategoriesScalarFieldEnum | ProductsCategoriesScalarFieldEnum[]
  }

  /**
   * ProductsCategories findMany
   */
  export type ProductsCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsCategories to fetch.
     */
    where?: ProductsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsCategories to fetch.
     */
    orderBy?: ProductsCategoriesOrderByWithRelationInput | ProductsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsCategories.
     */
    cursor?: ProductsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsCategories.
     */
    skip?: number
    distinct?: ProductsCategoriesScalarFieldEnum | ProductsCategoriesScalarFieldEnum[]
  }

  /**
   * ProductsCategories create
   */
  export type ProductsCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductsCategories.
     */
    data: XOR<ProductsCategoriesCreateInput, ProductsCategoriesUncheckedCreateInput>
  }

  /**
   * ProductsCategories createMany
   */
  export type ProductsCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductsCategories.
     */
    data: ProductsCategoriesCreateManyInput | ProductsCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductsCategories createManyAndReturn
   */
  export type ProductsCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many ProductsCategories.
     */
    data: ProductsCategoriesCreateManyInput | ProductsCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductsCategories update
   */
  export type ProductsCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductsCategories.
     */
    data: XOR<ProductsCategoriesUpdateInput, ProductsCategoriesUncheckedUpdateInput>
    /**
     * Choose, which ProductsCategories to update.
     */
    where: ProductsCategoriesWhereUniqueInput
  }

  /**
   * ProductsCategories updateMany
   */
  export type ProductsCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductsCategories.
     */
    data: XOR<ProductsCategoriesUpdateManyMutationInput, ProductsCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which ProductsCategories to update
     */
    where?: ProductsCategoriesWhereInput
    /**
     * Limit how many ProductsCategories to update.
     */
    limit?: number
  }

  /**
   * ProductsCategories updateManyAndReturn
   */
  export type ProductsCategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * The data used to update ProductsCategories.
     */
    data: XOR<ProductsCategoriesUpdateManyMutationInput, ProductsCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which ProductsCategories to update
     */
    where?: ProductsCategoriesWhereInput
    /**
     * Limit how many ProductsCategories to update.
     */
    limit?: number
  }

  /**
   * ProductsCategories upsert
   */
  export type ProductsCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductsCategories to update in case it exists.
     */
    where: ProductsCategoriesWhereUniqueInput
    /**
     * In case the ProductsCategories found by the `where` argument doesn't exist, create a new ProductsCategories with this data.
     */
    create: XOR<ProductsCategoriesCreateInput, ProductsCategoriesUncheckedCreateInput>
    /**
     * In case the ProductsCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsCategoriesUpdateInput, ProductsCategoriesUncheckedUpdateInput>
  }

  /**
   * ProductsCategories delete
   */
  export type ProductsCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
    /**
     * Filter which ProductsCategories to delete.
     */
    where: ProductsCategoriesWhereUniqueInput
  }

  /**
   * ProductsCategories deleteMany
   */
  export type ProductsCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsCategories to delete
     */
    where?: ProductsCategoriesWhereInput
    /**
     * Limit how many ProductsCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductsCategories.products
   */
  export type ProductsCategories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * ProductsCategories without action
   */
  export type ProductsCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCategories
     */
    select?: ProductsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsCategories
     */
    omit?: ProductsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id_product: number | null
    price: Decimal | null
    available_stock: number | null
    id_category_fk: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id_product: number | null
    price: Decimal | null
    available_stock: number | null
    id_category_fk: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id_product: number | null
    reference_code: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    available_stock: number | null
    available: boolean | null
    aditional_info: string | null
    id_category_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id_product: number | null
    reference_code: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    available_stock: number | null
    available: boolean | null
    aditional_info: string | null
    id_category_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id_product: number
    reference_code: number
    name: number
    description: number
    price: number
    available_stock: number
    available: number
    aditional_info: number
    id_category_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id_product?: true
    price?: true
    available_stock?: true
    id_category_fk?: true
  }

  export type ProductsSumAggregateInputType = {
    id_product?: true
    price?: true
    available_stock?: true
    id_category_fk?: true
  }

  export type ProductsMinAggregateInputType = {
    id_product?: true
    reference_code?: true
    name?: true
    description?: true
    price?: true
    available_stock?: true
    available?: true
    aditional_info?: true
    id_category_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id_product?: true
    reference_code?: true
    name?: true
    description?: true
    price?: true
    available_stock?: true
    available?: true
    aditional_info?: true
    id_category_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id_product?: true
    reference_code?: true
    name?: true
    description?: true
    price?: true
    available_stock?: true
    available?: true
    aditional_info?: true
    id_category_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id_product: number
    reference_code: string
    name: string
    description: string | null
    price: Decimal
    available_stock: number
    available: boolean
    aditional_info: string
    id_category_fk: number
    created_at: Date
    updated_at: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_product?: boolean
    reference_code?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    available_stock?: boolean
    available?: boolean
    aditional_info?: boolean
    id_category_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    images?: boolean | Products$imagesArgs<ExtArgs>
    reviews?: boolean | Products$reviewsArgs<ExtArgs>
    order_items?: boolean | Products$order_itemsArgs<ExtArgs>
    cart_items?: boolean | Products$cart_itemsArgs<ExtArgs>
    category?: boolean | ProductsCategoriesDefaultArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_product?: boolean
    reference_code?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    available_stock?: boolean
    available?: boolean
    aditional_info?: boolean
    id_category_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | ProductsCategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_product?: boolean
    reference_code?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    available_stock?: boolean
    available?: boolean
    aditional_info?: boolean
    id_category_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | ProductsCategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id_product?: boolean
    reference_code?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    available_stock?: boolean
    available?: boolean
    aditional_info?: boolean
    id_category_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_product" | "reference_code" | "name" | "description" | "price" | "available_stock" | "available" | "aditional_info" | "id_category_fk" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Products$imagesArgs<ExtArgs>
    reviews?: boolean | Products$reviewsArgs<ExtArgs>
    order_items?: boolean | Products$order_itemsArgs<ExtArgs>
    cart_items?: boolean | Products$cart_itemsArgs<ExtArgs>
    category?: boolean | ProductsCategoriesDefaultArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductsCategoriesDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductsCategoriesDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      images: Prisma.$ProductsImagesPayload<ExtArgs>[]
      reviews: Prisma.$productsReviewsPayload<ExtArgs>[]
      order_items: Prisma.$OrderItemsPayload<ExtArgs>[]
      cart_items: Prisma.$CartItemsPayload<ExtArgs>[]
      category: Prisma.$ProductsCategoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_product: number
      reference_code: string
      name: string
      description: string | null
      price: Prisma.Decimal
      available_stock: number
      available: boolean
      aditional_info: string
      id_category_fk: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id_product`
     * const productsWithId_productOnly = await prisma.products.findMany({ select: { id_product: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id_product`
     * const productsWithId_productOnly = await prisma.products.createManyAndReturn({
     *   select: { id_product: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id_product`
     * const productsWithId_productOnly = await prisma.products.updateManyAndReturn({
     *   select: { id_product: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Products$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Products$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Products$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Products$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends Products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart_items<T extends Products$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Products$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends ProductsCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsCategoriesDefaultArgs<ExtArgs>>): Prisma__ProductsCategoriesClient<$Result.GetResult<Prisma.$ProductsCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id_product: FieldRef<"Products", 'Int'>
    readonly reference_code: FieldRef<"Products", 'String'>
    readonly name: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Decimal'>
    readonly available_stock: FieldRef<"Products", 'Int'>
    readonly available: FieldRef<"Products", 'Boolean'>
    readonly aditional_info: FieldRef<"Products", 'String'>
    readonly id_category_fk: FieldRef<"Products", 'Int'>
    readonly created_at: FieldRef<"Products", 'DateTime'>
    readonly updated_at: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.images
   */
  export type Products$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    where?: ProductsImagesWhereInput
    orderBy?: ProductsImagesOrderByWithRelationInput | ProductsImagesOrderByWithRelationInput[]
    cursor?: ProductsImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsImagesScalarFieldEnum | ProductsImagesScalarFieldEnum[]
  }

  /**
   * Products.reviews
   */
  export type Products$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    where?: productsReviewsWhereInput
    orderBy?: productsReviewsOrderByWithRelationInput | productsReviewsOrderByWithRelationInput[]
    cursor?: productsReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsReviewsScalarFieldEnum | ProductsReviewsScalarFieldEnum[]
  }

  /**
   * Products.order_items
   */
  export type Products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Products.cart_items
   */
  export type Products$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    cursor?: CartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model ProductsImages
   */

  export type AggregateProductsImages = {
    _count: ProductsImagesCountAggregateOutputType | null
    _avg: ProductsImagesAvgAggregateOutputType | null
    _sum: ProductsImagesSumAggregateOutputType | null
    _min: ProductsImagesMinAggregateOutputType | null
    _max: ProductsImagesMaxAggregateOutputType | null
  }

  export type ProductsImagesAvgAggregateOutputType = {
    id_product_fk: number | null
  }

  export type ProductsImagesSumAggregateOutputType = {
    id_product_fk: number | null
  }

  export type ProductsImagesMinAggregateOutputType = {
    id_image: string | null
    url: string | null
    id_product_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsImagesMaxAggregateOutputType = {
    id_image: string | null
    url: string | null
    id_product_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsImagesCountAggregateOutputType = {
    id_image: number
    url: number
    id_product_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsImagesAvgAggregateInputType = {
    id_product_fk?: true
  }

  export type ProductsImagesSumAggregateInputType = {
    id_product_fk?: true
  }

  export type ProductsImagesMinAggregateInputType = {
    id_image?: true
    url?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsImagesMaxAggregateInputType = {
    id_image?: true
    url?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsImagesCountAggregateInputType = {
    id_image?: true
    url?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsImages to aggregate.
     */
    where?: ProductsImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsImages to fetch.
     */
    orderBy?: ProductsImagesOrderByWithRelationInput | ProductsImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsImages
    **/
    _count?: true | ProductsImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsImagesMaxAggregateInputType
  }

  export type GetProductsImagesAggregateType<T extends ProductsImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsImages[P]>
      : GetScalarType<T[P], AggregateProductsImages[P]>
  }




  export type ProductsImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsImagesWhereInput
    orderBy?: ProductsImagesOrderByWithAggregationInput | ProductsImagesOrderByWithAggregationInput[]
    by: ProductsImagesScalarFieldEnum[] | ProductsImagesScalarFieldEnum
    having?: ProductsImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsImagesCountAggregateInputType | true
    _avg?: ProductsImagesAvgAggregateInputType
    _sum?: ProductsImagesSumAggregateInputType
    _min?: ProductsImagesMinAggregateInputType
    _max?: ProductsImagesMaxAggregateInputType
  }

  export type ProductsImagesGroupByOutputType = {
    id_image: string
    url: string
    id_product_fk: number
    created_at: Date
    updated_at: Date
    _count: ProductsImagesCountAggregateOutputType | null
    _avg: ProductsImagesAvgAggregateOutputType | null
    _sum: ProductsImagesSumAggregateOutputType | null
    _min: ProductsImagesMinAggregateOutputType | null
    _max: ProductsImagesMaxAggregateOutputType | null
  }

  type GetProductsImagesGroupByPayload<T extends ProductsImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsImagesGroupByOutputType[P]>
        }
      >
    >


  export type ProductsImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_image?: boolean
    url?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsImages"]>

  export type ProductsImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_image?: boolean
    url?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsImages"]>

  export type ProductsImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_image?: boolean
    url?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsImages"]>

  export type ProductsImagesSelectScalar = {
    id_image?: boolean
    url?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductsImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_image" | "url" | "id_product_fk" | "created_at" | "updated_at", ExtArgs["result"]["productsImages"]>
  export type ProductsImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ProductsImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ProductsImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $ProductsImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductsImages"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_image: string
      url: string
      id_product_fk: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["productsImages"]>
    composites: {}
  }

  type ProductsImagesGetPayload<S extends boolean | null | undefined | ProductsImagesDefaultArgs> = $Result.GetResult<Prisma.$ProductsImagesPayload, S>

  type ProductsImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsImagesCountAggregateInputType | true
    }

  export interface ProductsImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductsImages'], meta: { name: 'ProductsImages' } }
    /**
     * Find zero or one ProductsImages that matches the filter.
     * @param {ProductsImagesFindUniqueArgs} args - Arguments to find a ProductsImages
     * @example
     * // Get one ProductsImages
     * const productsImages = await prisma.productsImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsImagesFindUniqueArgs>(args: SelectSubset<T, ProductsImagesFindUniqueArgs<ExtArgs>>): Prisma__ProductsImagesClient<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductsImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsImagesFindUniqueOrThrowArgs} args - Arguments to find a ProductsImages
     * @example
     * // Get one ProductsImages
     * const productsImages = await prisma.productsImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsImagesClient<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsImagesFindFirstArgs} args - Arguments to find a ProductsImages
     * @example
     * // Get one ProductsImages
     * const productsImages = await prisma.productsImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsImagesFindFirstArgs>(args?: SelectSubset<T, ProductsImagesFindFirstArgs<ExtArgs>>): Prisma__ProductsImagesClient<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsImagesFindFirstOrThrowArgs} args - Arguments to find a ProductsImages
     * @example
     * // Get one ProductsImages
     * const productsImages = await prisma.productsImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsImagesClient<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductsImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsImages
     * const productsImages = await prisma.productsImages.findMany()
     * 
     * // Get first 10 ProductsImages
     * const productsImages = await prisma.productsImages.findMany({ take: 10 })
     * 
     * // Only select the `id_image`
     * const productsImagesWithId_imageOnly = await prisma.productsImages.findMany({ select: { id_image: true } })
     * 
     */
    findMany<T extends ProductsImagesFindManyArgs>(args?: SelectSubset<T, ProductsImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductsImages.
     * @param {ProductsImagesCreateArgs} args - Arguments to create a ProductsImages.
     * @example
     * // Create one ProductsImages
     * const ProductsImages = await prisma.productsImages.create({
     *   data: {
     *     // ... data to create a ProductsImages
     *   }
     * })
     * 
     */
    create<T extends ProductsImagesCreateArgs>(args: SelectSubset<T, ProductsImagesCreateArgs<ExtArgs>>): Prisma__ProductsImagesClient<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductsImages.
     * @param {ProductsImagesCreateManyArgs} args - Arguments to create many ProductsImages.
     * @example
     * // Create many ProductsImages
     * const productsImages = await prisma.productsImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsImagesCreateManyArgs>(args?: SelectSubset<T, ProductsImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsImages and returns the data saved in the database.
     * @param {ProductsImagesCreateManyAndReturnArgs} args - Arguments to create many ProductsImages.
     * @example
     * // Create many ProductsImages
     * const productsImages = await prisma.productsImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsImages and only return the `id_image`
     * const productsImagesWithId_imageOnly = await prisma.productsImages.createManyAndReturn({
     *   select: { id_image: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductsImages.
     * @param {ProductsImagesDeleteArgs} args - Arguments to delete one ProductsImages.
     * @example
     * // Delete one ProductsImages
     * const ProductsImages = await prisma.productsImages.delete({
     *   where: {
     *     // ... filter to delete one ProductsImages
     *   }
     * })
     * 
     */
    delete<T extends ProductsImagesDeleteArgs>(args: SelectSubset<T, ProductsImagesDeleteArgs<ExtArgs>>): Prisma__ProductsImagesClient<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductsImages.
     * @param {ProductsImagesUpdateArgs} args - Arguments to update one ProductsImages.
     * @example
     * // Update one ProductsImages
     * const productsImages = await prisma.productsImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsImagesUpdateArgs>(args: SelectSubset<T, ProductsImagesUpdateArgs<ExtArgs>>): Prisma__ProductsImagesClient<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductsImages.
     * @param {ProductsImagesDeleteManyArgs} args - Arguments to filter ProductsImages to delete.
     * @example
     * // Delete a few ProductsImages
     * const { count } = await prisma.productsImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsImagesDeleteManyArgs>(args?: SelectSubset<T, ProductsImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsImages
     * const productsImages = await prisma.productsImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsImagesUpdateManyArgs>(args: SelectSubset<T, ProductsImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsImages and returns the data updated in the database.
     * @param {ProductsImagesUpdateManyAndReturnArgs} args - Arguments to update many ProductsImages.
     * @example
     * // Update many ProductsImages
     * const productsImages = await prisma.productsImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductsImages and only return the `id_image`
     * const productsImagesWithId_imageOnly = await prisma.productsImages.updateManyAndReturn({
     *   select: { id_image: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductsImages.
     * @param {ProductsImagesUpsertArgs} args - Arguments to update or create a ProductsImages.
     * @example
     * // Update or create a ProductsImages
     * const productsImages = await prisma.productsImages.upsert({
     *   create: {
     *     // ... data to create a ProductsImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsImages we want to update
     *   }
     * })
     */
    upsert<T extends ProductsImagesUpsertArgs>(args: SelectSubset<T, ProductsImagesUpsertArgs<ExtArgs>>): Prisma__ProductsImagesClient<$Result.GetResult<Prisma.$ProductsImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductsImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsImagesCountArgs} args - Arguments to filter ProductsImages to count.
     * @example
     * // Count the number of ProductsImages
     * const count = await prisma.productsImages.count({
     *   where: {
     *     // ... the filter for the ProductsImages we want to count
     *   }
     * })
    **/
    count<T extends ProductsImagesCountArgs>(
      args?: Subset<T, ProductsImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsImagesAggregateArgs>(args: Subset<T, ProductsImagesAggregateArgs>): Prisma.PrismaPromise<GetProductsImagesAggregateType<T>>

    /**
     * Group by ProductsImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsImagesGroupByArgs} args - Group by arguments.
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
      T extends ProductsImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsImagesGroupByArgs['orderBy'] }
        : { orderBy?: ProductsImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductsImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductsImages model
   */
  readonly fields: ProductsImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductsImages model
   */
  interface ProductsImagesFieldRefs {
    readonly id_image: FieldRef<"ProductsImages", 'String'>
    readonly url: FieldRef<"ProductsImages", 'String'>
    readonly id_product_fk: FieldRef<"ProductsImages", 'Int'>
    readonly created_at: FieldRef<"ProductsImages", 'DateTime'>
    readonly updated_at: FieldRef<"ProductsImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductsImages findUnique
   */
  export type ProductsImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsImages to fetch.
     */
    where: ProductsImagesWhereUniqueInput
  }

  /**
   * ProductsImages findUniqueOrThrow
   */
  export type ProductsImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsImages to fetch.
     */
    where: ProductsImagesWhereUniqueInput
  }

  /**
   * ProductsImages findFirst
   */
  export type ProductsImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsImages to fetch.
     */
    where?: ProductsImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsImages to fetch.
     */
    orderBy?: ProductsImagesOrderByWithRelationInput | ProductsImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsImages.
     */
    cursor?: ProductsImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsImages.
     */
    distinct?: ProductsImagesScalarFieldEnum | ProductsImagesScalarFieldEnum[]
  }

  /**
   * ProductsImages findFirstOrThrow
   */
  export type ProductsImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsImages to fetch.
     */
    where?: ProductsImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsImages to fetch.
     */
    orderBy?: ProductsImagesOrderByWithRelationInput | ProductsImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsImages.
     */
    cursor?: ProductsImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsImages.
     */
    distinct?: ProductsImagesScalarFieldEnum | ProductsImagesScalarFieldEnum[]
  }

  /**
   * ProductsImages findMany
   */
  export type ProductsImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsImages to fetch.
     */
    where?: ProductsImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsImages to fetch.
     */
    orderBy?: ProductsImagesOrderByWithRelationInput | ProductsImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsImages.
     */
    cursor?: ProductsImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsImages.
     */
    skip?: number
    distinct?: ProductsImagesScalarFieldEnum | ProductsImagesScalarFieldEnum[]
  }

  /**
   * ProductsImages create
   */
  export type ProductsImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductsImages.
     */
    data: XOR<ProductsImagesCreateInput, ProductsImagesUncheckedCreateInput>
  }

  /**
   * ProductsImages createMany
   */
  export type ProductsImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductsImages.
     */
    data: ProductsImagesCreateManyInput | ProductsImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductsImages createManyAndReturn
   */
  export type ProductsImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * The data used to create many ProductsImages.
     */
    data: ProductsImagesCreateManyInput | ProductsImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductsImages update
   */
  export type ProductsImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductsImages.
     */
    data: XOR<ProductsImagesUpdateInput, ProductsImagesUncheckedUpdateInput>
    /**
     * Choose, which ProductsImages to update.
     */
    where: ProductsImagesWhereUniqueInput
  }

  /**
   * ProductsImages updateMany
   */
  export type ProductsImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductsImages.
     */
    data: XOR<ProductsImagesUpdateManyMutationInput, ProductsImagesUncheckedUpdateManyInput>
    /**
     * Filter which ProductsImages to update
     */
    where?: ProductsImagesWhereInput
    /**
     * Limit how many ProductsImages to update.
     */
    limit?: number
  }

  /**
   * ProductsImages updateManyAndReturn
   */
  export type ProductsImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * The data used to update ProductsImages.
     */
    data: XOR<ProductsImagesUpdateManyMutationInput, ProductsImagesUncheckedUpdateManyInput>
    /**
     * Filter which ProductsImages to update
     */
    where?: ProductsImagesWhereInput
    /**
     * Limit how many ProductsImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductsImages upsert
   */
  export type ProductsImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductsImages to update in case it exists.
     */
    where: ProductsImagesWhereUniqueInput
    /**
     * In case the ProductsImages found by the `where` argument doesn't exist, create a new ProductsImages with this data.
     */
    create: XOR<ProductsImagesCreateInput, ProductsImagesUncheckedCreateInput>
    /**
     * In case the ProductsImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsImagesUpdateInput, ProductsImagesUncheckedUpdateInput>
  }

  /**
   * ProductsImages delete
   */
  export type ProductsImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
    /**
     * Filter which ProductsImages to delete.
     */
    where: ProductsImagesWhereUniqueInput
  }

  /**
   * ProductsImages deleteMany
   */
  export type ProductsImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsImages to delete
     */
    where?: ProductsImagesWhereInput
    /**
     * Limit how many ProductsImages to delete.
     */
    limit?: number
  }

  /**
   * ProductsImages without action
   */
  export type ProductsImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsImages
     */
    select?: ProductsImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsImages
     */
    omit?: ProductsImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsImagesInclude<ExtArgs> | null
  }


  /**
   * Model productsReviews
   */

  export type AggregateProductsReviews = {
    _count: ProductsReviewsCountAggregateOutputType | null
    _avg: ProductsReviewsAvgAggregateOutputType | null
    _sum: ProductsReviewsSumAggregateOutputType | null
    _min: ProductsReviewsMinAggregateOutputType | null
    _max: ProductsReviewsMaxAggregateOutputType | null
  }

  export type ProductsReviewsAvgAggregateOutputType = {
    rating: number | null
    id_product_fk: number | null
  }

  export type ProductsReviewsSumAggregateOutputType = {
    rating: number | null
    id_product_fk: number | null
  }

  export type ProductsReviewsMinAggregateOutputType = {
    id_review: string | null
    rating: number | null
    comment: string | null
    id_product_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsReviewsMaxAggregateOutputType = {
    id_review: string | null
    rating: number | null
    comment: string | null
    id_product_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsReviewsCountAggregateOutputType = {
    id_review: number
    rating: number
    comment: number
    id_product_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsReviewsAvgAggregateInputType = {
    rating?: true
    id_product_fk?: true
  }

  export type ProductsReviewsSumAggregateInputType = {
    rating?: true
    id_product_fk?: true
  }

  export type ProductsReviewsMinAggregateInputType = {
    id_review?: true
    rating?: true
    comment?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsReviewsMaxAggregateInputType = {
    id_review?: true
    rating?: true
    comment?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsReviewsCountAggregateInputType = {
    id_review?: true
    rating?: true
    comment?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productsReviews to aggregate.
     */
    where?: productsReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsReviews to fetch.
     */
    orderBy?: productsReviewsOrderByWithRelationInput | productsReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productsReviews
    **/
    _count?: true | ProductsReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsReviewsMaxAggregateInputType
  }

  export type GetProductsReviewsAggregateType<T extends ProductsReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsReviews[P]>
      : GetScalarType<T[P], AggregateProductsReviews[P]>
  }




  export type productsReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsReviewsWhereInput
    orderBy?: productsReviewsOrderByWithAggregationInput | productsReviewsOrderByWithAggregationInput[]
    by: ProductsReviewsScalarFieldEnum[] | ProductsReviewsScalarFieldEnum
    having?: productsReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsReviewsCountAggregateInputType | true
    _avg?: ProductsReviewsAvgAggregateInputType
    _sum?: ProductsReviewsSumAggregateInputType
    _min?: ProductsReviewsMinAggregateInputType
    _max?: ProductsReviewsMaxAggregateInputType
  }

  export type ProductsReviewsGroupByOutputType = {
    id_review: string
    rating: number
    comment: string | null
    id_product_fk: number
    created_at: Date
    updated_at: Date
    _count: ProductsReviewsCountAggregateOutputType | null
    _avg: ProductsReviewsAvgAggregateOutputType | null
    _sum: ProductsReviewsSumAggregateOutputType | null
    _min: ProductsReviewsMinAggregateOutputType | null
    _max: ProductsReviewsMaxAggregateOutputType | null
  }

  type GetProductsReviewsGroupByPayload<T extends productsReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsReviewsGroupByOutputType[P]>
        }
      >
    >


  export type productsReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_review?: boolean
    rating?: boolean
    comment?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsReviews"]>

  export type productsReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_review?: boolean
    rating?: boolean
    comment?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsReviews"]>

  export type productsReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_review?: boolean
    rating?: boolean
    comment?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsReviews"]>

  export type productsReviewsSelectScalar = {
    id_review?: boolean
    rating?: boolean
    comment?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productsReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_review" | "rating" | "comment" | "id_product_fk" | "created_at" | "updated_at", ExtArgs["result"]["productsReviews"]>
  export type productsReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type productsReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type productsReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $productsReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productsReviews"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_review: string
      rating: number
      comment: string | null
      id_product_fk: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["productsReviews"]>
    composites: {}
  }

  type productsReviewsGetPayload<S extends boolean | null | undefined | productsReviewsDefaultArgs> = $Result.GetResult<Prisma.$productsReviewsPayload, S>

  type productsReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsReviewsCountAggregateInputType | true
    }

  export interface productsReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productsReviews'], meta: { name: 'productsReviews' } }
    /**
     * Find zero or one ProductsReviews that matches the filter.
     * @param {productsReviewsFindUniqueArgs} args - Arguments to find a ProductsReviews
     * @example
     * // Get one ProductsReviews
     * const productsReviews = await prisma.productsReviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsReviewsFindUniqueArgs>(args: SelectSubset<T, productsReviewsFindUniqueArgs<ExtArgs>>): Prisma__productsReviewsClient<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductsReviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsReviewsFindUniqueOrThrowArgs} args - Arguments to find a ProductsReviews
     * @example
     * // Get one ProductsReviews
     * const productsReviews = await prisma.productsReviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsReviewsClient<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsReviewsFindFirstArgs} args - Arguments to find a ProductsReviews
     * @example
     * // Get one ProductsReviews
     * const productsReviews = await prisma.productsReviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsReviewsFindFirstArgs>(args?: SelectSubset<T, productsReviewsFindFirstArgs<ExtArgs>>): Prisma__productsReviewsClient<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsReviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsReviewsFindFirstOrThrowArgs} args - Arguments to find a ProductsReviews
     * @example
     * // Get one ProductsReviews
     * const productsReviews = await prisma.productsReviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsReviewsClient<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductsReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsReviews
     * const productsReviews = await prisma.productsReviews.findMany()
     * 
     * // Get first 10 ProductsReviews
     * const productsReviews = await prisma.productsReviews.findMany({ take: 10 })
     * 
     * // Only select the `id_review`
     * const productsReviewsWithId_reviewOnly = await prisma.productsReviews.findMany({ select: { id_review: true } })
     * 
     */
    findMany<T extends productsReviewsFindManyArgs>(args?: SelectSubset<T, productsReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductsReviews.
     * @param {productsReviewsCreateArgs} args - Arguments to create a ProductsReviews.
     * @example
     * // Create one ProductsReviews
     * const ProductsReviews = await prisma.productsReviews.create({
     *   data: {
     *     // ... data to create a ProductsReviews
     *   }
     * })
     * 
     */
    create<T extends productsReviewsCreateArgs>(args: SelectSubset<T, productsReviewsCreateArgs<ExtArgs>>): Prisma__productsReviewsClient<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductsReviews.
     * @param {productsReviewsCreateManyArgs} args - Arguments to create many ProductsReviews.
     * @example
     * // Create many ProductsReviews
     * const productsReviews = await prisma.productsReviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsReviewsCreateManyArgs>(args?: SelectSubset<T, productsReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsReviews and returns the data saved in the database.
     * @param {productsReviewsCreateManyAndReturnArgs} args - Arguments to create many ProductsReviews.
     * @example
     * // Create many ProductsReviews
     * const productsReviews = await prisma.productsReviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsReviews and only return the `id_review`
     * const productsReviewsWithId_reviewOnly = await prisma.productsReviews.createManyAndReturn({
     *   select: { id_review: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductsReviews.
     * @param {productsReviewsDeleteArgs} args - Arguments to delete one ProductsReviews.
     * @example
     * // Delete one ProductsReviews
     * const ProductsReviews = await prisma.productsReviews.delete({
     *   where: {
     *     // ... filter to delete one ProductsReviews
     *   }
     * })
     * 
     */
    delete<T extends productsReviewsDeleteArgs>(args: SelectSubset<T, productsReviewsDeleteArgs<ExtArgs>>): Prisma__productsReviewsClient<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductsReviews.
     * @param {productsReviewsUpdateArgs} args - Arguments to update one ProductsReviews.
     * @example
     * // Update one ProductsReviews
     * const productsReviews = await prisma.productsReviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsReviewsUpdateArgs>(args: SelectSubset<T, productsReviewsUpdateArgs<ExtArgs>>): Prisma__productsReviewsClient<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductsReviews.
     * @param {productsReviewsDeleteManyArgs} args - Arguments to filter ProductsReviews to delete.
     * @example
     * // Delete a few ProductsReviews
     * const { count } = await prisma.productsReviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsReviewsDeleteManyArgs>(args?: SelectSubset<T, productsReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsReviews
     * const productsReviews = await prisma.productsReviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsReviewsUpdateManyArgs>(args: SelectSubset<T, productsReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsReviews and returns the data updated in the database.
     * @param {productsReviewsUpdateManyAndReturnArgs} args - Arguments to update many ProductsReviews.
     * @example
     * // Update many ProductsReviews
     * const productsReviews = await prisma.productsReviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductsReviews and only return the `id_review`
     * const productsReviewsWithId_reviewOnly = await prisma.productsReviews.updateManyAndReturn({
     *   select: { id_review: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductsReviews.
     * @param {productsReviewsUpsertArgs} args - Arguments to update or create a ProductsReviews.
     * @example
     * // Update or create a ProductsReviews
     * const productsReviews = await prisma.productsReviews.upsert({
     *   create: {
     *     // ... data to create a ProductsReviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsReviews we want to update
     *   }
     * })
     */
    upsert<T extends productsReviewsUpsertArgs>(args: SelectSubset<T, productsReviewsUpsertArgs<ExtArgs>>): Prisma__productsReviewsClient<$Result.GetResult<Prisma.$productsReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductsReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsReviewsCountArgs} args - Arguments to filter ProductsReviews to count.
     * @example
     * // Count the number of ProductsReviews
     * const count = await prisma.productsReviews.count({
     *   where: {
     *     // ... the filter for the ProductsReviews we want to count
     *   }
     * })
    **/
    count<T extends productsReviewsCountArgs>(
      args?: Subset<T, productsReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsReviewsAggregateArgs>(args: Subset<T, ProductsReviewsAggregateArgs>): Prisma.PrismaPromise<GetProductsReviewsAggregateType<T>>

    /**
     * Group by ProductsReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsReviewsGroupByArgs} args - Group by arguments.
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
      T extends productsReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsReviewsGroupByArgs['orderBy'] }
        : { orderBy?: productsReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, productsReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productsReviews model
   */
  readonly fields: productsReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productsReviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productsReviews model
   */
  interface productsReviewsFieldRefs {
    readonly id_review: FieldRef<"productsReviews", 'String'>
    readonly rating: FieldRef<"productsReviews", 'Int'>
    readonly comment: FieldRef<"productsReviews", 'String'>
    readonly id_product_fk: FieldRef<"productsReviews", 'Int'>
    readonly created_at: FieldRef<"productsReviews", 'DateTime'>
    readonly updated_at: FieldRef<"productsReviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * productsReviews findUnique
   */
  export type productsReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    /**
     * Filter, which productsReviews to fetch.
     */
    where: productsReviewsWhereUniqueInput
  }

  /**
   * productsReviews findUniqueOrThrow
   */
  export type productsReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    /**
     * Filter, which productsReviews to fetch.
     */
    where: productsReviewsWhereUniqueInput
  }

  /**
   * productsReviews findFirst
   */
  export type productsReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    /**
     * Filter, which productsReviews to fetch.
     */
    where?: productsReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsReviews to fetch.
     */
    orderBy?: productsReviewsOrderByWithRelationInput | productsReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productsReviews.
     */
    cursor?: productsReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productsReviews.
     */
    distinct?: ProductsReviewsScalarFieldEnum | ProductsReviewsScalarFieldEnum[]
  }

  /**
   * productsReviews findFirstOrThrow
   */
  export type productsReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    /**
     * Filter, which productsReviews to fetch.
     */
    where?: productsReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsReviews to fetch.
     */
    orderBy?: productsReviewsOrderByWithRelationInput | productsReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productsReviews.
     */
    cursor?: productsReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productsReviews.
     */
    distinct?: ProductsReviewsScalarFieldEnum | ProductsReviewsScalarFieldEnum[]
  }

  /**
   * productsReviews findMany
   */
  export type productsReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    /**
     * Filter, which productsReviews to fetch.
     */
    where?: productsReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsReviews to fetch.
     */
    orderBy?: productsReviewsOrderByWithRelationInput | productsReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productsReviews.
     */
    cursor?: productsReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsReviews.
     */
    skip?: number
    distinct?: ProductsReviewsScalarFieldEnum | ProductsReviewsScalarFieldEnum[]
  }

  /**
   * productsReviews create
   */
  export type productsReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a productsReviews.
     */
    data: XOR<productsReviewsCreateInput, productsReviewsUncheckedCreateInput>
  }

  /**
   * productsReviews createMany
   */
  export type productsReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productsReviews.
     */
    data: productsReviewsCreateManyInput | productsReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productsReviews createManyAndReturn
   */
  export type productsReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many productsReviews.
     */
    data: productsReviewsCreateManyInput | productsReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productsReviews update
   */
  export type productsReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a productsReviews.
     */
    data: XOR<productsReviewsUpdateInput, productsReviewsUncheckedUpdateInput>
    /**
     * Choose, which productsReviews to update.
     */
    where: productsReviewsWhereUniqueInput
  }

  /**
   * productsReviews updateMany
   */
  export type productsReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productsReviews.
     */
    data: XOR<productsReviewsUpdateManyMutationInput, productsReviewsUncheckedUpdateManyInput>
    /**
     * Filter which productsReviews to update
     */
    where?: productsReviewsWhereInput
    /**
     * Limit how many productsReviews to update.
     */
    limit?: number
  }

  /**
   * productsReviews updateManyAndReturn
   */
  export type productsReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * The data used to update productsReviews.
     */
    data: XOR<productsReviewsUpdateManyMutationInput, productsReviewsUncheckedUpdateManyInput>
    /**
     * Filter which productsReviews to update
     */
    where?: productsReviewsWhereInput
    /**
     * Limit how many productsReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * productsReviews upsert
   */
  export type productsReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the productsReviews to update in case it exists.
     */
    where: productsReviewsWhereUniqueInput
    /**
     * In case the productsReviews found by the `where` argument doesn't exist, create a new productsReviews with this data.
     */
    create: XOR<productsReviewsCreateInput, productsReviewsUncheckedCreateInput>
    /**
     * In case the productsReviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsReviewsUpdateInput, productsReviewsUncheckedUpdateInput>
  }

  /**
   * productsReviews delete
   */
  export type productsReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
    /**
     * Filter which productsReviews to delete.
     */
    where: productsReviewsWhereUniqueInput
  }

  /**
   * productsReviews deleteMany
   */
  export type productsReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productsReviews to delete
     */
    where?: productsReviewsWhereInput
    /**
     * Limit how many productsReviews to delete.
     */
    limit?: number
  }

  /**
   * productsReviews without action
   */
  export type productsReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsReviews
     */
    select?: productsReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsReviews
     */
    omit?: productsReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    total_amount: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    total_amount: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id_order: string | null
    total_amount: Decimal | null
    id_user_fk: string | null
    status: $Enums.OrderStatus | null
    payment_method: string | null
    created_at: Date | null
    updated_at: Date | null
    delivered_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id_order: string | null
    total_amount: Decimal | null
    id_user_fk: string | null
    status: $Enums.OrderStatus | null
    payment_method: string | null
    created_at: Date | null
    updated_at: Date | null
    delivered_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id_order: number
    total_amount: number
    id_user_fk: number
    status: number
    payment_method: number
    created_at: number
    updated_at: number
    delivered_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    total_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    total_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    id_order?: true
    total_amount?: true
    id_user_fk?: true
    status?: true
    payment_method?: true
    created_at?: true
    updated_at?: true
    delivered_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id_order?: true
    total_amount?: true
    id_user_fk?: true
    status?: true
    payment_method?: true
    created_at?: true
    updated_at?: true
    delivered_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id_order?: true
    total_amount?: true
    id_user_fk?: true
    status?: true
    payment_method?: true
    created_at?: true
    updated_at?: true
    delivered_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id_order: string
    total_amount: Decimal
    id_user_fk: string
    status: $Enums.OrderStatus
    payment_method: string
    created_at: Date
    updated_at: Date
    delivered_at: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_order?: boolean
    total_amount?: boolean
    id_user_fk?: boolean
    status?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    delivered_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
    order_items?: boolean | Orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_order?: boolean
    total_amount?: boolean
    id_user_fk?: boolean
    status?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    delivered_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_order?: boolean
    total_amount?: boolean
    id_user_fk?: boolean
    status?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    delivered_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id_order?: boolean
    total_amount?: boolean
    id_user_fk?: boolean
    status?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    delivered_at?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_order" | "total_amount" | "id_user_fk" | "status" | "payment_method" | "created_at" | "updated_at" | "delivered_at", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
    order_items?: boolean | Orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      user_details: Prisma.$UsersPayload<ExtArgs>
      order_items: Prisma.$OrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_order: string
      total_amount: Prisma.Decimal
      id_user_fk: string
      status: $Enums.OrderStatus
      payment_method: string
      created_at: Date
      updated_at: Date
      delivered_at: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id_order`
     * const ordersWithId_orderOnly = await prisma.orders.findMany({ select: { id_order: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id_order`
     * const ordersWithId_orderOnly = await prisma.orders.createManyAndReturn({
     *   select: { id_order: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id_order`
     * const ordersWithId_orderOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id_order: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_details<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order_items<T extends Orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id_order: FieldRef<"Orders", 'String'>
    readonly total_amount: FieldRef<"Orders", 'Decimal'>
    readonly id_user_fk: FieldRef<"Orders", 'String'>
    readonly status: FieldRef<"Orders", 'OrderStatus'>
    readonly payment_method: FieldRef<"Orders", 'String'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
    readonly updated_at: FieldRef<"Orders", 'DateTime'>
    readonly delivered_at: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.order_items
   */
  export type Orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderItems
   */

  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    id_product_fk: number | null
  }

  export type OrderItemsSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    id_product_fk: number | null
  }

  export type OrderItemsMinAggregateOutputType = {
    id_order_item: string | null
    quantity: number | null
    price: Decimal | null
    id_order_fk: string | null
    id_product_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    id_order_item: string | null
    quantity: number | null
    price: Decimal | null
    id_order_fk: string | null
    id_product_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderItemsCountAggregateOutputType = {
    id_order_item: number
    quantity: number
    price: number
    id_order_fk: number
    id_product_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    quantity?: true
    price?: true
    id_product_fk?: true
  }

  export type OrderItemsSumAggregateInputType = {
    quantity?: true
    price?: true
    id_product_fk?: true
  }

  export type OrderItemsMinAggregateInputType = {
    id_order_item?: true
    quantity?: true
    price?: true
    id_order_fk?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    id_order_item?: true
    quantity?: true
    price?: true
    id_order_fk?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderItemsCountAggregateInputType = {
    id_order_item?: true
    quantity?: true
    price?: true
    id_order_fk?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to aggregate.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type OrderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithAggregationInput | OrderItemsOrderByWithAggregationInput[]
    by: OrderItemsScalarFieldEnum[] | OrderItemsScalarFieldEnum
    having?: OrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }

  export type OrderItemsGroupByOutputType = {
    id_order_item: string
    quantity: number
    price: Decimal | null
    id_order_fk: string
    id_product_fk: number
    created_at: Date
    updated_at: Date
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends OrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_order_item?: boolean
    quantity?: boolean
    price?: boolean
    id_order_fk?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_order_item?: boolean
    quantity?: boolean
    price?: boolean
    id_order_fk?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_order_item?: boolean
    quantity?: boolean
    price?: boolean
    id_order_fk?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectScalar = {
    id_order_item?: boolean
    quantity?: boolean
    price?: boolean
    id_order_fk?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrderItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_order_item" | "quantity" | "price" | "id_order_fk" | "id_product_fk" | "created_at" | "updated_at", ExtArgs["result"]["orderItems"]>
  export type OrderItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type OrderItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type OrderItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $OrderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItems"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_order_item: string
      quantity: number
      price: Prisma.Decimal | null
      id_order_fk: string
      id_product_fk: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orderItems"]>
    composites: {}
  }

  type OrderItemsGetPayload<S extends boolean | null | undefined | OrderItemsDefaultArgs> = $Result.GetResult<Prisma.$OrderItemsPayload, S>

  type OrderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface OrderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItems'], meta: { name: 'OrderItems' } }
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {OrderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemsFindUniqueArgs>(args: SelectSubset<T, OrderItemsFindUniqueArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemsFindFirstArgs>(args?: SelectSubset<T, OrderItemsFindFirstArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `id_order_item`
     * const orderItemsWithId_order_itemOnly = await prisma.orderItems.findMany({ select: { id_order_item: true } })
     * 
     */
    findMany<T extends OrderItemsFindManyArgs>(args?: SelectSubset<T, OrderItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItems.
     * @param {OrderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
     */
    create<T extends OrderItemsCreateArgs>(args: SelectSubset<T, OrderItemsCreateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemsCreateManyArgs>(args?: SelectSubset<T, OrderItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemsCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id_order_item`
     * const orderItemsWithId_order_itemOnly = await prisma.orderItems.createManyAndReturn({
     *   select: { id_order_item: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItems.
     * @param {OrderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
     */
    delete<T extends OrderItemsDeleteArgs>(args: SelectSubset<T, OrderItemsDeleteArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItems.
     * @param {OrderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemsUpdateArgs>(args: SelectSubset<T, OrderItemsUpdateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemsDeleteManyArgs>(args?: SelectSubset<T, OrderItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemsUpdateManyArgs>(args: SelectSubset<T, OrderItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemsUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id_order_item`
     * const orderItemsWithId_order_itemOnly = await prisma.orderItems.updateManyAndReturn({
     *   select: { id_order_item: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItems.
     * @param {OrderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemsUpsertArgs>(args: SelectSubset<T, OrderItemsUpsertArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemsCountArgs>(
      args?: Subset<T, OrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsGroupByArgs} args - Group by arguments.
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
      T extends OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItems model
   */
  readonly fields: OrderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItems model
   */
  interface OrderItemsFieldRefs {
    readonly id_order_item: FieldRef<"OrderItems", 'String'>
    readonly quantity: FieldRef<"OrderItems", 'Int'>
    readonly price: FieldRef<"OrderItems", 'Decimal'>
    readonly id_order_fk: FieldRef<"OrderItems", 'String'>
    readonly id_product_fk: FieldRef<"OrderItems", 'Int'>
    readonly created_at: FieldRef<"OrderItems", 'DateTime'>
    readonly updated_at: FieldRef<"OrderItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItems findUnique
   */
  export type OrderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findUniqueOrThrow
   */
  export type OrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findFirst
   */
  export type OrderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findFirstOrThrow
   */
  export type OrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findMany
   */
  export type OrderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems create
   */
  export type OrderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItems.
     */
    data: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
  }

  /**
   * OrderItems createMany
   */
  export type OrderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItems createManyAndReturn
   */
  export type OrderItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItems update
   */
  export type OrderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItems.
     */
    data: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
    /**
     * Choose, which OrderItems to update.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems updateMany
   */
  export type OrderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItems updateManyAndReturn
   */
  export type OrderItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItems upsert
   */
  export type OrderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItems to update in case it exists.
     */
    where: OrderItemsWhereUniqueInput
    /**
     * In case the OrderItems found by the `where` argument doesn't exist, create a new OrderItems with this data.
     */
    create: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
    /**
     * In case the OrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
  }

  /**
   * OrderItems delete
   */
  export type OrderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter which OrderItems to delete.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems deleteMany
   */
  export type OrderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItems without action
   */
  export type OrderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
  }


  /**
   * Model Carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsMinAggregateOutputType = {
    id_cart: string | null
    id_user_fk: string | null
    status: $Enums.CartStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartsMaxAggregateOutputType = {
    id_cart: string | null
    id_user_fk: string | null
    status: $Enums.CartStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartsCountAggregateOutputType = {
    id_cart: number
    id_user_fk: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CartsMinAggregateInputType = {
    id_cart?: true
    id_user_fk?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CartsMaxAggregateInputType = {
    id_cart?: true
    id_user_fk?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CartsCountAggregateInputType = {
    id_cart?: true
    id_user_fk?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to aggregate.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type CartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithAggregationInput | CartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: CartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id_cart: string
    id_user_fk: string
    status: $Enums.CartStatus
    created_at: Date
    updated_at: Date
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends CartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type CartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cart?: boolean
    id_user_fk?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
    cart_items?: boolean | Carts$cart_itemsArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cart?: boolean
    id_user_fk?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cart?: boolean
    id_user_fk?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectScalar = {
    id_cart?: boolean
    id_user_fk?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cart" | "id_user_fk" | "status" | "created_at" | "updated_at", ExtArgs["result"]["carts"]>
  export type CartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
    cart_items?: boolean | Carts$cart_itemsArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carts"
    objects: {
      user_details: Prisma.$UsersPayload<ExtArgs>
      cart_items: Prisma.$CartItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cart: string
      id_user_fk: string
      status: $Enums.CartStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type CartsGetPayload<S extends boolean | null | undefined | CartsDefaultArgs> = $Result.GetResult<Prisma.$CartsPayload, S>

  type CartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface CartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carts'], meta: { name: 'Carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {CartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartsFindUniqueArgs>(args: SelectSubset<T, CartsFindUniqueArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartsFindFirstArgs>(args?: SelectSubset<T, CartsFindFirstArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id_cart`
     * const cartsWithId_cartOnly = await prisma.carts.findMany({ select: { id_cart: true } })
     * 
     */
    findMany<T extends CartsFindManyArgs>(args?: SelectSubset<T, CartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {CartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends CartsCreateArgs>(args: SelectSubset<T, CartsCreateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartsCreateManyArgs>(args?: SelectSubset<T, CartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id_cart`
     * const cartsWithId_cartOnly = await prisma.carts.createManyAndReturn({
     *   select: { id_cart: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartsCreateManyAndReturnArgs>(args?: SelectSubset<T, CartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {CartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends CartsDeleteArgs>(args: SelectSubset<T, CartsDeleteArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {CartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartsUpdateArgs>(args: SelectSubset<T, CartsUpdateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartsDeleteManyArgs>(args?: SelectSubset<T, CartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartsUpdateManyArgs>(args: SelectSubset<T, CartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id_cart`
     * const cartsWithId_cartOnly = await prisma.carts.updateManyAndReturn({
     *   select: { id_cart: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartsUpdateManyAndReturnArgs>(args: SelectSubset<T, CartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {CartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends CartsUpsertArgs>(args: SelectSubset<T, CartsUpsertArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartsCountArgs>(
      args?: Subset<T, CartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsGroupByArgs} args - Group by arguments.
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
      T extends CartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartsGroupByArgs['orderBy'] }
        : { orderBy?: CartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carts model
   */
  readonly fields: CartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_details<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart_items<T extends Carts$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Carts$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carts model
   */
  interface CartsFieldRefs {
    readonly id_cart: FieldRef<"Carts", 'String'>
    readonly id_user_fk: FieldRef<"Carts", 'String'>
    readonly status: FieldRef<"Carts", 'CartStatus'>
    readonly created_at: FieldRef<"Carts", 'DateTime'>
    readonly updated_at: FieldRef<"Carts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Carts findUnique
   */
  export type CartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findUniqueOrThrow
   */
  export type CartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findFirst
   */
  export type CartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findFirstOrThrow
   */
  export type CartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findMany
   */
  export type CartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts create
   */
  export type CartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to create a Carts.
     */
    data: XOR<CartsCreateInput, CartsUncheckedCreateInput>
  }

  /**
   * Carts createMany
   */
  export type CartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carts createManyAndReturn
   */
  export type CartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts update
   */
  export type CartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to update a Carts.
     */
    data: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
    /**
     * Choose, which Carts to update.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts updateMany
   */
  export type CartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Carts updateManyAndReturn
   */
  export type CartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts upsert
   */
  export type CartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The filter to search for the Carts to update in case it exists.
     */
    where: CartsWhereUniqueInput
    /**
     * In case the Carts found by the `where` argument doesn't exist, create a new Carts with this data.
     */
    create: XOR<CartsCreateInput, CartsUncheckedCreateInput>
    /**
     * In case the Carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
  }

  /**
   * Carts delete
   */
  export type CartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter which Carts to delete.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts deleteMany
   */
  export type CartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Carts.cart_items
   */
  export type Carts$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    cursor?: CartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * Carts without action
   */
  export type CartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
  }


  /**
   * Model CartItems
   */

  export type AggregateCartItems = {
    _count: CartItemsCountAggregateOutputType | null
    _avg: CartItemsAvgAggregateOutputType | null
    _sum: CartItemsSumAggregateOutputType | null
    _min: CartItemsMinAggregateOutputType | null
    _max: CartItemsMaxAggregateOutputType | null
  }

  export type CartItemsAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    id_product_fk: number | null
  }

  export type CartItemsSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    id_product_fk: number | null
  }

  export type CartItemsMinAggregateOutputType = {
    id_cart_item: string | null
    quantity: number | null
    id_cart_fk: string | null
    price: Decimal | null
    id_product_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartItemsMaxAggregateOutputType = {
    id_cart_item: string | null
    quantity: number | null
    id_cart_fk: string | null
    price: Decimal | null
    id_product_fk: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartItemsCountAggregateOutputType = {
    id_cart_item: number
    quantity: number
    id_cart_fk: number
    price: number
    id_product_fk: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CartItemsAvgAggregateInputType = {
    quantity?: true
    price?: true
    id_product_fk?: true
  }

  export type CartItemsSumAggregateInputType = {
    quantity?: true
    price?: true
    id_product_fk?: true
  }

  export type CartItemsMinAggregateInputType = {
    id_cart_item?: true
    quantity?: true
    id_cart_fk?: true
    price?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type CartItemsMaxAggregateInputType = {
    id_cart_item?: true
    quantity?: true
    id_cart_fk?: true
    price?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
  }

  export type CartItemsCountAggregateInputType = {
    id_cart_item?: true
    quantity?: true
    id_cart_fk?: true
    price?: true
    id_product_fk?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CartItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to aggregate.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemsMaxAggregateInputType
  }

  export type GetCartItemsAggregateType<T extends CartItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItems[P]>
      : GetScalarType<T[P], AggregateCartItems[P]>
  }




  export type CartItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithAggregationInput | CartItemsOrderByWithAggregationInput[]
    by: CartItemsScalarFieldEnum[] | CartItemsScalarFieldEnum
    having?: CartItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemsCountAggregateInputType | true
    _avg?: CartItemsAvgAggregateInputType
    _sum?: CartItemsSumAggregateInputType
    _min?: CartItemsMinAggregateInputType
    _max?: CartItemsMaxAggregateInputType
  }

  export type CartItemsGroupByOutputType = {
    id_cart_item: string
    quantity: number
    id_cart_fk: string
    price: Decimal
    id_product_fk: number
    created_at: Date
    updated_at: Date
    _count: CartItemsCountAggregateOutputType | null
    _avg: CartItemsAvgAggregateOutputType | null
    _sum: CartItemsSumAggregateOutputType | null
    _min: CartItemsMinAggregateOutputType | null
    _max: CartItemsMaxAggregateOutputType | null
  }

  type GetCartItemsGroupByPayload<T extends CartItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemsGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemsGroupByOutputType[P]>
        }
      >
    >


  export type CartItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cart_item?: boolean
    quantity?: boolean
    id_cart_fk?: boolean
    price?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | CartsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>

  export type CartItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cart_item?: boolean
    quantity?: boolean
    id_cart_fk?: boolean
    price?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | CartsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>

  export type CartItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cart_item?: boolean
    quantity?: boolean
    id_cart_fk?: boolean
    price?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | CartsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>

  export type CartItemsSelectScalar = {
    id_cart_item?: boolean
    quantity?: boolean
    id_cart_fk?: boolean
    price?: boolean
    id_product_fk?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CartItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cart_item" | "quantity" | "id_cart_fk" | "price" | "id_product_fk" | "created_at" | "updated_at", ExtArgs["result"]["cartItems"]>
  export type CartItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type CartItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type CartItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $CartItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItems"
    objects: {
      cart: Prisma.$CartsPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cart_item: string
      quantity: number
      id_cart_fk: string
      price: Prisma.Decimal
      id_product_fk: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cartItems"]>
    composites: {}
  }

  type CartItemsGetPayload<S extends boolean | null | undefined | CartItemsDefaultArgs> = $Result.GetResult<Prisma.$CartItemsPayload, S>

  type CartItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemsCountAggregateInputType | true
    }

  export interface CartItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItems'], meta: { name: 'CartItems' } }
    /**
     * Find zero or one CartItems that matches the filter.
     * @param {CartItemsFindUniqueArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemsFindUniqueArgs>(args: SelectSubset<T, CartItemsFindUniqueArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemsFindUniqueOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemsFindFirstArgs>(args?: SelectSubset<T, CartItemsFindFirstArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItems.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItems.findMany({ take: 10 })
     * 
     * // Only select the `id_cart_item`
     * const cartItemsWithId_cart_itemOnly = await prisma.cartItems.findMany({ select: { id_cart_item: true } })
     * 
     */
    findMany<T extends CartItemsFindManyArgs>(args?: SelectSubset<T, CartItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItems.
     * @param {CartItemsCreateArgs} args - Arguments to create a CartItems.
     * @example
     * // Create one CartItems
     * const CartItems = await prisma.cartItems.create({
     *   data: {
     *     // ... data to create a CartItems
     *   }
     * })
     * 
     */
    create<T extends CartItemsCreateArgs>(args: SelectSubset<T, CartItemsCreateArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemsCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemsCreateManyArgs>(args?: SelectSubset<T, CartItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemsCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id_cart_item`
     * const cartItemsWithId_cart_itemOnly = await prisma.cartItems.createManyAndReturn({
     *   select: { id_cart_item: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItems.
     * @param {CartItemsDeleteArgs} args - Arguments to delete one CartItems.
     * @example
     * // Delete one CartItems
     * const CartItems = await prisma.cartItems.delete({
     *   where: {
     *     // ... filter to delete one CartItems
     *   }
     * })
     * 
     */
    delete<T extends CartItemsDeleteArgs>(args: SelectSubset<T, CartItemsDeleteArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItems.
     * @param {CartItemsUpdateArgs} args - Arguments to update one CartItems.
     * @example
     * // Update one CartItems
     * const cartItems = await prisma.cartItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemsUpdateArgs>(args: SelectSubset<T, CartItemsUpdateArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemsDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemsDeleteManyArgs>(args?: SelectSubset<T, CartItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemsUpdateManyArgs>(args: SelectSubset<T, CartItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemsUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id_cart_item`
     * const cartItemsWithId_cart_itemOnly = await prisma.cartItems.updateManyAndReturn({
     *   select: { id_cart_item: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItems.
     * @param {CartItemsUpsertArgs} args - Arguments to update or create a CartItems.
     * @example
     * // Update or create a CartItems
     * const cartItems = await prisma.cartItems.upsert({
     *   create: {
     *     // ... data to create a CartItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItems we want to update
     *   }
     * })
     */
    upsert<T extends CartItemsUpsertArgs>(args: SelectSubset<T, CartItemsUpsertArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItems.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemsCountArgs>(
      args?: Subset<T, CartItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemsAggregateArgs>(args: Subset<T, CartItemsAggregateArgs>): Prisma.PrismaPromise<GetCartItemsAggregateType<T>>

    /**
     * Group by CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsGroupByArgs} args - Group by arguments.
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
      T extends CartItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemsGroupByArgs['orderBy'] }
        : { orderBy?: CartItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CartItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItems model
   */
  readonly fields: CartItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartsDefaultArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItems model
   */
  interface CartItemsFieldRefs {
    readonly id_cart_item: FieldRef<"CartItems", 'String'>
    readonly quantity: FieldRef<"CartItems", 'Int'>
    readonly id_cart_fk: FieldRef<"CartItems", 'String'>
    readonly price: FieldRef<"CartItems", 'Decimal'>
    readonly id_product_fk: FieldRef<"CartItems", 'Int'>
    readonly created_at: FieldRef<"CartItems", 'DateTime'>
    readonly updated_at: FieldRef<"CartItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItems findUnique
   */
  export type CartItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems findUniqueOrThrow
   */
  export type CartItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems findFirst
   */
  export type CartItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems findFirstOrThrow
   */
  export type CartItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems findMany
   */
  export type CartItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems create
   */
  export type CartItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItems.
     */
    data: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>
  }

  /**
   * CartItems createMany
   */
  export type CartItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemsCreateManyInput | CartItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItems createManyAndReturn
   */
  export type CartItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemsCreateManyInput | CartItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItems update
   */
  export type CartItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItems.
     */
    data: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>
    /**
     * Choose, which CartItems to update.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems updateMany
   */
  export type CartItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItems updateManyAndReturn
   */
  export type CartItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItems upsert
   */
  export type CartItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItems to update in case it exists.
     */
    where: CartItemsWhereUniqueInput
    /**
     * In case the CartItems found by the `where` argument doesn't exist, create a new CartItems with this data.
     */
    create: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>
    /**
     * In case the CartItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>
  }

  /**
   * CartItems delete
   */
  export type CartItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter which CartItems to delete.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems deleteMany
   */
  export type CartItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItems without action
   */
  export type CartItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
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


  export const AccountsScalarFieldEnum: {
    id_account: 'id_account',
    email: 'email',
    password: 'password',
    verified: 'verified',
    providerId: 'providerId',
    provider: 'provider',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const AuthenticationsScalarFieldEnum: {
    id_authentication: 'id_authentication',
    type: 'type',
    expireIn: 'expireIn',
    used: 'used',
    id_account_fk: 'id_account_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AuthenticationsScalarFieldEnum = (typeof AuthenticationsScalarFieldEnum)[keyof typeof AuthenticationsScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id_token: 'id_token',
    token: 'token',
    token_type: 'token_type',
    id_authentication: 'id_authentication',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const TwoFactorAuthScalarFieldEnum: {
    id_two_factor_auth: 'id_two_factor_auth',
    otp_code: 'otp_code',
    id_authentication_fk: 'id_authentication_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TwoFactorAuthScalarFieldEnum = (typeof TwoFactorAuthScalarFieldEnum)[keyof typeof TwoFactorAuthScalarFieldEnum]


  export const ContactsScalarFieldEnum: {
    id_contact: 'id_contact',
    phone_number: 'phone_number',
    id_user_fk: 'id_user_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id_user: 'id_user',
    first_name: 'first_name',
    last_name: 'last_name',
    user_type: 'user_type',
    id_account_fk: 'id_account_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AddressesScalarFieldEnum: {
    id_address: 'id_address',
    street: 'street',
    city: 'city',
    country: 'country',
    id_user_fk: 'id_user_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum]


  export const ProductsCategoriesScalarFieldEnum: {
    id_category: 'id_category',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsCategoriesScalarFieldEnum = (typeof ProductsCategoriesScalarFieldEnum)[keyof typeof ProductsCategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id_product: 'id_product',
    reference_code: 'reference_code',
    name: 'name',
    description: 'description',
    price: 'price',
    available_stock: 'available_stock',
    available: 'available',
    aditional_info: 'aditional_info',
    id_category_fk: 'id_category_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProductsImagesScalarFieldEnum: {
    id_image: 'id_image',
    url: 'url',
    id_product_fk: 'id_product_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsImagesScalarFieldEnum = (typeof ProductsImagesScalarFieldEnum)[keyof typeof ProductsImagesScalarFieldEnum]


  export const ProductsReviewsScalarFieldEnum: {
    id_review: 'id_review',
    rating: 'rating',
    comment: 'comment',
    id_product_fk: 'id_product_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsReviewsScalarFieldEnum = (typeof ProductsReviewsScalarFieldEnum)[keyof typeof ProductsReviewsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id_order: 'id_order',
    total_amount: 'total_amount',
    id_user_fk: 'id_user_fk',
    status: 'status',
    payment_method: 'payment_method',
    created_at: 'created_at',
    updated_at: 'updated_at',
    delivered_at: 'delivered_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    id_order_item: 'id_order_item',
    quantity: 'quantity',
    price: 'price',
    id_order_fk: 'id_order_fk',
    id_product_fk: 'id_product_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id_cart: 'id_cart',
    id_user_fk: 'id_user_fk',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const CartItemsScalarFieldEnum: {
    id_cart_item: 'id_cart_item',
    quantity: 'quantity',
    id_cart_fk: 'id_cart_fk',
    price: 'price',
    id_product_fk: 'id_product_fk',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CartItemsScalarFieldEnum = (typeof CartItemsScalarFieldEnum)[keyof typeof CartItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AuthenticationsTypes'
   */
  export type EnumAuthenticationsTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthenticationsTypes'>
    


  /**
   * Reference to a field of type 'AuthenticationsTypes[]'
   */
  export type ListEnumAuthenticationsTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthenticationsTypes[]'>
    


  /**
   * Reference to a field of type 'TokenTypes'
   */
  export type EnumTokenTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenTypes'>
    


  /**
   * Reference to a field of type 'TokenTypes[]'
   */
  export type ListEnumTokenTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenTypes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UsersTypes'
   */
  export type EnumUsersTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsersTypes'>
    


  /**
   * Reference to a field of type 'UsersTypes[]'
   */
  export type ListEnumUsersTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsersTypes[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'CartStatus'
   */
  export type EnumCartStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CartStatus'>
    


  /**
   * Reference to a field of type 'CartStatus[]'
   */
  export type ListEnumCartStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CartStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountsWhereInput = {
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    id_account?: StringFilter<"Accounts"> | string
    email?: StringFilter<"Accounts"> | string
    password?: StringFilter<"Accounts"> | string
    verified?: BoolNullableFilter<"Accounts"> | boolean | null
    providerId?: StringNullableFilter<"Accounts"> | string | null
    provider?: StringNullableFilter<"Accounts"> | string | null
    created_at?: DateTimeFilter<"Accounts"> | Date | string
    updated_at?: DateTimeFilter<"Accounts"> | Date | string
    user_details?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    authentication_details?: AuthenticationsListRelationFilter
  }

  export type AccountsOrderByWithRelationInput = {
    id_account?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verified?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_details?: UsersOrderByWithRelationInput
    authentication_details?: AuthenticationsOrderByRelationAggregateInput
  }

  export type AccountsWhereUniqueInput = Prisma.AtLeast<{
    id_account?: string
    email?: string
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    password?: StringFilter<"Accounts"> | string
    verified?: BoolNullableFilter<"Accounts"> | boolean | null
    providerId?: StringNullableFilter<"Accounts"> | string | null
    provider?: StringNullableFilter<"Accounts"> | string | null
    created_at?: DateTimeFilter<"Accounts"> | Date | string
    updated_at?: DateTimeFilter<"Accounts"> | Date | string
    user_details?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    authentication_details?: AuthenticationsListRelationFilter
  }, "id_account" | "email">

  export type AccountsOrderByWithAggregationInput = {
    id_account?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verified?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
  }

  export type AccountsScalarWhereWithAggregatesInput = {
    AND?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    OR?: AccountsScalarWhereWithAggregatesInput[]
    NOT?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    id_account?: StringWithAggregatesFilter<"Accounts"> | string
    email?: StringWithAggregatesFilter<"Accounts"> | string
    password?: StringWithAggregatesFilter<"Accounts"> | string
    verified?: BoolNullableWithAggregatesFilter<"Accounts"> | boolean | null
    providerId?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
    provider?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Accounts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Accounts"> | Date | string
  }

  export type AuthenticationsWhereInput = {
    AND?: AuthenticationsWhereInput | AuthenticationsWhereInput[]
    OR?: AuthenticationsWhereInput[]
    NOT?: AuthenticationsWhereInput | AuthenticationsWhereInput[]
    id_authentication?: StringFilter<"Authentications"> | string
    type?: EnumAuthenticationsTypesFilter<"Authentications"> | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFilter<"Authentications"> | Date | string
    used?: BoolFilter<"Authentications"> | boolean
    id_account_fk?: StringFilter<"Authentications"> | string
    created_at?: DateTimeFilter<"Authentications"> | Date | string
    updated_at?: DateTimeFilter<"Authentications"> | Date | string
    account_details?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    token_details?: XOR<TokensNullableScalarRelationFilter, TokensWhereInput> | null
    twoFactorAuth_details?: XOR<TwoFactorAuthNullableScalarRelationFilter, TwoFactorAuthWhereInput> | null
  }

  export type AuthenticationsOrderByWithRelationInput = {
    id_authentication?: SortOrder
    type?: SortOrder
    expireIn?: SortOrder
    used?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    account_details?: AccountsOrderByWithRelationInput
    token_details?: TokensOrderByWithRelationInput
    twoFactorAuth_details?: TwoFactorAuthOrderByWithRelationInput
  }

  export type AuthenticationsWhereUniqueInput = Prisma.AtLeast<{
    id_authentication?: string
    AND?: AuthenticationsWhereInput | AuthenticationsWhereInput[]
    OR?: AuthenticationsWhereInput[]
    NOT?: AuthenticationsWhereInput | AuthenticationsWhereInput[]
    type?: EnumAuthenticationsTypesFilter<"Authentications"> | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFilter<"Authentications"> | Date | string
    used?: BoolFilter<"Authentications"> | boolean
    id_account_fk?: StringFilter<"Authentications"> | string
    created_at?: DateTimeFilter<"Authentications"> | Date | string
    updated_at?: DateTimeFilter<"Authentications"> | Date | string
    account_details?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    token_details?: XOR<TokensNullableScalarRelationFilter, TokensWhereInput> | null
    twoFactorAuth_details?: XOR<TwoFactorAuthNullableScalarRelationFilter, TwoFactorAuthWhereInput> | null
  }, "id_authentication">

  export type AuthenticationsOrderByWithAggregationInput = {
    id_authentication?: SortOrder
    type?: SortOrder
    expireIn?: SortOrder
    used?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AuthenticationsCountOrderByAggregateInput
    _max?: AuthenticationsMaxOrderByAggregateInput
    _min?: AuthenticationsMinOrderByAggregateInput
  }

  export type AuthenticationsScalarWhereWithAggregatesInput = {
    AND?: AuthenticationsScalarWhereWithAggregatesInput | AuthenticationsScalarWhereWithAggregatesInput[]
    OR?: AuthenticationsScalarWhereWithAggregatesInput[]
    NOT?: AuthenticationsScalarWhereWithAggregatesInput | AuthenticationsScalarWhereWithAggregatesInput[]
    id_authentication?: StringWithAggregatesFilter<"Authentications"> | string
    type?: EnumAuthenticationsTypesWithAggregatesFilter<"Authentications"> | $Enums.AuthenticationsTypes
    expireIn?: DateTimeWithAggregatesFilter<"Authentications"> | Date | string
    used?: BoolWithAggregatesFilter<"Authentications"> | boolean
    id_account_fk?: StringWithAggregatesFilter<"Authentications"> | string
    created_at?: DateTimeWithAggregatesFilter<"Authentications"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Authentications"> | Date | string
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    id_token?: StringFilter<"Tokens"> | string
    token?: StringFilter<"Tokens"> | string
    token_type?: EnumTokenTypesFilter<"Tokens"> | $Enums.TokenTypes
    id_authentication?: StringFilter<"Tokens"> | string
    created_at?: DateTimeFilter<"Tokens"> | Date | string
    updated_at?: DateTimeFilter<"Tokens"> | Date | string
    authentication_details?: XOR<AuthenticationsNullableScalarRelationFilter, AuthenticationsWhereInput> | null
  }

  export type TokensOrderByWithRelationInput = {
    id_token?: SortOrder
    token?: SortOrder
    token_type?: SortOrder
    id_authentication?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authentication_details?: AuthenticationsOrderByWithRelationInput
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    id_token?: string
    token?: string
    id_authentication?: string
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    token_type?: EnumTokenTypesFilter<"Tokens"> | $Enums.TokenTypes
    created_at?: DateTimeFilter<"Tokens"> | Date | string
    updated_at?: DateTimeFilter<"Tokens"> | Date | string
    authentication_details?: XOR<AuthenticationsNullableScalarRelationFilter, AuthenticationsWhereInput> | null
  }, "id_token" | "token" | "id_authentication">

  export type TokensOrderByWithAggregationInput = {
    id_token?: SortOrder
    token?: SortOrder
    token_type?: SortOrder
    id_authentication?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    id_token?: StringWithAggregatesFilter<"Tokens"> | string
    token?: StringWithAggregatesFilter<"Tokens"> | string
    token_type?: EnumTokenTypesWithAggregatesFilter<"Tokens"> | $Enums.TokenTypes
    id_authentication?: StringWithAggregatesFilter<"Tokens"> | string
    created_at?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
  }

  export type TwoFactorAuthWhereInput = {
    AND?: TwoFactorAuthWhereInput | TwoFactorAuthWhereInput[]
    OR?: TwoFactorAuthWhereInput[]
    NOT?: TwoFactorAuthWhereInput | TwoFactorAuthWhereInput[]
    id_two_factor_auth?: StringFilter<"TwoFactorAuth"> | string
    otp_code?: IntFilter<"TwoFactorAuth"> | number
    id_authentication_fk?: StringFilter<"TwoFactorAuth"> | string
    created_at?: DateTimeFilter<"TwoFactorAuth"> | Date | string
    updated_at?: DateTimeFilter<"TwoFactorAuth"> | Date | string
    authentication_details?: XOR<AuthenticationsNullableScalarRelationFilter, AuthenticationsWhereInput> | null
  }

  export type TwoFactorAuthOrderByWithRelationInput = {
    id_two_factor_auth?: SortOrder
    otp_code?: SortOrder
    id_authentication_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authentication_details?: AuthenticationsOrderByWithRelationInput
  }

  export type TwoFactorAuthWhereUniqueInput = Prisma.AtLeast<{
    id_two_factor_auth?: string
    otp_code?: number
    id_authentication_fk?: string
    AND?: TwoFactorAuthWhereInput | TwoFactorAuthWhereInput[]
    OR?: TwoFactorAuthWhereInput[]
    NOT?: TwoFactorAuthWhereInput | TwoFactorAuthWhereInput[]
    created_at?: DateTimeFilter<"TwoFactorAuth"> | Date | string
    updated_at?: DateTimeFilter<"TwoFactorAuth"> | Date | string
    authentication_details?: XOR<AuthenticationsNullableScalarRelationFilter, AuthenticationsWhereInput> | null
  }, "id_two_factor_auth" | "otp_code" | "id_authentication_fk">

  export type TwoFactorAuthOrderByWithAggregationInput = {
    id_two_factor_auth?: SortOrder
    otp_code?: SortOrder
    id_authentication_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TwoFactorAuthCountOrderByAggregateInput
    _avg?: TwoFactorAuthAvgOrderByAggregateInput
    _max?: TwoFactorAuthMaxOrderByAggregateInput
    _min?: TwoFactorAuthMinOrderByAggregateInput
    _sum?: TwoFactorAuthSumOrderByAggregateInput
  }

  export type TwoFactorAuthScalarWhereWithAggregatesInput = {
    AND?: TwoFactorAuthScalarWhereWithAggregatesInput | TwoFactorAuthScalarWhereWithAggregatesInput[]
    OR?: TwoFactorAuthScalarWhereWithAggregatesInput[]
    NOT?: TwoFactorAuthScalarWhereWithAggregatesInput | TwoFactorAuthScalarWhereWithAggregatesInput[]
    id_two_factor_auth?: StringWithAggregatesFilter<"TwoFactorAuth"> | string
    otp_code?: IntWithAggregatesFilter<"TwoFactorAuth"> | number
    id_authentication_fk?: StringWithAggregatesFilter<"TwoFactorAuth"> | string
    created_at?: DateTimeWithAggregatesFilter<"TwoFactorAuth"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TwoFactorAuth"> | Date | string
  }

  export type ContactsWhereInput = {
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    id_contact?: StringFilter<"Contacts"> | string
    phone_number?: StringFilter<"Contacts"> | string
    id_user_fk?: StringFilter<"Contacts"> | string
    created_at?: DateTimeFilter<"Contacts"> | Date | string
    updated_at?: DateTimeFilter<"Contacts"> | Date | string
    user_details?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ContactsOrderByWithRelationInput = {
    id_contact?: SortOrder
    phone_number?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_details?: UsersOrderByWithRelationInput
  }

  export type ContactsWhereUniqueInput = Prisma.AtLeast<{
    id_contact?: string
    phone_number?: string
    id_user_fk?: string
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    created_at?: DateTimeFilter<"Contacts"> | Date | string
    updated_at?: DateTimeFilter<"Contacts"> | Date | string
    user_details?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id_contact" | "phone_number" | "id_user_fk">

  export type ContactsOrderByWithAggregationInput = {
    id_contact?: SortOrder
    phone_number?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ContactsCountOrderByAggregateInput
    _max?: ContactsMaxOrderByAggregateInput
    _min?: ContactsMinOrderByAggregateInput
  }

  export type ContactsScalarWhereWithAggregatesInput = {
    AND?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    OR?: ContactsScalarWhereWithAggregatesInput[]
    NOT?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    id_contact?: StringWithAggregatesFilter<"Contacts"> | string
    phone_number?: StringWithAggregatesFilter<"Contacts"> | string
    id_user_fk?: StringWithAggregatesFilter<"Contacts"> | string
    created_at?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id_user?: StringFilter<"Users"> | string
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    user_type?: EnumUsersTypesFilter<"Users"> | $Enums.UsersTypes
    id_account_fk?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    my_contacts?: ContactsListRelationFilter
    account_details?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    my_addresses?: AddressesListRelationFilter
    my_orders?: OrdersListRelationFilter
    my_cart?: XOR<CartsNullableScalarRelationFilter, CartsWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id_user?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_type?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    my_contacts?: ContactsOrderByRelationAggregateInput
    account_details?: AccountsOrderByWithRelationInput
    my_addresses?: addressesOrderByRelationAggregateInput
    my_orders?: OrdersOrderByRelationAggregateInput
    my_cart?: CartsOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: string
    id_account_fk?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    user_type?: EnumUsersTypesFilter<"Users"> | $Enums.UsersTypes
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    my_contacts?: ContactsListRelationFilter
    account_details?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    my_addresses?: AddressesListRelationFilter
    my_orders?: OrdersListRelationFilter
    my_cart?: XOR<CartsNullableScalarRelationFilter, CartsWhereInput> | null
  }, "id_user" | "id_account_fk">

  export type UsersOrderByWithAggregationInput = {
    id_user?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_type?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id_user?: StringWithAggregatesFilter<"Users"> | string
    first_name?: StringWithAggregatesFilter<"Users"> | string
    last_name?: StringWithAggregatesFilter<"Users"> | string
    user_type?: EnumUsersTypesWithAggregatesFilter<"Users"> | $Enums.UsersTypes
    id_account_fk?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type addressesWhereInput = {
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    id_address?: StringFilter<"addresses"> | string
    street?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    country?: StringFilter<"addresses"> | string
    id_user_fk?: StringFilter<"addresses"> | string
    created_at?: DateTimeFilter<"addresses"> | Date | string
    updated_at?: DateTimeFilter<"addresses"> | Date | string
    user_details?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type addressesOrderByWithRelationInput = {
    id_address?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_details?: UsersOrderByWithRelationInput
  }

  export type addressesWhereUniqueInput = Prisma.AtLeast<{
    id_address?: string
    id_user_fk?: string
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    street?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    country?: StringFilter<"addresses"> | string
    created_at?: DateTimeFilter<"addresses"> | Date | string
    updated_at?: DateTimeFilter<"addresses"> | Date | string
    user_details?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id_address" | "id_user_fk">

  export type addressesOrderByWithAggregationInput = {
    id_address?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: addressesCountOrderByAggregateInput
    _max?: addressesMaxOrderByAggregateInput
    _min?: addressesMinOrderByAggregateInput
  }

  export type addressesScalarWhereWithAggregatesInput = {
    AND?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    OR?: addressesScalarWhereWithAggregatesInput[]
    NOT?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    id_address?: StringWithAggregatesFilter<"addresses"> | string
    street?: StringWithAggregatesFilter<"addresses"> | string
    city?: StringWithAggregatesFilter<"addresses"> | string
    country?: StringWithAggregatesFilter<"addresses"> | string
    id_user_fk?: StringWithAggregatesFilter<"addresses"> | string
    created_at?: DateTimeWithAggregatesFilter<"addresses"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"addresses"> | Date | string
  }

  export type ProductsCategoriesWhereInput = {
    AND?: ProductsCategoriesWhereInput | ProductsCategoriesWhereInput[]
    OR?: ProductsCategoriesWhereInput[]
    NOT?: ProductsCategoriesWhereInput | ProductsCategoriesWhereInput[]
    id_category?: IntFilter<"ProductsCategories"> | number
    name?: StringFilter<"ProductsCategories"> | string
    description?: StringNullableFilter<"ProductsCategories"> | string | null
    created_at?: DateTimeFilter<"ProductsCategories"> | Date | string
    updated_at?: DateTimeFilter<"ProductsCategories"> | Date | string
    products?: ProductsListRelationFilter
  }

  export type ProductsCategoriesOrderByWithRelationInput = {
    id_category?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
  }

  export type ProductsCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id_category?: number
    name?: string
    AND?: ProductsCategoriesWhereInput | ProductsCategoriesWhereInput[]
    OR?: ProductsCategoriesWhereInput[]
    NOT?: ProductsCategoriesWhereInput | ProductsCategoriesWhereInput[]
    description?: StringNullableFilter<"ProductsCategories"> | string | null
    created_at?: DateTimeFilter<"ProductsCategories"> | Date | string
    updated_at?: DateTimeFilter<"ProductsCategories"> | Date | string
    products?: ProductsListRelationFilter
  }, "id_category" | "name">

  export type ProductsCategoriesOrderByWithAggregationInput = {
    id_category?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductsCategoriesCountOrderByAggregateInput
    _avg?: ProductsCategoriesAvgOrderByAggregateInput
    _max?: ProductsCategoriesMaxOrderByAggregateInput
    _min?: ProductsCategoriesMinOrderByAggregateInput
    _sum?: ProductsCategoriesSumOrderByAggregateInput
  }

  export type ProductsCategoriesScalarWhereWithAggregatesInput = {
    AND?: ProductsCategoriesScalarWhereWithAggregatesInput | ProductsCategoriesScalarWhereWithAggregatesInput[]
    OR?: ProductsCategoriesScalarWhereWithAggregatesInput[]
    NOT?: ProductsCategoriesScalarWhereWithAggregatesInput | ProductsCategoriesScalarWhereWithAggregatesInput[]
    id_category?: IntWithAggregatesFilter<"ProductsCategories"> | number
    name?: StringWithAggregatesFilter<"ProductsCategories"> | string
    description?: StringNullableWithAggregatesFilter<"ProductsCategories"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ProductsCategories"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ProductsCategories"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id_product?: IntFilter<"Products"> | number
    reference_code?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    available_stock?: IntFilter<"Products"> | number
    available?: BoolFilter<"Products"> | boolean
    aditional_info?: StringFilter<"Products"> | string
    id_category_fk?: IntFilter<"Products"> | number
    created_at?: DateTimeFilter<"Products"> | Date | string
    updated_at?: DateTimeFilter<"Products"> | Date | string
    images?: ProductsImagesListRelationFilter
    reviews?: ProductsReviewsListRelationFilter
    order_items?: OrderItemsListRelationFilter
    cart_items?: CartItemsListRelationFilter
    category?: XOR<ProductsCategoriesScalarRelationFilter, ProductsCategoriesWhereInput>
  }

  export type ProductsOrderByWithRelationInput = {
    id_product?: SortOrder
    reference_code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    available_stock?: SortOrder
    available?: SortOrder
    aditional_info?: SortOrder
    id_category_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    images?: ProductsImagesOrderByRelationAggregateInput
    reviews?: productsReviewsOrderByRelationAggregateInput
    order_items?: OrderItemsOrderByRelationAggregateInput
    cart_items?: CartItemsOrderByRelationAggregateInput
    category?: ProductsCategoriesOrderByWithRelationInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id_product?: number
    reference_code?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    available_stock?: IntFilter<"Products"> | number
    available?: BoolFilter<"Products"> | boolean
    aditional_info?: StringFilter<"Products"> | string
    id_category_fk?: IntFilter<"Products"> | number
    created_at?: DateTimeFilter<"Products"> | Date | string
    updated_at?: DateTimeFilter<"Products"> | Date | string
    images?: ProductsImagesListRelationFilter
    reviews?: ProductsReviewsListRelationFilter
    order_items?: OrderItemsListRelationFilter
    cart_items?: CartItemsListRelationFilter
    category?: XOR<ProductsCategoriesScalarRelationFilter, ProductsCategoriesWhereInput>
  }, "id_product" | "reference_code">

  export type ProductsOrderByWithAggregationInput = {
    id_product?: SortOrder
    reference_code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    available_stock?: SortOrder
    available?: SortOrder
    aditional_info?: SortOrder
    id_category_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id_product?: IntWithAggregatesFilter<"Products"> | number
    reference_code?: StringWithAggregatesFilter<"Products"> | string
    name?: StringWithAggregatesFilter<"Products"> | string
    description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    price?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    available_stock?: IntWithAggregatesFilter<"Products"> | number
    available?: BoolWithAggregatesFilter<"Products"> | boolean
    aditional_info?: StringWithAggregatesFilter<"Products"> | string
    id_category_fk?: IntWithAggregatesFilter<"Products"> | number
    created_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type ProductsImagesWhereInput = {
    AND?: ProductsImagesWhereInput | ProductsImagesWhereInput[]
    OR?: ProductsImagesWhereInput[]
    NOT?: ProductsImagesWhereInput | ProductsImagesWhereInput[]
    id_image?: StringFilter<"ProductsImages"> | string
    url?: StringFilter<"ProductsImages"> | string
    id_product_fk?: IntFilter<"ProductsImages"> | number
    created_at?: DateTimeFilter<"ProductsImages"> | Date | string
    updated_at?: DateTimeFilter<"ProductsImages"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type ProductsImagesOrderByWithRelationInput = {
    id_image?: SortOrder
    url?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: ProductsOrderByWithRelationInput
  }

  export type ProductsImagesWhereUniqueInput = Prisma.AtLeast<{
    id_image?: string
    AND?: ProductsImagesWhereInput | ProductsImagesWhereInput[]
    OR?: ProductsImagesWhereInput[]
    NOT?: ProductsImagesWhereInput | ProductsImagesWhereInput[]
    url?: StringFilter<"ProductsImages"> | string
    id_product_fk?: IntFilter<"ProductsImages"> | number
    created_at?: DateTimeFilter<"ProductsImages"> | Date | string
    updated_at?: DateTimeFilter<"ProductsImages"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id_image">

  export type ProductsImagesOrderByWithAggregationInput = {
    id_image?: SortOrder
    url?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductsImagesCountOrderByAggregateInput
    _avg?: ProductsImagesAvgOrderByAggregateInput
    _max?: ProductsImagesMaxOrderByAggregateInput
    _min?: ProductsImagesMinOrderByAggregateInput
    _sum?: ProductsImagesSumOrderByAggregateInput
  }

  export type ProductsImagesScalarWhereWithAggregatesInput = {
    AND?: ProductsImagesScalarWhereWithAggregatesInput | ProductsImagesScalarWhereWithAggregatesInput[]
    OR?: ProductsImagesScalarWhereWithAggregatesInput[]
    NOT?: ProductsImagesScalarWhereWithAggregatesInput | ProductsImagesScalarWhereWithAggregatesInput[]
    id_image?: StringWithAggregatesFilter<"ProductsImages"> | string
    url?: StringWithAggregatesFilter<"ProductsImages"> | string
    id_product_fk?: IntWithAggregatesFilter<"ProductsImages"> | number
    created_at?: DateTimeWithAggregatesFilter<"ProductsImages"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ProductsImages"> | Date | string
  }

  export type productsReviewsWhereInput = {
    AND?: productsReviewsWhereInput | productsReviewsWhereInput[]
    OR?: productsReviewsWhereInput[]
    NOT?: productsReviewsWhereInput | productsReviewsWhereInput[]
    id_review?: StringFilter<"productsReviews"> | string
    rating?: IntFilter<"productsReviews"> | number
    comment?: StringNullableFilter<"productsReviews"> | string | null
    id_product_fk?: IntFilter<"productsReviews"> | number
    created_at?: DateTimeFilter<"productsReviews"> | Date | string
    updated_at?: DateTimeFilter<"productsReviews"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type productsReviewsOrderByWithRelationInput = {
    id_review?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: ProductsOrderByWithRelationInput
  }

  export type productsReviewsWhereUniqueInput = Prisma.AtLeast<{
    id_review?: string
    AND?: productsReviewsWhereInput | productsReviewsWhereInput[]
    OR?: productsReviewsWhereInput[]
    NOT?: productsReviewsWhereInput | productsReviewsWhereInput[]
    rating?: IntFilter<"productsReviews"> | number
    comment?: StringNullableFilter<"productsReviews"> | string | null
    id_product_fk?: IntFilter<"productsReviews"> | number
    created_at?: DateTimeFilter<"productsReviews"> | Date | string
    updated_at?: DateTimeFilter<"productsReviews"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id_review">

  export type productsReviewsOrderByWithAggregationInput = {
    id_review?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: productsReviewsCountOrderByAggregateInput
    _avg?: productsReviewsAvgOrderByAggregateInput
    _max?: productsReviewsMaxOrderByAggregateInput
    _min?: productsReviewsMinOrderByAggregateInput
    _sum?: productsReviewsSumOrderByAggregateInput
  }

  export type productsReviewsScalarWhereWithAggregatesInput = {
    AND?: productsReviewsScalarWhereWithAggregatesInput | productsReviewsScalarWhereWithAggregatesInput[]
    OR?: productsReviewsScalarWhereWithAggregatesInput[]
    NOT?: productsReviewsScalarWhereWithAggregatesInput | productsReviewsScalarWhereWithAggregatesInput[]
    id_review?: StringWithAggregatesFilter<"productsReviews"> | string
    rating?: IntWithAggregatesFilter<"productsReviews"> | number
    comment?: StringNullableWithAggregatesFilter<"productsReviews"> | string | null
    id_product_fk?: IntWithAggregatesFilter<"productsReviews"> | number
    created_at?: DateTimeWithAggregatesFilter<"productsReviews"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"productsReviews"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id_order?: StringFilter<"Orders"> | string
    total_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    id_user_fk?: StringFilter<"Orders"> | string
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    payment_method?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    delivered_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    user_details?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    order_items?: OrderItemsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id_order?: SortOrder
    total_amount?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    delivered_at?: SortOrderInput | SortOrder
    user_details?: UsersOrderByWithRelationInput
    order_items?: OrderItemsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id_order?: string
    id_user_fk?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    total_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    payment_method?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    delivered_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    user_details?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    order_items?: OrderItemsListRelationFilter
  }, "id_order" | "id_user_fk">

  export type OrdersOrderByWithAggregationInput = {
    id_order?: SortOrder
    total_amount?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    delivered_at?: SortOrderInput | SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id_order?: StringWithAggregatesFilter<"Orders"> | string
    total_amount?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    id_user_fk?: StringWithAggregatesFilter<"Orders"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Orders"> | $Enums.OrderStatus
    payment_method?: StringWithAggregatesFilter<"Orders"> | string
    created_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    delivered_at?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
  }

  export type OrderItemsWhereInput = {
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    id_order_item?: StringFilter<"OrderItems"> | string
    quantity?: IntFilter<"OrderItems"> | number
    price?: DecimalNullableFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string | null
    id_order_fk?: StringFilter<"OrderItems"> | string
    id_product_fk?: IntFilter<"OrderItems"> | number
    created_at?: DateTimeFilter<"OrderItems"> | Date | string
    updated_at?: DateTimeFilter<"OrderItems"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type OrderItemsOrderByWithRelationInput = {
    id_order_item?: SortOrder
    quantity?: SortOrder
    price?: SortOrderInput | SortOrder
    id_order_fk?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order?: OrdersOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type OrderItemsWhereUniqueInput = Prisma.AtLeast<{
    id_order_item?: string
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    quantity?: IntFilter<"OrderItems"> | number
    price?: DecimalNullableFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string | null
    id_order_fk?: StringFilter<"OrderItems"> | string
    id_product_fk?: IntFilter<"OrderItems"> | number
    created_at?: DateTimeFilter<"OrderItems"> | Date | string
    updated_at?: DateTimeFilter<"OrderItems"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id_order_item">

  export type OrderItemsOrderByWithAggregationInput = {
    id_order_item?: SortOrder
    quantity?: SortOrder
    price?: SortOrderInput | SortOrder
    id_order_fk?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrderItemsCountOrderByAggregateInput
    _avg?: OrderItemsAvgOrderByAggregateInput
    _max?: OrderItemsMaxOrderByAggregateInput
    _min?: OrderItemsMinOrderByAggregateInput
    _sum?: OrderItemsSumOrderByAggregateInput
  }

  export type OrderItemsScalarWhereWithAggregatesInput = {
    AND?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    OR?: OrderItemsScalarWhereWithAggregatesInput[]
    NOT?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    id_order_item?: StringWithAggregatesFilter<"OrderItems"> | string
    quantity?: IntWithAggregatesFilter<"OrderItems"> | number
    price?: DecimalNullableWithAggregatesFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string | null
    id_order_fk?: StringWithAggregatesFilter<"OrderItems"> | string
    id_product_fk?: IntWithAggregatesFilter<"OrderItems"> | number
    created_at?: DateTimeWithAggregatesFilter<"OrderItems"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OrderItems"> | Date | string
  }

  export type CartsWhereInput = {
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    id_cart?: StringFilter<"Carts"> | string
    id_user_fk?: StringFilter<"Carts"> | string
    status?: EnumCartStatusFilter<"Carts"> | $Enums.CartStatus
    created_at?: DateTimeFilter<"Carts"> | Date | string
    updated_at?: DateTimeFilter<"Carts"> | Date | string
    user_details?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    cart_items?: CartItemsListRelationFilter
  }

  export type CartsOrderByWithRelationInput = {
    id_cart?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_details?: UsersOrderByWithRelationInput
    cart_items?: CartItemsOrderByRelationAggregateInput
  }

  export type CartsWhereUniqueInput = Prisma.AtLeast<{
    id_cart?: string
    id_user_fk?: string
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    status?: EnumCartStatusFilter<"Carts"> | $Enums.CartStatus
    created_at?: DateTimeFilter<"Carts"> | Date | string
    updated_at?: DateTimeFilter<"Carts"> | Date | string
    user_details?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    cart_items?: CartItemsListRelationFilter
  }, "id_cart" | "id_user_fk">

  export type CartsOrderByWithAggregationInput = {
    id_cart?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CartsCountOrderByAggregateInput
    _max?: CartsMaxOrderByAggregateInput
    _min?: CartsMinOrderByAggregateInput
  }

  export type CartsScalarWhereWithAggregatesInput = {
    AND?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    OR?: CartsScalarWhereWithAggregatesInput[]
    NOT?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    id_cart?: StringWithAggregatesFilter<"Carts"> | string
    id_user_fk?: StringWithAggregatesFilter<"Carts"> | string
    status?: EnumCartStatusWithAggregatesFilter<"Carts"> | $Enums.CartStatus
    created_at?: DateTimeWithAggregatesFilter<"Carts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Carts"> | Date | string
  }

  export type CartItemsWhereInput = {
    AND?: CartItemsWhereInput | CartItemsWhereInput[]
    OR?: CartItemsWhereInput[]
    NOT?: CartItemsWhereInput | CartItemsWhereInput[]
    id_cart_item?: StringFilter<"CartItems"> | string
    quantity?: IntFilter<"CartItems"> | number
    id_cart_fk?: StringFilter<"CartItems"> | string
    price?: DecimalFilter<"CartItems"> | Decimal | DecimalJsLike | number | string
    id_product_fk?: IntFilter<"CartItems"> | number
    created_at?: DateTimeFilter<"CartItems"> | Date | string
    updated_at?: DateTimeFilter<"CartItems"> | Date | string
    cart?: XOR<CartsScalarRelationFilter, CartsWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type CartItemsOrderByWithRelationInput = {
    id_cart_item?: SortOrder
    quantity?: SortOrder
    id_cart_fk?: SortOrder
    price?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cart?: CartsOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type CartItemsWhereUniqueInput = Prisma.AtLeast<{
    id_cart_item?: string
    AND?: CartItemsWhereInput | CartItemsWhereInput[]
    OR?: CartItemsWhereInput[]
    NOT?: CartItemsWhereInput | CartItemsWhereInput[]
    quantity?: IntFilter<"CartItems"> | number
    id_cart_fk?: StringFilter<"CartItems"> | string
    price?: DecimalFilter<"CartItems"> | Decimal | DecimalJsLike | number | string
    id_product_fk?: IntFilter<"CartItems"> | number
    created_at?: DateTimeFilter<"CartItems"> | Date | string
    updated_at?: DateTimeFilter<"CartItems"> | Date | string
    cart?: XOR<CartsScalarRelationFilter, CartsWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id_cart_item">

  export type CartItemsOrderByWithAggregationInput = {
    id_cart_item?: SortOrder
    quantity?: SortOrder
    id_cart_fk?: SortOrder
    price?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CartItemsCountOrderByAggregateInput
    _avg?: CartItemsAvgOrderByAggregateInput
    _max?: CartItemsMaxOrderByAggregateInput
    _min?: CartItemsMinOrderByAggregateInput
    _sum?: CartItemsSumOrderByAggregateInput
  }

  export type CartItemsScalarWhereWithAggregatesInput = {
    AND?: CartItemsScalarWhereWithAggregatesInput | CartItemsScalarWhereWithAggregatesInput[]
    OR?: CartItemsScalarWhereWithAggregatesInput[]
    NOT?: CartItemsScalarWhereWithAggregatesInput | CartItemsScalarWhereWithAggregatesInput[]
    id_cart_item?: StringWithAggregatesFilter<"CartItems"> | string
    quantity?: IntWithAggregatesFilter<"CartItems"> | number
    id_cart_fk?: StringWithAggregatesFilter<"CartItems"> | string
    price?: DecimalWithAggregatesFilter<"CartItems"> | Decimal | DecimalJsLike | number | string
    id_product_fk?: IntWithAggregatesFilter<"CartItems"> | number
    created_at?: DateTimeWithAggregatesFilter<"CartItems"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CartItems"> | Date | string
  }

  export type AccountsCreateInput = {
    id_account: string
    email: string
    password: string
    verified?: boolean | null
    providerId?: string | null
    provider?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_details?: UsersCreateNestedOneWithoutAccount_detailsInput
    authentication_details?: AuthenticationsCreateNestedManyWithoutAccount_detailsInput
  }

  export type AccountsUncheckedCreateInput = {
    id_account: string
    email: string
    password: string
    verified?: boolean | null
    providerId?: string | null
    provider?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_details?: UsersUncheckedCreateNestedOneWithoutAccount_detailsInput
    authentication_details?: AuthenticationsUncheckedCreateNestedManyWithoutAccount_detailsInput
  }

  export type AccountsUpdateInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_details?: UsersUpdateOneWithoutAccount_detailsNestedInput
    authentication_details?: AuthenticationsUpdateManyWithoutAccount_detailsNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_details?: UsersUncheckedUpdateOneWithoutAccount_detailsNestedInput
    authentication_details?: AuthenticationsUncheckedUpdateManyWithoutAccount_detailsNestedInput
  }

  export type AccountsCreateManyInput = {
    id_account: string
    email: string
    password: string
    verified?: boolean | null
    providerId?: string | null
    provider?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccountsUpdateManyMutationInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsUncheckedUpdateManyInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticationsCreateInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    account_details: AccountsCreateNestedOneWithoutAuthentication_detailsInput
    token_details?: TokensCreateNestedOneWithoutAuthentication_detailsInput
    twoFactorAuth_details?: TwoFactorAuthCreateNestedOneWithoutAuthentication_detailsInput
  }

  export type AuthenticationsUncheckedCreateInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
    token_details?: TokensUncheckedCreateNestedOneWithoutAuthentication_detailsInput
    twoFactorAuth_details?: TwoFactorAuthUncheckedCreateNestedOneWithoutAuthentication_detailsInput
  }

  export type AuthenticationsUpdateInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    account_details?: AccountsUpdateOneRequiredWithoutAuthentication_detailsNestedInput
    token_details?: TokensUpdateOneWithoutAuthentication_detailsNestedInput
    twoFactorAuth_details?: TwoFactorAuthUpdateOneWithoutAuthentication_detailsNestedInput
  }

  export type AuthenticationsUncheckedUpdateInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token_details?: TokensUncheckedUpdateOneWithoutAuthentication_detailsNestedInput
    twoFactorAuth_details?: TwoFactorAuthUncheckedUpdateOneWithoutAuthentication_detailsNestedInput
  }

  export type AuthenticationsCreateManyInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AuthenticationsUpdateManyMutationInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticationsUncheckedUpdateManyInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensCreateInput = {
    id_token: string
    token: string
    token_type: $Enums.TokenTypes
    created_at?: Date | string
    updated_at?: Date | string
    authentication_details?: AuthenticationsCreateNestedOneWithoutToken_detailsInput
  }

  export type TokensUncheckedCreateInput = {
    id_token: string
    token: string
    token_type: $Enums.TokenTypes
    id_authentication: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokensUpdateInput = {
    id_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_type?: EnumTokenTypesFieldUpdateOperationsInput | $Enums.TokenTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authentication_details?: AuthenticationsUpdateOneWithoutToken_detailsNestedInput
  }

  export type TokensUncheckedUpdateInput = {
    id_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_type?: EnumTokenTypesFieldUpdateOperationsInput | $Enums.TokenTypes
    id_authentication?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensCreateManyInput = {
    id_token: string
    token: string
    token_type: $Enums.TokenTypes
    id_authentication: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokensUpdateManyMutationInput = {
    id_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_type?: EnumTokenTypesFieldUpdateOperationsInput | $Enums.TokenTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUncheckedUpdateManyInput = {
    id_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_type?: EnumTokenTypesFieldUpdateOperationsInput | $Enums.TokenTypes
    id_authentication?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthCreateInput = {
    id_two_factor_auth: string
    otp_code: number
    created_at?: Date | string
    updated_at?: Date | string
    authentication_details?: AuthenticationsCreateNestedOneWithoutTwoFactorAuth_detailsInput
  }

  export type TwoFactorAuthUncheckedCreateInput = {
    id_two_factor_auth: string
    otp_code: number
    id_authentication_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TwoFactorAuthUpdateInput = {
    id_two_factor_auth?: StringFieldUpdateOperationsInput | string
    otp_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authentication_details?: AuthenticationsUpdateOneWithoutTwoFactorAuth_detailsNestedInput
  }

  export type TwoFactorAuthUncheckedUpdateInput = {
    id_two_factor_auth?: StringFieldUpdateOperationsInput | string
    otp_code?: IntFieldUpdateOperationsInput | number
    id_authentication_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthCreateManyInput = {
    id_two_factor_auth: string
    otp_code: number
    id_authentication_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TwoFactorAuthUpdateManyMutationInput = {
    id_two_factor_auth?: StringFieldUpdateOperationsInput | string
    otp_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthUncheckedUpdateManyInput = {
    id_two_factor_auth?: StringFieldUpdateOperationsInput | string
    otp_code?: IntFieldUpdateOperationsInput | number
    id_authentication_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateInput = {
    id_contact: string
    phone_number: string
    created_at?: Date | string
    updated_at?: Date | string
    user_details: UsersCreateNestedOneWithoutMy_contactsInput
  }

  export type ContactsUncheckedCreateInput = {
    id_contact: string
    phone_number: string
    id_user_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContactsUpdateInput = {
    id_contact?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_details?: UsersUpdateOneRequiredWithoutMy_contactsNestedInput
  }

  export type ContactsUncheckedUpdateInput = {
    id_contact?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateManyInput = {
    id_contact: string
    phone_number: string
    id_user_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContactsUpdateManyMutationInput = {
    id_contact?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateManyInput = {
    id_contact?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsCreateNestedManyWithoutUser_detailsInput
    account_details: AccountsCreateNestedOneWithoutUser_detailsInput
    my_addresses?: addressesCreateNestedManyWithoutUser_detailsInput
    my_orders?: OrdersCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersUncheckedCreateInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsUncheckedCreateNestedManyWithoutUser_detailsInput
    my_addresses?: addressesUncheckedCreateNestedManyWithoutUser_detailsInput
    my_orders?: OrdersUncheckedCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsUncheckedCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUpdateManyWithoutUser_detailsNestedInput
    account_details?: AccountsUpdateOneRequiredWithoutUser_detailsNestedInput
    my_addresses?: addressesUpdateManyWithoutUser_detailsNestedInput
    my_orders?: OrdersUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUpdateOneWithoutUser_detailsNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_addresses?: addressesUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_orders?: OrdersUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUncheckedUpdateOneWithoutUser_detailsNestedInput
  }

  export type UsersCreateManyInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesCreateInput = {
    id_address: string
    street: string
    city: string
    country?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_details: UsersCreateNestedOneWithoutMy_addressesInput
  }

  export type addressesUncheckedCreateInput = {
    id_address: string
    street: string
    city: string
    country?: string
    id_user_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesUpdateInput = {
    id_address?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_details?: UsersUpdateOneRequiredWithoutMy_addressesNestedInput
  }

  export type addressesUncheckedUpdateInput = {
    id_address?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesCreateManyInput = {
    id_address: string
    street: string
    city: string
    country?: string
    id_user_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesUpdateManyMutationInput = {
    id_address?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUncheckedUpdateManyInput = {
    id_address?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCategoriesCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type ProductsCategoriesUncheckedCreateInput = {
    id_category?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProductsCategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type ProductsCategoriesUncheckedUpdateInput = {
    id_category?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductsCategoriesCreateManyInput = {
    id_category?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsCategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCategoriesUncheckedUpdateManyInput = {
    id_category?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesCreateNestedManyWithoutProductInput
    reviews?: productsReviewsCreateNestedManyWithoutProductInput
    order_items?: OrderItemsCreateNestedManyWithoutProductInput
    cart_items?: CartItemsCreateNestedManyWithoutProductInput
    category: ProductsCategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    id_product?: number
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    id_category_fk: number
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesUncheckedCreateNestedManyWithoutProductInput
    reviews?: productsReviewsUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUpdateManyWithoutProductNestedInput
    reviews?: productsReviewsUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUpdateManyWithoutProductNestedInput
    category?: ProductsCategoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id_product?: IntFieldUpdateOperationsInput | number
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    id_category_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUncheckedUpdateManyWithoutProductNestedInput
    reviews?: productsReviewsUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id_product?: number
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    id_category_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id_product?: IntFieldUpdateOperationsInput | number
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    id_category_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsImagesCreateInput = {
    id_image: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutImagesInput
  }

  export type ProductsImagesUncheckedCreateInput = {
    id_image: string
    url: string
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsImagesUpdateInput = {
    id_image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductsImagesUncheckedUpdateInput = {
    id_image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsImagesCreateManyInput = {
    id_image: string
    url: string
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsImagesUpdateManyMutationInput = {
    id_image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsImagesUncheckedUpdateManyInput = {
    id_image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsReviewsCreateInput = {
    id_review: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutReviewsInput
  }

  export type productsReviewsUncheckedCreateInput = {
    id_review: string
    rating: number
    comment?: string | null
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsReviewsUpdateInput = {
    id_review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type productsReviewsUncheckedUpdateInput = {
    id_review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsReviewsCreateManyInput = {
    id_review: string
    rating: number
    comment?: string | null
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsReviewsUpdateManyMutationInput = {
    id_review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsReviewsUncheckedUpdateManyInput = {
    id_review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    id_order: string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    payment_method?: string
    created_at?: Date | string
    updated_at?: Date | string
    delivered_at?: Date | string | null
    user_details: UsersCreateNestedOneWithoutMy_ordersInput
    order_items?: OrderItemsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id_order: string
    total_amount: Decimal | DecimalJsLike | number | string
    id_user_fk: string
    status?: $Enums.OrderStatus
    payment_method?: string
    created_at?: Date | string
    updated_at?: Date | string
    delivered_at?: Date | string | null
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    id_order?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UsersUpdateOneRequiredWithoutMy_ordersNestedInput
    order_items?: OrderItemsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id_order?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id_order: string
    total_amount: Decimal | DecimalJsLike | number | string
    id_user_fk: string
    status?: $Enums.OrderStatus
    payment_method?: string
    created_at?: Date | string
    updated_at?: Date | string
    delivered_at?: Date | string | null
  }

  export type OrdersUpdateManyMutationInput = {
    id_order?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersUncheckedUpdateManyInput = {
    id_order?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemsCreateInput = {
    id_order_item: string
    quantity: number
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order: OrdersCreateNestedOneWithoutOrder_itemsInput
    product: ProductsCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemsUncheckedCreateInput = {
    id_order_item: string
    quantity: number
    price?: Decimal | DecimalJsLike | number | string | null
    id_order_fk: string
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemsUpdateInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput
    product?: ProductsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemsUncheckedUpdateInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_order_fk?: StringFieldUpdateOperationsInput | string
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateManyInput = {
    id_order_item: string
    quantity: number
    price?: Decimal | DecimalJsLike | number | string | null
    id_order_fk: string
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemsUpdateManyMutationInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_order_fk?: StringFieldUpdateOperationsInput | string
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartsCreateInput = {
    id_cart: string
    status?: $Enums.CartStatus
    created_at?: Date | string
    updated_at?: Date | string
    user_details: UsersCreateNestedOneWithoutMy_cartInput
    cart_items?: CartItemsCreateNestedManyWithoutCartInput
  }

  export type CartsUncheckedCreateInput = {
    id_cart: string
    id_user_fk: string
    status?: $Enums.CartStatus
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartsUpdateInput = {
    id_cart?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_details?: UsersUpdateOneRequiredWithoutMy_cartNestedInput
    cart_items?: CartItemsUpdateManyWithoutCartNestedInput
  }

  export type CartsUncheckedUpdateInput = {
    id_cart?: StringFieldUpdateOperationsInput | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: CartItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartsCreateManyInput = {
    id_cart: string
    id_user_fk: string
    status?: $Enums.CartStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartsUpdateManyMutationInput = {
    id_cart?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartsUncheckedUpdateManyInput = {
    id_cart?: StringFieldUpdateOperationsInput | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsCreateInput = {
    id_cart_item: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    cart: CartsCreateNestedOneWithoutCart_itemsInput
    product: ProductsCreateNestedOneWithoutCart_itemsInput
  }

  export type CartItemsUncheckedCreateInput = {
    id_cart_item: string
    quantity: number
    id_cart_fk: string
    price: Decimal | DecimalJsLike | number | string
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemsUpdateInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartsUpdateOneRequiredWithoutCart_itemsNestedInput
    product?: ProductsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type CartItemsUncheckedUpdateInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    id_cart_fk?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsCreateManyInput = {
    id_cart_item: string
    quantity: number
    id_cart_fk: string
    price: Decimal | DecimalJsLike | number | string
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemsUpdateManyMutationInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsUncheckedUpdateManyInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    id_cart_fk?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type AuthenticationsListRelationFilter = {
    every?: AuthenticationsWhereInput
    some?: AuthenticationsWhereInput
    none?: AuthenticationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthenticationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsCountOrderByAggregateInput = {
    id_account?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verified?: SortOrder
    providerId?: SortOrder
    provider?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    id_account?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verified?: SortOrder
    providerId?: SortOrder
    provider?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccountsMinOrderByAggregateInput = {
    id_account?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verified?: SortOrder
    providerId?: SortOrder
    provider?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAuthenticationsTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticationsTypes | EnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticationsTypes[] | ListEnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticationsTypes[] | ListEnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticationsTypesFilter<$PrismaModel> | $Enums.AuthenticationsTypes
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountsScalarRelationFilter = {
    is?: AccountsWhereInput
    isNot?: AccountsWhereInput
  }

  export type TokensNullableScalarRelationFilter = {
    is?: TokensWhereInput | null
    isNot?: TokensWhereInput | null
  }

  export type TwoFactorAuthNullableScalarRelationFilter = {
    is?: TwoFactorAuthWhereInput | null
    isNot?: TwoFactorAuthWhereInput | null
  }

  export type AuthenticationsCountOrderByAggregateInput = {
    id_authentication?: SortOrder
    type?: SortOrder
    expireIn?: SortOrder
    used?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuthenticationsMaxOrderByAggregateInput = {
    id_authentication?: SortOrder
    type?: SortOrder
    expireIn?: SortOrder
    used?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuthenticationsMinOrderByAggregateInput = {
    id_authentication?: SortOrder
    type?: SortOrder
    expireIn?: SortOrder
    used?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumAuthenticationsTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticationsTypes | EnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticationsTypes[] | ListEnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticationsTypes[] | ListEnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticationsTypesWithAggregatesFilter<$PrismaModel> | $Enums.AuthenticationsTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthenticationsTypesFilter<$PrismaModel>
    _max?: NestedEnumAuthenticationsTypesFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTokenTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTypes | EnumTokenTypesFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTypes[] | ListEnumTokenTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTypes[] | ListEnumTokenTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypesFilter<$PrismaModel> | $Enums.TokenTypes
  }

  export type AuthenticationsNullableScalarRelationFilter = {
    is?: AuthenticationsWhereInput | null
    isNot?: AuthenticationsWhereInput | null
  }

  export type TokensCountOrderByAggregateInput = {
    id_token?: SortOrder
    token?: SortOrder
    token_type?: SortOrder
    id_authentication?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    id_token?: SortOrder
    token?: SortOrder
    token_type?: SortOrder
    id_authentication?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    id_token?: SortOrder
    token?: SortOrder
    token_type?: SortOrder
    id_authentication?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumTokenTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTypes | EnumTokenTypesFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTypes[] | ListEnumTokenTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTypes[] | ListEnumTokenTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypesWithAggregatesFilter<$PrismaModel> | $Enums.TokenTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypesFilter<$PrismaModel>
    _max?: NestedEnumTokenTypesFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TwoFactorAuthCountOrderByAggregateInput = {
    id_two_factor_auth?: SortOrder
    otp_code?: SortOrder
    id_authentication_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TwoFactorAuthAvgOrderByAggregateInput = {
    otp_code?: SortOrder
  }

  export type TwoFactorAuthMaxOrderByAggregateInput = {
    id_two_factor_auth?: SortOrder
    otp_code?: SortOrder
    id_authentication_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TwoFactorAuthMinOrderByAggregateInput = {
    id_two_factor_auth?: SortOrder
    otp_code?: SortOrder
    id_authentication_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TwoFactorAuthSumOrderByAggregateInput = {
    otp_code?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ContactsCountOrderByAggregateInput = {
    id_contact?: SortOrder
    phone_number?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactsMaxOrderByAggregateInput = {
    id_contact?: SortOrder
    phone_number?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactsMinOrderByAggregateInput = {
    id_contact?: SortOrder
    phone_number?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumUsersTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsersTypes | EnumUsersTypesFieldRefInput<$PrismaModel>
    in?: $Enums.UsersTypes[] | ListEnumUsersTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsersTypes[] | ListEnumUsersTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumUsersTypesFilter<$PrismaModel> | $Enums.UsersTypes
  }

  export type ContactsListRelationFilter = {
    every?: ContactsWhereInput
    some?: ContactsWhereInput
    none?: ContactsWhereInput
  }

  export type AddressesListRelationFilter = {
    every?: addressesWhereInput
    some?: addressesWhereInput
    none?: addressesWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type CartsNullableScalarRelationFilter = {
    is?: CartsWhereInput | null
    isNot?: CartsWhereInput | null
  }

  export type ContactsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addressesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id_user?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_type?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id_user?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_type?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id_user?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_type?: SortOrder
    id_account_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumUsersTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsersTypes | EnumUsersTypesFieldRefInput<$PrismaModel>
    in?: $Enums.UsersTypes[] | ListEnumUsersTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsersTypes[] | ListEnumUsersTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumUsersTypesWithAggregatesFilter<$PrismaModel> | $Enums.UsersTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsersTypesFilter<$PrismaModel>
    _max?: NestedEnumUsersTypesFilter<$PrismaModel>
  }

  export type addressesCountOrderByAggregateInput = {
    id_address?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesMaxOrderByAggregateInput = {
    id_address?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesMinOrderByAggregateInput = {
    id_address?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    id_user_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCategoriesCountOrderByAggregateInput = {
    id_category?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsCategoriesAvgOrderByAggregateInput = {
    id_category?: SortOrder
  }

  export type ProductsCategoriesMaxOrderByAggregateInput = {
    id_category?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsCategoriesMinOrderByAggregateInput = {
    id_category?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsCategoriesSumOrderByAggregateInput = {
    id_category?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProductsImagesListRelationFilter = {
    every?: ProductsImagesWhereInput
    some?: ProductsImagesWhereInput
    none?: ProductsImagesWhereInput
  }

  export type ProductsReviewsListRelationFilter = {
    every?: productsReviewsWhereInput
    some?: productsReviewsWhereInput
    none?: productsReviewsWhereInput
  }

  export type OrderItemsListRelationFilter = {
    every?: OrderItemsWhereInput
    some?: OrderItemsWhereInput
    none?: OrderItemsWhereInput
  }

  export type CartItemsListRelationFilter = {
    every?: CartItemsWhereInput
    some?: CartItemsWhereInput
    none?: CartItemsWhereInput
  }

  export type ProductsCategoriesScalarRelationFilter = {
    is?: ProductsCategoriesWhereInput
    isNot?: ProductsCategoriesWhereInput
  }

  export type ProductsImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id_product?: SortOrder
    reference_code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    available_stock?: SortOrder
    available?: SortOrder
    aditional_info?: SortOrder
    id_category_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id_product?: SortOrder
    price?: SortOrder
    available_stock?: SortOrder
    id_category_fk?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id_product?: SortOrder
    reference_code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    available_stock?: SortOrder
    available?: SortOrder
    aditional_info?: SortOrder
    id_category_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id_product?: SortOrder
    reference_code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    available_stock?: SortOrder
    available?: SortOrder
    aditional_info?: SortOrder
    id_category_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id_product?: SortOrder
    price?: SortOrder
    available_stock?: SortOrder
    id_category_fk?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type ProductsImagesCountOrderByAggregateInput = {
    id_image?: SortOrder
    url?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsImagesAvgOrderByAggregateInput = {
    id_product_fk?: SortOrder
  }

  export type ProductsImagesMaxOrderByAggregateInput = {
    id_image?: SortOrder
    url?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsImagesMinOrderByAggregateInput = {
    id_image?: SortOrder
    url?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsImagesSumOrderByAggregateInput = {
    id_product_fk?: SortOrder
  }

  export type productsReviewsCountOrderByAggregateInput = {
    id_review?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsReviewsAvgOrderByAggregateInput = {
    rating?: SortOrder
    id_product_fk?: SortOrder
  }

  export type productsReviewsMaxOrderByAggregateInput = {
    id_review?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsReviewsMinOrderByAggregateInput = {
    id_review?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsReviewsSumOrderByAggregateInput = {
    rating?: SortOrder
    id_product_fk?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrdersCountOrderByAggregateInput = {
    id_order?: SortOrder
    total_amount?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    delivered_at?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id_order?: SortOrder
    total_amount?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    delivered_at?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id_order?: SortOrder
    total_amount?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    delivered_at?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderItemsCountOrderByAggregateInput = {
    id_order_item?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    id_order_fk?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    id_product_fk?: SortOrder
  }

  export type OrderItemsMaxOrderByAggregateInput = {
    id_order_item?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    id_order_fk?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderItemsMinOrderByAggregateInput = {
    id_order_item?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    id_order_fk?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    id_product_fk?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumCartStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusFilter<$PrismaModel> | $Enums.CartStatus
  }

  export type CartsCountOrderByAggregateInput = {
    id_cart?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartsMaxOrderByAggregateInput = {
    id_cart?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartsMinOrderByAggregateInput = {
    id_cart?: SortOrder
    id_user_fk?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumCartStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusWithAggregatesFilter<$PrismaModel> | $Enums.CartStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCartStatusFilter<$PrismaModel>
    _max?: NestedEnumCartStatusFilter<$PrismaModel>
  }

  export type CartsScalarRelationFilter = {
    is?: CartsWhereInput
    isNot?: CartsWhereInput
  }

  export type CartItemsCountOrderByAggregateInput = {
    id_cart_item?: SortOrder
    quantity?: SortOrder
    id_cart_fk?: SortOrder
    price?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    id_product_fk?: SortOrder
  }

  export type CartItemsMaxOrderByAggregateInput = {
    id_cart_item?: SortOrder
    quantity?: SortOrder
    id_cart_fk?: SortOrder
    price?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartItemsMinOrderByAggregateInput = {
    id_cart_item?: SortOrder
    quantity?: SortOrder
    id_cart_fk?: SortOrder
    price?: SortOrder
    id_product_fk?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    id_product_fk?: SortOrder
  }

  export type UsersCreateNestedOneWithoutAccount_detailsInput = {
    create?: XOR<UsersCreateWithoutAccount_detailsInput, UsersUncheckedCreateWithoutAccount_detailsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccount_detailsInput
    connect?: UsersWhereUniqueInput
  }

  export type AuthenticationsCreateNestedManyWithoutAccount_detailsInput = {
    create?: XOR<AuthenticationsCreateWithoutAccount_detailsInput, AuthenticationsUncheckedCreateWithoutAccount_detailsInput> | AuthenticationsCreateWithoutAccount_detailsInput[] | AuthenticationsUncheckedCreateWithoutAccount_detailsInput[]
    connectOrCreate?: AuthenticationsCreateOrConnectWithoutAccount_detailsInput | AuthenticationsCreateOrConnectWithoutAccount_detailsInput[]
    createMany?: AuthenticationsCreateManyAccount_detailsInputEnvelope
    connect?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedOneWithoutAccount_detailsInput = {
    create?: XOR<UsersCreateWithoutAccount_detailsInput, UsersUncheckedCreateWithoutAccount_detailsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccount_detailsInput
    connect?: UsersWhereUniqueInput
  }

  export type AuthenticationsUncheckedCreateNestedManyWithoutAccount_detailsInput = {
    create?: XOR<AuthenticationsCreateWithoutAccount_detailsInput, AuthenticationsUncheckedCreateWithoutAccount_detailsInput> | AuthenticationsCreateWithoutAccount_detailsInput[] | AuthenticationsUncheckedCreateWithoutAccount_detailsInput[]
    connectOrCreate?: AuthenticationsCreateOrConnectWithoutAccount_detailsInput | AuthenticationsCreateOrConnectWithoutAccount_detailsInput[]
    createMany?: AuthenticationsCreateManyAccount_detailsInputEnvelope
    connect?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneWithoutAccount_detailsNestedInput = {
    create?: XOR<UsersCreateWithoutAccount_detailsInput, UsersUncheckedCreateWithoutAccount_detailsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccount_detailsInput
    upsert?: UsersUpsertWithoutAccount_detailsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAccount_detailsInput, UsersUpdateWithoutAccount_detailsInput>, UsersUncheckedUpdateWithoutAccount_detailsInput>
  }

  export type AuthenticationsUpdateManyWithoutAccount_detailsNestedInput = {
    create?: XOR<AuthenticationsCreateWithoutAccount_detailsInput, AuthenticationsUncheckedCreateWithoutAccount_detailsInput> | AuthenticationsCreateWithoutAccount_detailsInput[] | AuthenticationsUncheckedCreateWithoutAccount_detailsInput[]
    connectOrCreate?: AuthenticationsCreateOrConnectWithoutAccount_detailsInput | AuthenticationsCreateOrConnectWithoutAccount_detailsInput[]
    upsert?: AuthenticationsUpsertWithWhereUniqueWithoutAccount_detailsInput | AuthenticationsUpsertWithWhereUniqueWithoutAccount_detailsInput[]
    createMany?: AuthenticationsCreateManyAccount_detailsInputEnvelope
    set?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
    disconnect?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
    delete?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
    connect?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
    update?: AuthenticationsUpdateWithWhereUniqueWithoutAccount_detailsInput | AuthenticationsUpdateWithWhereUniqueWithoutAccount_detailsInput[]
    updateMany?: AuthenticationsUpdateManyWithWhereWithoutAccount_detailsInput | AuthenticationsUpdateManyWithWhereWithoutAccount_detailsInput[]
    deleteMany?: AuthenticationsScalarWhereInput | AuthenticationsScalarWhereInput[]
  }

  export type UsersUncheckedUpdateOneWithoutAccount_detailsNestedInput = {
    create?: XOR<UsersCreateWithoutAccount_detailsInput, UsersUncheckedCreateWithoutAccount_detailsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccount_detailsInput
    upsert?: UsersUpsertWithoutAccount_detailsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAccount_detailsInput, UsersUpdateWithoutAccount_detailsInput>, UsersUncheckedUpdateWithoutAccount_detailsInput>
  }

  export type AuthenticationsUncheckedUpdateManyWithoutAccount_detailsNestedInput = {
    create?: XOR<AuthenticationsCreateWithoutAccount_detailsInput, AuthenticationsUncheckedCreateWithoutAccount_detailsInput> | AuthenticationsCreateWithoutAccount_detailsInput[] | AuthenticationsUncheckedCreateWithoutAccount_detailsInput[]
    connectOrCreate?: AuthenticationsCreateOrConnectWithoutAccount_detailsInput | AuthenticationsCreateOrConnectWithoutAccount_detailsInput[]
    upsert?: AuthenticationsUpsertWithWhereUniqueWithoutAccount_detailsInput | AuthenticationsUpsertWithWhereUniqueWithoutAccount_detailsInput[]
    createMany?: AuthenticationsCreateManyAccount_detailsInputEnvelope
    set?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
    disconnect?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
    delete?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
    connect?: AuthenticationsWhereUniqueInput | AuthenticationsWhereUniqueInput[]
    update?: AuthenticationsUpdateWithWhereUniqueWithoutAccount_detailsInput | AuthenticationsUpdateWithWhereUniqueWithoutAccount_detailsInput[]
    updateMany?: AuthenticationsUpdateManyWithWhereWithoutAccount_detailsInput | AuthenticationsUpdateManyWithWhereWithoutAccount_detailsInput[]
    deleteMany?: AuthenticationsScalarWhereInput | AuthenticationsScalarWhereInput[]
  }

  export type AccountsCreateNestedOneWithoutAuthentication_detailsInput = {
    create?: XOR<AccountsCreateWithoutAuthentication_detailsInput, AccountsUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutAuthentication_detailsInput
    connect?: AccountsWhereUniqueInput
  }

  export type TokensCreateNestedOneWithoutAuthentication_detailsInput = {
    create?: XOR<TokensCreateWithoutAuthentication_detailsInput, TokensUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: TokensCreateOrConnectWithoutAuthentication_detailsInput
    connect?: TokensWhereUniqueInput
  }

  export type TwoFactorAuthCreateNestedOneWithoutAuthentication_detailsInput = {
    create?: XOR<TwoFactorAuthCreateWithoutAuthentication_detailsInput, TwoFactorAuthUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: TwoFactorAuthCreateOrConnectWithoutAuthentication_detailsInput
    connect?: TwoFactorAuthWhereUniqueInput
  }

  export type TokensUncheckedCreateNestedOneWithoutAuthentication_detailsInput = {
    create?: XOR<TokensCreateWithoutAuthentication_detailsInput, TokensUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: TokensCreateOrConnectWithoutAuthentication_detailsInput
    connect?: TokensWhereUniqueInput
  }

  export type TwoFactorAuthUncheckedCreateNestedOneWithoutAuthentication_detailsInput = {
    create?: XOR<TwoFactorAuthCreateWithoutAuthentication_detailsInput, TwoFactorAuthUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: TwoFactorAuthCreateOrConnectWithoutAuthentication_detailsInput
    connect?: TwoFactorAuthWhereUniqueInput
  }

  export type EnumAuthenticationsTypesFieldUpdateOperationsInput = {
    set?: $Enums.AuthenticationsTypes
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountsUpdateOneRequiredWithoutAuthentication_detailsNestedInput = {
    create?: XOR<AccountsCreateWithoutAuthentication_detailsInput, AccountsUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutAuthentication_detailsInput
    upsert?: AccountsUpsertWithoutAuthentication_detailsInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutAuthentication_detailsInput, AccountsUpdateWithoutAuthentication_detailsInput>, AccountsUncheckedUpdateWithoutAuthentication_detailsInput>
  }

  export type TokensUpdateOneWithoutAuthentication_detailsNestedInput = {
    create?: XOR<TokensCreateWithoutAuthentication_detailsInput, TokensUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: TokensCreateOrConnectWithoutAuthentication_detailsInput
    upsert?: TokensUpsertWithoutAuthentication_detailsInput
    disconnect?: TokensWhereInput | boolean
    delete?: TokensWhereInput | boolean
    connect?: TokensWhereUniqueInput
    update?: XOR<XOR<TokensUpdateToOneWithWhereWithoutAuthentication_detailsInput, TokensUpdateWithoutAuthentication_detailsInput>, TokensUncheckedUpdateWithoutAuthentication_detailsInput>
  }

  export type TwoFactorAuthUpdateOneWithoutAuthentication_detailsNestedInput = {
    create?: XOR<TwoFactorAuthCreateWithoutAuthentication_detailsInput, TwoFactorAuthUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: TwoFactorAuthCreateOrConnectWithoutAuthentication_detailsInput
    upsert?: TwoFactorAuthUpsertWithoutAuthentication_detailsInput
    disconnect?: TwoFactorAuthWhereInput | boolean
    delete?: TwoFactorAuthWhereInput | boolean
    connect?: TwoFactorAuthWhereUniqueInput
    update?: XOR<XOR<TwoFactorAuthUpdateToOneWithWhereWithoutAuthentication_detailsInput, TwoFactorAuthUpdateWithoutAuthentication_detailsInput>, TwoFactorAuthUncheckedUpdateWithoutAuthentication_detailsInput>
  }

  export type TokensUncheckedUpdateOneWithoutAuthentication_detailsNestedInput = {
    create?: XOR<TokensCreateWithoutAuthentication_detailsInput, TokensUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: TokensCreateOrConnectWithoutAuthentication_detailsInput
    upsert?: TokensUpsertWithoutAuthentication_detailsInput
    disconnect?: TokensWhereInput | boolean
    delete?: TokensWhereInput | boolean
    connect?: TokensWhereUniqueInput
    update?: XOR<XOR<TokensUpdateToOneWithWhereWithoutAuthentication_detailsInput, TokensUpdateWithoutAuthentication_detailsInput>, TokensUncheckedUpdateWithoutAuthentication_detailsInput>
  }

  export type TwoFactorAuthUncheckedUpdateOneWithoutAuthentication_detailsNestedInput = {
    create?: XOR<TwoFactorAuthCreateWithoutAuthentication_detailsInput, TwoFactorAuthUncheckedCreateWithoutAuthentication_detailsInput>
    connectOrCreate?: TwoFactorAuthCreateOrConnectWithoutAuthentication_detailsInput
    upsert?: TwoFactorAuthUpsertWithoutAuthentication_detailsInput
    disconnect?: TwoFactorAuthWhereInput | boolean
    delete?: TwoFactorAuthWhereInput | boolean
    connect?: TwoFactorAuthWhereUniqueInput
    update?: XOR<XOR<TwoFactorAuthUpdateToOneWithWhereWithoutAuthentication_detailsInput, TwoFactorAuthUpdateWithoutAuthentication_detailsInput>, TwoFactorAuthUncheckedUpdateWithoutAuthentication_detailsInput>
  }

  export type AuthenticationsCreateNestedOneWithoutToken_detailsInput = {
    create?: XOR<AuthenticationsCreateWithoutToken_detailsInput, AuthenticationsUncheckedCreateWithoutToken_detailsInput>
    connectOrCreate?: AuthenticationsCreateOrConnectWithoutToken_detailsInput
    connect?: AuthenticationsWhereUniqueInput
  }

  export type EnumTokenTypesFieldUpdateOperationsInput = {
    set?: $Enums.TokenTypes
  }

  export type AuthenticationsUpdateOneWithoutToken_detailsNestedInput = {
    create?: XOR<AuthenticationsCreateWithoutToken_detailsInput, AuthenticationsUncheckedCreateWithoutToken_detailsInput>
    connectOrCreate?: AuthenticationsCreateOrConnectWithoutToken_detailsInput
    upsert?: AuthenticationsUpsertWithoutToken_detailsInput
    disconnect?: AuthenticationsWhereInput | boolean
    delete?: AuthenticationsWhereInput | boolean
    connect?: AuthenticationsWhereUniqueInput
    update?: XOR<XOR<AuthenticationsUpdateToOneWithWhereWithoutToken_detailsInput, AuthenticationsUpdateWithoutToken_detailsInput>, AuthenticationsUncheckedUpdateWithoutToken_detailsInput>
  }

  export type AuthenticationsCreateNestedOneWithoutTwoFactorAuth_detailsInput = {
    create?: XOR<AuthenticationsCreateWithoutTwoFactorAuth_detailsInput, AuthenticationsUncheckedCreateWithoutTwoFactorAuth_detailsInput>
    connectOrCreate?: AuthenticationsCreateOrConnectWithoutTwoFactorAuth_detailsInput
    connect?: AuthenticationsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuthenticationsUpdateOneWithoutTwoFactorAuth_detailsNestedInput = {
    create?: XOR<AuthenticationsCreateWithoutTwoFactorAuth_detailsInput, AuthenticationsUncheckedCreateWithoutTwoFactorAuth_detailsInput>
    connectOrCreate?: AuthenticationsCreateOrConnectWithoutTwoFactorAuth_detailsInput
    upsert?: AuthenticationsUpsertWithoutTwoFactorAuth_detailsInput
    disconnect?: AuthenticationsWhereInput | boolean
    delete?: AuthenticationsWhereInput | boolean
    connect?: AuthenticationsWhereUniqueInput
    update?: XOR<XOR<AuthenticationsUpdateToOneWithWhereWithoutTwoFactorAuth_detailsInput, AuthenticationsUpdateWithoutTwoFactorAuth_detailsInput>, AuthenticationsUncheckedUpdateWithoutTwoFactorAuth_detailsInput>
  }

  export type UsersCreateNestedOneWithoutMy_contactsInput = {
    create?: XOR<UsersCreateWithoutMy_contactsInput, UsersUncheckedCreateWithoutMy_contactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMy_contactsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutMy_contactsNestedInput = {
    create?: XOR<UsersCreateWithoutMy_contactsInput, UsersUncheckedCreateWithoutMy_contactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMy_contactsInput
    upsert?: UsersUpsertWithoutMy_contactsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMy_contactsInput, UsersUpdateWithoutMy_contactsInput>, UsersUncheckedUpdateWithoutMy_contactsInput>
  }

  export type ContactsCreateNestedManyWithoutUser_detailsInput = {
    create?: XOR<ContactsCreateWithoutUser_detailsInput, ContactsUncheckedCreateWithoutUser_detailsInput> | ContactsCreateWithoutUser_detailsInput[] | ContactsUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUser_detailsInput | ContactsCreateOrConnectWithoutUser_detailsInput[]
    createMany?: ContactsCreateManyUser_detailsInputEnvelope
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
  }

  export type AccountsCreateNestedOneWithoutUser_detailsInput = {
    create?: XOR<AccountsCreateWithoutUser_detailsInput, AccountsUncheckedCreateWithoutUser_detailsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutUser_detailsInput
    connect?: AccountsWhereUniqueInput
  }

  export type addressesCreateNestedManyWithoutUser_detailsInput = {
    create?: XOR<addressesCreateWithoutUser_detailsInput, addressesUncheckedCreateWithoutUser_detailsInput> | addressesCreateWithoutUser_detailsInput[] | addressesUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUser_detailsInput | addressesCreateOrConnectWithoutUser_detailsInput[]
    createMany?: addressesCreateManyUser_detailsInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUser_detailsInput = {
    create?: XOR<OrdersCreateWithoutUser_detailsInput, OrdersUncheckedCreateWithoutUser_detailsInput> | OrdersCreateWithoutUser_detailsInput[] | OrdersUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUser_detailsInput | OrdersCreateOrConnectWithoutUser_detailsInput[]
    createMany?: OrdersCreateManyUser_detailsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type CartsCreateNestedOneWithoutUser_detailsInput = {
    create?: XOR<CartsCreateWithoutUser_detailsInput, CartsUncheckedCreateWithoutUser_detailsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutUser_detailsInput
    connect?: CartsWhereUniqueInput
  }

  export type ContactsUncheckedCreateNestedManyWithoutUser_detailsInput = {
    create?: XOR<ContactsCreateWithoutUser_detailsInput, ContactsUncheckedCreateWithoutUser_detailsInput> | ContactsCreateWithoutUser_detailsInput[] | ContactsUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUser_detailsInput | ContactsCreateOrConnectWithoutUser_detailsInput[]
    createMany?: ContactsCreateManyUser_detailsInputEnvelope
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
  }

  export type addressesUncheckedCreateNestedManyWithoutUser_detailsInput = {
    create?: XOR<addressesCreateWithoutUser_detailsInput, addressesUncheckedCreateWithoutUser_detailsInput> | addressesCreateWithoutUser_detailsInput[] | addressesUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUser_detailsInput | addressesCreateOrConnectWithoutUser_detailsInput[]
    createMany?: addressesCreateManyUser_detailsInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUser_detailsInput = {
    create?: XOR<OrdersCreateWithoutUser_detailsInput, OrdersUncheckedCreateWithoutUser_detailsInput> | OrdersCreateWithoutUser_detailsInput[] | OrdersUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUser_detailsInput | OrdersCreateOrConnectWithoutUser_detailsInput[]
    createMany?: OrdersCreateManyUser_detailsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type CartsUncheckedCreateNestedOneWithoutUser_detailsInput = {
    create?: XOR<CartsCreateWithoutUser_detailsInput, CartsUncheckedCreateWithoutUser_detailsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutUser_detailsInput
    connect?: CartsWhereUniqueInput
  }

  export type EnumUsersTypesFieldUpdateOperationsInput = {
    set?: $Enums.UsersTypes
  }

  export type ContactsUpdateManyWithoutUser_detailsNestedInput = {
    create?: XOR<ContactsCreateWithoutUser_detailsInput, ContactsUncheckedCreateWithoutUser_detailsInput> | ContactsCreateWithoutUser_detailsInput[] | ContactsUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUser_detailsInput | ContactsCreateOrConnectWithoutUser_detailsInput[]
    upsert?: ContactsUpsertWithWhereUniqueWithoutUser_detailsInput | ContactsUpsertWithWhereUniqueWithoutUser_detailsInput[]
    createMany?: ContactsCreateManyUser_detailsInputEnvelope
    set?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    disconnect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    delete?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    update?: ContactsUpdateWithWhereUniqueWithoutUser_detailsInput | ContactsUpdateWithWhereUniqueWithoutUser_detailsInput[]
    updateMany?: ContactsUpdateManyWithWhereWithoutUser_detailsInput | ContactsUpdateManyWithWhereWithoutUser_detailsInput[]
    deleteMany?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
  }

  export type AccountsUpdateOneRequiredWithoutUser_detailsNestedInput = {
    create?: XOR<AccountsCreateWithoutUser_detailsInput, AccountsUncheckedCreateWithoutUser_detailsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutUser_detailsInput
    upsert?: AccountsUpsertWithoutUser_detailsInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutUser_detailsInput, AccountsUpdateWithoutUser_detailsInput>, AccountsUncheckedUpdateWithoutUser_detailsInput>
  }

  export type addressesUpdateManyWithoutUser_detailsNestedInput = {
    create?: XOR<addressesCreateWithoutUser_detailsInput, addressesUncheckedCreateWithoutUser_detailsInput> | addressesCreateWithoutUser_detailsInput[] | addressesUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUser_detailsInput | addressesCreateOrConnectWithoutUser_detailsInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutUser_detailsInput | addressesUpsertWithWhereUniqueWithoutUser_detailsInput[]
    createMany?: addressesCreateManyUser_detailsInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutUser_detailsInput | addressesUpdateWithWhereUniqueWithoutUser_detailsInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutUser_detailsInput | addressesUpdateManyWithWhereWithoutUser_detailsInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUser_detailsNestedInput = {
    create?: XOR<OrdersCreateWithoutUser_detailsInput, OrdersUncheckedCreateWithoutUser_detailsInput> | OrdersCreateWithoutUser_detailsInput[] | OrdersUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUser_detailsInput | OrdersCreateOrConnectWithoutUser_detailsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUser_detailsInput | OrdersUpsertWithWhereUniqueWithoutUser_detailsInput[]
    createMany?: OrdersCreateManyUser_detailsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUser_detailsInput | OrdersUpdateWithWhereUniqueWithoutUser_detailsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUser_detailsInput | OrdersUpdateManyWithWhereWithoutUser_detailsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type CartsUpdateOneWithoutUser_detailsNestedInput = {
    create?: XOR<CartsCreateWithoutUser_detailsInput, CartsUncheckedCreateWithoutUser_detailsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutUser_detailsInput
    upsert?: CartsUpsertWithoutUser_detailsInput
    disconnect?: CartsWhereInput | boolean
    delete?: CartsWhereInput | boolean
    connect?: CartsWhereUniqueInput
    update?: XOR<XOR<CartsUpdateToOneWithWhereWithoutUser_detailsInput, CartsUpdateWithoutUser_detailsInput>, CartsUncheckedUpdateWithoutUser_detailsInput>
  }

  export type ContactsUncheckedUpdateManyWithoutUser_detailsNestedInput = {
    create?: XOR<ContactsCreateWithoutUser_detailsInput, ContactsUncheckedCreateWithoutUser_detailsInput> | ContactsCreateWithoutUser_detailsInput[] | ContactsUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUser_detailsInput | ContactsCreateOrConnectWithoutUser_detailsInput[]
    upsert?: ContactsUpsertWithWhereUniqueWithoutUser_detailsInput | ContactsUpsertWithWhereUniqueWithoutUser_detailsInput[]
    createMany?: ContactsCreateManyUser_detailsInputEnvelope
    set?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    disconnect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    delete?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    update?: ContactsUpdateWithWhereUniqueWithoutUser_detailsInput | ContactsUpdateWithWhereUniqueWithoutUser_detailsInput[]
    updateMany?: ContactsUpdateManyWithWhereWithoutUser_detailsInput | ContactsUpdateManyWithWhereWithoutUser_detailsInput[]
    deleteMany?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
  }

  export type addressesUncheckedUpdateManyWithoutUser_detailsNestedInput = {
    create?: XOR<addressesCreateWithoutUser_detailsInput, addressesUncheckedCreateWithoutUser_detailsInput> | addressesCreateWithoutUser_detailsInput[] | addressesUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUser_detailsInput | addressesCreateOrConnectWithoutUser_detailsInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutUser_detailsInput | addressesUpsertWithWhereUniqueWithoutUser_detailsInput[]
    createMany?: addressesCreateManyUser_detailsInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutUser_detailsInput | addressesUpdateWithWhereUniqueWithoutUser_detailsInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutUser_detailsInput | addressesUpdateManyWithWhereWithoutUser_detailsInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUser_detailsNestedInput = {
    create?: XOR<OrdersCreateWithoutUser_detailsInput, OrdersUncheckedCreateWithoutUser_detailsInput> | OrdersCreateWithoutUser_detailsInput[] | OrdersUncheckedCreateWithoutUser_detailsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUser_detailsInput | OrdersCreateOrConnectWithoutUser_detailsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUser_detailsInput | OrdersUpsertWithWhereUniqueWithoutUser_detailsInput[]
    createMany?: OrdersCreateManyUser_detailsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUser_detailsInput | OrdersUpdateWithWhereUniqueWithoutUser_detailsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUser_detailsInput | OrdersUpdateManyWithWhereWithoutUser_detailsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type CartsUncheckedUpdateOneWithoutUser_detailsNestedInput = {
    create?: XOR<CartsCreateWithoutUser_detailsInput, CartsUncheckedCreateWithoutUser_detailsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutUser_detailsInput
    upsert?: CartsUpsertWithoutUser_detailsInput
    disconnect?: CartsWhereInput | boolean
    delete?: CartsWhereInput | boolean
    connect?: CartsWhereUniqueInput
    update?: XOR<XOR<CartsUpdateToOneWithWhereWithoutUser_detailsInput, CartsUpdateWithoutUser_detailsInput>, CartsUncheckedUpdateWithoutUser_detailsInput>
  }

  export type UsersCreateNestedOneWithoutMy_addressesInput = {
    create?: XOR<UsersCreateWithoutMy_addressesInput, UsersUncheckedCreateWithoutMy_addressesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMy_addressesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutMy_addressesNestedInput = {
    create?: XOR<UsersCreateWithoutMy_addressesInput, UsersUncheckedCreateWithoutMy_addressesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMy_addressesInput
    upsert?: UsersUpsertWithoutMy_addressesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMy_addressesInput, UsersUpdateWithoutMy_addressesInput>, UsersUncheckedUpdateWithoutMy_addressesInput>
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsImagesCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsImagesCreateWithoutProductInput, ProductsImagesUncheckedCreateWithoutProductInput> | ProductsImagesCreateWithoutProductInput[] | ProductsImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsImagesCreateOrConnectWithoutProductInput | ProductsImagesCreateOrConnectWithoutProductInput[]
    createMany?: ProductsImagesCreateManyProductInputEnvelope
    connect?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
  }

  export type productsReviewsCreateNestedManyWithoutProductInput = {
    create?: XOR<productsReviewsCreateWithoutProductInput, productsReviewsUncheckedCreateWithoutProductInput> | productsReviewsCreateWithoutProductInput[] | productsReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productsReviewsCreateOrConnectWithoutProductInput | productsReviewsCreateOrConnectWithoutProductInput[]
    createMany?: productsReviewsCreateManyProductInputEnvelope
    connect?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
  }

  export type OrderItemsCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type CartItemsCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemsCreateWithoutProductInput, CartItemsUncheckedCreateWithoutProductInput> | CartItemsCreateWithoutProductInput[] | CartItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProductInput | CartItemsCreateOrConnectWithoutProductInput[]
    createMany?: CartItemsCreateManyProductInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type ProductsCategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductsCategoriesCreateWithoutProductsInput, ProductsCategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductsCategoriesCreateOrConnectWithoutProductsInput
    connect?: ProductsCategoriesWhereUniqueInput
  }

  export type ProductsImagesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsImagesCreateWithoutProductInput, ProductsImagesUncheckedCreateWithoutProductInput> | ProductsImagesCreateWithoutProductInput[] | ProductsImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsImagesCreateOrConnectWithoutProductInput | ProductsImagesCreateOrConnectWithoutProductInput[]
    createMany?: ProductsImagesCreateManyProductInputEnvelope
    connect?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
  }

  export type productsReviewsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<productsReviewsCreateWithoutProductInput, productsReviewsUncheckedCreateWithoutProductInput> | productsReviewsCreateWithoutProductInput[] | productsReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productsReviewsCreateOrConnectWithoutProductInput | productsReviewsCreateOrConnectWithoutProductInput[]
    createMany?: productsReviewsCreateManyProductInputEnvelope
    connect?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type CartItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemsCreateWithoutProductInput, CartItemsUncheckedCreateWithoutProductInput> | CartItemsCreateWithoutProductInput[] | CartItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProductInput | CartItemsCreateOrConnectWithoutProductInput[]
    createMany?: CartItemsCreateManyProductInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProductsImagesUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsImagesCreateWithoutProductInput, ProductsImagesUncheckedCreateWithoutProductInput> | ProductsImagesCreateWithoutProductInput[] | ProductsImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsImagesCreateOrConnectWithoutProductInput | ProductsImagesCreateOrConnectWithoutProductInput[]
    upsert?: ProductsImagesUpsertWithWhereUniqueWithoutProductInput | ProductsImagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsImagesCreateManyProductInputEnvelope
    set?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
    disconnect?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
    delete?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
    connect?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
    update?: ProductsImagesUpdateWithWhereUniqueWithoutProductInput | ProductsImagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsImagesUpdateManyWithWhereWithoutProductInput | ProductsImagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsImagesScalarWhereInput | ProductsImagesScalarWhereInput[]
  }

  export type productsReviewsUpdateManyWithoutProductNestedInput = {
    create?: XOR<productsReviewsCreateWithoutProductInput, productsReviewsUncheckedCreateWithoutProductInput> | productsReviewsCreateWithoutProductInput[] | productsReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productsReviewsCreateOrConnectWithoutProductInput | productsReviewsCreateOrConnectWithoutProductInput[]
    upsert?: productsReviewsUpsertWithWhereUniqueWithoutProductInput | productsReviewsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productsReviewsCreateManyProductInputEnvelope
    set?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
    disconnect?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
    delete?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
    connect?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
    update?: productsReviewsUpdateWithWhereUniqueWithoutProductInput | productsReviewsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productsReviewsUpdateManyWithWhereWithoutProductInput | productsReviewsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productsReviewsScalarWhereInput | productsReviewsScalarWhereInput[]
  }

  export type OrderItemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProductInput | OrderItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProductInput | OrderItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProductInput | OrderItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type CartItemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemsCreateWithoutProductInput, CartItemsUncheckedCreateWithoutProductInput> | CartItemsCreateWithoutProductInput[] | CartItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProductInput | CartItemsCreateOrConnectWithoutProductInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutProductInput | CartItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemsCreateManyProductInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutProductInput | CartItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutProductInput | CartItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type ProductsCategoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ProductsCategoriesCreateWithoutProductsInput, ProductsCategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductsCategoriesCreateOrConnectWithoutProductsInput
    upsert?: ProductsCategoriesUpsertWithoutProductsInput
    connect?: ProductsCategoriesWhereUniqueInput
    update?: XOR<XOR<ProductsCategoriesUpdateToOneWithWhereWithoutProductsInput, ProductsCategoriesUpdateWithoutProductsInput>, ProductsCategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type ProductsImagesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsImagesCreateWithoutProductInput, ProductsImagesUncheckedCreateWithoutProductInput> | ProductsImagesCreateWithoutProductInput[] | ProductsImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsImagesCreateOrConnectWithoutProductInput | ProductsImagesCreateOrConnectWithoutProductInput[]
    upsert?: ProductsImagesUpsertWithWhereUniqueWithoutProductInput | ProductsImagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsImagesCreateManyProductInputEnvelope
    set?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
    disconnect?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
    delete?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
    connect?: ProductsImagesWhereUniqueInput | ProductsImagesWhereUniqueInput[]
    update?: ProductsImagesUpdateWithWhereUniqueWithoutProductInput | ProductsImagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsImagesUpdateManyWithWhereWithoutProductInput | ProductsImagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsImagesScalarWhereInput | ProductsImagesScalarWhereInput[]
  }

  export type productsReviewsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<productsReviewsCreateWithoutProductInput, productsReviewsUncheckedCreateWithoutProductInput> | productsReviewsCreateWithoutProductInput[] | productsReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productsReviewsCreateOrConnectWithoutProductInput | productsReviewsCreateOrConnectWithoutProductInput[]
    upsert?: productsReviewsUpsertWithWhereUniqueWithoutProductInput | productsReviewsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productsReviewsCreateManyProductInputEnvelope
    set?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
    disconnect?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
    delete?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
    connect?: productsReviewsWhereUniqueInput | productsReviewsWhereUniqueInput[]
    update?: productsReviewsUpdateWithWhereUniqueWithoutProductInput | productsReviewsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productsReviewsUpdateManyWithWhereWithoutProductInput | productsReviewsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productsReviewsScalarWhereInput | productsReviewsScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput> | OrderItemsCreateWithoutProductInput[] | OrderItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProductInput | OrderItemsCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProductInput | OrderItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemsCreateManyProductInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProductInput | OrderItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProductInput | OrderItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type CartItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemsCreateWithoutProductInput, CartItemsUncheckedCreateWithoutProductInput> | CartItemsCreateWithoutProductInput[] | CartItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProductInput | CartItemsCreateOrConnectWithoutProductInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutProductInput | CartItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemsCreateManyProductInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutProductInput | CartItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutProductInput | CartItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImagesInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImagesInput
    upsert?: ProductsUpsertWithoutImagesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutImagesInput, ProductsUpdateWithoutImagesInput>, ProductsUncheckedUpdateWithoutImagesInput>
  }

  export type ProductsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutReviewsInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutReviewsInput
    upsert?: ProductsUpsertWithoutReviewsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutReviewsInput, ProductsUpdateWithoutReviewsInput>, ProductsUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersCreateNestedOneWithoutMy_ordersInput = {
    create?: XOR<UsersCreateWithoutMy_ordersInput, UsersUncheckedCreateWithoutMy_ordersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMy_ordersInput
    connect?: UsersWhereUniqueInput
  }

  export type OrderItemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneRequiredWithoutMy_ordersNestedInput = {
    create?: XOR<UsersCreateWithoutMy_ordersInput, UsersUncheckedCreateWithoutMy_ordersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMy_ordersInput
    upsert?: UsersUpsertWithoutMy_ordersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMy_ordersInput, UsersUpdateWithoutMy_ordersInput>, UsersUncheckedUpdateWithoutMy_ordersInput>
  }

  export type OrderItemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrderInput | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrderInput | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrderInput | OrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrderInput | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrderInput | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrderInput | OrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ProductsCreateWithoutOrder_itemsInput, ProductsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrder_itemsInput
    connect?: ProductsWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput
    upsert?: OrdersUpsertWithoutOrder_itemsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrder_itemsInput, OrdersUpdateWithoutOrder_itemsInput>, OrdersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ProductsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ProductsCreateWithoutOrder_itemsInput, ProductsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrder_itemsInput
    upsert?: ProductsUpsertWithoutOrder_itemsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutOrder_itemsInput, ProductsUpdateWithoutOrder_itemsInput>, ProductsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type UsersCreateNestedOneWithoutMy_cartInput = {
    create?: XOR<UsersCreateWithoutMy_cartInput, UsersUncheckedCreateWithoutMy_cartInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMy_cartInput
    connect?: UsersWhereUniqueInput
  }

  export type CartItemsCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type CartItemsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type EnumCartStatusFieldUpdateOperationsInput = {
    set?: $Enums.CartStatus
  }

  export type UsersUpdateOneRequiredWithoutMy_cartNestedInput = {
    create?: XOR<UsersCreateWithoutMy_cartInput, UsersUncheckedCreateWithoutMy_cartInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMy_cartInput
    upsert?: UsersUpsertWithoutMy_cartInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMy_cartInput, UsersUpdateWithoutMy_cartInput>, UsersUncheckedUpdateWithoutMy_cartInput>
  }

  export type CartItemsUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutCartInput | CartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutCartInput | CartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutCartInput | CartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type CartItemsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutCartInput | CartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutCartInput | CartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutCartInput | CartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type CartsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<CartsCreateWithoutCart_itemsInput, CartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutCart_itemsInput
    connect?: CartsWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<ProductsCreateWithoutCart_itemsInput, ProductsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCart_itemsInput
    connect?: ProductsWhereUniqueInput
  }

  export type CartsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<CartsCreateWithoutCart_itemsInput, CartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutCart_itemsInput
    upsert?: CartsUpsertWithoutCart_itemsInput
    connect?: CartsWhereUniqueInput
    update?: XOR<XOR<CartsUpdateToOneWithWhereWithoutCart_itemsInput, CartsUpdateWithoutCart_itemsInput>, CartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type ProductsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<ProductsCreateWithoutCart_itemsInput, ProductsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCart_itemsInput
    upsert?: ProductsUpsertWithoutCart_itemsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutCart_itemsInput, ProductsUpdateWithoutCart_itemsInput>, ProductsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAuthenticationsTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticationsTypes | EnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticationsTypes[] | ListEnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticationsTypes[] | ListEnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticationsTypesFilter<$PrismaModel> | $Enums.AuthenticationsTypes
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAuthenticationsTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticationsTypes | EnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticationsTypes[] | ListEnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticationsTypes[] | ListEnumAuthenticationsTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticationsTypesWithAggregatesFilter<$PrismaModel> | $Enums.AuthenticationsTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthenticationsTypesFilter<$PrismaModel>
    _max?: NestedEnumAuthenticationsTypesFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTypes | EnumTokenTypesFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTypes[] | ListEnumTokenTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTypes[] | ListEnumTokenTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypesFilter<$PrismaModel> | $Enums.TokenTypes
  }

  export type NestedEnumTokenTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTypes | EnumTokenTypesFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTypes[] | ListEnumTokenTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTypes[] | ListEnumTokenTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypesWithAggregatesFilter<$PrismaModel> | $Enums.TokenTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypesFilter<$PrismaModel>
    _max?: NestedEnumTokenTypesFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUsersTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsersTypes | EnumUsersTypesFieldRefInput<$PrismaModel>
    in?: $Enums.UsersTypes[] | ListEnumUsersTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsersTypes[] | ListEnumUsersTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumUsersTypesFilter<$PrismaModel> | $Enums.UsersTypes
  }

  export type NestedEnumUsersTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsersTypes | EnumUsersTypesFieldRefInput<$PrismaModel>
    in?: $Enums.UsersTypes[] | ListEnumUsersTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsersTypes[] | ListEnumUsersTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumUsersTypesWithAggregatesFilter<$PrismaModel> | $Enums.UsersTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsersTypesFilter<$PrismaModel>
    _max?: NestedEnumUsersTypesFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumCartStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusFilter<$PrismaModel> | $Enums.CartStatus
  }

  export type NestedEnumCartStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusWithAggregatesFilter<$PrismaModel> | $Enums.CartStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCartStatusFilter<$PrismaModel>
    _max?: NestedEnumCartStatusFilter<$PrismaModel>
  }

  export type UsersCreateWithoutAccount_detailsInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsCreateNestedManyWithoutUser_detailsInput
    my_addresses?: addressesCreateNestedManyWithoutUser_detailsInput
    my_orders?: OrdersCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersUncheckedCreateWithoutAccount_detailsInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsUncheckedCreateNestedManyWithoutUser_detailsInput
    my_addresses?: addressesUncheckedCreateNestedManyWithoutUser_detailsInput
    my_orders?: OrdersUncheckedCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsUncheckedCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersCreateOrConnectWithoutAccount_detailsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAccount_detailsInput, UsersUncheckedCreateWithoutAccount_detailsInput>
  }

  export type AuthenticationsCreateWithoutAccount_detailsInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    token_details?: TokensCreateNestedOneWithoutAuthentication_detailsInput
    twoFactorAuth_details?: TwoFactorAuthCreateNestedOneWithoutAuthentication_detailsInput
  }

  export type AuthenticationsUncheckedCreateWithoutAccount_detailsInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    token_details?: TokensUncheckedCreateNestedOneWithoutAuthentication_detailsInput
    twoFactorAuth_details?: TwoFactorAuthUncheckedCreateNestedOneWithoutAuthentication_detailsInput
  }

  export type AuthenticationsCreateOrConnectWithoutAccount_detailsInput = {
    where: AuthenticationsWhereUniqueInput
    create: XOR<AuthenticationsCreateWithoutAccount_detailsInput, AuthenticationsUncheckedCreateWithoutAccount_detailsInput>
  }

  export type AuthenticationsCreateManyAccount_detailsInputEnvelope = {
    data: AuthenticationsCreateManyAccount_detailsInput | AuthenticationsCreateManyAccount_detailsInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutAccount_detailsInput = {
    update: XOR<UsersUpdateWithoutAccount_detailsInput, UsersUncheckedUpdateWithoutAccount_detailsInput>
    create: XOR<UsersCreateWithoutAccount_detailsInput, UsersUncheckedCreateWithoutAccount_detailsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAccount_detailsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAccount_detailsInput, UsersUncheckedUpdateWithoutAccount_detailsInput>
  }

  export type UsersUpdateWithoutAccount_detailsInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUpdateManyWithoutUser_detailsNestedInput
    my_addresses?: addressesUpdateManyWithoutUser_detailsNestedInput
    my_orders?: OrdersUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUpdateOneWithoutUser_detailsNestedInput
  }

  export type UsersUncheckedUpdateWithoutAccount_detailsInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_addresses?: addressesUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_orders?: OrdersUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUncheckedUpdateOneWithoutUser_detailsNestedInput
  }

  export type AuthenticationsUpsertWithWhereUniqueWithoutAccount_detailsInput = {
    where: AuthenticationsWhereUniqueInput
    update: XOR<AuthenticationsUpdateWithoutAccount_detailsInput, AuthenticationsUncheckedUpdateWithoutAccount_detailsInput>
    create: XOR<AuthenticationsCreateWithoutAccount_detailsInput, AuthenticationsUncheckedCreateWithoutAccount_detailsInput>
  }

  export type AuthenticationsUpdateWithWhereUniqueWithoutAccount_detailsInput = {
    where: AuthenticationsWhereUniqueInput
    data: XOR<AuthenticationsUpdateWithoutAccount_detailsInput, AuthenticationsUncheckedUpdateWithoutAccount_detailsInput>
  }

  export type AuthenticationsUpdateManyWithWhereWithoutAccount_detailsInput = {
    where: AuthenticationsScalarWhereInput
    data: XOR<AuthenticationsUpdateManyMutationInput, AuthenticationsUncheckedUpdateManyWithoutAccount_detailsInput>
  }

  export type AuthenticationsScalarWhereInput = {
    AND?: AuthenticationsScalarWhereInput | AuthenticationsScalarWhereInput[]
    OR?: AuthenticationsScalarWhereInput[]
    NOT?: AuthenticationsScalarWhereInput | AuthenticationsScalarWhereInput[]
    id_authentication?: StringFilter<"Authentications"> | string
    type?: EnumAuthenticationsTypesFilter<"Authentications"> | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFilter<"Authentications"> | Date | string
    used?: BoolFilter<"Authentications"> | boolean
    id_account_fk?: StringFilter<"Authentications"> | string
    created_at?: DateTimeFilter<"Authentications"> | Date | string
    updated_at?: DateTimeFilter<"Authentications"> | Date | string
  }

  export type AccountsCreateWithoutAuthentication_detailsInput = {
    id_account: string
    email: string
    password: string
    verified?: boolean | null
    providerId?: string | null
    provider?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_details?: UsersCreateNestedOneWithoutAccount_detailsInput
  }

  export type AccountsUncheckedCreateWithoutAuthentication_detailsInput = {
    id_account: string
    email: string
    password: string
    verified?: boolean | null
    providerId?: string | null
    provider?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_details?: UsersUncheckedCreateNestedOneWithoutAccount_detailsInput
  }

  export type AccountsCreateOrConnectWithoutAuthentication_detailsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutAuthentication_detailsInput, AccountsUncheckedCreateWithoutAuthentication_detailsInput>
  }

  export type TokensCreateWithoutAuthentication_detailsInput = {
    id_token: string
    token: string
    token_type: $Enums.TokenTypes
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokensUncheckedCreateWithoutAuthentication_detailsInput = {
    id_token: string
    token: string
    token_type: $Enums.TokenTypes
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokensCreateOrConnectWithoutAuthentication_detailsInput = {
    where: TokensWhereUniqueInput
    create: XOR<TokensCreateWithoutAuthentication_detailsInput, TokensUncheckedCreateWithoutAuthentication_detailsInput>
  }

  export type TwoFactorAuthCreateWithoutAuthentication_detailsInput = {
    id_two_factor_auth: string
    otp_code: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TwoFactorAuthUncheckedCreateWithoutAuthentication_detailsInput = {
    id_two_factor_auth: string
    otp_code: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TwoFactorAuthCreateOrConnectWithoutAuthentication_detailsInput = {
    where: TwoFactorAuthWhereUniqueInput
    create: XOR<TwoFactorAuthCreateWithoutAuthentication_detailsInput, TwoFactorAuthUncheckedCreateWithoutAuthentication_detailsInput>
  }

  export type AccountsUpsertWithoutAuthentication_detailsInput = {
    update: XOR<AccountsUpdateWithoutAuthentication_detailsInput, AccountsUncheckedUpdateWithoutAuthentication_detailsInput>
    create: XOR<AccountsCreateWithoutAuthentication_detailsInput, AccountsUncheckedCreateWithoutAuthentication_detailsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutAuthentication_detailsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutAuthentication_detailsInput, AccountsUncheckedUpdateWithoutAuthentication_detailsInput>
  }

  export type AccountsUpdateWithoutAuthentication_detailsInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_details?: UsersUpdateOneWithoutAccount_detailsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutAuthentication_detailsInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_details?: UsersUncheckedUpdateOneWithoutAccount_detailsNestedInput
  }

  export type TokensUpsertWithoutAuthentication_detailsInput = {
    update: XOR<TokensUpdateWithoutAuthentication_detailsInput, TokensUncheckedUpdateWithoutAuthentication_detailsInput>
    create: XOR<TokensCreateWithoutAuthentication_detailsInput, TokensUncheckedCreateWithoutAuthentication_detailsInput>
    where?: TokensWhereInput
  }

  export type TokensUpdateToOneWithWhereWithoutAuthentication_detailsInput = {
    where?: TokensWhereInput
    data: XOR<TokensUpdateWithoutAuthentication_detailsInput, TokensUncheckedUpdateWithoutAuthentication_detailsInput>
  }

  export type TokensUpdateWithoutAuthentication_detailsInput = {
    id_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_type?: EnumTokenTypesFieldUpdateOperationsInput | $Enums.TokenTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUncheckedUpdateWithoutAuthentication_detailsInput = {
    id_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_type?: EnumTokenTypesFieldUpdateOperationsInput | $Enums.TokenTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthUpsertWithoutAuthentication_detailsInput = {
    update: XOR<TwoFactorAuthUpdateWithoutAuthentication_detailsInput, TwoFactorAuthUncheckedUpdateWithoutAuthentication_detailsInput>
    create: XOR<TwoFactorAuthCreateWithoutAuthentication_detailsInput, TwoFactorAuthUncheckedCreateWithoutAuthentication_detailsInput>
    where?: TwoFactorAuthWhereInput
  }

  export type TwoFactorAuthUpdateToOneWithWhereWithoutAuthentication_detailsInput = {
    where?: TwoFactorAuthWhereInput
    data: XOR<TwoFactorAuthUpdateWithoutAuthentication_detailsInput, TwoFactorAuthUncheckedUpdateWithoutAuthentication_detailsInput>
  }

  export type TwoFactorAuthUpdateWithoutAuthentication_detailsInput = {
    id_two_factor_auth?: StringFieldUpdateOperationsInput | string
    otp_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthUncheckedUpdateWithoutAuthentication_detailsInput = {
    id_two_factor_auth?: StringFieldUpdateOperationsInput | string
    otp_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticationsCreateWithoutToken_detailsInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    account_details: AccountsCreateNestedOneWithoutAuthentication_detailsInput
    twoFactorAuth_details?: TwoFactorAuthCreateNestedOneWithoutAuthentication_detailsInput
  }

  export type AuthenticationsUncheckedCreateWithoutToken_detailsInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
    twoFactorAuth_details?: TwoFactorAuthUncheckedCreateNestedOneWithoutAuthentication_detailsInput
  }

  export type AuthenticationsCreateOrConnectWithoutToken_detailsInput = {
    where: AuthenticationsWhereUniqueInput
    create: XOR<AuthenticationsCreateWithoutToken_detailsInput, AuthenticationsUncheckedCreateWithoutToken_detailsInput>
  }

  export type AuthenticationsUpsertWithoutToken_detailsInput = {
    update: XOR<AuthenticationsUpdateWithoutToken_detailsInput, AuthenticationsUncheckedUpdateWithoutToken_detailsInput>
    create: XOR<AuthenticationsCreateWithoutToken_detailsInput, AuthenticationsUncheckedCreateWithoutToken_detailsInput>
    where?: AuthenticationsWhereInput
  }

  export type AuthenticationsUpdateToOneWithWhereWithoutToken_detailsInput = {
    where?: AuthenticationsWhereInput
    data: XOR<AuthenticationsUpdateWithoutToken_detailsInput, AuthenticationsUncheckedUpdateWithoutToken_detailsInput>
  }

  export type AuthenticationsUpdateWithoutToken_detailsInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    account_details?: AccountsUpdateOneRequiredWithoutAuthentication_detailsNestedInput
    twoFactorAuth_details?: TwoFactorAuthUpdateOneWithoutAuthentication_detailsNestedInput
  }

  export type AuthenticationsUncheckedUpdateWithoutToken_detailsInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorAuth_details?: TwoFactorAuthUncheckedUpdateOneWithoutAuthentication_detailsNestedInput
  }

  export type AuthenticationsCreateWithoutTwoFactorAuth_detailsInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    account_details: AccountsCreateNestedOneWithoutAuthentication_detailsInput
    token_details?: TokensCreateNestedOneWithoutAuthentication_detailsInput
  }

  export type AuthenticationsUncheckedCreateWithoutTwoFactorAuth_detailsInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
    token_details?: TokensUncheckedCreateNestedOneWithoutAuthentication_detailsInput
  }

  export type AuthenticationsCreateOrConnectWithoutTwoFactorAuth_detailsInput = {
    where: AuthenticationsWhereUniqueInput
    create: XOR<AuthenticationsCreateWithoutTwoFactorAuth_detailsInput, AuthenticationsUncheckedCreateWithoutTwoFactorAuth_detailsInput>
  }

  export type AuthenticationsUpsertWithoutTwoFactorAuth_detailsInput = {
    update: XOR<AuthenticationsUpdateWithoutTwoFactorAuth_detailsInput, AuthenticationsUncheckedUpdateWithoutTwoFactorAuth_detailsInput>
    create: XOR<AuthenticationsCreateWithoutTwoFactorAuth_detailsInput, AuthenticationsUncheckedCreateWithoutTwoFactorAuth_detailsInput>
    where?: AuthenticationsWhereInput
  }

  export type AuthenticationsUpdateToOneWithWhereWithoutTwoFactorAuth_detailsInput = {
    where?: AuthenticationsWhereInput
    data: XOR<AuthenticationsUpdateWithoutTwoFactorAuth_detailsInput, AuthenticationsUncheckedUpdateWithoutTwoFactorAuth_detailsInput>
  }

  export type AuthenticationsUpdateWithoutTwoFactorAuth_detailsInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    account_details?: AccountsUpdateOneRequiredWithoutAuthentication_detailsNestedInput
    token_details?: TokensUpdateOneWithoutAuthentication_detailsNestedInput
  }

  export type AuthenticationsUncheckedUpdateWithoutTwoFactorAuth_detailsInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token_details?: TokensUncheckedUpdateOneWithoutAuthentication_detailsNestedInput
  }

  export type UsersCreateWithoutMy_contactsInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    created_at?: Date | string
    updated_at?: Date | string
    account_details: AccountsCreateNestedOneWithoutUser_detailsInput
    my_addresses?: addressesCreateNestedManyWithoutUser_detailsInput
    my_orders?: OrdersCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersUncheckedCreateWithoutMy_contactsInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
    my_addresses?: addressesUncheckedCreateNestedManyWithoutUser_detailsInput
    my_orders?: OrdersUncheckedCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsUncheckedCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersCreateOrConnectWithoutMy_contactsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMy_contactsInput, UsersUncheckedCreateWithoutMy_contactsInput>
  }

  export type UsersUpsertWithoutMy_contactsInput = {
    update: XOR<UsersUpdateWithoutMy_contactsInput, UsersUncheckedUpdateWithoutMy_contactsInput>
    create: XOR<UsersCreateWithoutMy_contactsInput, UsersUncheckedCreateWithoutMy_contactsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMy_contactsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMy_contactsInput, UsersUncheckedUpdateWithoutMy_contactsInput>
  }

  export type UsersUpdateWithoutMy_contactsInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    account_details?: AccountsUpdateOneRequiredWithoutUser_detailsNestedInput
    my_addresses?: addressesUpdateManyWithoutUser_detailsNestedInput
    my_orders?: OrdersUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUpdateOneWithoutUser_detailsNestedInput
  }

  export type UsersUncheckedUpdateWithoutMy_contactsInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_addresses?: addressesUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_orders?: OrdersUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUncheckedUpdateOneWithoutUser_detailsNestedInput
  }

  export type ContactsCreateWithoutUser_detailsInput = {
    id_contact: string
    phone_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContactsUncheckedCreateWithoutUser_detailsInput = {
    id_contact: string
    phone_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContactsCreateOrConnectWithoutUser_detailsInput = {
    where: ContactsWhereUniqueInput
    create: XOR<ContactsCreateWithoutUser_detailsInput, ContactsUncheckedCreateWithoutUser_detailsInput>
  }

  export type ContactsCreateManyUser_detailsInputEnvelope = {
    data: ContactsCreateManyUser_detailsInput | ContactsCreateManyUser_detailsInput[]
    skipDuplicates?: boolean
  }

  export type AccountsCreateWithoutUser_detailsInput = {
    id_account: string
    email: string
    password: string
    verified?: boolean | null
    providerId?: string | null
    provider?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    authentication_details?: AuthenticationsCreateNestedManyWithoutAccount_detailsInput
  }

  export type AccountsUncheckedCreateWithoutUser_detailsInput = {
    id_account: string
    email: string
    password: string
    verified?: boolean | null
    providerId?: string | null
    provider?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    authentication_details?: AuthenticationsUncheckedCreateNestedManyWithoutAccount_detailsInput
  }

  export type AccountsCreateOrConnectWithoutUser_detailsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutUser_detailsInput, AccountsUncheckedCreateWithoutUser_detailsInput>
  }

  export type addressesCreateWithoutUser_detailsInput = {
    id_address: string
    street: string
    city: string
    country?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesUncheckedCreateWithoutUser_detailsInput = {
    id_address: string
    street: string
    city: string
    country?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesCreateOrConnectWithoutUser_detailsInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutUser_detailsInput, addressesUncheckedCreateWithoutUser_detailsInput>
  }

  export type addressesCreateManyUser_detailsInputEnvelope = {
    data: addressesCreateManyUser_detailsInput | addressesCreateManyUser_detailsInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUser_detailsInput = {
    id_order: string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    payment_method?: string
    created_at?: Date | string
    updated_at?: Date | string
    delivered_at?: Date | string | null
    order_items?: OrderItemsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutUser_detailsInput = {
    id_order: string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    payment_method?: string
    created_at?: Date | string
    updated_at?: Date | string
    delivered_at?: Date | string | null
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUser_detailsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUser_detailsInput, OrdersUncheckedCreateWithoutUser_detailsInput>
  }

  export type OrdersCreateManyUser_detailsInputEnvelope = {
    data: OrdersCreateManyUser_detailsInput | OrdersCreateManyUser_detailsInput[]
    skipDuplicates?: boolean
  }

  export type CartsCreateWithoutUser_detailsInput = {
    id_cart: string
    status?: $Enums.CartStatus
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: CartItemsCreateNestedManyWithoutCartInput
  }

  export type CartsUncheckedCreateWithoutUser_detailsInput = {
    id_cart: string
    status?: $Enums.CartStatus
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartsCreateOrConnectWithoutUser_detailsInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutUser_detailsInput, CartsUncheckedCreateWithoutUser_detailsInput>
  }

  export type ContactsUpsertWithWhereUniqueWithoutUser_detailsInput = {
    where: ContactsWhereUniqueInput
    update: XOR<ContactsUpdateWithoutUser_detailsInput, ContactsUncheckedUpdateWithoutUser_detailsInput>
    create: XOR<ContactsCreateWithoutUser_detailsInput, ContactsUncheckedCreateWithoutUser_detailsInput>
  }

  export type ContactsUpdateWithWhereUniqueWithoutUser_detailsInput = {
    where: ContactsWhereUniqueInput
    data: XOR<ContactsUpdateWithoutUser_detailsInput, ContactsUncheckedUpdateWithoutUser_detailsInput>
  }

  export type ContactsUpdateManyWithWhereWithoutUser_detailsInput = {
    where: ContactsScalarWhereInput
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyWithoutUser_detailsInput>
  }

  export type ContactsScalarWhereInput = {
    AND?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
    OR?: ContactsScalarWhereInput[]
    NOT?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
    id_contact?: StringFilter<"Contacts"> | string
    phone_number?: StringFilter<"Contacts"> | string
    id_user_fk?: StringFilter<"Contacts"> | string
    created_at?: DateTimeFilter<"Contacts"> | Date | string
    updated_at?: DateTimeFilter<"Contacts"> | Date | string
  }

  export type AccountsUpsertWithoutUser_detailsInput = {
    update: XOR<AccountsUpdateWithoutUser_detailsInput, AccountsUncheckedUpdateWithoutUser_detailsInput>
    create: XOR<AccountsCreateWithoutUser_detailsInput, AccountsUncheckedCreateWithoutUser_detailsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutUser_detailsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutUser_detailsInput, AccountsUncheckedUpdateWithoutUser_detailsInput>
  }

  export type AccountsUpdateWithoutUser_detailsInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authentication_details?: AuthenticationsUpdateManyWithoutAccount_detailsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutUser_detailsInput = {
    id_account?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authentication_details?: AuthenticationsUncheckedUpdateManyWithoutAccount_detailsNestedInput
  }

  export type addressesUpsertWithWhereUniqueWithoutUser_detailsInput = {
    where: addressesWhereUniqueInput
    update: XOR<addressesUpdateWithoutUser_detailsInput, addressesUncheckedUpdateWithoutUser_detailsInput>
    create: XOR<addressesCreateWithoutUser_detailsInput, addressesUncheckedCreateWithoutUser_detailsInput>
  }

  export type addressesUpdateWithWhereUniqueWithoutUser_detailsInput = {
    where: addressesWhereUniqueInput
    data: XOR<addressesUpdateWithoutUser_detailsInput, addressesUncheckedUpdateWithoutUser_detailsInput>
  }

  export type addressesUpdateManyWithWhereWithoutUser_detailsInput = {
    where: addressesScalarWhereInput
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyWithoutUser_detailsInput>
  }

  export type addressesScalarWhereInput = {
    AND?: addressesScalarWhereInput | addressesScalarWhereInput[]
    OR?: addressesScalarWhereInput[]
    NOT?: addressesScalarWhereInput | addressesScalarWhereInput[]
    id_address?: StringFilter<"addresses"> | string
    street?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    country?: StringFilter<"addresses"> | string
    id_user_fk?: StringFilter<"addresses"> | string
    created_at?: DateTimeFilter<"addresses"> | Date | string
    updated_at?: DateTimeFilter<"addresses"> | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutUser_detailsInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUser_detailsInput, OrdersUncheckedUpdateWithoutUser_detailsInput>
    create: XOR<OrdersCreateWithoutUser_detailsInput, OrdersUncheckedCreateWithoutUser_detailsInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUser_detailsInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUser_detailsInput, OrdersUncheckedUpdateWithoutUser_detailsInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUser_detailsInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUser_detailsInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id_order?: StringFilter<"Orders"> | string
    total_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    id_user_fk?: StringFilter<"Orders"> | string
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    payment_method?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    delivered_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
  }

  export type CartsUpsertWithoutUser_detailsInput = {
    update: XOR<CartsUpdateWithoutUser_detailsInput, CartsUncheckedUpdateWithoutUser_detailsInput>
    create: XOR<CartsCreateWithoutUser_detailsInput, CartsUncheckedCreateWithoutUser_detailsInput>
    where?: CartsWhereInput
  }

  export type CartsUpdateToOneWithWhereWithoutUser_detailsInput = {
    where?: CartsWhereInput
    data: XOR<CartsUpdateWithoutUser_detailsInput, CartsUncheckedUpdateWithoutUser_detailsInput>
  }

  export type CartsUpdateWithoutUser_detailsInput = {
    id_cart?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: CartItemsUpdateManyWithoutCartNestedInput
  }

  export type CartsUncheckedUpdateWithoutUser_detailsInput = {
    id_cart?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: CartItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type UsersCreateWithoutMy_addressesInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsCreateNestedManyWithoutUser_detailsInput
    account_details: AccountsCreateNestedOneWithoutUser_detailsInput
    my_orders?: OrdersCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersUncheckedCreateWithoutMy_addressesInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsUncheckedCreateNestedManyWithoutUser_detailsInput
    my_orders?: OrdersUncheckedCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsUncheckedCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersCreateOrConnectWithoutMy_addressesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMy_addressesInput, UsersUncheckedCreateWithoutMy_addressesInput>
  }

  export type UsersUpsertWithoutMy_addressesInput = {
    update: XOR<UsersUpdateWithoutMy_addressesInput, UsersUncheckedUpdateWithoutMy_addressesInput>
    create: XOR<UsersCreateWithoutMy_addressesInput, UsersUncheckedCreateWithoutMy_addressesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMy_addressesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMy_addressesInput, UsersUncheckedUpdateWithoutMy_addressesInput>
  }

  export type UsersUpdateWithoutMy_addressesInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUpdateManyWithoutUser_detailsNestedInput
    account_details?: AccountsUpdateOneRequiredWithoutUser_detailsNestedInput
    my_orders?: OrdersUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUpdateOneWithoutUser_detailsNestedInput
  }

  export type UsersUncheckedUpdateWithoutMy_addressesInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_orders?: OrdersUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUncheckedUpdateOneWithoutUser_detailsNestedInput
  }

  export type ProductsCreateWithoutCategoryInput = {
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesCreateNestedManyWithoutProductInput
    reviews?: productsReviewsCreateNestedManyWithoutProductInput
    order_items?: OrderItemsCreateNestedManyWithoutProductInput
    cart_items?: CartItemsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    id_product?: number
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesUncheckedCreateNestedManyWithoutProductInput
    reviews?: productsReviewsUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id_product?: IntFilter<"Products"> | number
    reference_code?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    available_stock?: IntFilter<"Products"> | number
    available?: BoolFilter<"Products"> | boolean
    aditional_info?: StringFilter<"Products"> | string
    id_category_fk?: IntFilter<"Products"> | number
    created_at?: DateTimeFilter<"Products"> | Date | string
    updated_at?: DateTimeFilter<"Products"> | Date | string
  }

  export type ProductsImagesCreateWithoutProductInput = {
    id_image: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsImagesUncheckedCreateWithoutProductInput = {
    id_image: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsImagesCreateOrConnectWithoutProductInput = {
    where: ProductsImagesWhereUniqueInput
    create: XOR<ProductsImagesCreateWithoutProductInput, ProductsImagesUncheckedCreateWithoutProductInput>
  }

  export type ProductsImagesCreateManyProductInputEnvelope = {
    data: ProductsImagesCreateManyProductInput | ProductsImagesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type productsReviewsCreateWithoutProductInput = {
    id_review: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsReviewsUncheckedCreateWithoutProductInput = {
    id_review: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsReviewsCreateOrConnectWithoutProductInput = {
    where: productsReviewsWhereUniqueInput
    create: XOR<productsReviewsCreateWithoutProductInput, productsReviewsUncheckedCreateWithoutProductInput>
  }

  export type productsReviewsCreateManyProductInputEnvelope = {
    data: productsReviewsCreateManyProductInput | productsReviewsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemsCreateWithoutProductInput = {
    id_order_item: string
    quantity: number
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    order: OrdersCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemsUncheckedCreateWithoutProductInput = {
    id_order_item: string
    quantity: number
    price?: Decimal | DecimalJsLike | number | string | null
    id_order_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput>
  }

  export type OrderItemsCreateManyProductInputEnvelope = {
    data: OrderItemsCreateManyProductInput | OrderItemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CartItemsCreateWithoutProductInput = {
    id_cart_item: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    cart: CartsCreateNestedOneWithoutCart_itemsInput
  }

  export type CartItemsUncheckedCreateWithoutProductInput = {
    id_cart_item: string
    quantity: number
    id_cart_fk: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemsCreateOrConnectWithoutProductInput = {
    where: CartItemsWhereUniqueInput
    create: XOR<CartItemsCreateWithoutProductInput, CartItemsUncheckedCreateWithoutProductInput>
  }

  export type CartItemsCreateManyProductInputEnvelope = {
    data: CartItemsCreateManyProductInput | CartItemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCategoriesCreateWithoutProductsInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsCategoriesUncheckedCreateWithoutProductsInput = {
    id_category?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsCategoriesCreateOrConnectWithoutProductsInput = {
    where: ProductsCategoriesWhereUniqueInput
    create: XOR<ProductsCategoriesCreateWithoutProductsInput, ProductsCategoriesUncheckedCreateWithoutProductsInput>
  }

  export type ProductsImagesUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductsImagesWhereUniqueInput
    update: XOR<ProductsImagesUpdateWithoutProductInput, ProductsImagesUncheckedUpdateWithoutProductInput>
    create: XOR<ProductsImagesCreateWithoutProductInput, ProductsImagesUncheckedCreateWithoutProductInput>
  }

  export type ProductsImagesUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductsImagesWhereUniqueInput
    data: XOR<ProductsImagesUpdateWithoutProductInput, ProductsImagesUncheckedUpdateWithoutProductInput>
  }

  export type ProductsImagesUpdateManyWithWhereWithoutProductInput = {
    where: ProductsImagesScalarWhereInput
    data: XOR<ProductsImagesUpdateManyMutationInput, ProductsImagesUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductsImagesScalarWhereInput = {
    AND?: ProductsImagesScalarWhereInput | ProductsImagesScalarWhereInput[]
    OR?: ProductsImagesScalarWhereInput[]
    NOT?: ProductsImagesScalarWhereInput | ProductsImagesScalarWhereInput[]
    id_image?: StringFilter<"ProductsImages"> | string
    url?: StringFilter<"ProductsImages"> | string
    id_product_fk?: IntFilter<"ProductsImages"> | number
    created_at?: DateTimeFilter<"ProductsImages"> | Date | string
    updated_at?: DateTimeFilter<"ProductsImages"> | Date | string
  }

  export type productsReviewsUpsertWithWhereUniqueWithoutProductInput = {
    where: productsReviewsWhereUniqueInput
    update: XOR<productsReviewsUpdateWithoutProductInput, productsReviewsUncheckedUpdateWithoutProductInput>
    create: XOR<productsReviewsCreateWithoutProductInput, productsReviewsUncheckedCreateWithoutProductInput>
  }

  export type productsReviewsUpdateWithWhereUniqueWithoutProductInput = {
    where: productsReviewsWhereUniqueInput
    data: XOR<productsReviewsUpdateWithoutProductInput, productsReviewsUncheckedUpdateWithoutProductInput>
  }

  export type productsReviewsUpdateManyWithWhereWithoutProductInput = {
    where: productsReviewsScalarWhereInput
    data: XOR<productsReviewsUpdateManyMutationInput, productsReviewsUncheckedUpdateManyWithoutProductInput>
  }

  export type productsReviewsScalarWhereInput = {
    AND?: productsReviewsScalarWhereInput | productsReviewsScalarWhereInput[]
    OR?: productsReviewsScalarWhereInput[]
    NOT?: productsReviewsScalarWhereInput | productsReviewsScalarWhereInput[]
    id_review?: StringFilter<"productsReviews"> | string
    rating?: IntFilter<"productsReviews"> | number
    comment?: StringNullableFilter<"productsReviews"> | string | null
    id_product_fk?: IntFilter<"productsReviews"> | number
    created_at?: DateTimeFilter<"productsReviews"> | Date | string
    updated_at?: DateTimeFilter<"productsReviews"> | Date | string
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutProductInput, OrderItemsUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemsCreateWithoutProductInput, OrderItemsUncheckedCreateWithoutProductInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutProductInput, OrderItemsUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemsScalarWhereInput = {
    AND?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    OR?: OrderItemsScalarWhereInput[]
    NOT?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    id_order_item?: StringFilter<"OrderItems"> | string
    quantity?: IntFilter<"OrderItems"> | number
    price?: DecimalNullableFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string | null
    id_order_fk?: StringFilter<"OrderItems"> | string
    id_product_fk?: IntFilter<"OrderItems"> | number
    created_at?: DateTimeFilter<"OrderItems"> | Date | string
    updated_at?: DateTimeFilter<"OrderItems"> | Date | string
  }

  export type CartItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemsWhereUniqueInput
    update: XOR<CartItemsUpdateWithoutProductInput, CartItemsUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemsCreateWithoutProductInput, CartItemsUncheckedCreateWithoutProductInput>
  }

  export type CartItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemsWhereUniqueInput
    data: XOR<CartItemsUpdateWithoutProductInput, CartItemsUncheckedUpdateWithoutProductInput>
  }

  export type CartItemsUpdateManyWithWhereWithoutProductInput = {
    where: CartItemsScalarWhereInput
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemsScalarWhereInput = {
    AND?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
    OR?: CartItemsScalarWhereInput[]
    NOT?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
    id_cart_item?: StringFilter<"CartItems"> | string
    quantity?: IntFilter<"CartItems"> | number
    id_cart_fk?: StringFilter<"CartItems"> | string
    price?: DecimalFilter<"CartItems"> | Decimal | DecimalJsLike | number | string
    id_product_fk?: IntFilter<"CartItems"> | number
    created_at?: DateTimeFilter<"CartItems"> | Date | string
    updated_at?: DateTimeFilter<"CartItems"> | Date | string
  }

  export type ProductsCategoriesUpsertWithoutProductsInput = {
    update: XOR<ProductsCategoriesUpdateWithoutProductsInput, ProductsCategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductsCategoriesCreateWithoutProductsInput, ProductsCategoriesUncheckedCreateWithoutProductsInput>
    where?: ProductsCategoriesWhereInput
  }

  export type ProductsCategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProductsCategoriesWhereInput
    data: XOR<ProductsCategoriesUpdateWithoutProductsInput, ProductsCategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type ProductsCategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCategoriesUncheckedUpdateWithoutProductsInput = {
    id_category?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateWithoutImagesInput = {
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: productsReviewsCreateNestedManyWithoutProductInput
    order_items?: OrderItemsCreateNestedManyWithoutProductInput
    cart_items?: CartItemsCreateNestedManyWithoutProductInput
    category: ProductsCategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutImagesInput = {
    id_product?: number
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    id_category_fk: number
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: productsReviewsUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutImagesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
  }

  export type ProductsUpsertWithoutImagesInput = {
    update: XOR<ProductsUpdateWithoutImagesInput, ProductsUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutImagesInput, ProductsUncheckedUpdateWithoutImagesInput>
  }

  export type ProductsUpdateWithoutImagesInput = {
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: productsReviewsUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUpdateManyWithoutProductNestedInput
    category?: ProductsCategoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutImagesInput = {
    id_product?: IntFieldUpdateOperationsInput | number
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    id_category_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: productsReviewsUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateWithoutReviewsInput = {
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesCreateNestedManyWithoutProductInput
    order_items?: OrderItemsCreateNestedManyWithoutProductInput
    cart_items?: CartItemsCreateNestedManyWithoutProductInput
    category: ProductsCategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutReviewsInput = {
    id_product?: number
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    id_category_fk: number
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutReviewsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
  }

  export type ProductsUpsertWithoutReviewsInput = {
    update: XOR<ProductsUpdateWithoutReviewsInput, ProductsUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutReviewsInput, ProductsUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductsUpdateWithoutReviewsInput = {
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUpdateManyWithoutProductNestedInput
    category?: ProductsCategoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutReviewsInput = {
    id_product?: IntFieldUpdateOperationsInput | number
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    id_category_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UsersCreateWithoutMy_ordersInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsCreateNestedManyWithoutUser_detailsInput
    account_details: AccountsCreateNestedOneWithoutUser_detailsInput
    my_addresses?: addressesCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersUncheckedCreateWithoutMy_ordersInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsUncheckedCreateNestedManyWithoutUser_detailsInput
    my_addresses?: addressesUncheckedCreateNestedManyWithoutUser_detailsInput
    my_cart?: CartsUncheckedCreateNestedOneWithoutUser_detailsInput
  }

  export type UsersCreateOrConnectWithoutMy_ordersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMy_ordersInput, UsersUncheckedCreateWithoutMy_ordersInput>
  }

  export type OrderItemsCreateWithoutOrderInput = {
    id_order_item: string
    quantity: number
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemsUncheckedCreateWithoutOrderInput = {
    id_order_item: string
    quantity: number
    price?: Decimal | DecimalJsLike | number | string | null
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemsCreateManyOrderInputEnvelope = {
    data: OrderItemsCreateManyOrderInput | OrderItemsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutMy_ordersInput = {
    update: XOR<UsersUpdateWithoutMy_ordersInput, UsersUncheckedUpdateWithoutMy_ordersInput>
    create: XOR<UsersCreateWithoutMy_ordersInput, UsersUncheckedCreateWithoutMy_ordersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMy_ordersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMy_ordersInput, UsersUncheckedUpdateWithoutMy_ordersInput>
  }

  export type UsersUpdateWithoutMy_ordersInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUpdateManyWithoutUser_detailsNestedInput
    account_details?: AccountsUpdateOneRequiredWithoutUser_detailsNestedInput
    my_addresses?: addressesUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUpdateOneWithoutUser_detailsNestedInput
  }

  export type UsersUncheckedUpdateWithoutMy_ordersInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_addresses?: addressesUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_cart?: CartsUncheckedUpdateOneWithoutUser_detailsNestedInput
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutOrderInput, OrderItemsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutOrderInput, OrderItemsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrdersCreateWithoutOrder_itemsInput = {
    id_order: string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    payment_method?: string
    created_at?: Date | string
    updated_at?: Date | string
    delivered_at?: Date | string | null
    user_details: UsersCreateNestedOneWithoutMy_ordersInput
  }

  export type OrdersUncheckedCreateWithoutOrder_itemsInput = {
    id_order: string
    total_amount: Decimal | DecimalJsLike | number | string
    id_user_fk: string
    status?: $Enums.OrderStatus
    payment_method?: string
    created_at?: Date | string
    updated_at?: Date | string
    delivered_at?: Date | string | null
  }

  export type OrdersCreateOrConnectWithoutOrder_itemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ProductsCreateWithoutOrder_itemsInput = {
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesCreateNestedManyWithoutProductInput
    reviews?: productsReviewsCreateNestedManyWithoutProductInput
    cart_items?: CartItemsCreateNestedManyWithoutProductInput
    category: ProductsCategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutOrder_itemsInput = {
    id_product?: number
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    id_category_fk: number
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesUncheckedCreateNestedManyWithoutProductInput
    reviews?: productsReviewsUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutOrder_itemsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutOrder_itemsInput, ProductsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type OrdersUpsertWithoutOrder_itemsInput = {
    update: XOR<OrdersUpdateWithoutOrder_itemsInput, OrdersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrder_itemsInput, OrdersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type OrdersUpdateWithoutOrder_itemsInput = {
    id_order?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UsersUpdateOneRequiredWithoutMy_ordersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrder_itemsInput = {
    id_order?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsUpsertWithoutOrder_itemsInput = {
    update: XOR<ProductsUpdateWithoutOrder_itemsInput, ProductsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ProductsCreateWithoutOrder_itemsInput, ProductsUncheckedCreateWithoutOrder_itemsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutOrder_itemsInput, ProductsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ProductsUpdateWithoutOrder_itemsInput = {
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUpdateManyWithoutProductNestedInput
    reviews?: productsReviewsUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUpdateManyWithoutProductNestedInput
    category?: ProductsCategoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutOrder_itemsInput = {
    id_product?: IntFieldUpdateOperationsInput | number
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    id_category_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUncheckedUpdateManyWithoutProductNestedInput
    reviews?: productsReviewsUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UsersCreateWithoutMy_cartInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsCreateNestedManyWithoutUser_detailsInput
    account_details: AccountsCreateNestedOneWithoutUser_detailsInput
    my_addresses?: addressesCreateNestedManyWithoutUser_detailsInput
    my_orders?: OrdersCreateNestedManyWithoutUser_detailsInput
  }

  export type UsersUncheckedCreateWithoutMy_cartInput = {
    id_user: string
    first_name: string
    last_name: string
    user_type?: $Enums.UsersTypes
    id_account_fk: string
    created_at?: Date | string
    updated_at?: Date | string
    my_contacts?: ContactsUncheckedCreateNestedManyWithoutUser_detailsInput
    my_addresses?: addressesUncheckedCreateNestedManyWithoutUser_detailsInput
    my_orders?: OrdersUncheckedCreateNestedManyWithoutUser_detailsInput
  }

  export type UsersCreateOrConnectWithoutMy_cartInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMy_cartInput, UsersUncheckedCreateWithoutMy_cartInput>
  }

  export type CartItemsCreateWithoutCartInput = {
    id_cart_item: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutCart_itemsInput
  }

  export type CartItemsUncheckedCreateWithoutCartInput = {
    id_cart_item: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemsCreateOrConnectWithoutCartInput = {
    where: CartItemsWhereUniqueInput
    create: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput>
  }

  export type CartItemsCreateManyCartInputEnvelope = {
    data: CartItemsCreateManyCartInput | CartItemsCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutMy_cartInput = {
    update: XOR<UsersUpdateWithoutMy_cartInput, UsersUncheckedUpdateWithoutMy_cartInput>
    create: XOR<UsersCreateWithoutMy_cartInput, UsersUncheckedCreateWithoutMy_cartInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMy_cartInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMy_cartInput, UsersUncheckedUpdateWithoutMy_cartInput>
  }

  export type UsersUpdateWithoutMy_cartInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUpdateManyWithoutUser_detailsNestedInput
    account_details?: AccountsUpdateOneRequiredWithoutUser_detailsNestedInput
    my_addresses?: addressesUpdateManyWithoutUser_detailsNestedInput
    my_orders?: OrdersUpdateManyWithoutUser_detailsNestedInput
  }

  export type UsersUncheckedUpdateWithoutMy_cartInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUsersTypesFieldUpdateOperationsInput | $Enums.UsersTypes
    id_account_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    my_contacts?: ContactsUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_addresses?: addressesUncheckedUpdateManyWithoutUser_detailsNestedInput
    my_orders?: OrdersUncheckedUpdateManyWithoutUser_detailsNestedInput
  }

  export type CartItemsUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemsWhereUniqueInput
    update: XOR<CartItemsUpdateWithoutCartInput, CartItemsUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput>
  }

  export type CartItemsUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemsWhereUniqueInput
    data: XOR<CartItemsUpdateWithoutCartInput, CartItemsUncheckedUpdateWithoutCartInput>
  }

  export type CartItemsUpdateManyWithWhereWithoutCartInput = {
    where: CartItemsScalarWhereInput
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyWithoutCartInput>
  }

  export type CartsCreateWithoutCart_itemsInput = {
    id_cart: string
    status?: $Enums.CartStatus
    created_at?: Date | string
    updated_at?: Date | string
    user_details: UsersCreateNestedOneWithoutMy_cartInput
  }

  export type CartsUncheckedCreateWithoutCart_itemsInput = {
    id_cart: string
    id_user_fk: string
    status?: $Enums.CartStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartsCreateOrConnectWithoutCart_itemsInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutCart_itemsInput, CartsUncheckedCreateWithoutCart_itemsInput>
  }

  export type ProductsCreateWithoutCart_itemsInput = {
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesCreateNestedManyWithoutProductInput
    reviews?: productsReviewsCreateNestedManyWithoutProductInput
    order_items?: OrderItemsCreateNestedManyWithoutProductInput
    category: ProductsCategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutCart_itemsInput = {
    id_product?: number
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    id_category_fk: number
    created_at?: Date | string
    updated_at?: Date | string
    images?: ProductsImagesUncheckedCreateNestedManyWithoutProductInput
    reviews?: productsReviewsUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCart_itemsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCart_itemsInput, ProductsUncheckedCreateWithoutCart_itemsInput>
  }

  export type CartsUpsertWithoutCart_itemsInput = {
    update: XOR<CartsUpdateWithoutCart_itemsInput, CartsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<CartsCreateWithoutCart_itemsInput, CartsUncheckedCreateWithoutCart_itemsInput>
    where?: CartsWhereInput
  }

  export type CartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: CartsWhereInput
    data: XOR<CartsUpdateWithoutCart_itemsInput, CartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type CartsUpdateWithoutCart_itemsInput = {
    id_cart?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_details?: UsersUpdateOneRequiredWithoutMy_cartNestedInput
  }

  export type CartsUncheckedUpdateWithoutCart_itemsInput = {
    id_cart?: StringFieldUpdateOperationsInput | string
    id_user_fk?: StringFieldUpdateOperationsInput | string
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpsertWithoutCart_itemsInput = {
    update: XOR<ProductsUpdateWithoutCart_itemsInput, ProductsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<ProductsCreateWithoutCart_itemsInput, ProductsUncheckedCreateWithoutCart_itemsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutCart_itemsInput, ProductsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type ProductsUpdateWithoutCart_itemsInput = {
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUpdateManyWithoutProductNestedInput
    reviews?: productsReviewsUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUpdateManyWithoutProductNestedInput
    category?: ProductsCategoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCart_itemsInput = {
    id_product?: IntFieldUpdateOperationsInput | number
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    id_category_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUncheckedUpdateManyWithoutProductNestedInput
    reviews?: productsReviewsUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type AuthenticationsCreateManyAccount_detailsInput = {
    id_authentication: string
    type?: $Enums.AuthenticationsTypes
    expireIn: Date | string
    used?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AuthenticationsUpdateWithoutAccount_detailsInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token_details?: TokensUpdateOneWithoutAuthentication_detailsNestedInput
    twoFactorAuth_details?: TwoFactorAuthUpdateOneWithoutAuthentication_detailsNestedInput
  }

  export type AuthenticationsUncheckedUpdateWithoutAccount_detailsInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token_details?: TokensUncheckedUpdateOneWithoutAuthentication_detailsNestedInput
    twoFactorAuth_details?: TwoFactorAuthUncheckedUpdateOneWithoutAuthentication_detailsNestedInput
  }

  export type AuthenticationsUncheckedUpdateManyWithoutAccount_detailsInput = {
    id_authentication?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationsTypesFieldUpdateOperationsInput | $Enums.AuthenticationsTypes
    expireIn?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateManyUser_detailsInput = {
    id_contact: string
    phone_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesCreateManyUser_detailsInput = {
    id_address: string
    street: string
    city: string
    country?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersCreateManyUser_detailsInput = {
    id_order: string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    payment_method?: string
    created_at?: Date | string
    updated_at?: Date | string
    delivered_at?: Date | string | null
  }

  export type ContactsUpdateWithoutUser_detailsInput = {
    id_contact?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateWithoutUser_detailsInput = {
    id_contact?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateManyWithoutUser_detailsInput = {
    id_contact?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUpdateWithoutUser_detailsInput = {
    id_address?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUncheckedUpdateWithoutUser_detailsInput = {
    id_address?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUncheckedUpdateManyWithoutUser_detailsInput = {
    id_address?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutUser_detailsInput = {
    id_order?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: OrderItemsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUser_detailsInput = {
    id_order?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUser_detailsInput = {
    id_order?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateManyCategoryInput = {
    id_product?: number
    reference_code: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    available_stock?: number
    available?: boolean
    aditional_info: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsUpdateWithoutCategoryInput = {
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUpdateManyWithoutProductNestedInput
    reviews?: productsReviewsUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    id_product?: IntFieldUpdateOperationsInput | number
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductsImagesUncheckedUpdateManyWithoutProductNestedInput
    reviews?: productsReviewsUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemsUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    id_product?: IntFieldUpdateOperationsInput | number
    reference_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available_stock?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    aditional_info?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsImagesCreateManyProductInput = {
    id_image: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsReviewsCreateManyProductInput = {
    id_review: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemsCreateManyProductInput = {
    id_order_item: string
    quantity: number
    price?: Decimal | DecimalJsLike | number | string | null
    id_order_fk: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemsCreateManyProductInput = {
    id_cart_item: string
    quantity: number
    id_cart_fk: string
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsImagesUpdateWithoutProductInput = {
    id_image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsImagesUncheckedUpdateWithoutProductInput = {
    id_image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsImagesUncheckedUpdateManyWithoutProductInput = {
    id_image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsReviewsUpdateWithoutProductInput = {
    id_review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsReviewsUncheckedUpdateWithoutProductInput = {
    id_review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsReviewsUncheckedUpdateManyWithoutProductInput = {
    id_review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUpdateWithoutProductInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutProductInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_order_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutProductInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_order_fk?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsUpdateWithoutProductInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type CartItemsUncheckedUpdateWithoutProductInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    id_cart_fk?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsUncheckedUpdateManyWithoutProductInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    id_cart_fk?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateManyOrderInput = {
    id_order_item: string
    quantity: number
    price?: Decimal | DecimalJsLike | number | string | null
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemsUpdateWithoutOrderInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutOrderInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrderInput = {
    id_order_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsCreateManyCartInput = {
    id_cart_item: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemsUpdateWithoutCartInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type CartItemsUncheckedUpdateWithoutCartInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsUncheckedUpdateManyWithoutCartInput = {
    id_cart_item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_product_fk?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};

/** A connection to a list of items. */
export type AllProductsConnection = {
  __typename?: 'AllProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AllProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AllProductsEdge = {
  __typename?: 'AllProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
}

export type Claim = {
  __typename?: 'Claim';
  claim1?: Maybe<Scalars['String']>;
  claimId: Scalars['Int'];
};

export type CountryCode = {
  __typename?: 'CountryCode';
  capital?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dial?: Maybe<Scalars['String']>;
  ds?: Maybe<Scalars['String']>;
  fifa?: Maybe<Scalars['String']>;
  geonameId?: Maybe<Scalars['Int']>;
  ioc?: Maybe<Scalars['String']>;
  itu?: Maybe<Scalars['String']>;
  languages?: Maybe<Scalars['String']>;
  officialNameEn?: Maybe<Scalars['String']>;
  officialNameEs?: Maybe<Scalars['String']>;
  supported?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wmo?: Maybe<Scalars['String']>;
};

export type CreateProductPayload = {
  __typename?: 'CreateProductPayload';
  product: Product;
};

export type CreateProductRequestInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
};

export type CreateProductVariantPayload = {
  __typename?: 'CreateProductVariantPayload';
  productVariant: ProductVariant;
};

export type CreateProductVariantRequestInput = {
  description?: InputMaybe<Scalars['String']>;
  isBundle?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  productId: Scalars['Int'];
  sku?: InputMaybe<Scalars['String']>;
  storeOnly?: InputMaybe<Scalars['Boolean']>;
  variantValueId: Scalars['Int'];
  weight?: InputMaybe<Scalars['Float']>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  user: User;
};

export type CreateUserRequestInput = {
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: CreateProductPayload;
  createProductVariant: CreateProductVariantPayload;
  createUser: CreateUserPayload;
};

export type MutationCreateProductArgs = {
  input: CreateProductRequestInput;
};

export type MutationCreateProductVariantArgs = {
  input: CreateProductVariantRequestInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserRequestInput;
};

export type OcassionCartDetail = {
  __typename?: 'OcassionCartDetail';
  label?: Maybe<Scalars['String']>;
  occasionCartId: Scalars['Int'];
  price: Scalars['Float'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Float'];
  sku?: Maybe<Scalars['String']>;
  variant?: Maybe<ProductVariant>;
};

export type OccasionCart = {
  __typename?: 'OccasionCart';
  cartDetails?: Maybe<Array<OcassionCartDetail>>;
  description?: Maybe<Scalars['String']>;
  dropOffStage?: Maybe<Scalars['String']>;
  occasionCartId: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  userOccasionId: Scalars['Int'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<ProductCategory>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
  productId: Scalars['Int'];
  variants?: Maybe<Array<ProductVariant>>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productCategoryId: Scalars['Int'];
};

export type ProductCategorySortInput = {
  description?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
};

export type ProductSortInput = {
  category?: InputMaybe<ProductCategorySortInput>;
  description?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
  productId?: InputMaybe<SortEnumType>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  description?: Maybe<Scalars['String']>;
  isBundle?: Maybe<Scalars['Boolean']>;
  media?: Maybe<Array<ProductVariantMedium>>;
  name?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  storeOnly?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<VariantValue>;
  variantValueId: Scalars['Int'];
  weight?: Maybe<Scalars['Float']>;
};

export type ProductVariantMedium = {
  __typename?: 'ProductVariantMedium';
  mediaType?: Maybe<Scalars['String']>;
  productVariantId: Scalars['Int'];
  productVariantMediaId: Scalars['Int'];
  quality?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allProducts?: Maybe<AllProductsConnection>;
  countryCodes: Array<CountryCode>;
  loggedInUser?: Maybe<User>;
  productById?: Maybe<Product>;
  productCategories: Array<ProductCategory>;
  site: Site;
  variantValues: Array<VariantValue>;
  variants: Array<Variant>;
};

export type QueryAllProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ProductSortInput>>;
};

export type QueryProductByIdArgs = {
  productId: Scalars['Int'];
};

export type QueryVariantValuesArgs = {
  variantId: Scalars['Int'];
};

export type Site = {
  __typename?: 'Site';
  bestSellingProducts?: Maybe<Array<Product>>;
  featuredProducts?: Maybe<Array<Product>>;
  newestProducts?: Maybe<Array<Product>>;
  products?: Maybe<Array<Product>>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type User = {
  __typename?: 'User';
  addreses?: Maybe<Array<UserAddrese>>;
  carts?: Maybe<Array<UserCart>>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  occasions?: Maybe<Array<UserOccasion>>;
  profile?: Maybe<UserProfile>;
  userClaims?: Maybe<Array<UserClaim>>;
  userId?: Maybe<Scalars['String']>;
};

export type UserAddrese = {
  __typename?: 'UserAddrese';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  isBilling?: Maybe<Scalars['Boolean']>;
  isShipping?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  userAddresesId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type UserCart = {
  __typename?: 'UserCart';
  price: Scalars['Float'];
  productVariantId?: Maybe<Scalars['Int']>;
  quantity: Scalars['Float'];
  sku?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  variant?: Maybe<ProductVariant>;
};

export type UserClaim = {
  __typename?: 'UserClaim';
  claim?: Maybe<Claim>;
  claimId: Scalars['Int'];
  userClaimsId: Scalars['Int'];
  userId?: Maybe<Scalars['String']>;
};

export type UserOccasion = {
  __typename?: 'UserOccasion';
  carts?: Maybe<Array<OccasionCart>>;
  date?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  userOccasionId: Scalars['Int'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  picture?: Maybe<Scalars['String']>;
  processorId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  userProfileId: Scalars['Int'];
};

export type Variant = {
  __typename?: 'Variant';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variantId: Scalars['Int'];
  variantValues?: Maybe<Array<VariantValue>>;
};

export type VariantValue = {
  __typename?: 'VariantValue';
  value?: Maybe<Scalars['String']>;
  variant?: Maybe<Variant>;
  variantId: Scalars['Int'];
  variantValueId: Scalars['Int'];
};

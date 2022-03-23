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

export type CountryCode = {
  __typename?: 'CountryCode';
  capital: Scalars['String'];
  continent: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dial: Scalars['String'];
  ds: Scalars['String'];
  fifa: Scalars['String'];
  geonameId: Scalars['Int'];
  ioc: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  itu: Scalars['String'];
  languages: Scalars['String'];
  officialNameEn: Scalars['String'];
  officialNameEs: Scalars['String'];
  supported: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  wmo: Scalars['String'];
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
  createProduct: Product;
  createProductCategory: ProductCategory;
  createProductVariant: ProductVariant;
  createUser: CreateUserPayload;
  createVariant: Variant;
  createVariantValue: VariantValue;
  deleteProduct?: Maybe<Scalars['Boolean']>;
  deleteProductVariant?: Maybe<Scalars['Boolean']>;
  updateProduct: Product;
  updateProductVariant: ProductVariant;
};

export type MutationCreateProductArgs = {
  input: ProductInput;
};

export type MutationCreateProductCategoryArgs = {
  input: ProductCategoryInput;
};

export type MutationCreateProductVariantArgs = {
  input: ProductVariantInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserRequestInput;
};

export type MutationCreateVariantArgs = {
  input: VariantInput;
};

export type MutationCreateVariantValueArgs = {
  input: VariantValueInput;
};

export type MutationDeleteProductArgs = {
  productId: Scalars['Int'];
};

export type MutationDeleteProductVariantArgs = {
  productVariantId: Scalars['Int'];
};

export type MutationUpdateProductArgs = {
  input: ProductEntityInput;
};

export type MutationUpdateProductVariantArgs = {
  input: ProductVariantEntityInput;
};

export type OcassionCartDetail = {
  __typename?: 'OcassionCartDetail';
  label: Scalars['String'];
  occasionCartId: Scalars['Int'];
  price: Scalars['Float'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Float'];
  sku: Scalars['String'];
  variant?: Maybe<ProductVariant>;
};

export type OccasionCart = {
  __typename?: 'OccasionCart';
  cartDetails?: Maybe<Array<OcassionCartDetail>>;
  description: Scalars['String'];
  dropOffStage: Scalars['String'];
  occasionCartId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
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
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
  productId?: Maybe<Scalars['Int']>;
  variants?: Maybe<Array<ProductVariant>>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  description: Scalars['String'];
  name: Scalars['String'];
  productCategoryId?: Maybe<Scalars['Int']>;
};

export type ProductCategoryInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  productCategoryId?: InputMaybe<Scalars['Int']>;
};

export type ProductCategorySortInput = {
  description?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
  productId: Scalars['Int'];
};

export type ProductEntityInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
  productId: Scalars['Int'];
};

export type ProductEntitySortInput = {
  description?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
  productId?: InputMaybe<SortEnumType>;
};

export type ProductInput = {
  category?: InputMaybe<ProductCategoryInput>;
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
  productId?: InputMaybe<Scalars['Int']>;
  variants?: InputMaybe<Array<ProductVariantInput>>;
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
  description: Scalars['String'];
  isBundle?: Maybe<Scalars['Boolean']>;
  media?: Maybe<Array<ProductVariantMedium>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId?: Maybe<Scalars['Int']>;
  sku: Scalars['String'];
  storeOnly?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<VariantValue>;
  variantValueId: Scalars['Int'];
  weight?: Maybe<Scalars['Float']>;
};

export type ProductVariantEntity = {
  __typename?: 'ProductVariantEntity';
  description: Scalars['String'];
  isBundle?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId: Scalars['Int'];
  sku: Scalars['String'];
  storeOnly?: Maybe<Scalars['Boolean']>;
  variantValueId: Scalars['Int'];
  weight?: Maybe<Scalars['Float']>;
};

export type ProductVariantEntityInput = {
  description: Scalars['String'];
  isBundle?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId: Scalars['Int'];
  sku: Scalars['String'];
  storeOnly?: InputMaybe<Scalars['Boolean']>;
  variantValueId: Scalars['Int'];
  weight?: InputMaybe<Scalars['Float']>;
};

export type ProductVariantInput = {
  description: Scalars['String'];
  isBundle?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Array<ProductVariantMediumInput>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  storeOnly?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<VariantValueInput>;
  variantValueId: Scalars['Int'];
  weight?: InputMaybe<Scalars['Float']>;
};

export type ProductVariantMedium = {
  __typename?: 'ProductVariantMedium';
  mediaType: Scalars['String'];
  productVariantId: Scalars['Int'];
  productVariantMediaId?: Maybe<Scalars['Int']>;
  quality: Scalars['String'];
  url: Scalars['String'];
};

export type ProductVariantMediumInput = {
  mediaType: Scalars['String'];
  productVariantId: Scalars['Int'];
  productVariantMediaId?: InputMaybe<Scalars['Int']>;
  quality: Scalars['String'];
  url: Scalars['String'];
};

/** A connection to a list of items. */
export type ProductsEntityConnection = {
  __typename?: 'ProductsEntityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductsEntityEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductEntity>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductsEntityEdge = {
  __typename?: 'ProductsEntityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductEntity;
};

export type Query = {
  __typename?: 'Query';
  allProducts?: Maybe<AllProductsConnection>;
  countryCodes: Array<CountryCode>;
  loggedInUser?: Maybe<User>;
  productById?: Maybe<Product>;
  productCategories: Array<ProductCategory>;
  productVariantById?: Maybe<ProductVariant>;
  productVariantsEntityById: Array<ProductVariantEntity>;
  productsEntity?: Maybe<ProductsEntityConnection>;
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

export type QueryProductVariantByIdArgs = {
  productVariantId: Scalars['Int'];
};

export type QueryProductVariantsEntityByIdArgs = {
  productId: Scalars['Int'];
};

export type QueryProductsEntityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ProductEntitySortInput>>;
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
  addreses?: Maybe<Array<UserAddresses>>;
  carts?: Maybe<Array<UserCart>>;
  id: Scalars['Int'];
  occasions?: Maybe<Array<UserOccasion>>;
  paymentProfiles?: Maybe<Array<UserPaymentProfile>>;
  userId: Scalars['String'];
};

export type UserAddresses = {
  __typename?: 'UserAddresses';
  address1: Scalars['String'];
  address2: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  isBilling: Scalars['Boolean'];
  isShipping: Scalars['Boolean'];
  state: Scalars['String'];
  userAddressesId?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
  zipcode: Scalars['String'];
};

export type UserCart = {
  __typename?: 'UserCart';
  price: Scalars['Float'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Float'];
  sku: Scalars['String'];
  userId: Scalars['Int'];
  variant?: Maybe<ProductVariant>;
};

export type UserOccasion = {
  __typename?: 'UserOccasion';
  carts?: Maybe<Array<OccasionCart>>;
  date?: Maybe<Scalars['DateTime']>;
  details: Scalars['String'];
  name: Scalars['String'];
  userId: Scalars['Int'];
  userOccasionId?: Maybe<Scalars['Int']>;
};

export type UserPaymentProfile = {
  __typename?: 'UserPaymentProfile';
  processorId: Scalars['String'];
  userId: Scalars['Int'];
  userProfileId: Scalars['Int'];
};

export type Variant = {
  __typename?: 'Variant';
  name: Scalars['String'];
  type: Scalars['String'];
  variantId?: Maybe<Scalars['Int']>;
  variantValues?: Maybe<Array<VariantValue>>;
};

export type VariantInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  variantId?: InputMaybe<Scalars['Int']>;
  variantValues?: InputMaybe<Array<VariantValueInput>>;
};

export type VariantValue = {
  __typename?: 'VariantValue';
  value: Scalars['String'];
  variant?: Maybe<Variant>;
  variantId: Scalars['Int'];
  variantValueId?: Maybe<Scalars['Int']>;
};

export type VariantValueInput = {
  value: Scalars['String'];
  variant?: InputMaybe<VariantInput>;
  variantId: Scalars['Int'];
  variantValueId?: InputMaybe<Scalars['Int']>;
};

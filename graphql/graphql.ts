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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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

export type FirebaseUser = {
  __typename?: 'FirebaseUser';
  carts?: Maybe<Array<UserCart>>;
  claims?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  occasions?: Maybe<Array<UserOccasion>>;
  paymentProfiles?: Maybe<Array<UserPaymentProfile>>;
  phoneNumber?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createProductCategory: ProductCategory;
  createProductVariant: ProductVariant;
  createUser: User;
  createVariant: Variant;
  createVariantValue: VariantValue;
  deleteProduct: Scalars['Boolean'];
  deleteProductVariant: Scalars['Boolean'];
  deleteProductVariantMedia: Scalars['Boolean'];
  deleteProductVariantValue: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  grantAdminUser: Scalars['Boolean'];
  productVariantAddMedia?: Maybe<ProductVariant>;
  productVariantAddValue: ProductVariant;
  revokeAdminUser: Scalars['Boolean'];
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
  userId: Scalars['String'];
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

export type MutationDeleteProductVariantMediaArgs = {
  productVariantMediaId: Scalars['Int'];
};

export type MutationDeleteProductVariantValueArgs = {
  productVariantId: Scalars['Int'];
  variantId: Scalars['Int'];
  variantValueId: Scalars['Int'];
};

export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
};

export type MutationGrantAdminUserArgs = {
  userId: Scalars['String'];
};

export type MutationProductVariantAddMediaArgs = {
  file: Scalars['Upload'];
  input: ProductVariantMediumInput;
};

export type MutationProductVariantAddValueArgs = {
  input: ProductVariantValueInput;
};

export type MutationRevokeAdminUserArgs = {
  userId: Scalars['String'];
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
  media?: Maybe<Array<ProductVariantMedium>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId?: Maybe<Scalars['Int']>;
  sku: Scalars['String'];
  variantValues?: Maybe<Array<ProductVariantValue>>;
};

export type ProductVariantEntity = {
  __typename?: 'ProductVariantEntity';
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId: Scalars['Int'];
  sku: Scalars['String'];
};

export type ProductVariantEntityInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId: Scalars['Int'];
  sku: Scalars['String'];
};

export type ProductVariantInput = {
  description: Scalars['String'];
  media?: InputMaybe<Array<ProductVariantMediumInput>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  variantValues?: InputMaybe<Array<ProductVariantValueInput>>;
};

export type ProductVariantMedium = {
  __typename?: 'ProductVariantMedium';
  description?: Maybe<Scalars['String']>;
  mediaType: Scalars['String'];
  name: Scalars['String'];
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['Int'];
  productVariantMediaId?: Maybe<Scalars['Int']>;
  quality: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ProductVariantMediumInput = {
  description?: InputMaybe<Scalars['String']>;
  mediaType: Scalars['String'];
  name: Scalars['String'];
  productVariant?: InputMaybe<ProductVariantInput>;
  productVariantId: Scalars['Int'];
  productVariantMediaId?: InputMaybe<Scalars['Int']>;
  quality: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type ProductVariantValue = {
  __typename?: 'ProductVariantValue';
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['Int'];
  variant?: Maybe<Variant>;
  variantId: Scalars['Int'];
  variantValue?: Maybe<VariantValue>;
  variantValueId: Scalars['Int'];
};

export type ProductVariantValueInput = {
  productVariant?: InputMaybe<ProductVariantInput>;
  productVariantId: Scalars['Int'];
  variant?: InputMaybe<VariantInput>;
  variantId: Scalars['Int'];
  variantValue?: InputMaybe<VariantValueInput>;
  variantValueId: Scalars['Int'];
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
  userById?: Maybe<FirebaseUser>;
  users?: Maybe<UsersConnection>;
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

export type QueryUserByIdArgs = {
  userId: Scalars['String'];
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
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
  carts?: Maybe<Array<UserCart>>;
  id: Scalars['Int'];
  occasions?: Maybe<Array<UserOccasion>>;
  paymentProfiles?: Maybe<Array<UserPaymentProfile>>;
  userId: Scalars['String'];
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

/** A connection to a list of items. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<UsersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<FirebaseUser>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FirebaseUser;
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
  productVariantValues?: Maybe<Array<ProductVariantValue>>;
  value: Scalars['String'];
  variantId: Scalars['Int'];
  variantValueId?: Maybe<Scalars['Int']>;
};

export type VariantValueInput = {
  productVariantValues?: InputMaybe<Array<ProductVariantValueInput>>;
  value: Scalars['String'];
  variantId: Scalars['Int'];
  variantValueId?: InputMaybe<Scalars['Int']>;
};

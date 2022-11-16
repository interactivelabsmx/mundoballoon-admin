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
  DateTime: any;
  Decimal: any;
  Short: any;
  Upload: any;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
}

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  neq?: InputMaybe<Scalars['Decimal']>;
  ngt?: InputMaybe<Scalars['Decimal']>;
  ngte?: InputMaybe<Scalars['Decimal']>;
  nin?: InputMaybe<Array<Scalars['Decimal']>>;
  nlt?: InputMaybe<Scalars['Decimal']>;
  nlte?: InputMaybe<Scalars['Decimal']>;
};

export type ComparableInt16OperationFilterInput = {
  eq?: InputMaybe<Scalars['Short']>;
  gt?: InputMaybe<Scalars['Short']>;
  gte?: InputMaybe<Scalars['Short']>;
  in?: InputMaybe<Array<Scalars['Short']>>;
  lt?: InputMaybe<Scalars['Short']>;
  lte?: InputMaybe<Scalars['Short']>;
  neq?: InputMaybe<Scalars['Short']>;
  ngt?: InputMaybe<Scalars['Short']>;
  ngte?: InputMaybe<Scalars['Short']>;
  nin?: InputMaybe<Array<Scalars['Short']>>;
  nlt?: InputMaybe<Scalars['Short']>;
  nlte?: InputMaybe<Scalars['Short']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableNullableOfInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type CountryCode = {
  __typename?: 'CountryCode';
  createdAt?: Maybe<Scalars['DateTime']>;
  dial: Scalars['String'];
  fifa: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  officialNameEn: Scalars['String'];
  officialNameEs: Scalars['String'];
  supported: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  wmo: Scalars['String'];
};

export type EventCartDetail = {
  __typename?: 'EventCartDetail';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventCartId: Scalars['Int'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  label: Scalars['String'];
  price: Scalars['Decimal'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Decimal'];
  sku: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userEvent?: Maybe<UserEvent>;
  userEventId?: Maybe<Scalars['Int']>;
  variant?: Maybe<ProductVariant>;
};

export type EventCartDetailFilterInput = {
  and?: InputMaybe<Array<EventCartDetailFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  eventCartId?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<EventCartDetailFilterInput>>;
  price?: InputMaybe<ComparableDecimalOperationFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  quantity?: InputMaybe<ComparableDecimalOperationFilterInput>;
  sku?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  userEvent?: InputMaybe<UserEventFilterInput>;
  userEventId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  variant?: InputMaybe<ProductVariantFilterInput>;
};

export type EventCartDetailInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventCartId: Scalars['Int'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  label: Scalars['String'];
  price: Scalars['Decimal'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Decimal'];
  sku: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userEvent?: InputMaybe<UserEventInput>;
  userEventId?: InputMaybe<Scalars['Int']>;
  variant?: InputMaybe<ProductVariantInput>;
};

export type FirebaseUser = {
  __typename?: 'FirebaseUser';
  carts?: Maybe<Array<UserCart>>;
  claims?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  events?: Maybe<Array<UserEvent>>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  paymentProfiles?: Maybe<Array<UserPaymentProfile>>;
  phoneNumber?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<ProductVariantReview>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type KeyValuePairOfStringAndListOfProduct = {
  __typename?: 'KeyValuePairOfStringAndListOfProduct';
  key: Scalars['String'];
  value: Array<Product>;
};

export type ListFilterInputTypeOfEventCartDetailFilterInput = {
  all?: InputMaybe<EventCartDetailFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<EventCartDetailFilterInput>;
  some?: InputMaybe<EventCartDetailFilterInput>;
};

export type ListFilterInputTypeOfProductVariantFilterInput = {
  all?: InputMaybe<ProductVariantFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ProductVariantFilterInput>;
  some?: InputMaybe<ProductVariantFilterInput>;
};

export type ListFilterInputTypeOfProductVariantMediumFilterInput = {
  all?: InputMaybe<ProductVariantMediumFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ProductVariantMediumFilterInput>;
  some?: InputMaybe<ProductVariantMediumFilterInput>;
};

export type ListFilterInputTypeOfProductVariantReviewFilterInput = {
  all?: InputMaybe<ProductVariantReviewFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ProductVariantReviewFilterInput>;
  some?: InputMaybe<ProductVariantReviewFilterInput>;
};

export type ListFilterInputTypeOfProductVariantValueFilterInput = {
  all?: InputMaybe<ProductVariantValueFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ProductVariantValueFilterInput>;
  some?: InputMaybe<ProductVariantValueFilterInput>;
};

export type ListFilterInputTypeOfUserCartFilterInput = {
  all?: InputMaybe<UserCartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserCartFilterInput>;
  some?: InputMaybe<UserCartFilterInput>;
};

export type ListFilterInputTypeOfUserEventFilterInput = {
  all?: InputMaybe<UserEventFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserEventFilterInput>;
  some?: InputMaybe<UserEventFilterInput>;
};

export type ListFilterInputTypeOfUserPaymentProfileFilterInput = {
  all?: InputMaybe<UserPaymentProfileFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserPaymentProfileFilterInput>;
  some?: InputMaybe<UserPaymentProfileFilterInput>;
};

export type ListFilterInputTypeOfVariantValueFilterInput = {
  all?: InputMaybe<VariantValueFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<VariantValueFilterInput>;
  some?: InputMaybe<VariantValueFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProductVariantReview?: Maybe<ProductVariant>;
  createProduct: Product;
  createProductCategory: ProductCategory;
  createProductVariant: ProductVariant;
  createUser: User;
  createUserEvent: UserEvent;
  createVariant: Variant;
  createVariantValue: VariantValue;
  createVariantsType: VariantsType;
  deleteProduct: Scalars['Boolean'];
  deleteProductVariant: Scalars['Boolean'];
  deleteProductVariantMedia: Scalars['Boolean'];
  deleteProductVariantValue: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteUserEvent: Scalars['Boolean'];
  grantAdminUser: Scalars['Boolean'];
  productVariantAddMedia?: Maybe<ProductVariant>;
  productVariantAddValue: ProductVariant;
  revokeAdminUser: Scalars['Boolean'];
  updateProduct: Product;
  updateProductVariant: ProductVariant;
  updateUserEvent: UserEvent;
};

export type MutationAddProductVariantReviewArgs = {
  input: ProductVariantReviewInput;
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

export type MutationCreateUserEventArgs = {
  details: Scalars['String'];
  name: Scalars['String'];
};

export type MutationCreateVariantArgs = {
  input: VariantInput;
};

export type MutationCreateVariantValueArgs = {
  input: VariantValueInput;
};

export type MutationCreateVariantsTypeArgs = {
  variantsType: Scalars['String'];
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

export type MutationDeleteUserEventArgs = {
  userEventId: Scalars['Int'];
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

export type MutationUpdateUserEventArgs = {
  input: UserEventInput;
};

export type NavCategory = {
  __typename?: 'NavCategory';
  href: Scalars['String'];
  imageAlt: Scalars['String'];
  imageSrc: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
};

export type NavOption = {
  __typename?: 'NavOption';
  href?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  options?: Maybe<Array<NavCategory>>;
  order: Scalars['Int'];
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
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productCategoryId: Scalars['Int'];
  productId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  variants?: Maybe<Array<ProductVariant>>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  productCategoryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCategoryFilterInput = {
  and?: InputMaybe<Array<ProductCategoryFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductCategoryFilterInput>>;
  productCategoryId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ProductCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  productCategoryId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCategorySortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productCategoryId: Scalars['Int'];
  productId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductEntityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productCategoryId: Scalars['Int'];
  productId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductEntitySortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
  productId?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  category?: InputMaybe<ProductCategoryFilterInput>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  price?: InputMaybe<ComparableDecimalOperationFilterInput>;
  productCategoryId?: InputMaybe<ComparableInt32OperationFilterInput>;
  productId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  variants?: InputMaybe<ListFilterInputTypeOfProductVariantFilterInput>;
};

export type ProductInput = {
  category?: InputMaybe<ProductCategoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productCategoryId: Scalars['Int'];
  productId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  variants?: InputMaybe<Array<ProductVariantInput>>;
};

export type ProductQuickView = {
  __typename?: 'ProductQuickView';
  product?: Maybe<Product>;
  variantValues?: Maybe<Array<VariantValue>>;
  variants?: Maybe<Array<Variant>>;
};

export type ProductSortInput = {
  category?: InputMaybe<ProductCategorySortInput>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
  productId?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  media?: Maybe<Array<ProductVariantMedium>>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productId: Scalars['Int'];
  productVariantId?: Maybe<Scalars['Int']>;
  reviews?: Maybe<Array<ProductVariantReview>>;
  sku: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  variantValues?: Maybe<Array<ProductVariantValue>>;
};

export type ProductVariantEntity = {
  __typename?: 'ProductVariantEntity';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productId: Scalars['Int'];
  productVariantId: Scalars['Int'];
  sku: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantEntityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productId: Scalars['Int'];
  productVariantId: Scalars['Int'];
  sku: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductVariantFilterInput = {
  and?: InputMaybe<Array<ProductVariantFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  media?: InputMaybe<ListFilterInputTypeOfProductVariantMediumFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductVariantFilterInput>>;
  price?: InputMaybe<ComparableDecimalOperationFilterInput>;
  productId?: InputMaybe<ComparableInt32OperationFilterInput>;
  productVariantId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  reviews?: InputMaybe<ListFilterInputTypeOfProductVariantReviewFilterInput>;
  sku?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  variantValues?: InputMaybe<ListFilterInputTypeOfProductVariantValueFilterInput>;
};

export type ProductVariantInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Array<ProductVariantMediumInput>>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productId: Scalars['Int'];
  productVariantId?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<Array<ProductVariantReviewInput>>;
  sku: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  variantValues?: InputMaybe<Array<ProductVariantValueInput>>;
};

export type ProductVariantMedium = {
  __typename?: 'ProductVariantMedium';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  mediaType: Scalars['String'];
  name: Scalars['String'];
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['Int'];
  productVariantMediaId?: Maybe<Scalars['Int']>;
  quality: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type ProductVariantMediumFilterInput = {
  and?: InputMaybe<Array<ProductVariantMediumFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  mediaType?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductVariantMediumFilterInput>>;
  productVariant?: InputMaybe<ProductVariantFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  productVariantMediaId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  quality?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  url?: InputMaybe<StringOperationFilterInput>;
};

export type ProductVariantMediumInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  mediaType: Scalars['String'];
  name: Scalars['String'];
  productVariant?: InputMaybe<ProductVariantInput>;
  productVariantId: Scalars['Int'];
  productVariantMediaId?: InputMaybe<Scalars['Int']>;
  quality: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ProductVariantReview = {
  __typename?: 'ProductVariantReview';
  comments?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['Int'];
  productVariantReviewId: Scalars['Int'];
  rating: Scalars['Short'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type ProductVariantReviewFilterInput = {
  and?: InputMaybe<Array<ProductVariantReviewFilterInput>>;
  comments?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<ProductVariantReviewFilterInput>>;
  productVariant?: InputMaybe<ProductVariantFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  productVariantReviewId?: InputMaybe<ComparableInt32OperationFilterInput>;
  rating?: InputMaybe<ComparableInt16OperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ProductVariantReviewInput = {
  comments?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  productVariant?: InputMaybe<ProductVariantInput>;
  productVariantId: Scalars['Int'];
  productVariantReviewId: Scalars['Int'];
  rating: Scalars['Short'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserInput>;
  userId: Scalars['String'];
};

export type ProductVariantValue = {
  __typename?: 'ProductVariantValue';
  createdAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  variant?: Maybe<Variant>;
  variantId: Scalars['Int'];
  variantValue?: Maybe<VariantValue>;
  variantValueId: Scalars['Int'];
};

export type ProductVariantValueFilterInput = {
  and?: InputMaybe<Array<ProductVariantValueFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<ProductVariantValueFilterInput>>;
  productVariant?: InputMaybe<ProductVariantFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  variant?: InputMaybe<VariantFilterInput>;
  variantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  variantValue?: InputMaybe<VariantValueFilterInput>;
  variantValueId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type ProductVariantValueInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  productVariant?: InputMaybe<ProductVariantInput>;
  productVariantId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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
  countryCodes: Array<CountryCode>;
  homepageProducts: Array<KeyValuePairOfStringAndListOfProduct>;
  loggedInUser?: Maybe<User>;
  navOptions: Array<NavOption>;
  productById?: Maybe<Product>;
  productCategories: Array<ProductCategory>;
  productQuickView: ProductQuickView;
  productVariantById?: Maybe<ProductVariant>;
  productVariantsEntityById: Array<ProductVariantEntity>;
  productsEntity?: Maybe<ProductsEntityConnection>;
  searchProducts?: Maybe<SearchProductsConnection>;
  sortOptions: Array<Scalars['String']>;
  userById?: Maybe<FirebaseUser>;
  userEventById?: Maybe<UserEvent>;
  userEvents: Array<UserEvent>;
  users?: Maybe<UsersConnection>;
  variantValues: Array<VariantValue>;
  variants: Array<Variant>;
  variantsType: Array<VariantsType>;
};

export type QueryHomepageProductsArgs = {
  includeBestSellingProducts: Scalars['Boolean'];
  includeNewestProducts: Scalars['Boolean'];
};

export type QueryProductByIdArgs = {
  productId: Scalars['Int'];
};

export type QueryProductQuickViewArgs = {
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

export type QuerySearchProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ProductSortInput>>;
  where?: InputMaybe<ProductFilterInput>;
};

export type QueryUserByIdArgs = {
  userId: Scalars['String'];
};

export type QueryUserEventByIdArgs = {
  userEventid: Scalars['Int'];
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

/** A connection to a list of items. */
export type SearchProductsConnection = {
  __typename?: 'SearchProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<SearchProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SearchProductsEdge = {
  __typename?: 'SearchProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UiRegistry = {
  __typename?: 'UiRegistry';
  componentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deprecated: Scalars['Boolean'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  uiRegistryId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UiRegistryFilterInput = {
  and?: InputMaybe<Array<UiRegistryFilterInput>>;
  componentId?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  deprecated?: InputMaybe<BooleanOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<UiRegistryFilterInput>>;
  uiRegistryId?: InputMaybe<ComparableInt32OperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type UiRegistryInput = {
  componentId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deprecated: Scalars['Boolean'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  uiRegistryId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  carts?: Maybe<Array<UserCart>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<Array<UserEvent>>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  paymentProfiles?: Maybe<Array<UserPaymentProfile>>;
  reviews?: Maybe<Array<ProductVariantReview>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type UserCart = {
  __typename?: 'UserCart';
  createdAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  price: Scalars['Decimal'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Decimal'];
  sku: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  variant?: Maybe<ProductVariant>;
};

export type UserCartFilterInput = {
  and?: InputMaybe<Array<UserCartFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<UserCartFilterInput>>;
  price?: InputMaybe<ComparableDecimalOperationFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  quantity?: InputMaybe<ComparableDecimalOperationFilterInput>;
  sku?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
  variant?: InputMaybe<ProductVariantFilterInput>;
};

export type UserCartInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  price: Scalars['Decimal'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Decimal'];
  sku: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  variant?: InputMaybe<ProductVariantInput>;
};

export type UserEvent = {
  __typename?: 'UserEvent';
  carts?: Maybe<Array<EventCartDetail>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  details: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userEventId: Scalars['Int'];
  userId: Scalars['String'];
};

export type UserEventFilterInput = {
  and?: InputMaybe<Array<UserEventFilterInput>>;
  carts?: InputMaybe<ListFilterInputTypeOfEventCartDetailFilterInput>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  date?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  details?: InputMaybe<StringOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserEventFilterInput>>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userEventId?: InputMaybe<ComparableInt32OperationFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type UserEventInput = {
  carts?: InputMaybe<Array<EventCartDetailInput>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  details: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserInput>;
  userEventId: Scalars['Int'];
  userId: Scalars['String'];
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  carts?: InputMaybe<ListFilterInputTypeOfUserCartFilterInput>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  events?: InputMaybe<ListFilterInputTypeOfUserEventFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  paymentProfiles?: InputMaybe<ListFilterInputTypeOfUserPaymentProfileFilterInput>;
  reviews?: InputMaybe<ListFilterInputTypeOfProductVariantReviewFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type UserInput = {
  carts?: InputMaybe<Array<UserCartInput>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<Array<UserEventInput>>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  paymentProfiles?: InputMaybe<Array<UserPaymentProfileInput>>;
  reviews?: InputMaybe<Array<ProductVariantReviewInput>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type UserPaymentProfile = {
  __typename?: 'UserPaymentProfile';
  createdAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  processorId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId: Scalars['String'];
  userProfileId: Scalars['Int'];
};

export type UserPaymentProfileFilterInput = {
  and?: InputMaybe<Array<UserPaymentProfileFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<UserPaymentProfileFilterInput>>;
  processorId?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
  userProfileId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type UserPaymentProfileInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  processorId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserInput>;
  userId: Scalars['String'];
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
  createdAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  uiRegistry?: Maybe<UiRegistry>;
  uiRegistryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  variantId?: Maybe<Scalars['Int']>;
  variantType?: Maybe<VariantsType>;
  variantTypeId: Scalars['Int'];
  variantValues?: Maybe<Array<VariantValue>>;
};

export type VariantFilterInput = {
  and?: InputMaybe<Array<VariantFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<VariantFilterInput>>;
  uiRegistry?: InputMaybe<UiRegistryFilterInput>;
  uiRegistryId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  variantId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  variantType?: InputMaybe<VariantsTypeFilterInput>;
  variantTypeId?: InputMaybe<ComparableInt32OperationFilterInput>;
  variantValues?: InputMaybe<ListFilterInputTypeOfVariantValueFilterInput>;
};

export type VariantInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  uiRegistry?: InputMaybe<UiRegistryInput>;
  uiRegistryId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  variantId?: InputMaybe<Scalars['Int']>;
  variantType?: InputMaybe<VariantsTypeInput>;
  variantTypeId: Scalars['Int'];
  variantValues?: InputMaybe<Array<VariantValueInput>>;
};

export type VariantValue = {
  __typename?: 'VariantValue';
  createdAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  productVariantValues?: Maybe<Array<ProductVariantValue>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
  variantId: Scalars['Int'];
  variantValueId?: Maybe<Scalars['Int']>;
};

export type VariantValueFilterInput = {
  and?: InputMaybe<Array<VariantValueFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<VariantValueFilterInput>>;
  productVariantValues?: InputMaybe<ListFilterInputTypeOfProductVariantValueFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  value?: InputMaybe<StringOperationFilterInput>;
  variantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  variantValueId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
};

export type VariantValueInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  productVariantValues?: InputMaybe<Array<ProductVariantValueInput>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['String'];
  variantId: Scalars['Int'];
  variantValueId?: InputMaybe<Scalars['Int']>;
};

export type VariantsType = {
  __typename?: 'VariantsType';
  createdAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  variantType?: Maybe<Scalars['String']>;
  variantTypeId: Scalars['Int'];
};

export type VariantsTypeFilterInput = {
  and?: InputMaybe<Array<VariantsTypeFilterInput>>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<VariantsTypeFilterInput>>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  variantType?: InputMaybe<StringOperationFilterInput>;
  variantTypeId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type VariantsTypeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  variantType?: InputMaybe<Scalars['String']>;
  variantTypeId: Scalars['Int'];
};

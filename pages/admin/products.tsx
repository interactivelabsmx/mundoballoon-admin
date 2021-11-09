import React from 'react';
import { gql, useQuery } from '@apollo/client';
import AdminLayot from '../../layouts/AdminLayot';
import BaseTable, { TableColor } from '../../components/UI/tables/BaseTable';

export const GET_PRODUCTS = gql`
  fragment categoryInfo on ProductCategory {
    productCategoryId
    name
    description
  }

  fragment mediaInfo on ProductVariantMedium {
    productVariantMediaId
    mediaType
    url
    quality
  }

  fragment varitanInfo on ProductVariant {
    productVariantId
    sku
    variantValueId
    productId
    name
    description
    price
    compareAtPrice
    weight
    taxable
    storeOnly
    isBundle
    variant {
      value
    }
    media {
      ...mediaInfo
    }
  }

  fragment productInfo on Product {
    productId
    name
    description
    price
    category {
      ...categoryInfo
    }
    variants {
      ...varitanInfo
    }
  }

  query allProducts($first: Int = 5, $after: String) {
    allProducts(first: $first, after: $after, order: [{ price: ASC }]) {
      nodes {
        ...productInfo
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const productsQueryVars = {
  first: 5,
  after: null,
};

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Category',
    accessor: 'category.name',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
];

const Products = (): JSX.Element => {
  const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: productsQueryVars,
  });

  if (error) return <div>Error loading</div>;
  if (loading) return <div>Loading</div>;

  const { allProducts } = data;
  const { nodes, pageInfo } = allProducts;
  const onClickNextPage = () =>
    fetchMore({ variables: { after: pageInfo.endCursor } });
  const onClickPrevPage = () =>
    fetchMore({ variables: { before: pageInfo.startCursor } });
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <BaseTable
            color={TableColor.DARK}
            title="Products"
            columns={columns}
            data={nodes}
          />
          <div className="flex justify-between">
            <button
              color="blue"
              disabled={!pageInfo.hasPreviousPage}
              onClick={onClickPrevPage}
            >
              Prev Page
            </button>
            <button
              color="blue"
              disabled={!pageInfo.hasNextPage}
              onClick={onClickNextPage}
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Products.Layout = AdminLayot;

export default Products;

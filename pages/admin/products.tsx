import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import CardTable, { TableColor } from '../../components/Cards/CardTable';
import Admin from '../../layouts/Admin';

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
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable
            color={TableColor.DARK}
            title="Products"
            columns={columns}
            data={nodes}
          />
          <button
            onClick={() =>
              fetchMore({ variables: { after: pageInfo.endCursor } })
            }
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()(
  //@ts-expect-error argument not provided
  withAuthServerSideProps()()
);

Products.layout = Admin;

export default Products;

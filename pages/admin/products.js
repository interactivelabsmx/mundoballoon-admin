import React from "react";
import withAuthServerSideProps from "lib/withAuthServerSideProps";
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import CardTable from "components/Cards/CardTable.js";
import Admin from "layouts/Admin.js";
import { gql, useQuery } from "@apollo/client";

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

  query allProducts(
    $first: Int = 5
  ) {
    allProducts(first: $first, order: [{ price: ASC }]) {
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
};

export default function Tables() {
  const { loading, error, data } = useQuery(
    GET_PRODUCTS,
    {
      variables: productsQueryVars,
    }
  );


  if (error) return <div>Error loading</div>;
  if (loading) return <div>Loading</div>;

  const { allProducts } = data;
  const { nodes } = allProducts;
  console.log(nodes);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()(withAuthServerSideProps()());

Tables.layout = Admin;

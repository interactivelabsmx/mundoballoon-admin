import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import BaseTable from '../../components/UI/tables/BaseTable';
import withAuthServer from '../../lib/firebaseAuth/withAuthServer';
import SecundaryButton from '../../components/UI/buttons/SecundaryButton';
import PrimaryLinkButton from '../../components/UI/links/PrimaryLinkButton';
import SectionHeader from '../../components/UI/SectionHeader';
import { useAllProductsQuery } from './graphql/products.gql';

export const productsQueryVars = { first: 5, after: null };

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
  const { loading, error, data, fetchMore } = useAllProductsQuery({
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
    <AdminLayout>
      <SectionHeader text="Products" />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <BaseTable columns={columns} data={nodes} />
          <div className="flex justify-between mt-4">
            <SecundaryButton
              disabled={!pageInfo.hasPreviousPage}
              onClick={onClickPrevPage}
            >
              Prev Page
            </SecundaryButton>
            <SecundaryButton
              disabled={!pageInfo.hasNextPage}
              onClick={onClickNextPage}
            >
              Next Page
            </SecundaryButton>
          </div>
          <div className="mt-4 text-right">
            <PrimaryLinkButton href="/admin/addProduct">
              Add New Product
            </PrimaryLinkButton>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export const getServerSideProps = withAuthServer();

export default Products;

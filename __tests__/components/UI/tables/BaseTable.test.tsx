import { render, screen } from '@testing-library/react';
import { getProductColumns } from '@pages/admin/products/columns';
import BaseTable from '@components/UI/tables/BaseTable';
import { Product } from '@graphql/graphql';
import { getFixtureProducts } from '../../../../lib/test/fixtures/products';

describe('Modal', () => {
  it('Renders modal', async () => {
    const onClickDelete = jest.fn();
    const columns = getProductColumns(onClickDelete);
    render(
      <BaseTable<Product> columns={columns} data={getFixtureProducts()} />
    );
    const table = await screen.findByRole('table');
    expect(table).not.toBeNull();
  });
});

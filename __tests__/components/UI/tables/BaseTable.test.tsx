import { render, screen } from '@testing-library/react';
import { getFixtureProducts } from '@lib/test/fixtures/products';
import BaseTable from '@components/UI/tables/BaseTable';
import { getProductColumns } from '@containers/Products/columns';
import { Product } from '@graphql/graphql';

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

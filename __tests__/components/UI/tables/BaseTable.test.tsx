import { render, screen } from '@testing-library/react';
import { getFixtureProducts } from '@lib/test/fixtures/products';
import { getProductColumns } from '@containers/Products/getProductColumns';
import BaseTable from '@components/UI/tables/BaseTable';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';

describe('BaseTable', () => {
  it('Renders table', async () => {
    const onClickDelete = jest.fn();
    const columns = getProductColumns(onClickDelete);
    render(
      <BaseTable<ProductEntityFragment>
        columns={columns}
        data={getFixtureProducts()}
      />
    );
    const table = await screen.findByRole('table');
    expect(table).not.toBeNull();
  });
});

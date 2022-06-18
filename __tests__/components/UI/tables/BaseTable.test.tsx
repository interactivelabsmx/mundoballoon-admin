import { screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { getFixtureProducts } from '@lib/test/fixtures/products';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import { getProductColumns } from '@containers/Products/getProductColumns';
import BaseTable, { IExpandableRow } from '@components/UI/tables/BaseTable';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';

describe('BaseTable', () => {
  it('Renders table', async () => {
    const onClickDelete = vi.fn();
    const columns = getProductColumns(onClickDelete);
    const expandableComponent = ({
      row,
    }: IExpandableRow<ProductEntityFragment>) => (
      <tr>
        <td colSpan={5}>{row.original.productId}</td>
      </tr>
    );
    renderWithGraphql(
      <BaseTable<ProductEntityFragment>
        columns={columns}
        data={getFixtureProducts()}
        options={{
          isExpandable: true,
          expandableComponent,
        }}
      />
    );
    const table = await screen.findByRole('table');
    expect(table).not.toBeNull();
  });
});

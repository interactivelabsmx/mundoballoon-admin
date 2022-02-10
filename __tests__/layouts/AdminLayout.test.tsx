import { screen } from '@testing-library/react';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import AdminLayout from '@layouts/AdminLayout';

describe('AdminLayout', () => {
  it('should render AdminLayout with content', async () => {
    await renderWithGraphql(
      <AdminLayout>
        <div>Content</div>
      </AdminLayout>
    );
    expect(screen.getByText('Content')).not.toBeNull();
  });
});

/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    silent: true,
    globals: true,
    mockReset: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      lines: 70,
      statements: 70,
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './components'),
      '@containers': path.resolve(__dirname, './containers'),
      '@graphql': path.resolve(__dirname, './graphql'),
      '@hooks': path.resolve(__dirname, './hooks'),
      '@layouts': path.resolve(__dirname, './layouts'),
      '@lib': path.resolve(__dirname, './lib'),
      '@pages': path.resolve(__dirname, './pages'),
      '@providers': path.resolve(__dirname, './providers'),
      'firebase-admin': path.resolve(
        __dirname,
        './/node_modules/firebase-admin/lib'
      ),
    },
  },
});

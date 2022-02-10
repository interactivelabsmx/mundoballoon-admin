import nextJest from 'next/jest';

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({ dir: './' });

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@containers/(.*)$': '<rootDir>/containers/$1',
    '^@graphql/(.*)$': '<rootDir>/graphql/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@layouts/(.*)$': '<rootDir>/layouts/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^firebase-admin/(.*)$': '<rootDir>/node_modules/firebase-admin/lib/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!jest.config.ts',
    '!pages/_app.tsx',
    '!pages/_document.tsx',
  ],
  coverageThreshold: {
    global: {
      lines: 70,
      branches: 70,
      functions: 70,
      statements: 70,
    },
  },
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

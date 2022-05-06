import nextJest from 'next/jest';

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({ dir: './' });

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
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
    // Increase to 70 on coverage
    global: {
      lines: 65,
      statements: 65,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

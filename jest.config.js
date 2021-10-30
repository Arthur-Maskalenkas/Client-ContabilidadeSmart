module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/**',
    '!src/styles/**',
    '!src/types/**',
    '!src/components/**/mock.ts',
    '!src/graphql/**',
    '!src/utils/apollo.ts',
    '!src/utils/apolloCache.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}

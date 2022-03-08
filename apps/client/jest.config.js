module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', './next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/pages/*.ts(x)?'],
  setupFilesAfterEnv: ['@testing-library/jest-dom']
};

module.exports = {
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  testRegex: 'tests/.*\\.test\\.(t|j)sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.[jt]sx?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internal/test-setup.ts'],
};

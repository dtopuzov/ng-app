import type { Config } from 'jest';

const config: Config = {
  testTimeout: 30000,
  testEnvironment: 'node',
  testMatch: ['<rootDir>/e2e*/**/*.spec.ts'],
  transform: {
    "^.+\\.ts?$": ["ts-jest", {
      tsconfig: '<rootDir>/tsconfig.e2e.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      isolatedModules: true,
    }]
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  sandboxInjectedGlobals: ['Math'],
};

export default config;

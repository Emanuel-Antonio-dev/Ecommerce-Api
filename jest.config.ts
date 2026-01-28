/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  //collectCoverage: true,
  //coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "ts-jest",

  transformIgnorePatterns: [ "node_modules/(?!@faker-js/faker)" ],
  testMatch: [
    "**/__tests__/**/*.?([mc])[jt]s?(x)",
    "**/?(*.)+(spec|test).?([mc])[jt]s?(x)"
  ],
  setupFilesAfterEnv: ["<rootDir>/tests-setup/global.ts"],
  testTimeout: 30000,
};

export default config;

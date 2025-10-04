import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { isolatedModules: true }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(nanoid)/)', // <--- para Jest conseguir ler ESM
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // opcional: para imports absolutos
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // opcional
};

export default config;

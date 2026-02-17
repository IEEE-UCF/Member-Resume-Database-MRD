/** @jest-config-loader ts-node */
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './', // loads next.config + .env.* :contentReference[oaicite:1]{index=1}
})

const config: Config = {
  clearMocks: true,

  // If you leave this true, coverage will run every time (slower).
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // If you use TS path aliases like "@/..."
  // moduleNameMapper: {
  //   '^@/components/(.*)$': '<rootDir>/components/$1',
  // },
}

export default createJestConfig(config)

import type { Config } from "jest";

const config: Config = {
  rootDir: "./",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/fileMock.ts",
    "^@/(.*)$": "<rootDir>/src/$1", // @ 경로 인식하기 위해 추가
    "^@features/(.*)$": "<rootDir>/src/features/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!(your-module)/)"],
};

export default config;

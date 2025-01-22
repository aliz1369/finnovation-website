// jest.config.mjs
import { defaults } from "jest-config";

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

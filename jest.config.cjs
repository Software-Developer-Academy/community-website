module.exports = {
    transform: {
      "^.+\\.(t|j)sx?$": "babel-jest",
    },
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    moduleNameMapper: {
      // Handle module aliases (if you have them in your project)
      "^@components/(.*)$": "<rootDir>/src/components/$1",
      "^@pages/(.*)$": "<rootDir>/src/pages/$1",
      "^@assets/(.*)$": "<rootDir>/src/__mocks__/fileMock.js",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
  };
  
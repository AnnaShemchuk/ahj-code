module.exports = {
  testEnvironment: 'jsdom',
  resetMocks: true,
  clearMocks: true,
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  modulePathIgnorePatterns: [
    '<rootDir>/anim/',
    '<rootDir>/dnd/',
    '<rootDir>/env/',
    '<rootDir>/env2/'
  ]
};
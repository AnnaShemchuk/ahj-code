module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js'],
  transform: {},
  resetMocks: true,
  clearMocks: true,
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/anim/',
    '<rootDir>/dnd/',
    '<rootDir>/env/',
    '<rootDir>/env2/'
  ]
};
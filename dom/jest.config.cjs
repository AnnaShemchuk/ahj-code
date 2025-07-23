module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/test/__mocks__/styleMock.js'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
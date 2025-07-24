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
        '<rootDir>/env2/',
        '<rootDir>/http/backend',
        '<rootDir>/rxjs/backend',
        '<rootDir>/workers/webpack-web-worker',
        '<rootDir>/workers/webpack-service-worker'
    ],

    haste: {
        throwOnModuleCollision: false
    },

    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/'
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/__mocks__/'
    ]
};
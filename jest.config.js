module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageThreshold: {
        global: {
            functions: 100,
            branches: 90,
            lines: 90,
            statements: 90,
        },
    },
};

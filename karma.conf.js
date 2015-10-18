module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'assets/scripts/build.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'tests/unit/*.test.js'
        ],
        reporters: ['mocha'],
        mochaReporter: {
            colors: {
                success: 'green',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true
    })
};
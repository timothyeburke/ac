module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'assets/scripts/**/*.js',
            'tests/**/*.test.js'
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
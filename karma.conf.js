"use strict";
module.exports = function (config) {
    config.set({
        plugins: [
            require.resolve('@open-wc/karma-esm'),
            'karma-*',
        ],
        frameworks: ['esm', 'mocha', 'chai'],
        files: [
            {
                pattern: 'packages/**/*.test.js',
                type: 'module'
            }
        ],
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        concurrency: Infinity,
        esm: {
            nodeResolve: true,
            compatibility: 'auto',
            preserveSymlinks: true,
        },
        client: {
            mocha: {
                reporter: 'html',
                ui: 'tdd',
            },
        },
    });
};
//# sourceMappingURL=karma.conf.js.map
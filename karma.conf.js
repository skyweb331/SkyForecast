// Karma configuration
// Generated on Fri Feb 10 2017 22:00:12 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','chai'],


    // list of files / patterns to load in the browser
    files: [
        'client/bower_components/jquery/dist/jquery.js',
        'client/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'client/bower_components/angular/angular.js',        
        'client/bower_components/angular-mocks/angular-mocks.js',
        'client/lib/*.js',
        'client/bower_components/angular-route/angular-route.js',
        'client/bower_components/Chart.js/Chart.js',        
        'client/bower_components/angular-chart.js/angular-chart.js',
        'client/main.js',
        'client/services/*.js',
        'client/controllers/*.js',
        'client/directives/*.js',        
        'client/views/.*.html',        
        'test/*.mocha.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // 'clients/controllers/*.js' : ['coverage'],
        // 'clients/directives/*.js': ['coverage'],
        // 'clients/lib/*.js': ['coverage'],
        // 'clients/services/*.js': ['coverage'],
        // 'clients/views/.*.html': ['coverage'],
        // 'clients/main.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

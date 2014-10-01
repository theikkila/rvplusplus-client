'use strict';

module.exports = function(config) {

  config.set({
    basePath : '..', //!\\ Ignored through gulp-karma //!\\

    files : [ //!\\ Ignored through gulp-karma //!\\
    'app/bower_components/jquery/dist/jquery.js',
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-mocks/angular-mocks.js',
    'app/bower_components/angular-ui-router/release/angular-ui-router.js',
    'app/bower_components/angular-animate/angular-animate.js',
    'app/bower_components/angular-cookies/angular-cookies.js',
    'app/bower_components/angular-touch/angular-touch.js',
    'app/bower_components/angular-sanitize/angular-sanitize.js',
    'app/bower_components/lodash/dist/lodash.compat.js',
    'app/bower_components/restangular/dist/restangular.js',
    'app/bower_components/typeahead.js/dist/typeahead.bundle.js',
    'app/bower_components/angular-typeahead/angular-typeahead.js',
    'app/bower_components/angular-xeditable/dist/js/xeditable.js',
    'app/bower_components/ng-tags-input/ng-tags-input.min.js',
    'app/scripts/rvplusplus.js',
    'app/scripts/**/*.js',
    'test/unit/**/*.js'
    ],

    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
    'karma-phantomjs-launcher',
    'karma-jasmine'
    ]
});

};

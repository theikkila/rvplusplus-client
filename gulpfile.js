'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


gulp.task('lint', function () {
  return gulp.src('./src/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('ci', ['lint', 'test', 'protractor', 'build']);

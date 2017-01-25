'use strict';
const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', function() {
  gulp
    .src(['./src/**/*.test.js'])
    .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['test']);
});

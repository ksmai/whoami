'use strict';
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const minifyHTML = require('gulp-minify-html');
const cleanCSS = require('gulp-clean-css');

gulp.task('test', function() {
  gulp
    .src(['src/**/*.test.js'])
    .pipe(mocha());
});

gulp.task('browserify', function() {
  gulp
    .src('src/client/app.js')
    .pipe(browserify())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('bin'));
});

gulp.task('mincss', function() {
  gulp
    .src(['src/client/**/*.css'])
    .pipe(cleanCSS())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('bin'));
});

gulp.task('minhtml', function() {
  gulp
    .src(['src/client/**/*.html'])
    .pipe(minifyHTML())
    .pipe(gulp.dest('bin'));
});

gulp.task('build', ['minhtml', 'mincss', 'browserify']);

gulp.task('watch', ['build'], function() {
  gulp.watch('src/**/*.js', ['test']);
  gulp.watch('src/client/**/*.html', ['minhtml']);
  gulp.watch('src/client/**/*.css', ['mincss']);
  gulp.watch('src/client/**/*.js', ['browserify']);
});

var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');
var replace = require('gulp-replace');
var compilerOptions = require('../babel-options');

var tsProject = ts.createProject({
    noExternalResolve: true,
    noLib: true,
    typescript: require('typescript'),
    target: 'es6'
});

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(replace(/Object.defineProperty\(([^,]*), "name", { value: "\1", configurable: true }\);/, ''))
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(replace(/undefined.__decorate/, '__decorate'))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + paths.root }))
    .pipe(gulp.dest(paths.output + 'dist'));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output + 'dist'));
});

gulp.task('copy-jspm', function() {
  return gulp.src(['jspm_packages/**/*.*'])
    .pipe(gulp.dest('wwwroot/jspm_packages'));
});

gulp.task('copy-config', function() {
  return gulp.src('config.js')
    .pipe(gulp.dest('wwwroot/'));
});

gulp.task('copy-scripts', ['copy-jspm', 'copy-config']);

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'copy-scripts'],
    callback
  );
});

var gulp = require('gulp');
var bower = require('main-bower-files');
var filter = require('gulp-filter');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var rename = require('gulp-rename');
var debug = require('gulp-debug');
var paths = require('../paths');

gulp.task('bower-clean', function() {
  return gulp.src([paths.output + 'vendor/**/*.*'])
    .pipe(vinylPaths(del));
});


gulp.task('bower-js', ['bower-clean'], function() {
	return gulp.src(bower())
		.pipe(filter('*.js'))
		.pipe(gulp.dest(paths.output + 'vendor/js'));
});

gulp.task('bower-css', ['bower-clean'], function() {
	return gulp.src(bower())
		.pipe(filter('*.css'))
		.pipe(gulp.dest(paths.output + 'vendor/css'));
});

gulp.task('bower-fonts', ['bower-clean'], function() {
	return gulp.src(bower())
		.pipe(filter(['*.otf','*.eot','*.svg','*.ttf','*.woff','*.woff2']))
		.pipe(gulp.dest(paths.output + 'vendor/fonts'));
});

gulp.task('bower', ['bower-js', 'bower-css', 'bower-fonts']);
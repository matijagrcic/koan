var gulp = require('gulp');
var less = require('gulp-less');
var paths = require('../paths');

gulp.task('less', function() {
	return gulp.src(paths.less)
		.pipe(less())
		.pipe(gulp.dest('wwwroot/css'));
});
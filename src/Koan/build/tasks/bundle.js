var gulp = require('gulp');
var rjs = require('gulp-requirejs');

// name=aurelia-bundle-manifest baseUrl=. mainConfigFile=main-config.js out=aurelia-bundle.js optimize=none

gulp.task('bundle', function() {
    return rjs({
        baseUrl: '.',
        out: 'aurelia-bundle.js',
        name: 'aurelia-bundle-manifest',
        mainConfigFile: 'main-config.js',
        optimize: 'none'
    })
    .pipe(gulp.dest('vendor/js'));
})
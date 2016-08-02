var gulp = require('gulp');

var paths = {
    styles: ['src/**/*.css']
}

gulp.task('default', ['css']);

gulp.task('watch', function() {
    gulp.watch(paths.styles, ['css']);
});

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(postcss([
            require('stylelint'),
            require('postcss-import'),
            require('cssnano')
        ]))
        .pipe(gulp.dest('.'))
});

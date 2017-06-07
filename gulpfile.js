var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('app-sass', function () {
    gulp.src('app/scss/main.scss')
       .pipe(sass())
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
       .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['app-sass']);
});

gulp.task('build', ['app-sass'], function() {

});

gulp.task('default', ['watch', 'build']);
gulp.task('clear', function () {
    return cache.clearAll();
})
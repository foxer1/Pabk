var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs');  
    imagemin = require('gulp-imagemin'), 
    pngquant = require('imagemin-pngquant');

gulp.task('app-sass', function () {
    gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('libs-scripts', function() {
    return gulp.src([ 
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/foundation-sites/dist/js/foundation.min.js'

        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
});

gulp.task('app-scripts', function() {
    return gulp.src([ 
        'app/js/script.js'

        ])
        .pipe(concat('app.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
});

gulp.task('img', function() {
    return gulp.src('app/imgs/**/*') // Берем все изображения из app
        .pipe(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/imgs')); // Выгружаем на продакшен
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['app-sass']);
});

gulp.task('build', ['app-sass', 'libs-scripts', 'app-scripts', 'img'], function () {
    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch', 'build']);
gulp.task('clear', function () {
    return cache.clearAll();
})
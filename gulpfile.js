var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify');

gulp.task('scss', function() {
    return gulp.src('assets/scss/app.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(minifycss())
        .pipe(gulp.dest('/assets/css'))
        .pipe(notify({ message: 'SCSS compiled' }));
});

gulp.task('watch', function() {

    gulp.watch('assets/scss/*.scss', ['scss']);
});

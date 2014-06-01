var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var less = require('gulp-less');
var util = require('gulp-util');

gulp.task('js', function() {
  gulp.src(['_assets/js/**/*.js'])
    .pipe(concat('valefor.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('less', function() {
  gulp.src('_assets/less/main.less')
    .pipe(less().on('error', util.log))
    .pipe(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true }))
    .pipe(concat('valefor.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('_assets/less/**/*.less', ['less']);
  gulp.watch('_assets/js/**/*.js', ['js']);
});

gulp.task('build', ['js', 'less']);
gulp.task('default', ['build', 'watch']);
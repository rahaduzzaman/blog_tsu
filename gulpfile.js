'use strict';

var gulp 			= require('gulp'),
	browserSync 	= require('browser-sync').create(),
	sass 			= require('gulp-sass'),
	uglify 			= require('gulp-uglify'),
	plumber 		= require('gulp-plumber'),
	watch 			= require('gulp-watch');

gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
  .pipe(sass({
	  outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());
});

// js uglify/minify
gulp.task('js', function () {
	return gulp.src('js/*js')
	.pipe(plumber())
	.pipe(gulp.dest('./js'))
	.pipe(uglify())
	.pipe(gulp.dest('min/js'));
});

// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
	browserSync.reload();
	done();
});

// Static Server + watching scss/js/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch("./scss/*.scss", ['sass']);
	gulp.watch("js/*.js", ['js-watch']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
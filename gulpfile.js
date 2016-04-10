var gulp      = require('gulp'),
    uglify    = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');


//uglify js scripts
gulp.task('js', function(){
  gulp.src('js/bootstrap.js')
      .pipe(uglify())
      .pipe(gulp.dest('dest'))
});

//uglify style sheets
gulp.task('css', function(){
  gulp.src('./css/home.css')
  .pipe(uglifycss())
  .pipe(gulp.dest('./dest'));
});

//Watch file changes
gulp.task('watch',function(){
  gulp.watch('./css/home.css',['css']);
});

//default
//gulp.task('default',['js','css']);

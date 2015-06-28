var gulp = require('gulp');
var wrap = require('gulp-wrap');
var directoryMap = require("gulp-directory-map");


gulp.task('layout', function () {
  return gulp.src(['app/**/*.html', '!app/layout.html'])
  .pipe(wrap({src: 'app/layout.html'}))
  .pipe(gulp.dest('dist'));
});

gulp.task('directory', function () {
  gulp.src(['app/**/*.html','!app/layout.html'])
  .pipe(directoryMap({
    filename: 'urls.json'
  }))
  .pipe(gulp.dest('dist'));

});

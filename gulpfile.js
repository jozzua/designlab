var gulp = require('gulp');
var wrap = require('gulp-wrap');
var directoryMap = require("gulp-directory-map");
var browserSync = require('browser-sync');
var reload      = browserSync.reload;



//Add to layout
gulp.task('layout', function () {
  return gulp.src(['app/**/*.html', '!app/layout.html'])
  .pipe(wrap({src: 'app/layout.html'}))
  .pipe(gulp.dest('dist'));
});

//Make Directory Listing

gulp.task('directory', function () {
  gulp.src(['app/**/*.html','!app/layout.html'])
  .pipe(directoryMap({
    filename: 'urls.json'
  }))
  .pipe(gulp.dest('dist'));

});


// Static server.
gulp.task('browser-sync', function() {  
  browserSync({
    server: {
      baseDir: './'
    }
  });
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task('default', ['browser-sync','directory']); 

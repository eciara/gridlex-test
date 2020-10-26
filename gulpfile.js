var gulp = require('gulp'); 

var sass = require('gulp-sass');
var browserSync = require("browser-sync").create();


gulp.task('sass', function () {
   // function style() {
        return gulp.src("./src/scss/**/*.scss")
       .pipe(
            sass({
                outputStyle: "compressed",
            })
         )
        .pipe(gulp.dest("./assets/css/"))
        .pipe(browserSync.stream())
   // };
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  //gulp.watch('./assets/js/*.js', gulp.series('scripts'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on("change", browserSync.reload);
});

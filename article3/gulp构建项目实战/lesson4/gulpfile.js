/**
 * Created by wdd on 2017/5/17.
 */
var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('default',function(){
    return gulp.src('./src/main.js')
        .pipe(browserify())
        .pipe(gulp.dest('./dest'))
})
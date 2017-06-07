/**
 * Created by wdd on 2017/5/17.
 */
var gulp  = require('gulp');
var uglify = require('gulp-uglify');
var browserofy = require('gulp-browserify');

gulp.task('default',function(){
    gulp.src('./src/index.js')
        .pipe(browserofy())
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
})

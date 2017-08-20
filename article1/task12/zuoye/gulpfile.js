var gulp = require('gulp');
var cssmin = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('cssmin', function () {
    gulp.src('assets/style/*.css')
        .pipe(concat('main.css'))
        .pipe(cssmin({
            advanced: false,
            compatibility: 'ie7',
            keepBreaks: true,
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyjs', function() {
    return gulp.src(['assets/js/jquery-3.2.1.min.js','assets/js/app.js'])
        .pipe(concat('main.js'))        
        .pipe(gulp.dest('dist'));  
});

gulp.task('default',function(){
    gulp.start('cssmin','minifyjs');
})


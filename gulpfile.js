var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('css',function (){
	return	gulp.src('./lib/css/*.css')
	.pipe(concat('index.css'))
  .pipe(cleanCSS({keepSpecialComments:0}))
	.pipe(gulp.dest('./public/css/'))
})

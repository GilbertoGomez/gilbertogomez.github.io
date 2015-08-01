/*
* Dependencias
*/

var gulp = require('gulp')
var browserify = require('browserify') 
var jadeify = require('jadeify')
var babelify = require('babelify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var conc = require('gulp-concat')
var uglify = require('gulp-uglify')
var comp = require('gulp-compressor')
var mini = require('gulp-minify-css')


//tares de gulp  compilar y tarea concatena

gulp.task('compilar', function (){
	return browserify({ 
		entries:'lib/index.js',
		transform: [ babelify]
	})
	.bundle()
	.pipe(source('index.js'))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest('./public/js/'))
})

gulp.task('css',function (){
	gulp.src('./lib/*.css')
	.pipe(conc('index.css'))
	.pipe(mini())
	.pipe(gulp.dest('./public/css/'))
})

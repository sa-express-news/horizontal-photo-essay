'use strict';

const gulp = require('gulp');
const archieml = require('gulp-archieml');

gulp.task('default', function(){
	return gulp.src('./src/*.aml')
		.pipe(archieml())
		.pipe(gulp.dest('./src/'));
});
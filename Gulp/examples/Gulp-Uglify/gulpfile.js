var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build'))
});
gulp.task('default', ['compress']);
var gulp = require('gulp'),
	watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("this is gulp task");
});

gulp.task('html', function(){
	console.log("this is html task");
});

gulp.task('styles', function(){
	console.log("this is style task");
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});


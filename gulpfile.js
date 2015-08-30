var gulp = require("gulp"),
	del = require('del'),
	logger = require("gulp-util"),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

gulp.task("jade", function() {
	gulp.src("source/jade/*.jade")
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest("dist/"))
		.pipe(browserSync.stream());
});

gulp.task("sass", function() {
	gulp.src('source/sass/**/*.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(autoprefixer())
    	.pipe(gulp.dest('dist/css/'))
    	.pipe(browserSync.stream());
});

gulp.task("js", function() {
	gulp.src('source/js/**/*.js')
		.pipe(gulp.dest('dist/js/'))
		.pipe(browserSync.stream());
});

gulp.task("img", function() {
	gulp.src('source/img/**/*.png')
		.pipe(gulp.dest('dist/img/'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ["jade", "img", "sass", "js"], function() {
    browserSync.init({
        server: "dist/"
    });

    gulp.watch("source/jade/**/*.jade", ['jade']);
    gulp.watch("source/sass/**/*.scss", ['sass']);
	gulp.watch("source/js/**/*.js", ['js']);
	gulp.watch("source/img/**/*.png", ['img']);
});

gulp.task('clean', del.bind(null, ['dist/*'], {dot: true}));

gulp.task("default", ["clean", "serve"], function() {
	logger.log("Gulp - I am taking care!! Have fun :)");
});
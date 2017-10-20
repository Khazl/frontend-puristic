const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');

gulp.task('sass', function() {
	gulp.src('styles/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('public/css'))
});

gulp.task('js', () =>
	gulp.src('script/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('public/js'))
);

gulp.task('default', function() {
	gulp.start('sass');
	gulp.start('js');
	gulp.watch('styles/**/*.scss', ['sass']);
	gulp.watch('script/**/*.js', ['js']);
});

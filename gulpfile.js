const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

function css() {
	return gulp.src('styles/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
}

function js() {
    return gulp.src('script/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('public/js'));
}

function server() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
}

function watch() {
    gulp.watch('script/**/*.js', gulp.parallel('js'));
    gulp.watch('styles/**/*.scss', gulp.parallel('css'));
}

exports.css = css;
exports.js = js;
exports.server = server;
exports.watch = watch;

exports.build = gulp.parallel(
    css,
    js
);

exports.default = gulp.series(
    gulp.parallel(
        css,
        js
    ),
    gulp.parallel(
        watch,
        server
    )
);

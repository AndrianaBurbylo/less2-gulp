const gulp = require('gulp');
const { series, parallel } = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const html = () => {
    return gulp.src('src/pug/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('build'))
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: './build'
        },
        notify: false
    });
    browserSync.watch('build', browserSync.reload)
}

const watch = () => {
    gulp.watch('src/*.html', html);
}

exports.default = series(
    html,
    parallel(server, watch)
);
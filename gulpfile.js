// const gulp = require('gulp');
import gulp from 'gulp'
// const electron = require('electron-connect').server.create();
import electron_connect from 'electron-connect'
gulp.task('watch:electron', function () {
    const electron = electron_connect.server.create()
    electron.start();
    gulp.watch(['./electron/**/*.ts'], electron.restart);
    gulp.watch(['./**/*.{js,css,vue},./index.html'], electron.reload);
});
const {src, dest } = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const removeEmptyLines = require('gulp-remove-empty-lines');
const clipEmptyFiles = require('gulp-clip-empty-files');


const  config  = require('../config').sass;

function sassCompile() {
    return src(config.sassFiles)
        .pipe(sourceMaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        // .pipe(removeEmptyLines({removeComments: true, removeSpaces: true}))
        .pipe(clipEmptyFiles())
        .pipe(dest(config.dest))
        .pipe(sourceMaps.write())
        .pipe(concat(config.destName))
        .pipe(dest(config.dest));
}

module.exports = {
    sassCompile,
}
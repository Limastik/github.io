const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

function testTask(done) {
    console.log('hello test');
    done();
}
exports.test = testTask;

function minifyCSS() {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
}
exports.minifyCSS = minifyCSS;

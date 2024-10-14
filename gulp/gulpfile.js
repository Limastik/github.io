const gulp = require('gulp');

function testTask(done) {
    console.log('hello test');
    done();
}

exports.test = testTask;

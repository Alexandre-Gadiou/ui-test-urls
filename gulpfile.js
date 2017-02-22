var shell = require('gulp-shell');
var gulp = require('gulp');
var backstopjs = require('backstopjs');
var gutil = require('gulp-util');
var color = require('gulp-color');

var backstopConfig = {
  config: './backstop-config.js'
}

gulp.task('backstop_reference', () => backstopjs('reference',backstopConfig));

gulp.task('backstop_test', function () {
  return backstopjs('test',backstopConfig).then(() => {
    gutil.log(color("SUCCESS no regressions", 'GREEN'));
  }).catch(function (error) {
  	throw color("Visual regressions found",'RED');
  });
});

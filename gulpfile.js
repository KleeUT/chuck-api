var gulp = require('gulp');
var webpack = require('webpack-stream');
var mocha = require('gulp-mocha');
var gultil = require('gulp-util');
//
// gulp.task('default', function(){
//     return gulp.src('web/src/Main.jsx').
//       pipe(webpack(require('./webpack.config.js'))).
//       pipe(gulp.dest('./'));
// });

gulp.task('default',['build','test']);
gulp.task('build', () => {
  return gulp.src('web/src/Main.jsx').
    pipe(webpack(require('./webpack.config.js'))).
    pipe(gulp.dest('./'));
});

gulp.task('log', () =>{
  console.log('log')
})

gulp.task('watch-client', () =>{
  gulp.watch("./web/src/*", ['build']);
});

gulp.task('watch-test', () =>{
  gulp.watch(["./**/test/*"], ['test']);
});

gulp.task('test', function() {
  return gulp.src(['web/test/*.js','server/test/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec'
      // globals: {
        // should: require('should')
      // }
    }));
});

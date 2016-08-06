var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function(){
    return gulp.src('web/src/Main.jsx').
      pipe(webpack(require('./webpack.config.js'))).
      pipe(gulp.dest('./'));
});

gulp.task('watch', () =>{
  gulp.watch(["./web/**/*"], () => {
    webpack(require('./webpack.config.js'));
  });
});

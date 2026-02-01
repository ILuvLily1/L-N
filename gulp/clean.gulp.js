const gulp = require('gulp');
const { rimraf } = require('rimraf');

const { paths, baseDir, version } = require('./utils.js');

const rm = (paths) =>
  Promise.all(
    (Array.isArray(paths) ? paths : [paths]).map((p) => rimraf(p))
  );

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Clean
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('clean', () =>
  rm([
    `${baseDir}/${paths.style.dest}/**/*.*`,
    `${baseDir}/${paths.script.dest}/**/*.*`,
    `${baseDir}/**/*.html`,
  ])
);
gulp.task('clean:build', () => rm(paths.dir.prod));
gulp.task('clean:live', () => rm(`live/${version}`));

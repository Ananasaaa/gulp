const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  html: {
    src: 'src/*.html',
    dest: 'dist/'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

function html() {
  return gulp.src(paths.html.src)
      .pipe(gulp.dest(paths.html.dest))
      .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch('*.html').on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.watch = watch;


exports.default = gulp.series(
  gulp.parallel(styles, scripts, html),
  watch
);

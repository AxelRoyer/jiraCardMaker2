var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var dependencies = ['react'];
var paths = {};

paths.styles = [
  './styles/*.scss'
];

gulp.task('sass-build', function () {
  gulp.src(paths.styles)
      .pipe(sass({
        includePaths: require('node-bourbon').includePaths
      }))
      .on("error", errorAlert)
      .pipe(gulp.dest('./styles'));
});

gulp.task('sass-watch', function () {
  gulp.src(paths.styles)
      .on("error", errorAlert)
      .pipe(gulp.dest('./styles'));
  gulp.watch(paths.styles, ['sass-build'])
});

var browserifyTask = function (options) {
  // Our app bundler
	var appBundler = browserify({
		entries: [options.src], // Only need initial file, browserify finds the rest
   	transform: [reactify], // We want to convert JSX to normal javascript
		debug: options.development, // Gives us sourcemapping
		cache: {}, packageCache: {}, fullPaths: options.development // Requirement of watchify
	});

	// We set our dependencies as externals on our app bundler when developing
	(options.development ? dependencies : []).forEach(function (dep) {
		appBundler.external(dep);
	});

  // The rebundle process
  var rebundle = function () {
    var start = Date.now();
    console.log('Building APP bundle');
    appBundler.bundle()
      .on('error', gutil.log)
      .pipe(source('main.js'))
      .pipe(gulpif(!options.development, streamify(uglify())))
      .pipe(gulp.dest(options.dest))
      .pipe(gulpif(options.development, livereload()))
      .pipe(notify(function () {
        console.log('APP bundle built in ' + (Date.now() - start) + 'ms');
      }));
  };

  // Fire up Watchify when developing
  if (options.development) {
    appBundler = watchify(appBundler);
    appBundler.on('update', rebundle);
  }

  rebundle();

    // Remove react-addons when deploying, as it is only for testing
    if (!options.development) {
      dependencies.splice(dependencies.indexOf('react-addons'), 1);
    }

    var vendorsBundler = browserify({
      debug: true,
      require: dependencies
    });

    // Run the vendor bundle
    var start = new Date();
    console.log('Building VENDORS bundle');
    vendorsBundler.bundle()
      .on('error', gutil.log)
      .pipe(source('vendors.js'))
      .pipe(gulpif(!options.development, streamify(uglify())))
      .pipe(gulp.dest(options.dest))
      .pipe(notify(function () {
        console.log('VENDORS bundle built in ' + (Date.now() - start) + 'ms');
      }));
};

gulp.task('default', function () {
  browserifyTask({
    development: true,
    src: './app/main.js',
    dest: './build'
  });
});

function errorAlert (error) {
  console.log(error.message);
}

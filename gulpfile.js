const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('test', () => {
	browserSync({
		notify: false,
		port: 9000,
		ui: false,
		server: {
			baseDir: 'test',
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	});

	gulp.watch(['test/index.html', 'test/**/*.js']).on('change', reload);
});
/* jshint node:true */
'use strict';

module.exports = function ( grunt ) {
	require( 'load-grunt-tasks' )( grunt );

	grunt.initConfig({
		concurrent: {
			tumblr: {
				tasks: ['watch:tumblr_sass'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		watch: {
			sass: {
				files: ['static/src/scss/**/*.scss'],
				tasks: ['sass:dev'],
				options: {
					spawn: false
				}
			}
		},
		sass: {
			dev: {
				options: {
					sourceMap: true,
					outputStyle: 'expanded'
				},
				files: {
					'static/build/css/main.css': 'static/src/scss/main.scss'
				}
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					// For dist we have to copy to the internal folder before copying to the actual
					// static dir with python manage.py collectstatic
					'static/build/css/main.css': 'static/src/scss/main.scss'
				}
			}
		},
		exec: {
			dist: 'python manage.py collectstatic --noinput'
		}
	});

	grunt.registerTask( 'build-prod', ['sass:dist', 'exec:dist'] );
};
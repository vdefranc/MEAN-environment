module.exports = function(grunt) {
	//load all grunt tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	grunt.initConfig({
		// get package info
		pkg: grunt.file.readJSON( 'package.json' ),
		// JS TASKS
	    // check all js files for errors
		jshint: {
		  all: ['public/src/js/**/*.js'],
		  options: {
		  	expr: true
		  }
	    },
		// take all the js files and minify them into app.min.js
		uglify: {
		  build: {
		    files: {
		      'public/dist/js/ethnicity.min.js': 'public/dist/js/<%= pkg.name %>.js'
		    }
		  }
		},

		// CSS TASKS
		// process the sass file to style.css
		sass: {
			dist: {
				files: {
					'public/dist/css/<%= pkg.name %>.css' : 'public/src/css/concat/*.scss'
				}
			}
		},
		cssmin: {
	      build: {
	        files: {
	          'public/dist/css/<%= pkg.name %>.min.css': 'public/dist/css/<%= pkg.name %>.css'
	        }
	      }
	    },
	    // CONCAT
		// piece together sass files in prep to process
		concat: {
			css: {
				src: 'public/src/css/*.scss',
				dest: 'public/src/css/concat/<%= pkg.name %>.scss'
			},
			js: {
				src: 'public/src/js/**/*.js',
				dest: 'public/dist/js/<%= pkg.name %>.js'
			}
		},
	    // NIFTYNESS
	    // watch css and js files and process the above tasks
	    watch: {
	      css: {
	        files: ['public/src/css/**/*.scss'],
	        tasks: ['concat', 'sass', 'cssmin']
	      },
	      js: {
	        files: ['public/src/js/**/*.js'],
	        tasks: ['jshint', 'uglify']
	      }
	    },
	    // watch node server for changes
	    nodemon: {
		  dev: {
			script: 'server.js'
		  }
		},
	});

	grunt.registerTask('build-styles', ['concat:css', 'sass', 'cssmin']);
	grunt.registerTask('build-script', ['jshint', 'concat:js', 'uglify']);

	grunt.registerTask('default', ['build-styles', 'build-script', 'watch']);
};
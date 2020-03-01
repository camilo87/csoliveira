module.exports = function(grunt) {

	const sass = require('node-sass');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		sass: {
			options: {
				implementation: sass
			},
			dist: {
				files: {
					'css/style_port.css': 'sass/style_port.scss'
				}
			}
		},

		watch: {
			files: ['js/*', 'sass/*'],
			tasks: ['sass']
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass']);
	grunt.registerTask('w', ['watch']);

};
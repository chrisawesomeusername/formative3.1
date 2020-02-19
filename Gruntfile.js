module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    }, // end uglify
    watch: {
      all: {
        files: ['sass/style.scss','css/style.css','js/script.js'],
        tasks: ['sass','csslint','jshint']
      },
    },// end watch
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/style.css': 'sass/style.scss'       // 'destination': 'source'
        }
      }
    }, //end sass
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/style.css']
      },
      lax: {
        options: {
          import: false,
          'order-alphabetical' :false
        },
        src: ['css/style.css']
      }
    }, //end css lint
    jshint: {
      all: ['Gruntfile.js', 'js/script.js']
    } // end jshint
  });

  // Load the plugin that provides the task(s).
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // grunt.loadNpmTasks('grunt-w3c-html-validation');

  // Default task(s).
  grunt.registerTask('ugly', ['uglify']);//To run in terminal: grunt ugly
  grunt.registerTask('default', ['watch']);//To run in terminal: grunt

};

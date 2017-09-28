module.exports = function(grunt) {
    
      grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'sass/style.sass'
                }
            }
        },

        imagemin: {
            dynamic: {
                files:[{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },

        jshint: {
            all: ['js/*.js']
        }
      });

      grunt.loadNpmTasks('grunt-sass');
      grunt.loadNpmTasks('grunt-contrib-imagemin');
      grunt.loadNpmTasks('grunt-contrib-jshint');
  
      grunt.registerTask('default', ['sass', 'imagemin', 'jshint']);
    };
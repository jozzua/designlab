module.exports = function(grunt) {
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    watch :{
      assemble: {
                  files: [ 'app/content/blog/*.hbs',
                           'app/content/pages/*.hbs',
                           'app/layout/default/*.hbs',
                           'app/partials/*.hbs'
                           ],
                  tasks:['assemble']
                },
       livereload :{
        options: {
          livereload:'<%= connect.options.livereload %>'
        },
        files: [
          './dist/*.html'
        ]
       },
    },

    assemble: {
      options: {
        layoutdir: 'app/layouts',
        flatten: true,
        layout: 'default.hbs',
        partials: 'app/partials/*.hbs'
      },
      page: {
        files: {
          'dist/': ['app/content/pages/*.hbs']
        }
      },
      blog: {
        files: {
          'dist/': ['app/content/blog/*.hbs']
        }
      }
    },

    connect: {
      options: {
        port: 8800,
        hostname: 'localhost',
        livereload: 35728
        },
      livereload: {
        options: {
          open: true,
          base: './dist'
        }
      }
    },

    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
    }


  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['connect:livereload','assemble','watch','imagemin'])

}

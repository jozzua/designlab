module.exports = function(grunt) {
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json')
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect:livereload','assemble','watch'])

}

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      browser: ['\**\*.js']
    }
});
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);
};

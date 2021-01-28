module.exports = function(grunt){

  grunt.initConfig({
    concat: {
      dist: {
        src: ['js/main1.js', 'js/main2.js'],
        dest: 'dist/js/built.js',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};

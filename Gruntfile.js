var pkg = require('./package.json');

module.exports = function (grunt) {

  /**
   * Initialize config.
   */

  grunt.initConfig({
    shipit: {
      options: {
        // Project will be build in this directory.
        workspace: '/tmp/hello-world-workspace',

        // Project will be deployed in this directory.
        deployTo: '/var/Websites/tntnet',

        // Repository url.
        repositoryUrl: pkg.repository.url,

        // This files will not be transfered.
        ignores: ['.git'],

        // Number of release to keep (for rollback).
        keepReleases: 3
      },

    // Staging environment.
      staging: {
        servers: ['tntga.me']
      }
    }
  });

  /**
   * Load shipit task.
   */

  grunt.loadNpmTasks('grunt-shipit');

  /**
   * Start project on the remote server.
  */
grunt.registerTask('start', function () {
var done = this.async();
var current = grunt.config('shipit.options.deployTo') + '/current';
grunt.shipit.remote('cd ' + current + ' && forever stop --killSignal=SIGTERM bin/www && forever start bin/www', done);
});


 grunt.shipit.on('published', function () {
    grunt.task.run(['start']);
  });
};

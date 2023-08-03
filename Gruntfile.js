module.exports = function(grunt) {
    var config = require('./.screeps.json')
    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.initConfig({
        screeps: {
            options: {
                email: config.email,
                token: config.token,
                branch: config.branch,
                ptr: config.ptr
            },
            dist: {
                src: ['bin/*.js']
            }
        },

        clean: {
            'dist': ['bin']
        },

        copy: {
            screeps: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: '**',
                    dest: 'bin/',
                    filter: 'isFile',
                    rename: function (dest, src) {
                        // Change the path name utilize underscores for folders
                        return dest + src.replace(/\//g, '_');
                    }
                }],
            }
        }
    });

    grunt.registerTask('default',  ['clean', 'copy:screeps', 'screeps']);
}

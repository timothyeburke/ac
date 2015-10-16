module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/style/style.css': 'assets/style/style.scss'
                }
            }
        },
        jsbeautifier: {
            default: {
                src: [
                    'Gruntfile.js',
                    'assets/scripts/**/*.js.es6'
                ],
                options: {
                    js: {
                        fileTypes: ['.js.es6']
                    }
                }
            },
            verify: {
                src: [
                    'Gruntfile.js',
                    'assets/scripts/**/*.js.es6'
                ],
                options: {
                    mode: 'VERIFY_ONLY',
                    js: {
                        fileTypes: ['.js.es6']
                    }
                }
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js'
            ],
            es6: {
                options: {
                    jshintrc: '.jshintrc.es6'
                },
                files: {
                    src: [
                        'assets/scripts/*.js.es6'
                    ]
                }
            }
        },
        traceur: {
            options: {
                experimental: true,
                modules: 'inline'
            },
            custom: {
                files: [{
                    expand: true,
                    cwd: 'assets/scripts',
                    src: [
                        '**/*.js.es6'
                    ],
                    dest: 'assets/scripts',
                    ext: '.js'
                }]
            }
        },
        concat: {
            options: {
                separator: ';\n'
            },
            dist: {
                src: [
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-route/angular-route.min.js',
                    'node_modules/angular-sanitize/angular-sanitize.min.js',
                    'node_modules/angular-local-storage/dist/angular-local-storage.js',
                    'node_modules/lodash/index.js',
                    'assets/scripts/app.js',
                    'assets/scripts/**/*.js'
                ],
                dest: 'assets/scripts/build.js'
            }
        },
        clean: {
            js: [
                'assets/scripts/**/*.js'
            ]
        },
        uglify: {
            my_target: {
                options: {
                    mangle: false
                },
                files: {
                    'assets/scripts/build.min.js': ['assets/scripts/build.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['clean', 'sass', 'jsbeautifier', 'jshint', 'traceur', 'concat', 'uglify']);
};

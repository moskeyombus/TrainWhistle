/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    styleProcessorOptions: {
      processors: [
        {
            type: 'node-sass',
            sourcemaps: true,  // enables sourcemaps
            options: {}
        },
        {
          type: 'postcss',
          plugins: [
            {
              module: require('autoprefixer'),
              options: {
                browsers: [
                  'last 2 versions'
                ]
              }
            }
          ]
        }
      ],
      extension: 'scss'
    },
    intlTelInput: {
      includeUtilsScript: true
    }
  });

  // Polyfill for closest in JS
  app.import('bower_components/closest/closest.js');

  // Date input shim
  app.import('bower_components/better-dom/dist/better-dom.js');
  app.import('bower_components/better-i18n-plugin/dist/better-i18n-plugin.js');
  app.import('bower_components/better-time-element/dist/better-time-element.js');
  app.import('bower_components/better-emmet-plugin/dist/better-emmet-plugin.js');
  app.import('bower_components/better-dateinput-polyfill/dist/better-dateinput-polyfill.js');

  return app.toTree();
};

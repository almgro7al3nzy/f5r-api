'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'public/assets/icons/camera.png',
          outputFileName: 'camera-',
          convertTo: 'png',
          sizes: [32, 192, 280, 512],
        },
      ],
    },
    dotEnv: {
      clientAllowedKeys: ['GOOGLE_API_KEY'],
    },
    'asset-cache': {
      include: ['assets/**/*', 'ember-welcome-page/images/*'],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};

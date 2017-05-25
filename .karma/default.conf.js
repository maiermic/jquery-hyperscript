const path = require('path')

module.exports = function(config) {
  return {
    basePath: path.resolve(__dirname, '..'),
    frameworks: [
      'jquery-2.2.4',
      'jasmine'
    ],
    files: [
      'bundle.js',
      'test/*.js'
    ],
    reporters: [
      'dots'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    captureTimeout: 120000,
    browsers: ['Chrome'],
    singleRun: true
  };
};

const path = require('path')
const defaultConfig = require('./default.conf')

module.exports = function(config) {
  var karmaConfig = defaultConfig(config);
  Object.assign(karmaConfig, {
    browsers: ['Chrome']
  })
  config.set(karmaConfig);
};

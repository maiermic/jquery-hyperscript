const path = require('path')
const defaultConfig = require('./default.conf')

module.exports = function(config) {
  const isContinuousIntegration = process.env.CONTINUOUS_INTEGRATION === 'true'
  console.log('isContinuousIntegration', isContinuousIntegration)

  // Browsers to run on Sauce Labs
  var customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: '48.0',
      platform: 'Linux'
    },
    'SL_Firefox': {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '50.0',
      platform: 'Windows 10'
    },
    'SL_InternetExplorer': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11.0',
      platform: 'Windows 7'
    },
    'SL_Safari': {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.11',
      version: '10.0'
    }
  };

  var karmaConfig = defaultConfig(config);
  Object.assign(karmaConfig, {
    browserNoActivityTimeout: 3 * 60 * 1000,
    sauceLabs: {
      testName: 'Karma and Sauce Labs demo',
      username: process.env.SAUCEUSER,
      accessKey: process.env.ACCESSSAUCE,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      startConnect: !isContinuousIntegration,
    },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
  })
  karmaConfig.reporters.push('saucelabs')
  config.set(karmaConfig);
};
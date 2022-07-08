const { defineConfig } = require("cypress");

module.exports = defineConfig({
  eyesTestConcurrency: 5,
  appliConfFile: {
    apiKey: process.env.APPLITOOLS_API_KEY,
    batch: {
      name: 'cypress 10 test'
    },
    appName: 'cypress 10',
    testName: 'cypress 10 test'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

require('@applitools/eyes-cypress')(module);


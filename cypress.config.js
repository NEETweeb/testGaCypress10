const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 25000,
  requestTimeout: 25000,
  responseTimeout: 30000,
  viewportWidth: 1280,
  viewportHeight: 720,
 // numTestsKeptInMemory: 0,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    baseUrl: 'https://google.com',
    experimentalSessionAndOrigin: true,
    specPattern: ["cypress/e2e/**/*.feature"],
    excludeSpecPattern: ['*.js', '*.md'],
  },
});

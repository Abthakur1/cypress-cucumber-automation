const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
async function setupNodeEvents(on, config) {
  // implement node event listeners here

await addCucumberPreprocessorPlugin(on, config);

on("file:preprocessor", preprocessor(config));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern:'cypress/e2e/bdd/*.feature'
    
  },

});

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.airwallex.com/app',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    env: {
      AIRWALLEX_USER: '',
      AIRWALLEX_PASS: ''
    }
    // reporter: 'cypress-testrail-simple',
    // reporterOptions: {
    //   host: 'https://evangelos.testrail.io/',
    //   username: 'vagkavo@gmail.com',
    //   password: 'ymipb5KUbDi8fhoGQUBO-K5YcBiRzNoO3e.ckR0tJ',
    //   projectId: 1,  // adjust to your actual TestRail project ID
    //   suiteId: 1,    // adjust to your actual TestRail suite ID
    //   runName: "Cypress Automation Run - Login",
    // }
  }
})
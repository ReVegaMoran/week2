const { defineConfig } = require("cypress");
const csvtojson = require('csvtojson');
const path = require('path');
const fs = require('fs');

module.exports = defineConfig({
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    //retries: 1,
    e2e: {
        baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
        specPattern: "./cypress/e2e/pages/*.spec.js",
        setupNodeEvents(on, config) {
            on('task', {
                parseCsv({ filePath }) {
                    const absolutePath = path.resolve('cypress/fixtures', filePath)
                    if (!fs.existsSync(absolutePath)) {
                        throw new Error(`El archivo no existe: ${absolutePath}`)
                    }
                    return csvtojson().fromFile(absolutePath)
                }
            });
        },
    },
});
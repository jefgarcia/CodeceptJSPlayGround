exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'firefox'
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    bootstrap: null,
    mocha: {},
    name: 'CodeceptJSPlayGround'
  }
}
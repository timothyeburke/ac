exports.config = {
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine2',
  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.addReporter(new SpecReporter({displayStacktrace: true}));
  },
  seleniumServerJar: 'tests/selenium/selenium-server-standalone-2.40.0.jar',
  specs: ['tests/e2e/*.e2e.test.js']
};
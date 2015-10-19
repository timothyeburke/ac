exports.config = {
  baseUrl: 'http://localhost:8000/',
  framework: 'jasmine2',
  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.addReporter(new SpecReporter({displayStacktrace: true}));
  },
  jasmineNodeOpts: {
   print: function() {}
  },
  specs: ['tests/e2e/*.e2e.test.js']
};
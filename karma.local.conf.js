module.exports = function(config) {
  config.set({
    files: [
       'https://code.jquery.com/jquery-3.1.1.min.js',
  'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js',
  'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular-mocks.js',
       './bin/app.js',
       './test.js',
        {pattern: './bin/templates/*.html', included: false, served: true}
    ],
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    port: 9876,
    proxies: {
      '/templates/': 'http://localhost:9876/base/bin/templates/'
    }
  });
}

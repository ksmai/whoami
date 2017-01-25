(function() {
  var controllers = require('./controllers');
  var directives = require('./directives');
  var app = angular.module('whoami', ['ng']);
  for(let ctrl of controllers) {
    app.controller(ctrl.name, ctrl.cb);
  }
  for(let dir of directives) {
    app.directive(dir.name, dir.cb);
  }
})();

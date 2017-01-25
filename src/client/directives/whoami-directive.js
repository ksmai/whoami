module.exports = {
  name: 'whoami',
  cb: function() {
    return {
      controller: 'whoamiController',
      templateUrl: 'templates/whoami-template.html'
    };
  }
}

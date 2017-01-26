describe('<whoami> directive', function() {
  var injector, scope, element, httpBackend;

  beforeEach(function() {
    injector = angular.injector(['whoami', 'ngMockE2E']);
    injector.invoke(function($rootScope, $compile, $httpBackend) {
      scope = $rootScope.$new();
      $httpBackend.whenGET(/.*\/templates\/.*/i).passThrough();
      httpBackend = $httpBackend;
      element = $compile('<whoami></whoami>')(scope);
      scope.$apply();
    });
  });

  it('compiles with tables', function(done) {
    httpBackend.expectGET('/api/whoami').respond({
      client: {
        ip: '255.255.255.0',
        port: '65536'
      },
      headers: {
        'user-agent': 'ngMock 1.6.1',
        'myheader': 'myvalue'
      }
    });

    scope.$on('whoamiController', function() {
      httpBackend.flush();
      assert.lengthOf( element.find('h1'), 2 );
      assert.lengthOf( element.find('table'), 2 );
      assert.lengthOf( element.find('tr'), 4 );
      assert.isOk( element.text().match(/65536/) );
      done();
    });
  });
});

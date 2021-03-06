'use strict';
const superagent = require('superagent');
const express = require('express');
const api = require('./api');
const assert = require('chai').assert;

const port = 3000;
const baseURL = `http://localhost:${port}/`;

describe('whoami api', function() {
  var server;

  before(function() {
    const app = express();
    app.use(api);
    server = app.listen(port);
  });

  after(function() {
    server.close();
  });

  it('responds with HTTP headers from the request', function(done) {
       superagent
         .get(baseURL + 'whoami')
         .set('user-agent', 'Chrome/42.42')
         .end(function(err, res) {
           const result = JSON.parse(res.text);
           assert.ifError(err, 'Server responds');
           assert.property(result, 'headers');
           assert.property(result.headers, 'user-agent');
           assert.property(result, 'client');
           assert.property(result.client, 'ip');
           assert.property(result.client, 'port');
           assert.equal(result.headers['user-agent'], 'Chrome/42.42');
           done();
         });
     }
  );

});

'use strict';
const express = require('express');
const api = require('./api');

const app = express();
app.use('/api/', api);

module.exports = function() {
  return app;
}

module.exports.listen = function(port = 3000) {
  app.listen(port);
  console.log(`Listening on port ${port}`);
};

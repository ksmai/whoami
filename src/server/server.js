'use strict';
const express = require('express');
const path = require('path');
const api = require('./api');

const app = express();
app.use(express.static(path.join(__dirname, '../../bin')));
app.use(express.static(path.join(__dirname, '../../asset')));
app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../bin')
  });
});
app.use('/api/', api);

module.exports = function() {
  return app;
}

module.exports.listen = function(port = 3000) {
  app.listen(port);
  console.log(`Listening on port ${port}`);
};

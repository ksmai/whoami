'use strict';
const express = require('express');
const api = express.Router();

api.get('/whoami', function(req, res) {
  res.json({
    headers: req.headers,
    client: {
      ip: req.connection.remoteAddress,
      port: req.connection.remotePort
    }
  });
});

api.use(function(err, req, res, next) {
  res.status(500).end();
});

module.exports = api;

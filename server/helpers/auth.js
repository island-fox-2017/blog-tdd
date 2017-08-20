'use strict'

const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function(req, res, next) {
  const token = req.headers.token
  if(token) {
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      decoded ? next() : res.send('Something wrong with token');
    });
  } else {
    res.send("Please Login First!")
  }
};

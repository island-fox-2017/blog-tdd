'use strict'

const User = require('../models/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

const saltRounds = 9;

let register = (req, res) => {
  let salt = bcrypt.genSaltSync(saltRounds);
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, salt),
    salt: salt
  })
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let login = (req, res) => {
  User.findOne({ username: req.body.username })
  .then(resp => {
    if(bcrypt.compareSync(req.body.password, resp.password)) {
      const token = jwt.sign({
        id: resp._id,
        username: resp.username
      }, process.env.SECRET);
      req.headers.token = token;
      req.headers.id = resp._id;
      let data = {
        token: token,
        id: resp._id,
        username: resp.username
      }
      res.json(data);
    } else {
      res.send("Wrong Password!")
    }
  })
  .catch(err => {
    res.send(err + "  / User Not Found!")
  })
}

let findAll = (req, res) => {
  User.find({})
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

module.exports = {
  register,
  login,
  findAll
};

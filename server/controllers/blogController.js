'use strict'

const model = require('../models/Blog');

let test = function(req, res) {
  let blog = {
    title: 'vlogger',
    article: 'kaesang anak presiden adalah youtuber'
  }
  res.send(blog);
}

let findAll = (req, res) => {
  model.find({})
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let findOne = (req, res) => {
  model.findOne({ _id: req.params.id })
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let createOne = (req, res) => {
  model.create({
    title: req.body.title,
    article: req.body.article,
  })
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let deleteOne = (req, res) => {
  model.deleteOne({ _id: req.params.id })
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let updateOne = (req, res) => {
  model.findOne({ _id: req.params.id })
  .then(resp1 => {

    model.updateOne({ _id: req.params.id }, {
      $set: {
        title: req.body.title || resp1.title,
        article: req.body.article || resp1.article
      }
    })
    .then(resp2 => res.send(resp2))
    .catch(err => res.send(err))

  })
  .catch(err => res.send(err))
}

module.exports = {
  test,
  findAll,
  findOne,
  createOne,
  deleteOne,
  updateOne
};

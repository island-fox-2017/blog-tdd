'use strict'
const Article = require('../models/Article')

function createArticle(req,res){
  Article.create({
    judul: req.body.judul,
    isi: req.body.isi,
    author: req.body.author
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function getAllArticle(req,res){
  Article.find()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function getOneArticle(req,res){
  Article.findById(req.params.id)
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function deleteArticle(req,res){
  Article.deleteOne({
    _id: req.params.id
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function updateArticle(req,res){
  Article.where({
    _id:req.params.id
  })
  .update({
    judul:req.body.judul
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  createArticle,
  getAllArticle,
  getOneArticle,
  deleteArticle,
  updateArticle
};

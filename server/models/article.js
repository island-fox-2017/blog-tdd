const mongoose = require('mongoose');

var Schema = mongoose.Schema

var articleSchema = new Schema({
  author: String,
  title: String,
  content: String
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article;

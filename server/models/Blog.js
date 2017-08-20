'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema(
{
  title: {
    type: String,
    required: [true, 'Title can\'t be blank']
  },
  article: String
}, {
  timestamps: true
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

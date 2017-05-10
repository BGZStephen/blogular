const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const ArticleSchema = mongoose.Schema({
  articleId: {
    type: Number,
    unique: true
  },
  author: { // username
    type: String,
  },
  categories: Array,
  comments: Array,
  createdAt: {
    type: Date,
    required: true
  },
  createdBy: { // userId
    type: Number,
    unique: true,
  },
  description: {
    type: String,
  },
  title: {
    type: String,
  }
});

const Article = module.exports = mongoose.model('Article', ArticleSchema)

module.exports.create = function(articleObject, callback){
  articleObject.save(callback)
}

module.exports.deleteAll = function(articleObject, callback){
  Article.find({}, callback).remove().exec()
}

module.exports.deleteOne = function(articleObject, callback){
  Article.find({articleId: articleObject.articleId}, callback).remove().exec()
}

module.exports.getAll = function(articleObject, callback){
  Article.find(articleObject, callback)
}

module.exports.getOne = function(articleObject, callback){
  Article.findOne({articleId: articleObject.articleId}, callback)
}

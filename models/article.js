const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const ArticleSchema = mongoose.Schema({
  articleId: {
    type: Number,
    index: true,
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
  Article.findOne({articleId: articleObject.articleId}).remove().exec()
  callback(null, "success")
}

module.exports.getAll = function(articleObject, callback){
  Article.find(articleObject, callback)
}

module.exports.getByAuthor = function(articleObject, callback){
  Article.find({author: articleObject.author}, callback)
}

module.exports.getByUser = function(articleObject, callback){
  Article.find({createdBy: articleObject.createdBy}, callback)
}

module.exports.getOne = function(articleObject, callback){
  Article.findOne({articleId: articleObject.articleId}, callback)
}

module.exports.update = function(articleObject, callback){
  Article.update({articleId: articleObject.articleId}, articleObject, callback)
}

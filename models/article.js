const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const ArticleSchema = mongoose.Schema({
  articleId: {
    type: Number,
    unique: true
  }
  categories: Array,
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  title: {
    type: String,
  },
  userId: {
    type: Number,
    unique: true,
  }
});

const Article = module.exports = mongoose.model('Article', ArticleSchema)

module.exports.create = function(categoryObject, callback){
  categoryObject.save(callback)
}

module.exports.deleteAll = function(categoryObject, callback){
  Category.find({}, callback).remove().exec()
}

module.exports.deleteOne = function(categoryObject, callback){
  Category.find({name: categoryObject.name}, callback).remove().exec()
}

module.exports.getAll = function(categoryObject, callback){
  Category.find(categoryObject, callback)
}

module.exports.getOne = function(categoryObject, callback){
  Category.findOne({name: categoryObject.name}, callback)
}

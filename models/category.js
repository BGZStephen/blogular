const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const CategorySchema = mongoose.Schema({
  articles: Array,
  categoryId: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    unique: true
  }
});

const Category = module.exports = mongoose.model('Category', CategorySchema)

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
  Category.findOne(categoryObject, callback)
}

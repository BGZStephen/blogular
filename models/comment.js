const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const CommentSchema = mongoose.Schema({
  articleId: {
    type: Number
  }
  author: { // username
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  commentId: {
    type: Number,
    required: true
    unique: true
  },
  createdAt: {
    type: Date,
    required: true
  }
  createdBy: {
    type: Number, // userId
    required: true
  }
});

const Comment = module.exports = mongoose.model('Comment', CommentSchema)

module.exports.create = function(commentObject, callback){
  commentObject.save(callback)
}

module.exports.deleteAll = function(commentObject, callback){
  Comment.find({}, callback).remove().exec()
}

module.exports.deleteOne = function(commentObject, callback){
  Comment.find({commentId: commentObject.commentId}, callback).remove().exec()
}

module.exports.getAll = function(commentObject, callback){
  Comment.find(commentObject, callback)
}

module.exports.getOne = function(commentObject, callback){
  Comment.findOne({commentId: commentObject.commentId}, callback)
}

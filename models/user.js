const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  userId: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  username: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.create = function(userObject, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(userObject.password, salt, function(err, hash) {
        userObject.password = hash
        userObject.save(callback)
    });
  });
}

module.exports.deleteAll = function(userObject, callback){
  User.find(userObject, callback).remove().exec()
}

module.exports.deleteOne = function(userObject, callback){
  User.findOne(userObject).remove().exec()
  callback()
}

module.exports.getAll = function(userObject, callback){
  User.find(userObject, callback)
}

module.exports.getByEmail = function(userObject, callback){
  User.findOne(userObject, callback)
}

module.exports.getById = function(userObject, callback) {
  User.findOne(userObject, callback)
}

module.exports.getByUsername = function(userObject, callback) {
  User.findOne(userObject, callback)
}

module.exports.comparePassword = function(userObject, callback) {
  bcrypt.compare(userObject.queryPassword, userObject.storedHash, function(err, isMatch) {
    if(err) throw(err)
    callback(null, isMatch)
  });
}

module.exports.updatePassword = function(userObject, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(userObject.newPassword, salt, function(err, hash) {
        userObject.password = hash
        User.update({userId: userObject.userId},{password: userObject.password}, callback)
    });
  });
}

module.exports.updateUser = function(userObject, callback) {
  User.update({'userId': userObject.userId}, userObject, callback)
}

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Counter = require('../models/counter');

// admin update password
router.post("/adminupdatepassword", (req, res, next) => {

  // newUser object to submit
  let userObject = {
    userId: req.body.userId,
    newPassword: req.body.password
  }

  User.updatePassword(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: "Password Updated"})
    } else {
      res.json({success: false, message: "Failed to update password"})
    }
  })
})

// authanticate
router.post("/authenticate", (req, res, next) => {

  // newUser object to submit
  let userObject = {
    email: req.body.email,
    queryPassword: req.body.password,
  }

  User.getOne({email: userObject.email}, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      userObject.storedHash = callback.password
      console.log(userObject.storedHash)
      User.comparePassword(userObject, (err, isMatch) => {
        if(err) throw(err)
        if(isMatch) {

          const token = jwt.sign(callback, config.secret, {
            expiresIn: 604800 // 1 week
          });

          res.json({
            success: true,
            message: "Authentication successful",
            token: "JWT" + token,
            user: {
              email: callback.email,
              role: callback.role,
              userId: callback.userId,
              username: callback.username
            }
          })
        } else {
          res.json({success: false, message: "Incorrect email or password"})
        }
      })
    } else {
      res.json({success: false, message: "Incorrect email or password"})
    }
  })
})

router.post("/create", (req, res, next) => {

  // newUser object to submit
  let newUser = new User({
    articles: [],
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    role: "blogger",
    username: req.body.username
  })

  newUser.createdAt = new Date().getTime()

  // define counter to be called for assigning unique userID's
  let counter = {
    name: "userId"
  }

  Counter.getOne(counter, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      newUser.userId = callback.count // assign unique id to new user
      User.create(newUser, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          let newCounterValue = newUser.userId + 1
          Counter.increment({name: "userId", count: newCounterValue}, (err, callback) => {
            if(err) throw(err)
            if(callback) {
              res.json({success: true, message: "User creation successful"})
            }
          })
        } else {
          res.json({success: true, message: "User creation failed"})
        }
      })
    } else {
      res.json({success: false, message: "Failed to get counter"})
    }
  })
})

router.post("/deleteAll", (req, res, next) => {
  let userObject = {}

  User.deleteAll(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback == []) {
      res.json({success: true, message: "All users deleted"})
    } else {
      res.json({success: false, message: "Something went wrong, users not deleted"})
    }
  })
})

router.post("/deleteOne", (req, res, next) => {
  let userObject = {
    userId: req.body.userId
  }

  User.getOne({userId: userObject.userId}, (err, callback) => {
    if(err) throw(err)
    if(callback != null) {
      User.deleteOne(userObject, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          res.json({success: true, message: "User deleted"})
        } else {
          res.json({success: false, message: "Something went wrong, user not deleted"})
        }
      })
    } else {
      res.json({success: false, message: "UserID not found"})
    }
  })
})

// get by email

router.post("/getAll", (req, res, next) => {
  let userObject = {}

  User.getAll(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json(callback)
    } else {
      res.json({success: false, message: "Users not found (no users?)"})
    }
  })
})

// get by email

router.post("/getByEmail", (req, res, next) => {
  let userObject = {
    email: req.body.email
  }

  User.getOne({email: userObject.email}, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Email not found"})
    }
  })
})

router.post("/getById", (req, res, next) => {
  let userObject = {
    userId: req.body.userId
  }

  User.getOne({userId: userObject.userId}, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json(callback)
    } else {
      res.json({success: false, message: "User not found"})
    }
  })
})

// get by username

router.post("/getByUsername", (req, res, next) => {
  let userObject = {
    username: req.body.username
  }

  User.getOne({username: userObject.username}, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Username not found"})
    }
  })
})

// register
router.post("/register", (req, res, next) => {

  // newUser object to submit
  let newUser = new User({
    articles: [],
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    role: "blogger",
    username: req.body.username
  })

  newUser.createdAt = new Date().getTime()

  // define counter to be called for assigning unique userID's
  let counter = {
    name: "userId"
  }

  // assign a unique ID provided by the counter
  Counter.getOne(counter, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      newUser.userId = callback.count // assign unique id to new user
      // check if username already exists
      User.getOne({username: newUser.username}, (err, callback) => {
        if(err) throw(err)
        if(callback != null) {
          res.json({success: false, message: "Username already exists"})
        } else {
          // check if email already exists
          User.getOne({email: newUser.email}, (err, callback) => {
            if(err) throw(err)
            if(callback !=null) {
              res.json({success: false, message: "Email already exists"})
            } else {
              // send newUser object to registerUser function (check Models), password will be hashed, user stored on MongoDB and callback returned if successful
              User.create(newUser, (err, callback) => {
                if(err) throw(err)
                if(callback) {
                  // set the new counter value for incrementing
                  let newCounterValue = newUser.userId + 1
                  Counter.increment({name: "userId", count: newCounterValue}, (err, callback) => {
                    if(err) throw(err)
                    if(callback) {
                      res.json({success: true, message: "Registration successful"})
                    }
                  })
                } else {
                  res.json({success: true, message: "Registration failed"})
                }
              })
            }
          })
        }
      })
    } else {
      res.json({success: false, message: "Unable to retrieve counter"})
    }
  })
})

// update
router.post("/update", (req, res, next) => {

  // newUser object to submit
  let userObject = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
    username: req.body.username,
    userId: req.body.userId
  }

  // check username to make sure it doesn't already exist except in the case of it being the updaters current username
  User.getOne({username: userObject.username}, (err, callback) => {
    if(err) throw(err)
    if(callback == null || callback.userId == userObject.userId) {
      User.getOne({email: userObject.email}, (err, callback) => {
        if(err) throw(err)
        if(callback == null || callback.userId == userObject.userId) {
          User.updateUser(userObject, (err, callback) => {
            if(err) throw(err)
            if(callback) {
              res.json({success: true, message: "User update successful"})
            } else {
              res.json({success: false, message: "Something went wrong, update failed"})
            }
          })
        } else {
          res.json({success: false, message: "Email already exists"})
        }
      })
    } else {
      res.json({success: false, message: "Username already exists"})
    }
  })
})

// update password
router.post("/updatepassword", (req, res, next) => {

  // newUser object to submit
  let userObject = {
    userId: req.body.userId,
    queryPassword: req.body.currentPassword,
    newPassword: req.body.newPassword
  }

  User.getOne({userId: userObject.userId}, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      userObject.storedHash = callback.password
      console.log(userObject.storedHash)
      User.comparePassword(userObject, (err, isMatch) => {
        if(err) throw(err)
        if(isMatch) {
          User.updatePassword(userObject, (err, callback) => {
            if(err) throw(err)
            if(callback) {
              res.json({success: true, message: "Password Updated"})
            } else {
              res.json({success: false, message: "Failed to update password"})
            }
          })
        } else {
          res.json({success: false, message: "Passwords didn't match"})
        }
      })
    } else {
      res.json({success: false, message: "Failed to retrieve user"})
    }
  })
})

module.exports = router;

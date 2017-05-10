const mongoose = require('mongoose');
const config = require('../config/database')
const User = require('../models/user');
const Counter = require('../models/counter');

let testUsers = [
  {
    articles: [],
    email: "stephen@test.com",
    firstName: "Stephen",
    lastName: "Wright",
    password: "password",
    role: "admin",
    username: "stephen"
  }, {
    articles: [],
    email: "lydia@test.com",
    firstName: "Lydia",
    lastName: "Wright",
    password: "password",
    role: "blogger",
    username: "lydia"
  }, {
    articles: [],
    email: "reuben@test.com",
    firstName: "Reuben",
    lastName: "Wright",
    password: "password",
    role: "blogger",
    username: "reuben"
  }, {
    articles: [],
    email: "isaac@test.com",
    firstName: "Isaac",
    lastName: "Wright",
    password: "password",
    role: "blogger",
    username: "isaac"
  }, {
    articles: [],
    email: "snivvy@test.com",
    firstName: "Snivvy",
    lastName: "Wright",
    password: "password",
    role: "blogger",
    username: "snivvy"
  },
]

// connect to mongodb
mongoose.connect(config.database)

// once connected
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database)

  let i = 0;

  let addUsers = () => {
    if(i < testUsers.length) {
      // define counter to be called for assigning unique userID's
      let counter = {
        name: "userId"
      }

      // create new User based on iteration of test users
      let newUser = new User(testUsers[i])

      // assign a unique ID provided by the counter
      Counter.getOne(counter, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          newUser.userId = callback.count // assign unique id to new user
          // check if username already exists
          User.getByUsername({username: newUser.username}, (err, callback) => {
            if(err) throw(err)
            if(callback != null) {
              console.log("Username already exists")
            } else {
              // check if email already exists
              User.getByEmail({email: newUser.email}, (err, callback) => {
                if(err) throw(err)
                if(callback !=null) {
                  console.log("Email already exists")
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
                          console.log("User: " + newUser.username + " creation successful")
                          i = i + 1
                          addUsers()
                        }
                      })
                    } else {
                      console.log("User creation failed")
                    }
                  })
                }
              })
            }
          })
        } else {
          console.log("Unable to retrieve counter")
        }
      })
    } else {
      console.log("User setup finished")
      mongoose.disconnect()
    }
  }
  addUsers()
})

// in case of error
mongoose.connection.on('error', (err) => {
  console.log('Error: ' + err)
})

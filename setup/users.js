const mongoose = require('mongoose');
const config = require('../config/database')
const User = require('../models/user');

let testUsers = [
  {
    articles: [],
    email: "stephen@test.com",
    firstName: "Stephen",
    lastName: "Wright",
    password: "password",
    role: "admin",
    username: "stephen",
    userId: 0
  }, {
    articles: [],
    email: "lydia@test.com",
    firstName: "Lydia",
    lastName: "Wright",
    password: "password",
    role: "blogger",
    username: "lydia",
    userId: 1
  }, {
    articles: [],
    email: "reuben@test.com",
    firstName: "Reuben",
    lastName: "Wright",
    password: "password",
    role: "blogger",
    username: "reuben",
    userId: 2
  }, {
    articles: [],
    email: "isaac@test.com",
    firstName: "Isaac",
    lastName: "Wright",
    password: "password",
    role: "blogger",
    username: "isaac",
    userId: 3
  }, {
    articles: [],
    email: "snivvy@test.com",
    firstName: "Snivvy",
    lastName: "Wright",
    password: "password",
    role: "blogger",
    username: "snivvy",
    userId: 4
  },
]

// connect to mongodb
mongoose.connect(config.database)

// once connected
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database)
  for(let i = 0; i < testUsers.length; i++) {
    let newUser = new User(testUsers[i])
    newUser.createdAt = new Date().getTime()
    User.create(newUser, (err, callback) => {
      if(err) throw(err)
      if(callback) {
        console.log("User Success")
      }
    })
  }
})

// in case of error
mongoose.connection.on('error', (err) => {
  console.log('Error: ' + err)
})

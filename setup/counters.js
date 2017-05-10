const mongoose = require('mongoose');
const config = require('../config/database')
const Counter = require('../models/counter');

let testCounters = [
  {
    name: "userId",
    count: 0
  }, {
    name: "categoryId",
    count: 0
  }, {
    name: "articleId",
    count: 0
  }, {
    name: "commentId",
    count: 0
  },
]

// connect to mongodb
mongoose.connect(config.database)

// once connected
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database)
  for(let i = 0; i < testCounters.length; i++) {
    let newCounter = new Counter(testCounters[i])
    Counter.create(newCounter, (err, callback) => {
      if(err) throw(err)
      if(callback) {
        console.log("Counter Success")
      } else {
        console.log("Failed")
      }
    })
  }
})

// in case of error
mongoose.connection.on('error', (err) => {
  console.log('Error: ' + err)
})

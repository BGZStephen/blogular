const mongoose = require('mongoose');
const config = require('../config/database')
const Category = require('../models/category');
const Counter = require('../models/counter');

let testCategories = [
  {
    articles: [],
    name: "Economics"
  }, {
    articles: [],
    name: "Parenting"
  }, {
    articles: [],
    name: "Career"
  }, {
    articles: [],
    name: "Political"
  }, {
    articles: [],
    name: "Finance"
  }, {
    articles: [],
    name: "Pets"
  }, {
    articles: [],
    name: "Gaming"
  },
]

// connect to mongodb
mongoose.connect(config.database)

// once connected
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database)

  let i = 0;

  let addCategories = () => {
    if(i < testCategories.length) {
      // define counter to be called for assigning unique userID's
      let counter = {
        name: "categoryId"
      }

      // create new User based on iteration of test users
      let newCategory = new Category(testCategories[i])

      // assign a unique ID provided by the counter
      Counter.getOne(counter, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          newCategory.categoryId = callback.count // assign unique id to new user
          // check if username already exists
          Category.getOne({name: newCategory.name}, (err, callback) => {
            if(err) throw(err)
            if(callback != null) {
              console.log("Category already exists")
            } else {
              Category.create(newCategory, (err, callback) => {
                if(err) throw(err)
                if(callback) {
                  let newCounterValue = newCategory.categoryId + 1
                  Counter.increment({name: "categoryId", count: newCounterValue}, (err, callback) => {
                    if(err) throw(err)
                    if(callback) {
                      console.log("Category: " + newCategory.name + " created successfully")
                      i = i + 1
                      addCategories()
                    }
                  })
                } else {
                  console.log("Category creation failed")
                }
              })
            }
          })
        } else {
          console.log("Unable to retrieve counter")
        }
      })
    } else {
      console.log("Category setup finished")
      mongoose.disconnect()
    }
  }
  addCategories()
})

// in case of error
mongoose.connection.on('error', (err) => {
  console.log('Error: ' + err)
})

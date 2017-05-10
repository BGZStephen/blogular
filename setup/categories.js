const mongoose = require('mongoose');
const config = require('../config/database')
const Category = require('../models/category');

let testCategories = [
  {
    categoryId: 0,
    name: "Economics"
  }, {
    categoryId: 1,
    name: "Parenting"
  }, {
    categoryId: 2,
    name: "Career"
  }, {
    categoryId: 3,
    name: "Political"
  }, {
    categoryId: 4,
    name: "Finance"
  }, {
    categoryId: 5,
    name: "Pets"
  }, {
    categoryId: 6,
    name: "Gaming"
  },
]

// connect to mongodb
mongoose.connect(config.database)

// once connected
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database)
  for(let i = 0; i < testCategories.length; i++) {
    let newCategory = new Category(testCategories[i])
    Category.create(newCategory, (err, callback) => {
      if(err) throw(err)
      if(callback) {
        console.log("Category Success")
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

const mongoose = require('mongoose');
const config = require('../config/database')
const Category = require('../models/category');

let testCategories = [
  {
    articles: [],
    categoryId: 0,
    name: "Economics"
  }, {
    articles: [],
    categoryId: 1,
    name: "Parenting"
  }, {
    articles: [],
    categoryId: 2,
    name: "Career"
  }, {
    articles: [],
    categoryId: 3,
    name: "Political"
  }, {
    articles: [],
    categoryId: 4,
    name: "Finance"
  }, {
    articles: [],
    categoryId: 5,
    name: "Pets"
  }, {
    articles: [],
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

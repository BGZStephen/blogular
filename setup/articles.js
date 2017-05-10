const mongoose = require('mongoose');
const config = require('../config/database')
const Category = require('../models/category');
const Counter = require('../models/counter');
const User = require('../models/user');
const Article = require('../models/article');

let testArticles = [
  {
    author: "Stephen",
    categories: [],
    comments: [],
    createdBy: 0,
    description: "Test Description 1 - Stephen",
    title: "Test Title 1 - Stephen",
  }, {
    author: "Stephen",
    categories: [],
    comments: [],
    createdBy: 0,
    description: "Test Description 2 - Stephen",
    title: "Test Title 2 - Stephen",
  }, {
    author: "Lydia",
    categories: [],
    comments: [],
    createdBy: 1,
    description: "Test Description 1 - Lydia",
    title: "Test Title 1 - Lydia",
  }, {
    author: "Lydia",
    categories: [],
    comments: [],
    createdBy: 1,
    description: "Test Description 2 - Lydia",
    title: "Test Title 2 - Lydia",
  }, {
    author: "Reuben",
    categories: [],
    comments: [],
    createdBy: 2,
    description: "Test Description 1 - Reuben",
    title: "Test Title 1 - Reuben",
  }, {
    author: "Reuben",
    categories: [],
    comments: [],
    createdBy: 2,
    description: "Test Description 2 - Reuben",
    title: "Test Title 2 - Reuben",
  }, {
    author: "Isaac",
    categories: [],
    comments: [],
    createdBy: 3,
    description: "Test Description 1 - Isaac",
    title: "Test Title 1 - Isaac",
  }, {
    author: "Isaac",
    categories: [],
    comments: [],
    createdBy: 3,
    description: "Test Description 2 - Isaac",
    title: "Test Title 2 - Isaac",
  }, {
    author: "Snivvy",
    categories: [],
    comments: [],
    createdBy: 4,
    description: "Test Description 1 - Snivvy",
    title: "Test Title 1 - Snivvy",
  }, {
    author: "Snivvy",
    categories: [],
    comments: [],
    createdBy: 4,
    description: "Test Description 2 - Snivvy",
    title: "Test Title 2 - Snivvy",
  },
]

// Stephen, Lydia, Reuben, Isaac, Snivvy

// connect to mongodb
mongoose.connect(config.database)

// once connected
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database)

  let i = 0;

  let addArticles = () => {
    if(i < testArticles.length) {

      // define counter to be called for assigning unique userID's
      let counter = {
        name: "articleId"
      }

      // create new User based on iteration of test users
      let newArticle = new Article(testArticles[i])

      newArticle.createdAt = new Date().getTime()

      // assign a unique ID provided by the counter
      Counter.getOne(counter, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          newArticle.articleId = callback.count // assign unique id to new article
          Article.create(newArticle, (err, callback) => {
            if(err) throw(err)
            if(callback) {
              // add the article to the corresponding creating user
              User.addArticle({userId: newArticle.createdBy, articleId: newArticle.articleId}, (err, callback) => {
                if(err) throw(err)
                if (callback) {
                  let newCounterValue = newArticle.articleId + 1
                  // increment the article counter
                  Counter.increment({name: "articleId", count: newCounterValue}, (err, callback) => {
                    if(err) throw(err)
                    if(callback) {
                      console.log("Article: " + newArticle.title + " created successfully")
                      i = i + 1
                      addArticles()
                    } else {
                      console.log("Failed to update article")
                    }
                  })
                } else {
                  console.log("Failed to add article to user")
                }
              })
            } else {
              console.log("Article creation failed")
            }
          })
        } else {
          console.log("Unable to retrieve counter")
        }
      })
    } else {
      console.log("Article setup finished")
      mongoose.disconnect()
    }
  }
  addArticles()
})

// in case of error
mongoose.connection.on('error', (err) => {
  console.log('Error: ' + err)
})

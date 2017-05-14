const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Article = require('../models/article');
const Counter = require('../models/counter');
const User = require('../models/user');
const Category = require('../models/category');

// create article

router.post("/create", (req, res, next) => {

  // newArticle object to submit
  let newArticle = new Article({
    author: req.body.username,
    createdBy: req.body.userId,
    mainImageUrl: req.body.mainImageUrl,
    description: req.body.description,
    title: req.body.title
  })

  // define counter to be called for assigning unique category ID's
  let counter = {
    name: "articleId"
  }

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
                  res.json({success: true, message: "Article: " + newArticle.title + " created successfully"})
                } else {
                  res.json({success: false, message: "Failed to update article"})
                }
              })
            } else {
              res.json({success: false, message: "Failed to add article to user"})
            }
          })
        } else {
          res.json({success: false, message: "Article creation failed"})
        }
      })
    } else {
      res.json({success: false, message: "Unable to retrieve counter"})
    }
  })
})

// delete all

router.post("/deleteAll", (req, res, next) => {
  let articleObject = {}

  Article.deleteAll(articleObject, (err, callback) => {
    if(err) throw(err)
    if(callback == []) {
      res.json({success: true, message: "All articles deleted"})
    } else {
      res.json({success: false, message: "Something went wrong, articles not deleted"})
    }
  })
})

// delete one

router.post("/deleteOne", (req, res, next) => {
  let articleObject = {
    articleId: req.body.articleId,
    createdBy: req.body.userId
  }

  Article.getOne({articleId: articleObject.articleId}, (err, callback) => {
    if(err) throw(err)
    if(callback != null) {
      Article.deleteOne(articleObject, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          // remove the article from the users array of articles
          User.deleteArticle({userId: articleObject.createdBy, articleId: articleObject.articleId}, (err, callback) => {
            if(err) throw(err)
            if(callback) {
              res.json({success: true, message: "Article deleted"})
            } else {
              res.json({success: false, message: "Something went wrong, article not removed from user"})
            }
          })
        } else {
          res.json({success: false, message: "Something went wrong, article not deleted"})
        }
      })
    } else {
      res.json({success: false, message: "articleId not found"})
    }
  })
})

// get all

router.post("/getAll", (req, res, next) => {
  let articleObject = {}

  Article.getAll(articleObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json(callback)
    } else {
      res.json({success: false, message: "Articles not found (no articles?)"})
    }
  })
})

// get by user

router.post("/getById", (req, res, next) => {
  let articleObject = {
    articleId: req.body.articleId
  }

  Article.getOne(articleObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json(callback)
    } else {
      res.json({success: false, message: "Article not found (incorrect article ID?)"})
    }
  })
})

// get by user

router.post("/getByUser", (req, res, next) => {
  let articleObject = {
    createdBy: req.body.userId
  }

  Article.getByUser(articleObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json(callback)
    } else {
      res.json({success: false, message: "Articles not found (no articles?)"})
    }
  })
})

// get by author

router.post("/getByAuthor", (req, res, next) => {
  let articleObject = {
    author: req.body.author
  }

  Article.getByAuthor(articleObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json(callback)
    } else {
      res.json({success: false, message: "Articles not found (no articles?)"})
    }
  })
})

// update
router.post("/update", (req, res, next) => {

  // articleObject object to submit
  let articleObject = {
    articleId: req.body.articleId,
    description: req.body.description,
    mainImageUrl: req.body.mainImageUrl,
    title: req.body.title
  }

  // check category name to make sure it doesn't already exist except in the case of it being the current category name being updated
  articleObject.getOne({articleId: articleObject.articleId}, (err, callback) => {
    if(err) throw(err)
    if(callback == null || callback.articleId == articleId.articleId) {
      articleObject.update(articleObject, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          res.json({success: true, message: "Article updated successfully"})
        } else {
          res.json({success: false, message: "Something went wrong, article update failed"})
        }
      })
    } else {
      res.json({success: false, message: "Trying to update an different article (articleID's don't match)"})
    }
  })
})

module.exports = router;

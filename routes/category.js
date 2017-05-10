const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Counter = require('../models/counter');

// create category

router.post("/create", (req, res, next) => {

  // newCategory object to submit
  let newCategory = new Category({
    articles: [],
    name: req.body.name;
  })

  // define counter to be called for assigning unique category ID's
  let counter = {
    name: "categoryId"
  }

  // assign a unique ID provided by the counter
  Counter.getOne(counter, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      newCategory.categoryId = callback.count // assign unique id to new user
      // check if username already exists
      Category.getOne({name: newCategory.name}, (err, callback) => {
        if(err) throw(err)
        if(callback != null) {
          res.json({success: false, message: "Category already exists"})
        } else {
          Category.create(newCategory, (err, callback) => {
            if(err) throw(err)
            if(callback) {
              let newCounterValue = newCategory.categoryId + 1
              Counter.increment({name: "categoryId", count: newCounterValue}, (err, callback) => {
                if(err) throw(err)
                if(callback) {
                  res.json({success: true, message: "Category: " + newCategory.name + " created successfully"})
                }
              })
            } else {
              res.json({success: false, message: "Category creation failed"})
            }
          })
        }
      })
    } else {
      res.json({success: false, message: "Unable to retrieve counter"})
    }
  })
})

// delete all

router.post("/deleteAll", (req, res, next) => {
  let categoryObject = {}

  Category.deleteAll(categoryObject, (err, callback) => {
    if(err) throw(err)
    if(callback == []) {
      res.json({success: true, message: "All categories deleted"})
    } else {
      res.json({success: false, message: "Something went wrong, categories not deleted"})
    }
  })
})

// delete one

router.post("/deleteOne", (req, res, next) => {
  let categoryObject = {
    categoryId: req.body.categoryId
  }

  Category.getOne({userId: categoryObject.categoryId}, (err, callback) => {
    if(err) throw(err)
    if(callback != null) {
      Category.deleteOne(categoryObject, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          res.json({success: true, message: "Category deleted"})
        } else {
          res.json({success: false, message: "Something went wrong, category not deleted"})
        }
      })
    } else {
      res.json({success: false, message: "categoryId not found"})
    }
  })
})

// get all

router.post("/getAll", (req, res, next) => {
  let categoryObject = {}

  UseCategoryr.getAll(categoryObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json(callback)
    } else {
      res.json({success: false, message: "Categories not found (no categories?)"})
    }
  })
})

// update
router.post("/update", (req, res, next) => {

  // newUser object to submit
  let categoryObject = {
    categoryId: req.body.categoryId
    name: req.body.name;
  }

  // check category name to make sure it doesn't already exist except in the case of it being the current category name being updated
  Category.getOne({categoryId: categoryObject.categoryId}, (err, callback) => {
    if(err) throw(err)
    if(callback == null || callback.categoryId == categoryObject.categoryId) {
      Category.updateUser(userObject, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          res.json({success: true, message: "Category updated successfully"})
        } else {
          res.json({success: false, message: "Something went wrong, category update failed"})
        }
      })
    } else {
      res.json({success: false, message: "Category already exists"})
    }
  })
})

module.exports = router;

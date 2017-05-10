const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// set up express
// set up mongoose connection
// use cors

// connect to mongodb
mongoose.connect(config.database)

// once connected
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database)
})

// in case of error
mongoose.connection.on('error', (err) => {
  console.log('Error: ' + err)
})

const app = express()

// middleware

// cross origin resource sharing setup
app.use(cors())

// static folder for public views
app.use(express.static(path.join(__dirname, 'public')))

// body partser initialize
app.use(bodyParser.json())

// routing

// make routes accessible
const users = require("./routes/users")
const categories = require("./routes/categories")
const articles = require("./routes/articles")

app.use('/users', users)
app.use('/categories', categories)
app.use('/articles', articles)

// index route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint')
})

// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// start server

// define port
const port = 3005

app.listen(port, () => {
  console.log("Server started, listening on port " + port)
})

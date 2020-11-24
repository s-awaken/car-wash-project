const http = require('http')
const express = require('express')
const path = require('path')

const favicon = require('serve-favicon')
const logger = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const bodyParser = require('body-parser')
const multer = require('multer')
const errorHandler = require('errorhandler')

const app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// app.use(favicon(path.join(__dirname, '/public/favicon.ico')))
app.use(logger('dev'))
app.use(methodOverride())
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'uwotm8'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer())
app.use(express.static(path.join(__dirname, 'public')))

const indexRoute = require('./routes/index')



app.get('/', indexRoute)

// error handling middleware should be loaded after the loading the routes
if (app.get('env') === 'development') {
  app.use(errorHandler())
}

const server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
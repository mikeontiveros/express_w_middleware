var express = require('express')

// Creating an express app
var app = express()
var path = require('path')

// Use PORT 3000, unless using Heroku port
var PORT = process.env.PORT || 3000
var middleware = require('./middleware')

// This middleware is now for the whole app!
app.use(middleware.requireAuthentication)

app.get('/', function(req, res) {
    res.send('<h1>Express Todo API</h1>')
})

app.get('/about', middleware.logger, function(req, res) {
    res.send('<h1>Express About Page</h1>')
})

app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`)
})

var express = require('express')

// Creating an express app
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var _ = require('underscore')

// Use PORT 3000, unless using Heroku port
var PORT = process.env.PORT || 3000
var middleware = require('./middleware')

var todos = [
    // {
    //     id: 1,
    //     description: 'Teach REST API.',
    //     completed: false
    // },
    // {
    //     id: 2,
    //     description: 'Go eat a healthy lunch.',
    //     completed: true
    // }
]
var todoNextID = 1

// This middleware module's requireAuthentication
// function is now for the whole app!
app.use(middleware.requireAuthentication)

// This entire middleware module is now for whole app!
// Don't forget parentheses!
app.use(bodyParser())

app.get('/', function(req, res) {
    res.send('<h1>Express Todo API</h1>')
})

app.get('/todos', function(req, res) {
    res.json(todos)
})

app.get('/todos/:id', function(req, res) {

    // res.send('Asking for todo with id ' + req.params.id)

    // res.json( todos[req.params.id - 1] )

    // variable to hold as integer ID from params
    var todoID = parseInt(req.params.id)

    var matchedTodo = _.findWhere(todos, {id: todoID})

    // var matchedTodo;
    // todos.forEach(function(todo) {
    //     if (todoID === todo.id) {
    //         matchedTodo = todo;
    //     }
    // })

    if (matchedTodo) {
        res.json(matchedTodo)
    } else {
        res.status(404).send()
    }
})

app.post('/todos', function(req, res) {

    var body = req.body

    // Add ID key & value to body.
    body.id = todoNextID
    todoNextID++

    // Push body into array.
    todos.push(body)

    console.log('description: ' + body.description)
    res.json(body)
})

app.get('/about', middleware.logger, function(req, res) {
    res.send('<h1>Express About Page</h1>')
})

app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`)
})

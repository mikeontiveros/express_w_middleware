# Express App API To Do

// WRITE NOTES HERE

// What is middleware?

// How does it get used?

// How do I check it?

// How do I add custom middlewear to specific routes?

// Why do we move code, export it and require it?

Last line in middleware.js is

    module.exports = middleware

We do this this to make the middleware object defined in middleware.js available outside the module.

// What is requiring a module and then how do we mount it?

'npm install body-parser' & then we require it at the top of server.js.  Then we mount (.use) it.  When we mounted it, we did this...

// Created 1st GET /todos & tested it with Postman by creating Collection -> Environment -> Route.

// Created 2nd GET /todos/:id & tested it with Postman & also pushed to Heroku and created Environment -> Route.

```javascript
app.get('/todos/:id', function(req, res) {

    // res.send('Asking for todo with id ' + req.params.id)

    // res.json( todos[req.params.id - 1] )

    var todoId = parseInt(req.params.id)
    var matchedTodo;
    todos.forEach(function(todo) {
        if (todoId === todo.id) {
            matchedTodo = todo;
        }
    })
    if (matchedTodo) {
        res.json(matchedTodo)
    } else {
        res.status(404).send()
    }
})
```

// Create POST /todos.  First had to initialize ID.
`var todoNextID = 1`

// Refactor using Underscore.JS
    // Refactor GET /todos:id

```javascript
var matchedTodo = _.findWhere(todos, {id: todoID})
```

// Validated body in POST todos/ using Underscore .pick
```javascript
    var body = _.pick(req.body, 'description', 'completed')

    // _.isBoolean & _.isString are Object functions taht allow us to validate.
    // body-parser enables us to parse the body object.

    if( !_.isBoolean(body.completed) ||
        !_.isString(body.description) ||
        body.description.trim().length === 0) {
        return res.status(400).send()
    }

    body.description = body.description.trim()
```

// Create DELETE /todos/:id.
```javascript
app.delete('/todos/:id', function(req, res) {

    var todoID = parseInt(req.params.id)
    var matchedTodo = _.findWhere(todos, {id: todoID})

    if (matchedTodo) {
        todos = _.without(todos, matchedTodo)
    } else {
        res.status(404).json({"error": "No such Todo found."})
    }
    res.json("Deleted " + matchedTodo)
})
```


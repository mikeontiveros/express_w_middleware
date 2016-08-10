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

// Created POST /todos.  First had to initialize ID.
`var todoNextID = 1`


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

// Created first GET/todos and tested it in Postman


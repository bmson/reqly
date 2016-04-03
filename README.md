# reqly
Express helper to quickly run a server with Babelify, LESS and SASS

# example
```javascript
// Local dependencies
var server = require('reqly');

// Create server
server.connect('./src', 3333);

// Create socket server
server.socket('/', 8080);
// Read RFC-6455 standard for implementation

// Get request
server.get('/user/id', function (request, response) {
  // See ExpressJS documentation
});

// Post request
server.post('/user/location', function (request, response) {
  // See ExpressJS documentation
});
```

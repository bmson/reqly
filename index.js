// Global dependencies
const express = require('express');
const webRTC  = require('express-ws');

// Middleware
const less       = require('express-less');
const sass       = require('node-sass-middleware');
const browserify = require('browserify-middleware');
const babelify   = require('babelify');

// Initiate Express
const app = express();

// Attach webRTC to express app
webRTC(app);

// Module definition
exports.connect = (directory, port) => {

  // Browserify options
  const browserifyOptions = {
    'transform': [
      babelify.configure({ 'presets': 'es2015' })
    ]
  };

  // Load middleware
  const middleware = [
    less(directory),
    sass({ 'src': directory, 'response': true }),
    browserify(directory, browserifyOptions),
    express.static(directory)
  ];

  // Add middleware
  app.use(...middleware);

  // Listen to port
  app.listen(port, () => {
    process.stdout.write('Listening on port ' + port);
  });

};

// Export requests
exports.get  = app.get.bind(app);
exports.post = app.post.bind(app);
exports.ws   = app.ws.bind(app);

// Export helper
exports.bridge = (mirror, path) => {
  this.get(mirror, (req, res) => { res.sendFile(path); });
};

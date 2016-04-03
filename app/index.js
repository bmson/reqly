// Dependencies
const path       = require('path');
const express    = require('express');
const socket     = require('./socket');
const middleware = require('./middleware');

// Initiate Express
const app = express();

// Module definition
exports.connect = (directory, port) => {

  // Load assets
  const middlewareAssets = middleware.connect(directory);
  const staticAssets = express.static(directory);

  // Add middlewares
  app.use(...middlewareAssets);
  app.use(staticAssets);

  // Listen to port
  app.listen(port, () => {
    process.stdout.write('Listening on port ' + port);
  });

};

// Export helper
exports.bridge = (mirror, url) => {

  const parentDirectory = path.dirname(module.parent.filename);

  this.get(mirror, (req, res) => {
    res.sendFile(parentDirectory + url);
  });

};

// Export requests
exports.get    = app.get.bind(app);
exports.post   = app.post.bind(app);
exports.socket = socket.connect;

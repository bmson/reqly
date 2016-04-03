// Dependencies
const less       = require('express-less');
const sass       = require('node-sass-middleware');
const browserify = require('browserify-middleware');
const babelify   = require('babelify');

// Module definition
exports.connect = (directory) => {

  // Less
  const mwLess = less(directory);

  // Sass
  const mwSass = sass({
    'src': directory,
    'response': true
  });

  // Browserify
  const mwBrowserify = browserify(directory, {
    'transform': [
      babelify.configure({ 'presets': 'es2015' })
    ]
  });

  // Load middleware
  return [mwLess, mwSass, mwBrowserify];

};

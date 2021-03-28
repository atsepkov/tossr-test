// system imports
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: path.resolve('config', `.env.${process.env.NODE_ENV}`) });

// allows easier imports server-side (relative to root)
process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

console.log(`Running mode: \x1b[1m${process.env.NODE_ENV.toUpperCase()}\x1b[0m`);

const app = express();
app.use(express.static('dist'));
app.use('/static', express.static('lib'));
app.use('/static', express.static('public'));
app.use(morgan('dev'));     // log every request to the console

// ejs engine (legacy)
const ejs = require('ejs');
ejs.delimiter = '$';
app.engine('html', ejs.renderFile)
app.set("view engine", 'html')

// load routes
require('./routes')(app);

module.exports = app;

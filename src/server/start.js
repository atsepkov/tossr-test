/* @flow */

// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('@babel/register')({
    presets: [ '@babel/preset-env', '@babel/preset-flow' ]
})

// Import the rest of our application.
const app = require('./server.js')
const fs = require('fs');
const https = require('https');

// start service
const port = process.env.PORT || 443;
https.createServer({
    key: fs.readFileSync('./certs/server.key'),
    cert: fs.readFileSync('./certs/server.cert'),
}, app).listen(port, (err) => {
  if (err) {
      return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})

// Import the rest of our application.
module.exports = app;

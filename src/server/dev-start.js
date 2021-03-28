
// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('@babel/register')({
    presets: [ '@babel/preset-env', '@babel/preset-flow' ]
})

// Import the rest of our application.
const app = require('./server.js')

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware'); //webpack hot reloading middleware
const compiler = webpack(require('../../webpack.config')); //devServer config from `webpack.config.js`

app.use(middleware(compiler, {
  // webpack-dev-middleware options
  writeToDisk: true
}));

// start service
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
      return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})

//app.listen(3000, () => console.log('Example app listening on port 3000!'))
module.exports = app;

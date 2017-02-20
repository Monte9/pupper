module.exports = {
  // the entry file for the bundle

  //for heroku deploy only
  entry: ['babel-polyfill', __dirname + '/client/src/app.jsx'],

  //for local development only
  // entry: __dirname + '/client/src/app.jsx',

  // the bundle file we will get in the result
  output: {
    path: __dirname + '/client/dist/js',
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ["react", "es2015"]
      }
    }],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};

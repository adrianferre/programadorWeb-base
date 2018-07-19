module.exports = {
  entry: [ __dirname + '/src/index.js' ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  watch: true
}

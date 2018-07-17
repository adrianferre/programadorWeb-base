module.exports = {
  entry: [ 'jquery', 'sammy', 'bootstrap', __dirname + '/src/js/main.js' ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'main.js'
  },
  watch: true
}

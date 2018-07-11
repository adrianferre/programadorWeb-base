


npm init
npm install popper.js@^1.14.3
npm install jquery
npm install sammy
npm install boostrap
npm install --save-dev pushstate-server
npm install --save-dev nodemon

Hacer app con webpack 2:

`npm install --save-dev webpack webpack-cli`

```js
module.exports = {
  entry: [ './src/js/main.js', './src/js/main2.js' ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'main.js'
  },
  watch: true
}
```
import crossroads from 'crossroads'

crossroads.addRoute('#/pato', function () {
  console.log('PATO 2')
})

crossroads.addRoute('/', function () {
  $('#root').load('./partials/home.html')
})

$(window).on('hashchange', function () {
  crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)

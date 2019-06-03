import crossroads from 'crossroads'

function router () {
  crossroads.addRoute('', function () {
    console.log('Home page')
    $('#root').load('./partials/home.html')
  })

  crossroads.addRoute('#/people', function () {
    console.log('People')
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router

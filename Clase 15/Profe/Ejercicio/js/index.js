/**
 * getData recibe una URL y una función callback aue ejecuta cuando recibe
 * la respuesta del servidor
 * @param {string} url
 * @param {function} cbk
 */
function getData (url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}

getData('https://swapi.co/api/people/5', showData)

/**
 * showData recibe como parámetro un error y la data,
 * si no hay error muestra en consola los datos
 * @param {Object} error
 * @param {Object} data
 */

function showData (error, data) {
  if (!error) {
    console.log(data)
  }
}

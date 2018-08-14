$(document).ready(function () {
  $('button').on('click', removeElementWithAnimation)

  /**
 * removeElementWithAnimation es una función que recibe un evento
 * y elimina el nodo con una animación
 * @param {*} event
 */
  function removeElementWithAnimation (event) {
    $(this).parent().parent().hide(2000, function () {
      $(this).remove()
    })
  }
})

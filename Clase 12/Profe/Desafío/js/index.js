// Busco el elemento en el DOM y le asigno la función validateEmailField en el evento blur
$('#email').blur(validateEmailField)

/**
 * validateEmailField es una función que valida que el campo exista y contenga
 * arroba (@) y punto (.), en caso de error deja la clase is-invalid
 * si no hay error deja solo la clase is-valid
 * @param { HTMLEvent } event
 */
function validateEmailField (event) {
  var inputNode = $(this)

  var value = inputNode.val()

  if (!value || value.indexOf('@') === -1 || value.indexOf('.') === -1) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
  } else {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  }
}

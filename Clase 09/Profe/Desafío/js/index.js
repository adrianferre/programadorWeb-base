// Busco el input en el DOM

var emailInput = document.getElementById('email')

// Agregon la función en el evento blur

emailInput.onblur = validateEmailField

/**
 * validateEmailField recibe como parámetro un evento y valida
 * que el campo sea un mail válido
 * @param {HTMLEvent} event
 */
function validateEmailField (event) {
  var inputNode = event.target

  if (
    !inputNode.value ||
    inputNode.value.indexOf('@') === -1 ||
    inputNode.value.indexOf('.') === -1
  ) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}

var firstNameInput = document.getElementById('firstName')

firstNameInput.onblur = validateRequiredField

/**
 * validateRequiredField recibe como parámetro un evento y valida
 * que el campo tenga contenido
 * @param {HTMLEvent} event
 */

function validateRequiredField (event) {
  var inputNode = event.target

  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}

var firstNameInput = document.getElementById('firstName')

firstNameInput.onblur = showErrorOnEmptyInput

var lastNameInput = document.getElementById('lastName')

lastNameInput.onblur = function (event) {
  showErrorOnEmptyInput(event)
}

function showErrorOnEmptyInput (event) {
  var inputNode = event && event.target

  var value = inputNode && inputNode.value
  if (value) {
    showValidInput(inputNode)
  } else {
    showInvalidInput(inputNode)
  }
  validateAllFields()
}

function showValidInput (inputNode) {
  if (inputNode && inputNode.classList) {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}

function showInvalidInput (inputNode) {
  if (inputNode && inputNode.classList) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  }
}

var emailInput = document.getElementById('email')

emailInput.onblur = function (event) {
  var emailInputNode = event && event.target

  var value = emailInputNode && emailInputNode.value

  if (
    value &&
    typeof value === 'string' &&
    value.indexOf('@') !== -1 &&
    value.indexOf('.') !== -1
  ) {
    showValidInput(emailInputNode)
  } else {
    showInvalidInput(emailInputNode)
  }

  validateAllFields()
}

function validateAllFields () {
  var submitButton = document.getElementById('submitButton')
  var validFields = document.getElementsByClassName('is-valid')
  if (validFields && validFields.length === 3) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

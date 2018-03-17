// Eventons semánticos
// var redContainer = document.getElementById('redContainer')

// redContainer.onclick = function () {
//   console.log('Hola')
// }

// redContainer.onmouseover = function () {
//   console.log('Mouse arriba')
// }

// Validar campos

// var textInput = document.getElementById('textInput')

// textInput.onblur = function (event) {
//   var inputNode = event.target
//   var value = inputNode.value

//   // var textInput = document.getElementById('textInput')
//   console.log('Input blur', value)
// }

// var redContainer = document.getElementById('redContainer')

// redContainer.onclick = function (event) {
//   var divNode = event.target
//   console.log('En el click lo recibo en ', divNode.id)
// }

// var blueContainer = document.getElementById('blueContainer')

// blueContainer.onclick = function (event) {
//   var divNode = event.target
//   console.log('En el click lo recibo en ', divNode.id)
// }

// Espiar contraseñas

// var textInput = document.getElementById('textInput')

// textInput.onblur = function (event) {
//   var inputNode = event.target
//   var value = inputNode.value

//   console.log('Input blur', value)
// }

// Modificar otro componente con un evento

// var clearButton = document.getElementById('clearButton')

// clearButton.onclick = function () {
//   var textInput = document.getElementById('textInput')
//   textInput.value = 'Pato'
// }

// Valida formularios

// var textInput = document.getElementById('textInput')

// textInput.onblur = function (event) {
//   var textInputNode = event.target

//   if (!textInputNode.value) {
//     console.log('Input vacio')
//   } else {
//     console.log('El input esta lleno')
//   }
// }

// var passwordInput = document.getElementById('passwordInput')

// passwordInput.oninput = function (event) {
//   var passwordInputNode = event.target

//   var value = passwordInputNode.value

//   if (value && typeof value === 'string' && value.length >= 6) {
//     console.log('Contraseña correcta', value)
//   } else {
//     console.log('Contraseña incorrecta', value)
//   }
// }

// Cambiar el color del input según valida o no

var textInput = document.getElementById('textInput')

textInput.onblur = function (event) {
  var textInputNode = event.target

  var value = textInputNode.value

  var parentTextInputNode = textInputNode.parentElement

  var textErrorNode = document.getElementById('textError')

  if (textErrorNode) {
    parentTextInputNode.removeChild(textErrorNode)
  }

  if (value) {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
    // console.log('El input esta lleno')
  } else {
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')
    // console.log('Input vacio')

    textErrorNode = document.createElement('span')

    textErrorNode.id = 'textError'
    textErrorNode.innerHTML = 'El input esta vacio'

    parentTextInputNode.appendChild(textErrorNode)
  }
  validateAllFields()
}

var passwordInput = document.getElementById('passwordInput')

passwordInput.onblur = function (event) {
  var passwordInputNode = event.target

  var value = passwordInputNode.value

  var parentPasswordInputNode = passwordInputNode.parentElement

  var passwordErrorNode = document.getElementById('passwordError')

  if (passwordErrorNode) {
    parentPasswordInputNode.removeChild(passwordErrorNode)
  }

  if (value && typeof value === 'string' && value.length >= 6) {
    passwordInputNode.classList.remove('is-invalid')
    passwordInputNode.classList.add('is-valid')
    // console.log('Contraseña correcta')
  } else {
    passwordInputNode.classList.remove('is-valid')
    passwordInputNode.classList.add('is-invalid')

    passwordErrorNode = document.createElement('span')

    passwordErrorNode.id = 'passwordError'
    passwordErrorNode.innerHTML = 'Contraseña con error'

    parentPasswordInputNode.appendChild(passwordErrorNode)

    // console.log('Contraseña incorrecta')
  }

  validateAllFields()
}

function validateAllFields () {
  var submitButtom = document.getElementById('submitButtom')

  var elementsWithIsInvalid = document.getElementsByClassName('is-invalid')

  if (elementsWithIsInvalid && elementsWithIsInvalid.length === 0) {
    submitButtom.disabled = false
  } else {
    submitButtom.disabled = true
  }
}

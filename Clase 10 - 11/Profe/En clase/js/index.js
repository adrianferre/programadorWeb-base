var firstNameInput = document.getElementById('firstName')

firstNameInput.onblur = function (event) {
  var firstNameInputNode = event.target

  var value = firstNameInputNode.value

  if (value) {
    firstNameInputNode.classList.remove('is-invalid')

    firstNameInputNode.classList.add('is-valid')

    console.log('Tengo un valor en el input')
  } else {
    firstNameInputNode.classList.remove('is-valid')

    firstNameInputNode.classList.add('is-invalid')

    console.log('NO tengo un valor en el input')
  }
}

var firstNameInput2 = document.getElementById('firstName2')

firstNameInput2.onblur = function (event) {
  var firstNameInputNode2 = event.target

  var firstNameInputNode1 = document.getElementById('firstName')

  var value1 = firstNameInputNode1.value

  var value2 = firstNameInputNode2.value

  if (value1 && value2 && value1 === value2) {
    firstNameInputNode2.classList.remove('is-invalid')

    firstNameInputNode2.classList.add('is-valid')

    console.log('Tengo un valor en el input')
  } else {
    firstNameInputNode2.classList.remove('is-valid')

    firstNameInputNode2.classList.add('is-invalid')

    console.log('NO tengo un valor en el input')
  }
}

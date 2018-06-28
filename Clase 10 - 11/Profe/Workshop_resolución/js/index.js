// Variables globales
var LS_KEY = 'studentsList'

// Busco la lista en el localStorage
var studentsList = getLocalList(LS_KEY)

// Defino un Array vacío que luego voy a llenar con objetos newStudent
var newStudentsList = []

// Defino la variable estudiante
var student

// Defino la variable nuevo estudiante
var newStudent

// Convierto los estudiantes guardados en el localStorage
// en nuevos estudiantes y los guardo en mi Array
for (var i = 0; i < studentsList.length; i++) {
  var student = studentsList[i]
  var newStudent = new Student(student.firstName, null, student.dni, null)
  newStudentsList.push(newStudent)
}

var firstNameInputNode = document.getElementById('firstName')
var dniInputNode = document.getElementById('dni')
var addStudentButtonNode = document.getElementById('addStudentButton')

firstNameInputNode.onblur = validateRequiredField

function validateRequiredField (event) {
  var inputNode = event.target

  if (inputNode.value) {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  } else {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  }

  checkEnableButton()
}

dniInputNode.onblur = validateDniField

function validateDniField (event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  if (
    inputNode.value &&
    !isNaN(parsedValue) &&
    parsedValue > 0 &&
    searchStudentIndexByDni(inputNode.value, newStudentsList) === -1
  ) {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  } else {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  }

  checkEnableButton()
}

addStudentButtonNode.onclick = addStudent

function addStudent () {
  var newStudent = new Student(
    firstNameInputNode.value,
    null,
    dniInputNode.value,
    null
  )

  newStudentsList.push(newStudent)

  setLocalList(LS_KEY, newStudentsList)

  firstNameInputNode.value = ''

  dniInputNode.value = ''

  addStudentButtonNode.disabled = true
}

function checkEnableButton () {
  var isValidFields = document.getElementsByClassName('is-valid')

  if (isValidFields.length === 2) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

/* Clase 05 (modificada) */

/**
 * Función que permite buscar la posición de un estudiante en el array,
 * @param {String} nameOrLastName 
 * @param {Array} studentsList 
 */

function searchStudentIndexByDni (dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }
  return index
}

/* Clase 07 */
/**
 * Defino la función setLocalList
 * @param { string } key 
 * @param { array } list 
 */
function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}

/**
 * Defino la función getLocalList
 * @param { string } key 
 */
function getLocalList (key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}

/* Clase 05 */

/**
 * Defino la función constructora Student
 * @param { string } firstName
 * @param { string } lastName
 * @param { number } dni
 * @param { string } email
 */
function Student (firstName, lastName, dni, email) {
  // Propiedades privadas
  var id = dni

  // Propiedades públicas
  this.firstName = firstName

  if (lastName) {
    this.lastName = lastName
  }

  this.dni = dni

  if (email) {
    this.email = email
  }

  // Métodos públicos
  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    return (this.firstName || '') + ' ' + (this.lastName || '')
  }
}

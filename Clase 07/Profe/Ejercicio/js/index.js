// var studentsList = [
//   'CARLOS',
//   'GERONIMO',
//   'NICOLAS',
//   'LUCAS'
// 'MARIA',
// 'FEDERICO',
// 'ANTONIO',
// 'LORNA',
// 'JULIAN',
// 'DIEGO',
// 'DANIELA',
// 'JUAN',
// 'MATEO',
// 'BARBARA',
// 'AGUSTIN',
// 'MARIO',
// 'MARIEL',
// 'ANA',
// 'FLORENCIA'
// ]

// Cargar inicial

// var strStudentList = JSON.stringify(studentsList)

// localStorage.setItem('studentList', strStudentList)

// Levantar la data del localStorage

function addStudent (name) {
  var localStudentsList = localStorage.getItem('studentList')

  var parsedStudentsList

  if (localStudentsList) {
    parsedStudentsList = JSON.parse(localStudentsList)
  } else {
    parsedStudentsList = []
  }
  // If in line O operador ternario
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
  // var parsedStudentsList = localStudentsList ? JSON.parse(localStudentsList) : []

  var upperCaseName = name.toUpperCase()

  parsedStudentsList.push(upperCaseName)

  var strStudentList = JSON.stringify(parsedStudentsList)

  localStorage.setItem('studentList', strStudentList)
}

addStudent('Pato')
// addStudent('Pato')
// addStudent('Pato')
// addStudent('Ñato')

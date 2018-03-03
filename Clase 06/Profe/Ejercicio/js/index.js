console.log('Pato')

function studentNameToUpperCase (studentName) {
  if (typeof studentName === 'string') {
    return studentName.toUpperCase()
  }
}

var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

function searchStudentByName (studentName) {
  var index = -1
  var studentUpperCase = studentNameToUpperCase(studentName)

  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.indexOf(studentUpperCase) !== -1) {
      index = i
      break
    }
  }

  return index
}

function addStudent () {
  var studentName

  do {
    studentName = prompt('Ingrese un nombre')
  } while (!studentName)

  var studentUpperCase = studentNameToUpperCase(studentName)

  studentsList.push(studentUpperCase)
}

function deleteStudent (studentName) {
  var index = searchStudentByName(studentName)
  if (index !== -1) {
    studentsList.splice(index, 1)
  }
}
console.log(studentsList)
deleteStudent('an')
console.log(studentsList)

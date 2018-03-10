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

function studentNameToUpperCase (studentName) {
  if (typeof studentName === 'string') {
    return studentName.toUpperCase()
  }
}

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

function askStudentName () {
  var studentName

  do {
    studentName = prompt('Ingrese un nombre')
  } while (!studentName)
  return studentName
}

function addStudent (studentName) {
  var studentUpperCase = studentNameToUpperCase(studentName)

  studentsList.push(studentUpperCase)
}

function deleteStudent (studentName) {
  var index = searchStudentByName(studentName)
  if (index !== -1) {
    studentsList.splice(index, 1)
  }
}

function abmStudents () {
  var option
  do {
    option = prompt('Ingrese una opción, agregar, eliminar o buscar')
    switch (option) {
      case 'agregar':
        var studentName = askStudentName()
        addStudent(studentName)
        break
      case 'eliminar':
        var studentName = askStudentName()
        deleteStudent(studentName)
        break
      case 'buscar':
        var studentName = askStudentName()
        var index = searchStudentByName(studentName)
        if (index === -1) {
          console.log('Estudiante no encontrado')
        } else {
          console.log(
            'El primer estudiante encontrado es ' + studentsList[index]
          )
        }
        break
      default:
        console.log('La opción ' + option, ' es incorrecta')
        option = null
        break
    }
  } while (!option)
}

abmStudents()

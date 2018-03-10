var studentsList = [
  { firstName: 'Adrián', lastName: 'Ferré' },
  { firstName: 'Mateo', lastName: 'Molina' },
  { firstName: 'Maria', lastName: 'Fernandez' }
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
    if (
      student.firstName.toUpperCase().indexOf(studentUpperCase) !== -1 ||
      student.lastName.toUpperCase().indexOf(studentUpperCase) !== -1
    ) {
      index = i
      break
    }
  }

  return index
}

function askStudentName (option) {
  var studentName

  do {
    studentName = prompt('Ingrese un ' + option)
  } while (!studentName)
  return studentName
}

function addStudent (studentName, studentLastName) {
  var studentNameUpperCase = studentNameToUpperCase(studentName)
  var studentLastNameUpperCase = studentNameToUpperCase(studentLastName)

  studentsList.push({
    firstName: studentNameUpperCase,
    lastName: studentLastNameUpperCase
  })
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
        var studentName = askStudentName('nombre')
        var studentLastName = askStudentName('apellido')
        addStudent(studentName, studentLastName)
        break
      case 'eliminar':
        var studentName = askStudentName('nombre')
        deleteStudent(studentName)
        break
      case 'buscar':
        var studentName = askStudentName('nombre')
        var index = searchStudentByName(studentName)
        if (index === -1) {
          console.log('Estudiante no encontrado')
        } else {
          console.log(
            'El primer estudiante encontrado es ' +
              studentsList[index].firstName +
              ' ' +
              studentsList[index].lastName
          )
        }
        break
      default:
        console.log('La opción ' + option, ' es incorrecta')
        option = null
        break
    }
  } while (!option)
  console.log(studentsList)
}

abmStudents()

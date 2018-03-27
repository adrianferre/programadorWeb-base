var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    address: {
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    address: {
      street: 'La Pampa',
      number: 6754
    },
    examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    address: {
      street: 'La vía',
      number: 3737
    },
    examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
  },
  {
    firstName: 'Daniela',
    lastName: 'Hernandez',
    dni: 45678983,
    examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
  }
]

function searchStudentByText (text, studentsList) {
  var index
  index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.firstName === text || student.lastName === text) {
      index = i
      break
    }
  }
  if (index !== -1) {
    showStudentDetail(studentsList[index])
  } else {
    console.log('No se encontró al estudiante')
  }
}

function showStudentDetail (student) {
  var fullName = student.firstName + ' ' + student.lastName

  var averageResult = ', Promedio: ' + averageExamResult(student.examResults)

  var dni = ', DNI: ' + student.dni

  console.log(fullName + averageResult + dni)
}

function averageExamResult (examResults) {
  var total = 0
  for (var i = 0; i < examResults.length; i++) {
    var result = examResults[i]
    total = total + result
  }

  return total / examResults.length
}

var text
text = prompt('Ingrese un texto para buscar')
searchStudentByText(text, studentsList)

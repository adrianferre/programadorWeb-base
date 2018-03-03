var students = [
  {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    address: {
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  },
  {
    firstName: 'Cooper',
    lastName: 'Marshall',
    dni: 45678989,
    address: {
      street: 'La Pampa',
      number: 6754
    },
    examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
  },
  {
    firstName: 'Ines',
    lastName: 'Sotomayor',
    dni: 45678956,
    address: {
      street: 'La vía',
      number: 3737
    },
    examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
  },
  {
    firstName: 'Matias',
    lastName: 'Trunzo',
    dni: 45678943,
    address: {
      street: 'Zapiol',
      number: 1819
    },
    examResults: [ 4, 3, 4, 5, 5, 3 ]
  },
  {
    firstName: 'Pablo',
    lastName: 'Callegari',
    dni: 45678963,
    address: {
      street: 'Juan b. Justo',
      number: 7654
    },
    examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
  },
  {
    firstName: 'Daniela',
    lastName: 'Picciotto',
    dni: 45678983,
    examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
  }
]

function askAndParse (order) {
  var number1 = prompt('Ingerese el ' + order + ' número')
  var parsedNumber1 = parseInt(number1, 10)
  while (isNaN(parsedNumber1)) {
    console.log('Número erroneo')
    var number1 = prompt('Ingerese el ' + order + ' número')
    var parsedNumber1 = parseInt(number1, 10)
  }
  return parsedNumber1
}

var name = prompt('Ingresa')
searchStudentByFirstNameAndLastName(name)

// var prom = askAndParse('primer')

// searchStudentAverageResult(prom)

function searchStudentByFirstNameAndLastName (text) {
  var flag = false
  for (var i = 0; i < students.length; i++) {
    var student = students[i]
    if (student.firstName === text || student.lastName === text) {
      showStudentDetail(student)
      flag = true
      break
    }
  }
  if (!flag) {
    console.log('No hay nadie con el nombre o apellido ' + text)
  }
}

function searchStudentAverageResult (averageResult) {
  for (var i = 0; i < students.length; i++) {
    var student = students[i]
    var studentAverageResult = averageExamResult(student.examResults)
    if (studentAverageResult >= averageResult) {
      showStudentDetail(student)
    }
  }
}

function showStudentDetail (student) {
  var fullName = student.firstName + ' ' + student.lastName

  var averageResult = ', Promedio: ' + averageExamResult(student.examResults)

  var dni = ', DNI: ' + student.dni

  var street = student.address && student.address.street
  var streetNumber = student.address && student.address.number

  var address

  if (street && streetNumber) {
    address = ', Dirección: ' + street + ' ' + streetNumber
  } else {
    address = ''
  }

  console.log(fullName + averageResult + dni + address)
}

function averageExamResult (examResults) {
  var total = 0
  for (var i = 0; i < examResults.length; i++) {
    var result = examResults[i]
    total = total + result
  }

  return total / examResults.length
}

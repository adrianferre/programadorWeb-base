var legalAge = 25

function User (firstName, lastName, age, address) {
  var id = Math.random()

  this.showFullName = function () {
    console.log(firstName + ' ' + lastName)
  }

  this.isLegalAge = function () {
    // return age >= legalAge
    if (age >= legalAge) {
      return true
    } else {
      return false
    }
  }

  this.getId = function () {
    return id
  }
}

// var user1 = new User('Adrián', 'Ferré', 9, {
//   street: 'Cucha cucha',
//   number: 1234
// })

// user1.showFullName()

// var isLegalAge = user1.isLegalAge()

// console.log(isLegalAge)

// var id = user1.getId()

// console.log(id)

var students = [
  {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    age: 28,
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
    age: 7,
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
    age: 68,
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
    age: 3,
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
    age: 48,
    address: {
      street: 'Juan b. Justo',
      number: 7654
    },
    examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
  },
  {
    firstName: 'Daniela',
    lastName: 'Picciotto',
    age: 125,
    dni: 45678983,
    examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
  }
]

for (var i = 0; i < students.length; i++) {
  var student = students[i]
  var objStudent = new User(
    student.firstName,
    student.lastName,
    student.age,
    student.address
  )
  objStudent.showFullName()
  console.log(objStudent.isLegalAge())
}

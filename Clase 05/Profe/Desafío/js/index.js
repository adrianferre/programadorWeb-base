// Datos iniciales

var oldStudents = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

// Función constructora

function Student (firstName, lastName, dni, email) {
  // Propiedades privadas
  var id = dni

  // Propiedades públicas
  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  // Métodos públicos
  this.getId = function () {
    return id
  }

  // var name = firstName || 'default'

  this.getFullName = function () {
    return (this.firstName || '') + ' ' + (this.lastName || '')

    // if (this.firstName && this.lastName) {
    //   return this.firstName + ' ' + this.lastName
    // } else if (this.firstName && !this.lastName) {
    //   return this.firstName
    // } else if (!this.firstName && this.lastName) {
    //   return this.lastName
    // } else {
    //   return ''
    // }
  }
}

var oldStudent

var newStudent
var newStudents = []

// Lleno un nuevo Array con los objetos creados con la función Car
for (var i = 0; i < oldStudents.length; i++) {
  oldStudent = oldStudents[i]
  newStudent = new Student(
    oldStudent.firstName,
    oldStudent.lastName,
    oldStudent.dni,
    oldStudent.email
  )
  newStudents.push(newStudent)
}

console.log(oldStudents)
console.log(newStudents)

for (var i = 0; i < newStudents.length; i++) {
  console.log(newStudents[i].getFullName())
}

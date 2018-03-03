// var student = {
//   firstName: 'Florencia',
//   lastName: 'San Martín'
// }

// function Student (firstName, lastName) {
//   // this.firstName = firstName
//   // this.lastName = lastName
//   this.showFirstName = function () {
//     return firstName
//   }
// }

// console.log(newStudent.showFirstName(), student.firstName)

// student.firstName = 'Pato'

// newStudent.firstName = 'Pato'

// console.log(newStudent.showFirstName(), student.firstName)

// var studentFromDb = {
//   firstName: 'Florencia',
//   lastName: 'San Martín',
//   age: 25
// }

// function Student (firstName, lastName, age) {
//   this.fullName = firstName + ' ' + lastName
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   var legalAge
//   if (age >= 18) {
//     legalAge = 'Es mayor de edad'
//   } else {
//     legalAge = 'Es menor de edad'
//   }
//   this.legalAge = legalAge
//   this.isLegalAge = function () {
//     if (this.age >= 18) {
//       console.log('Es mayor de edad')
//     } else {
//       console.log('Es menor de edad')
//     }
//   }
//   this.setAge = function (age) {
//     this.age = age
//   }

//   // this.getFullName = function () {
//   //   return firstName + ' ' + lastName
//   // }
// }

// var newStudent = new Student(
//   studentFromDb.firstName,
//   studentFromDb.lastName,
//   studentFromDb.age
// )

// // console.log(newStudent.getFullName())

// console.log(
//   // newStudent.fullName,
//   // newStudent.firstName,
//   // newStudent.lastName,
//   newStudent.age,
//   newStudent.legalAge
// )

// newStudent.isLegalAge()

// newStudent.setAge(15)

// console.log(
//   // newStudent.fullName,
//   // newStudent.firstName,
//   // newStudent.lastName,
//   newStudent.age,
//   newStudent.legalAge
// )

// newStudent.isLegalAge()

function Student (firstName, lastName, age) {
  // this.fullName = firstName + ' ' + lastName
  var id = Math.random()
  var modified = false

  this.getId = function () {
    return id
  }

  this.getFirstName = function () {
    return firstName
  }

  this.setFirstName = function (name) {
    modified = true
    firstName = name
  }

  this.getIsModified = function () {
    return modified
  }
}

var newStudent = new Student('Adrián', 'Ferré')

// console.log(
//   newStudent.getFirstName(),
//   newStudent.getIsModified(),
//   newStudent.getId()
// )

// newStudent.firstName = 'Pato'

// console.log(
//   newStudent.getFirstName(),
//   newStudent.getIsModified(),
//   newStudent.getId()
// )

// newStudent.setFirstName('Ana')

// console.log(
//   newStudent.getFirstName(),
//   newStudent.getIsModified(),
//   newStudent.getId()
// )

var newStudent2 = new Student('Adrián', 'Ferré')

console.log(newStudent.getFirstName(), newStudent.getId())

console.log(newStudent2.getFirstName(), newStudent2.getId())

// var conditional = 'Pepe'

// if (conditional) {
//   console.log('Adentro del if')
// }

// var obj = {}

// if (obj) {
//   console.log('Adentro del if')
// }

// var age = prompt('Ingresa tu edad')

// if (age >= 18) {
//   console.log('Sos mayor de edad')
// } else {
//   console.log('Sos menor de edad!')
// }

// var name = prompt('Ingrese nombre')

// if (name === 'Juan' || name === 'Pedro') {
//   console.log('Sos un usuario registrado')
// } else {
//   console.log('No sos usuario')
// }

// var text = prompt('Ingrese texto')

// if (!text) {
//   console.log('No ingresaste nada', text)
// }

// var result = prompt('Ingrese el resultado del partido')

// if (result === 'Ganó') {
//   console.log('Sumaste 3 puntos')
// } else if (result === 'Empató') {
//   console.log('Sumaste 1 puntos')
// } else if (result === 'Perdió') {
//   console.log('Sumaste 0 puntos')
// } else {
//   console.log('Resultado invalido')
// }

// var result = prompt('Ingrese el resultado del partido')

// switch (result) {
//   case 'Gano':
//   case 'Ganó':
//     console.log('Sumas 3 puntos')
//     console.log('Pato')
//     break
//   case 'Perdió':
//     console.log('Sumas 0 puntos')
//     break
//   case 'Empató':
//     console.log('Sumas 1 puntos')
//     break
//   default:
//     console.log('Resultado invalido')
//     break
// }

// var firstName = prompt('Nombre')

// var lastName = prompt('Apellido')

// if (firstName === 'Adrián') {
//   console.log('Nombre correcto')
// } else if (lastName === 'Ferré') {
//   console.log('Apellido correcto')
// }

// console.log('Afuera')

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (var i = 1; i < 11; i = i + 2) {
//   console.log(i)
// }

// var students = [ 'Ana', 'Pedro', 'Juan' ]

// for (var i = 0; i < students.length; i++) {
//   var student = students[i]
//   console.log(student)
// }

// var students = [
//   { name: 'Ana', age: 12 },
//   { name: 'Pedro', age: 32 },
//   { name: 'Juan', age: 22 }
// ]

// for (var i = 0; i < students.length; i++) {
//   var student = students[i]
//   console.log(student.age)
// }
// var i = 1

// while (i <= 10) {
//   console.log(i)
//   i++
// }

// var name = ''

// var i = 0

// while (name !== 'Pedro' && i < 3) {
//   name = prompt('Ingresa tu nombre')
//   i++
//   if (i == 3) {
//     console.log('Intento final')
//   }
// }

// var password = null

// do {
//   password = prompt('Ingresa tu clave')
//   if (password === '12345') {
//     console.log('Password malísima')
//   }
// } while (password.length < 6)

// var students = [
//   { name: 'Ana', age: 12 },
//   { name: 'Pedro', age: 32 },
//   { name: 'Juan', age: 22 }
// ]

// var name = prompt('Ingrese su nombre')

// for (var i = 0; i < students.length; i++) {
//   var student = students[i]
//   if (student.name === name) {
//     console.log('Sos estudiante')
//     continue
//   }

//   console.log('Posición', i + 1)
// }

var students = [
  { name: 'Ana' },
  { name: 'Pedro', age: 32 },
  { name: 'Juan', age: 22 }
]

for (var i = 0; i < students.length; i++) {
  var student = students[i]
  if (!student.age) {
    continue
  }

  console.log('Tu edad es', student.age)
}

// # Métodos String

// - Lenght

// var firstName = ''

// var number = 'pepe'

// if (typeof number === 'string') {
//   number.toLowerCase()
// }

// if (typeof firstName === 'string') {
//   if (!firstName.length) {
//     console.log('String vacio')
//   }
// }

// - IndexOf

// var flag = true
// var email
// do {
//   email = prompt('Ingrese email')
//   if (typeof email === 'string') {
//     if (email.indexOf('@') !== -1 && email.indexOf('.') !== -1) {
//       console.log('Mail valido')
//       flag = false
//     } else {
//       console.log('Mail incorrecto')
//     }
//   }
// } while (flag)

// var name
// var dbName = 'Javier'

// name = prompt('Ingrese su nombre')
// if (typeof name === 'string') {
//   if (dbName.indexOf(name) !== -1) {
//     console.log('Es el usuario')
//   } else {
//     console.log('No es el usuario')
//   }
// }

// - ToLowerCase
// - ToUpperCase

// var firstName1 = 'JUANcito'

// var firstName2 = 'juanciTO'

// if (typeof firstName1 === 'string' && typeof firstName2 === 'string') {
//   var firstName1LowerCase = firstName1.toLowerCase()
//   var firstName2LowerCase = firstName2.toLowerCase()
//   console.log(
//     firstName1LowerCase === firstName2LowerCase,
//     firstName1LowerCase,
//     firstName2LowerCase
//   )
// }

// - Split

// var fullName = prompt('Ingresá tu nombre completo, nombre y apellido')

// var splitedFullName = fullName.split(' ')

// console.log(splitedFullName)

// var firstName = splitedFullName[0]
// var lastName = splitedFullName[1]

// console.log('Tu nombre es ', firstName)
// console.log('Tu apellido es ', lastName)

// console.log('Tu nombre completo es ', fullName)

// # Métodos de arrays

// - ToString

// var names = [ 'Adrián', 'Javier', 'Inés' ]

// if (Array.isArray(names)) {
//   console.log(names.toString())
// }

// - Join

// var names = 'Adrián Javier Inés'

// console.log('Names original', names)

// names = names.split(' ')

// console.log('Names splitiado', names)

// if (Array.isArray(names)) {
//   console.log(names.join(', '))
// }

// - Push

// var names = [ 'Adrián', 'Javier', 'Inés' ]

// console.log('Names original', names)

// names.push({
//   firstName: 'Gregorio'
// })

// console.log('Names push', names)

// - Splice

// var names = [ 'Adrián', 'Javier', 'Inés' ]

// console.log('Names original', names)

// var deleteName = prompt('Ingresá un nombre')

// var index = names.indexOf(deleteName)

// var index = -1

// for (var i = 0; i < names.length; i++) {
//   if (deleteName === names[i]) {
//     index = i
//     break
//   }
// }

// if (index !== -1) {
//   names.splice(index, 1)
// }

// console.log('Names push', names)

// Pendientes
// - Sort
// - Reverse
// - Pop

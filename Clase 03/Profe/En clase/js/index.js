// var number1 = prompt('Ingeres el primer número')

// var parsedNumber1 = parseInt(number1, 10)

// function showMessage (firstName) {
//   console.log('Hola ' + firstName + ' ' + lastName)
// }

// var name = 'Juan'

// showMessage(name, 'Perez')

// function showMessage (firstName, lastName) {
//   console.log('Hola ' + firstName + ' ' + lastName)
// }

// var name = 'Juan'

// showMessage(name)

// function showMessage (firstName, lastName) {
//   console.log('Hola ' + firstName + ' ' + lastName)
// }

// var name = 'Juan'

// showMessage(name, 'Perez')

// function power (number1, powerNumber) {
//   var result = number1
//   for (var i = 1; i < powerNumber; i++) {
//     result = result * number1
//   }
//   return result
// }

// var base = 2

// var exponent = 4

// var power1 = power(base, exponent)

// console.log(power1)

// console.log(power(5, 3))

// function askAndParse () {
//   var number1 = prompt('Ingerese un número')
//   var parsedNumber1 = parseInt(number1, 10)
//   if (isNaN(parsedNumber1)) {
//     return false
//   } else {
//     return parsedNumber1
//   }
// }

// var number1 = askAndParse()

// var number2 = askAndParse()

// if (number1 === false || number2 === false) {
//   console.log('Error no ingresaste un número')
// } else {
//   console.log('La suma es ', number1 + number2)

//   console.log('La resta es ', number1 - number2)

//   console.log('La multiplicación es ', number1 * number2)

//   if (number2 === 0) {
//     console.log('No se puede dividir por cero')
//   } else {
//     console.log('La división es ', number1 / number2)
//   }
// }

// SCOPE

// var firstName

// firstName = 'Pepe'

// function showMessage1 () {
//   var firstName

//   firstName = 'Juan'

//   console.log(firstName)
// }

// function showMessage2 () {
//   var firstName

//   firstName = 'Pedro'

//   console.log(firstName)
// }

// console.log(firstName)

// showMessage1()
// showMessage2()

// console.log(firstName)

// function showMessage2 () {
//   var firstName

//   firstName = 'Pedro'

//   console.log(firstName)
// }

// function showMessage1 () {
//   var firstName

//   firstName = 'Juan'

//   console.log(firstName)

//   // showMessage2()

//   // console.log(firstName)
// }

// var firstName

// firstName = 'Juan'

// function showMessage2 () {
//   var firstName = 'María'

//   showMessage1()
// }

// function showMessage1 () {
//   console.log(firstName)
// }

// showMessage2()

// var showMessage = function () {
//   console.log('Hola')
// }

// console.log(showMessage)

// showMessage = [ { name: 'Pepe' }, 2, null, [ false, true ] ]

// console.log(showMessage)

// function twoValuesReturn (number1, number2) {
//   var number1Mul = number1 * number1
//   var number2Mul = number2 * number2

//   return [ number1Mul, number2Mul ]
// }

// var result = twoValuesReturn(2, 3)

// console.log(result[0], result[1])

function twoValuesReturn (number1, number2) {
  var number1Mul = number1 * number1
  var number2Mul = number2 * number2

  return { number1: number1Mul, number2: number2Mul }
}

var result = twoValuesReturn(2, 3)

console.log(result.number1, result.number2)

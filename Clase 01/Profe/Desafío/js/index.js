var number1 = prompt('Ingeres el primer número')

var number2 = prompt('Ingeres el segundo número')

var parsedNumber1 = parseInt(number1, 10)

var parsedNumber2 = parseInt(number2, 10)

console.log('La suma es ', parsedNumber1 + parsedNumber2)

console.log('La resta es ', parsedNumber1 - parsedNumber2)

console.log('La multiplicación es ', parsedNumber1 * parsedNumber2)

if (parsedNumber2 === 0) {
  console.log('No se puede dividir por cero')
} else {
  console.log('La división es ', parsedNumber1 / parsedNumber2)
}

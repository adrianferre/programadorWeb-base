// Pido la opración a realizar
var operation = prompt('Ingrese la operación a realizar, sum, res, mul o div')

// Pido el primer número
var number1 = prompt('Ingerese el primer número')
var parsedNumber1 = parseFloat(number1, 10)

// Pido el segundo número al menos una vez, si la operación es división
// e ingreso cero lo pido de nuevo
var number2
var parsedNumber2

do {
  number2 = prompt('Ingerese el segundo número')
  parsedNumber2 = parseFloat(number2, 10)
} while (operation === 'div' && parsedNumber2 === 0)

// Creo una variable para guardar el resultado
var result

// Comparo la operación elegida por el usuario para calcular el resultado
switch (operation) {
  case 'sum':
    result = parsedNumber1 + parsedNumber2
    break
  case 'res':
    result = parsedNumber1 - parsedNumber2
    break
  case 'mul':
    result = parsedNumber1 * parsedNumber2
    break
  case 'div':
    result = parsedNumber1 / parsedNumber2
    break
  default:
    result = 'Operación incorrecta'
    break
}

// Creo una variable donde voy a guardar el mensaje
// que muestro como resultado de la operación
var message = 'El resultado de la ' + operation + ' es: ' + result

// Muestro el mensaje en consola
console.log(message)

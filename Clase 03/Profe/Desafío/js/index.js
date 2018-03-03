askOperation()

function sum (number1, number2) {
  return number1 + number2
}

function res (number1, number2) {
  return number1 - umber2
}

function mul (number1, number2) {
  return number1 * number2
}

function div (number1, number2) {
  return number1 / number2
}

function askAndParse (order) {
  do {
    var number1 = prompt('Ingerese el ' + order + ' número')
    var parsedNumber1 = parseInt(number1, 10)
  } while (isNaN(parsedNumber1))
  return parsedNumber1
}

function askOperation () {
  var operation = prompt('Ingrese la operacion a realizar, sum, res, mul o div')
  var result
  switch (operation) {
    case 'sum':
      var number1 = askAndParse('primer')
      var number2 = askAndParse('segundo')
      result = sum(number1, number2)
      showResult(operation, result)
      break
    case 'res':
      var number1 = askAndParse('primer')
      var number2 = askAndParse('segundo')
      result = res(number1, number2)
      showResult(operation, result)
      break
    case 'mul':
      var number1 = askAndParse('primer')
      var number2 = askAndParse('segundo')
      result = mul(number1, number2)
      showResult(operation, result)
      break
    case 'div':
      var number1 = askAndParse('primer')
      do {
        var number2 = askAndParse('segundo')
      } while (number2 === 0)

      result = div(number1, number2)
      showResult(operation, result)
      break
    default:
      showError(operation)
      break
  }
}

function showResult (operation, result) {
  console.log('El resultado de la ' + operation + ' es: ' + result)
}

function showError (operation) {
  console.log(operation + ' no es una operación valida')
}

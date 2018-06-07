// Pido el nombre al usuario mediante prompt y creo un mensaje personalizado para mostrar en consola

var name = prompt('Ingrese su nombre', 'Juan')

var message = 'Hola ' + name + '!'

console.log(message)

// Creo una variable con un valor default y le pido al usuario otro para mostrar la suma en consola

var savedValue1 = 10

var userValue1 = prompt('Ingrese un número')

var parsedUserValue1 = parseInt(userValue1, 10)

var operation1 = savedValue1 + parsedUserValue1

var message1 = 'La suma es ' + operation1

console.log(message1)

// Creo una variable con un valor default y le pido al usuario otro para mostrar la suma en consola

var savedValue2 = 10

var userValue2 = prompt('Ingrese un número')

var parsedUserValue2 = parseInt(userValue2, 10)

var operation2 = savedValue2 - parsedUserValue2

var message2 = 'La resta es ' + operation2

console.log(message2)

// Le pido al usuario un valor y luego otro para mostrar la suma en consola

var userValue3 = prompt('Ingrese el primer número')

var parsedUserValue3 = parseInt(userValue3, 10)

var userValue4 = prompt('Ingrese el segundo número')

var parsedUserValue4 = parseInt(userValue4, 10)

var message3 = 'La suma de ambos es' + (parsedUserValue3 + parsedUserValue4)

console.log(message3)

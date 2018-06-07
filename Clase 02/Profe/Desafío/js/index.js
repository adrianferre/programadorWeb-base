// Pido el nombre y la edad
var gender = prompt('Ingrese su género, male, female u other')
var age = prompt('Ingrese su edad')

// Creo una variable en la cual voy a ir acumulando las partes de mi mensaje
var message = 'Hola, '

// Agrego la parte del mensaje relacionada con el género
switch (gender) {
  case 'male':
    message = message + 'Sr. '
    break
  case 'female':
    message = message + 'Sra. '
    break
  case 'other':
    message = message + 'Sx. '
    break
  default:
    message = message + 'Género inválido '
    break
}

// Agrego la parte del mensaje relacionada con la edad
if (age < 18) {
  message = message + 'usted es menor de edad no puede ingresar'
} else if (age >= 18) {
  message = message + 'usted es mayor de edad puede ingresar'
}

// Muestro el mensaje final que esta acumulado en la variable
console.log(message)

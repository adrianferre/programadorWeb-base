# Valor de retorno de una función

El valor de retorno de una función lo que devuelve la función al ser ejecutada. Si la función no tiene valor de retorno devuelve `undefined`.

- Ej: Función con argumentos de entrada y valor de retorno:

```js
function sum(value1, value2) {
  var sum = value1 + value2
  return sum
}

var result = sum(5,4) // Calcula la suma de 5 + 4 y asigna 9 a la variable result

var text = sum('Hola ', 2) // Calcula la suma de 'Hola' + 2 y asigna el string 'Hola 2' a la variable text
```

> La función `sum` recibe dos argumentos y devuelve la suma como valor de retorno. Es importante tener en cuenta que en este caso si le pasamos dos números va a hacer la suma algebraica, pero si al menos uno es un string los concatena, porque la función recibe valores, pero no verifica que sean de tipo number.

```js
function message(firstName, lastName){
  var message = 'Hola ' + firstName + ' ' + lastName
  return message
}

var text = message('Mónica','Perez') // Calcula el mensaje y asigna el string 'Hola Mónica Perez' a la variable text

console.log(text) // Muestra en consola el string 'Hola Mónica Perez'
```

> La función `message` recibe como argumentos `firstName` y `lastName` y devuelve un string con un mensaje de saludo, en este caso `Hola Mónica Perez`.
# Funciones

La funciones son porciones de código que se pueden pensar como un sub algoritmo dentro de nuestro programa. En gral encapsulamos en una función un algoritmo cuando vemos que estamos repitiendo varias veces lo mismo en nuestro código o cuando precisamos ordenar el código porque se vuelve muy difícil de leer.

## Función - function

Una función se declara usando la palabra reservada `function`, espacio el nombre (se aplican las mismas reglas que para los nombres de variables), seguido de paréntesis y corchetes `(){}`, dentro de los paréntesis ingresamos los argumentos de la función y dentro de los corchetes el código que queremos que se ejecute cuando llamamos a la función. Para invocar una función usamos el nombre seguido de paréntesis `()` y dentro de los paréntesis ponemos los parámetros de la función que le pasamos a la función. Las funciones pueden devolver valores de retorno usando la palabra reservada `return` espacio el valor que queremos devolver, en caso de no hacerlo devuelven indefinido `undefined`.

### Función sin argumentos de entrada ni valores de retorno

```js
function sayHello () {
  console.log('Hola!')
}

sayHello() // Muestra en consola el string 'Hola!'

var result = sayHello() // Muestra en consola el string 'Hola!' y asigna undefined a la variable result1
```

> La función `sayHello` no recibe argumentos y cuando es invocada devuelve `undefined` que en el segundo caso se lo asigno a `result` y en el segundo solo la invoco sin asignar. En ambos casos muestra en consola `Hola!`.

### Función con argumentos de entrada, pero sin valores de retorno

```js
function sayMyName(yourName) {
  console.log('Tu nombre es ' + yourName)
}

var myName = 'Mónica'

sayMyName(myName) // Muestra en consola el string 'Tu nombre es Mónica'

sayMyName('Heisenberg') // Muestra en consola el string 'Tu nombre es Heisenberg'

sayMyName(2) // Muestra en consola el string 'Tu nombre es 2'
```

> La función `sayMyName` recibe como argumento una variable `yourName` y cuando es invocada muestra en consola un mensaje que contiene el string `Tu nombre es ` seguido de la variable que recibió como argumento. Es importante notar acá que no es necesario que la variable que le pasamos a la función tenga el mismo nombre que lleva dentro de la función. Por otro lado en el ejemplo también se ve como puedo usar la misma función para imprimir distintos mensajes al llamarla con distintos parámetros.


### Función con argumentos de entrada y valor de retorno

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

### Funciones inmediatamente invocadas - IIFE

Este tipo de funciones tienen como particularidad de que son definidas y llamadas en el mismo momento. Esto se logra encerrando la función entre paréntesis y luego invocándola inmediatamente abriendo y cerrando paréntesis `()`.

### Función IIFE sin argumentos de entrada ni valores de retorno

```js
;(function() {
  
  console.log('Hola')

})() // Esto muestra en consola un 'Hola'
```

> Las IIFE no precisan ser invocadas, porque se llaman inmediatamente después de que se declaran. También es importante tener en cuenta que la IIFE cuando se escribe sin igualar precisa de `;`al principio porque es uno de los 3 casos que lo usan en JavaScript.

### Función IIFE sin argumentos de entrada pero con valor de retorno

Cuando una IIFE es guardada en una variable y tiene valor de retorno, lo que se asigna a la variable es el valor de retorno.

```js
var message = (function() {

  return 'Hola mundo'

})() // Esto asigna el string 'Hola mundo' a la variable message
```

> En este ejemplo lo que sucede es que la función se ejecuta inmediatamente y el valor devuelto por el `return`, en este caso el string `Hola mundo` es asignado a la variable message.

[Siguiente tema](04_01_objetos.md)


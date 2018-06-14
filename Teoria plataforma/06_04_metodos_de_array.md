#	Métodos de Array

Al asignar un valor de tipo Array a una variable implícitamente estamos creando un objeto de tipo Array. Esto hace que dicha variable tenga acceso a propiedades y métodos del objeto Array de JavaScript que nos permiten hacer distintas operaciones de manera más sencilla. Algunos de ellos son:

## Propiedad length

- La propiedad `length` indica la cantidad de elementos que tiene nuestro Array en formato de número entero, si esta vacío devuelve 0.

```js
var numbers = [1,2,3,4]

console.log(numbers.length) // Esto muestra en consola el número 4
```

> Creamos implícitamente un objeto Array y al obtener la propiedad `length` nos devuelve la cantidad de elementos que contiene.

## Método push

- El método `push` nos permite agregar un elemento al final de un Array, modifican el original.

```js
var numbers = [1,2,3,4]

numbers.push(5)

console.log(numbers) // Muestra en consola [1, 2, 3, 4, 5]
```

> El método `push` modifica el Array `numbers` agregandole al final el número 5 pasado por parámetro.

## Método toString

- El método `toString` convierte un Array en un string cuyos valores están separados por comas (','). Importante notar que no modifica el Array original.

```js
var numbers = [1,2,3,4]

var stringNumbers = numbers.toString()

console.log(stringNumbers) // Muestra en consola '1,2,3,4'
```

> El método `toString` devuelve como resultado el Array `numbers` convertido a un String separado por comas, pero sin modificar el original. Este método es el empleado por defecto cuando queremos concatenar un string con un Array usando el operado `+`.

## Método join

- El método `join` convierte un Array en un string cuyos valores están separados por comas el valor que le paso por parámetro al método. Importante notar que no modifica el Array original.

```js
var numbers = [1,2,3,4]

var stringNumbers = numbers.join(' ')

console.log(stringNumbers) // Muestra en consola '1 2 3 4'
```

> El método `join` devuelve como resultado el Array `numbers` convertido a un String separado por espacios (' '), pero sin modificar el original. Si no le paso ningún parámetro lo separa con comas como el método `toString`.

## Método splice

- El método `splice` nos permite modificar una Array eliminando elementos del mismo. El método recibe como primer parámetro el indice a partir del cual eliminar y como segundo parámetro el número de elemento a eliminar.

```js
var numbers = [1,2,3,4]

numbers.splice(2,1)

console.log(numbers) // Muestra en consola [1,2,4]
```

> El método `splice` elimina un elemento desde la posición 2 del Array, modificando el original.


## Método slice

- El método `slice` nos hacer una copia de una parte de un Array, el método recibe como primer parámetro el indice a partir del cual empezar la copia y como segundo parámetro el indice final de la copia (desde donde, hasta donde) el final no esta incluido. Si no le pasamos ningún parámetro devuelve una copia del Array completo (shallow copy).

```js
var numbers = [1,2,3,4]

var numbersCopy1 = numbers.slice(2,4)

console.log(numbersCopy1) // Muestra en consola [3,4]

var numbersCopy2 = numbers.slice()

console.log(numbersCopy2) // Muestra en consola [1,2,3,4]

numbers === numbersCopy2 // Devuelve false
```

> El método `slice` devuelve una copia del Array `numbers` desde la posición 2 hasta la 3 (el 4 no está incluido), esa copia la guardo en la variable `numbersCopy1`. En el segundo caso hace una copia completa del Array `numbers`, esa copia la guardo en la variable `numbersCopy2` y luego la comparo para verificar que son dos Array distintos.


## Método sort

- El método `sort` ordena un Array usando la tabla ASCCI como parámetro de orden.

```js
var numbers = [2,3,1,4]

numbers.sort()

console.log(numbers) // Muestra en consola [1,2,3,4]
```

> El método `sort` modifica el Array `numbers` ordenando lo de menor a mayor.

- El método `sort` también admite una función de comparación que según el resultado que devuelva va ordenando los elementos. Si es negativo van primero, cero los deja en la posición en la que están y positivos los mueve adelante.

```js
var numbers = [4, 2, 5, 1, 3]

numbers.sort(function(a, b) {
  return b - a
})

console.log(numbers) // Muestra en consola [5, 4, 3, 2, 1]
```

> En este caso al usar la función podemos ordenarlo en orden inverso al caso default.


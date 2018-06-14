# Métodos de String

Al asignar un valor de tipo string a una variable implícitamente estamos creando un objeto de tipo String. Esto hace que dicha variable tenga acceso a propiedades y métodos del objeto String de JavaScript que nos permiten hacer distintas operaciones de manera más sencilla. Algunos de ellos son:

## Propiedad length

- La propiedad `length` indica la cantidad de caracteres que tiene nuestro String en formato de número entero, si esta vacío devuelve 0.

```js
var text = 'Hola soy germán'

console.log(text.length) // Esto muestra en consola el número 15
```

> Creamos implícitamente un objeto String y al obtener la propiedad `length` nos devuelve la longitud del texto, en este caso 15 caracteres.

## Método indexOf

- El método `indexOf` nos permite saber la posición de un string que le pasamos por parámetro dentro de nuestro objeto String. Si no lo encuentra devuelve -1, si lo encuentra al igual que los Array me devuelve la posición empezando desde `0` para el primer carácter. Como las comparaciones que venimos haciendo hasta ahora esta también respeta mayúsculas y minúsculas.

```js
var text = 'Hola soy germán'

console.log(text.indexOf('soy')) // Esto muestra en consola el número 5

console.log(text.indexOf('Soy')) // Esto muestra en consola el número -1
```

> En el primer caso encuentra el string `'soy'` en la posición número 5 del Array `text`, y en el segundo caso como el string es `'Soy'` con S mayúscula no lo encuentra y devuelve -1.

## Método toLowerCase

- El método `toLowerCase` nos devuelve el mismo String, pero con todos los caracteres en minúsculas. Importante notar que no modifica el String original.

```js
var text = 'Hola soy GERMÁN'

console.log(text.toLowerCase()) // Esto muestra en consola el 'hola soy germán'

console.log(text) // Esto muestra en consola 'Hola soy GERMÁN'
```

> Al usar el método `toLowerCase` obtenemos el mismo String pero en letras minúsculas y luego comprobamos que no se modifica el String original.

## Método toUpperCase

- El método `toUpperCase` nos devuelve el mismo String, pero con todos los caracteres en mayúsculas. Importante notar que no modifica el String original.

```js
var text = 'Hola soy GERMÁN'

console.log(text.toUpperCase()) // Esto muestra en consola el 'HOLA SOY GERMÁN'

console.log(text) // Esto muestra en consola 'Hola soy GERMÁN'
```

> Al usar el método `toUpperCase` obtenemos el mismo String pero en letras mayúsculas y luego comprobamos que no se modifica el String original.

## Método split

- El método `split` nos permite separar un String mediante un carácter pasado por parámetro en un Array, donde cada posición del Array va a contener las partes del String en el mismo orden. Importante notar que no modifica el String original.

```js
var text = 'Hola soy GERMÁN'

var splitedText = text.split(' ') 

console.log(splitedText) // Esto muestra en consola el Array ['Hola', 'soy', 'GERMÁN']

console.log(text) // Esto muestra en consola 'Hola soy GERMÁN'
```

> Al usar el método `split` pasando le como parámetro el carácter espacio (' ') este nos devolvió un Array con los tres substring que quedaron de la variable `text` original y luego comprobamos que no se modifica el String original.


```js
var numbers = '1,2,3,4,5'

var splitedNumbers = numbers.split(',')

console.log(splitedNumbers) // Esto muestra en consola el Array ['1', '2', '3', '4', '5']
```

> En este caso al usar el método `split` pasando le como parámetro el carácter coma (',') este nos devolvió un Array con los substring que quedaron de dividir la variable `number`. Importante notas que los subtrings son de tipo string también.



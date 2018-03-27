# Tipos de valores

En JavaScript no existen los tipos de variables, pero si los tipos de valores que puede contener o tomar una variable. Es por esto que se lo conoce como un lenguaje débilmente tipado.

## Booleano - `boolean`

Booleano o boolean, solo puede tomar dos valores `true` (verdadero) o `false` (falso). Aunque no se usa tanto como valor de una variable de manera implícita, si muchas veces ciertos valores los convertimos a booleanos para poder tomar decisiones.

```js
var boolean1 = true

var boolean2 = false

```

> Ej: La tecla de luz, si está prendida es `true`, si la apago es `false`.

## Número - `number`

Número o number son los números que usamos en operaciones matemáticas y pueden ser números enteros incluido el cero `0 1 2 3`, decimales `3.1416 2.4` y negativos `-5 -8.3`. Este tipo de valores nos sirven para contar o hacer cálculos matemáticos con ellos.

```js
var intNumber = 3

var floatNumber = 0.87876

var negativeFloatNumber = -5.4

```

> Ej: Una calculadora almacena valores de tipo number para hacer las operaciones.

## Cadena de texto - `string`

Las cadenas de texto o strings son las palabras que contienen, letras `a b C D`, signos `: . @`, saltos de línea `enter`, espacios ` `, o cualquier carácter valido de la tabla [ASCII](http://www.elcodigoascii.com.ar/). Para declarar un string tenemos que escribir el texto entre comillas simples o dobles (se recomienda usar simples según [STJS](https://standardjs.com/)). Con este tipo de valor podemos representar los textos y hacer operaciones para modificarlos o mostrarlos en pantalla. Es importante que tengamos en cuenta que no es lo mismo un número almacenado como string que un number, JavaScript los va a tratar de manera distinta.

```js
var firstName = 'Juan'

var email = 'juan@gmail.com'

var numbers = '1 2 3 4 5 setenta y ocho'

var text = 'The dark side of the moon'
```

> Ej: El email que ingresamos como usuario o los textos que escribimos en los muros de facebook son de tipo string

## Indefinido y Nulo - `undefined` y `null`

- Indefinido o undefined es un valor que nos arroja JavaScript para indicarnos que el valor al cual queremos acceder aún no fue definido, ya sea porque no se le asigno un valor a la variable o porque queremos acceder a la propiedad de un objeto que no existe.

- Nulo o null tiene el mismo significado que undefined en la mayoría de los casos, pero este es un valor que nosotros asignamos a una variable para indicar que no contiene nada o es nula.

```js
var example1 // En este punto la variable tiene el valor indefinido

var example2 = null // Acá yo como usuario le asigno el valor nulo
```

> Ej: Cuando no ingresamos nada en un `prompt()`, el valor que nos devuelve es `undefined`. También una variable sin valor asignado da `undefined`.

## Arreglo - `array`

Un arreglo o array es un caso particular de un objeto en JavaScript, que nos permite tener valores ordenado y acceder a ellos mediante la posición. La otra forma de acceder a la propiedades de un array es el nombre del array seguido de `[]` y poniendo dentro la posición en formato number del elemento al cual queremos acceder, es importante tener en cuenta que la posición dentro del array se cuenta empezando por cero. Los array pueden contener cualquier tipo de valor dentro de ellos incluidos otros arrays y objetos.

```js
var array = [1,2,'Pedro',false]

array[2] // Esto me devuelve el string 'Pedro'

array[3] // Esto me devuelve el boolean false
```

> Ej: La bandeja de entrada del e-mail contiene objetos ,en este caso e-mails, ordenados cronológicamente.

## Objeto - `object`

Un objeto o object es un contenedor que nos permite agrupar variables juntas bajo un mismo concepto. Los valores que pueden contener son todos los permitidos en JavaScript y la forma de acceder es a través de las keys o llaves del objeto. Un objeto se declara abriendo y cerrando llaves `{ }`, dentro de las llaves se ponen las keys del objeto y con dos puntos `:` se le asignan valores a esas keys, de la misma manera que usábamos el `=` en las variables. Para acceder a las propiedades de un objeto existen dos maneras, una es el nombre del objeto seguido de un `.` y luego el nombre de la key y la otra forma es el nombre del objeto seguido de `[]` y poniendo dentro de los `[]` el nombre en formato string de la key que queremos acceder.

```js
var user = {
  firstName: 'Juan',
  age: 25,
  address: 'Calle falsa 1234'
}

user.firstName // Accedo a la propiedad firstName del objeto user, devuelve 'Juan'
user.age // Accedo a la propiedad age del objeto user, devuelve 25
user['address'] // Accedo a la propiedad address del objeto user, devuelve 'Calle falsa 1234'
```

> Ej: Un contacto de la agenda que contiene información como el nombre, la dirección, el número de teléfono, el cumpleaños, etc. de alguien en particular es un objeto.
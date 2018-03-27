# Operadores aritméticos

## Asignación - assignment

El operador de asignación `=` nos permite asignar un valor a una variable, todo lo que esta a la derecha del igual se le asigna a la variable de la izquierda. 

```js
var total 

total = 2.5 // Asigno el valor number 2.5 a la variable total

var message = 'Hola mundo!' // Asigno el valor string 'Hola mundo!' a la variable message
```

En caso de que lo que se encuentra a la derecha precise realizar algún calculo este se hace primero y luego se asigna el valor a la variable.

```js
var total = 2 + 2 // Calculo la operación y asigno el valor de tipo number 4 a la variable total
```

## Adición y Concatenación - addition y concat

El símbolo `+` en JavaScript nos permite hacer dos operaciones distintas dependiendo de los elementos que interactúen. 

### Adición - addition

La adición es la operación de la suma matemática de valores, para esto es necesario que todos los elementos sean de tipo number o booleanos. En caso de `false` o `true` los toma como 0 y 1 respectivamente.

```js
var number1 = 2.5

var number2 = 4

number1 + number2 // Esto devuelve el valor de tipo number 6.5

6 + 5.3 // Esto devuelve el valor de tipo number 11.3

var total 

total = true * 5 // Este devuelve el valor de tipo number 5 y se lo asigna a la variable total
```

### Concatenación - concat

La otra operación es la concatenación o unión de cadenas de texto, esto se logra teniendo al menos uno de los elementos de tipo string en la operación. Si los dos valores son string los uno directo y sino lo que hace JavaScript es tratar de convertir los valores no numéricos a string y luego juntarlos en uno solo.

```js
'Hola ' + 'mundo' // Esto devuelve el string 'Hola mundo'

'Hola ' + 234 // Esto devuelve el string 'Hola 234'

'Hola ' + true // Esto devuelve el string 'Hola true'

var firstName = 'Juan'

var message = 'Hola ' + firstName // Esto concatena el string 'Hola ' con el string de la variable firstName y se lo asigna a la variable message, guardando el string 'Hola Juan' en la misma
```

## Substracción - subtraction

La resta se define con el símbolo `-` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`.

```js
var subtotal  = 8

var total = subtotal - 10 // Esto devuelve el valor de tipo number -2 y se lo asigna a la variable total

5 - '2' // En este caso la resta entre el number 5 y el string convertido a number 2 y devuelve el number 3

2 - 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

## Multiplicación - multiplication

La multiplicación se define con el símbolo `*` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`.

```js
var subtotal  = 5

var total = subtotal * 10 // Esto devuelve el valor de tipo number 50 y se lo asigna a la variable total

2 * '3' // En este caso la multiplicación entre el number 2 y el string convertido a number 3 y devuelve como resultado el number 6

2 * 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

## División - division

La división se define con el símbolo `/` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`. En caso de tratar de dividir por cero el resultado que devuelve es Infinity.

```js
var subtotal  = 50

var total = subtotal / 10 // Esto devuelve el valor de tipo number 5 y se lo asigna a la variable total

6 - '2' // En este caso la resta entre el nomber 6 y el string convertido a number 2 y devuelve como resultado el number 4

2 / 0 // Devuelve Infinity

2 / 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

## Módulo - modulus

El módulo es un operador que nos permite saber el resto de una división entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`. 
Este operador nos sirve por ejemplo para saber si un número es par o impar, haciendo el módulo de 2.

```js
5 % 2 // En este caso devuelve el valor de tipo number 1, por lo cual el número es impar

10 % 2 // En este caso devuelve el valor de tipo number 0, por lo cual el número es par

10 % '5' // En este caso devuelve el valor de tipo number 0, por lo cual el número es divisible por 5 sin resto.

10 % 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

## Incremental - increment

El operador incremental `++` nos sirve para sumarle un 1 al valor de una variable number. Si el valor de la variable es de tipo string lo va a tratar de convertir a number y sumarle `1`, si falla la variable queda con el valor NaN asignado. Esta es una manera rápida de hacer la operación `i = i + 1`.

```js
var subtotal = 5

subtotal++ // Esto es equivalente a subtotal = subtotal + 1, la variable subtotal queda con el valor de tipo number 6

var total = '2'

total++ // Esto es equivalente a total = total + 1, la variable total queda con el valor de tipo number 3

var text = 'Hola'

text++ // Como el string 'Hola' no se puede convertir a number esto devuelve NaN y se lo asigna a la variable text
```

## Decremental - decrement

El operador decremental `--` nos sirve para restarle un 1 al valor de una variable number. Si la el valor de la variable es de tipo string lo va a tratar de convertir a number y restarle `1`, si falla la variable queda con el valor NaN asignado.

```js
var subtotal = 5

subtotal-- // Esto es equivalente a subtotal = subtotal - 1, la variable subtotal queda con el valor de tipo number 4

var total = '2'

total-- // Esto es equivalente a total = total - 1, la variable total queda con el valor de tipo number 1

var text = 'Hola'

text-- // Como el string 'Hola' no se puede convertir a number esto devuelve NaN y se lo asigna a la variable text
```
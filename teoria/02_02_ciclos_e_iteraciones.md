# Ciclos

Los ciclos nos permiten repetir una parte del código una cierta cantidad de veces.

## For

El ciclo For se declara usando la palabra reservada `for` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se escribe la inicialización de la variable (que se ejecuta solo la primera vez), la condición de corte del ciclo que se evalúa antes de ejecutar cada porción de código y la modificación de la variable que se asigna luego de cada ejecución, y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera.

```js
for(var i = 1 ; i < 10 ; i++){
  console.log(i)
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 10`.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto nos da como resultado que se muestran en consola los números del 1 al 9 (la condición corta en `i < 10`).

Los ciclos For suelen ser muy empleados para recorrer arrays, de la siguiente forma:

```js
var daysOfTheWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysWeek[i]
  console.log(day)
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en cero `var i = 0`, que es la primera posición del array.
2. Verifica que se cumpla la condición booleana `i < daysOfTheWeek.length`, en este caso el largo del array es 7.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `day`, que contiene el día de la semana en la esa posición `var day = daysWeek[i]`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto da como resultado que se muestre en consola todos los días de la semana que están cargados en el array, respetando el orden.

## While

El ciclo While se declara usando la palabra reservada `while` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se escribe la condición de corte del ciclo y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera. Es importante poner en los paréntesis una condición de corte que se deje de cumplir en algún momento para evitar generar un ciclo infinito.

```js
var i = 1

while(i < 10){
  console.log(i)

  i++
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 10`.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto nos da como resultado que se muestran en consola los números del 1 al 9 (la condición corta en `i < 10`).

## Do while

El ciclo Do while se declara usando la palabra reservada `do` seguida de llaves `{}`, la palabra reservada `while` y paréntesis `()`, dentro de los paréntesis se escribe la condición de corte del ciclo que se evalúa en cada ciclo, excepto la primera vez y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera. Es importante poner en los paréntesis una condición de corte que se deje de cumplir en algún momento, para evitar generar un ciclo infinito.

```js
var i = 1

do{
  console.log(i)

  i++
}while(i > 10)
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
3. Le suma un 1 a la variable `i++`.
4. Verifica que se cumpla la condición booleana `i > 10`, como la condición no se cumple termina el ciclo.

> Esto nos da como resultado que se muestran en consola solo el número 1.

El Do While nos permite por ejemplo pedir un dato y volver a pedirlo hasta que sea el esperado como en el siguiente ejemplo.

```js
var value

do{
  value = promp('Ingrese un valor mayor a 5')

}while(value <= 5)

console.log(value)
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `value`.
2. Ejecuta el código dentro de las llaves pidiendo le al usuario que ingrese un valor y lo asigna a la variable `value`.
3. Verifica que se cumpla la condición booleana `value <= 5`, si el usuario ingresa un número menor a 5 se va a ejecutar el código entre llaves pidiendo le al usuario que ingrese un valor hasta que el valor ingresado no cumpla con la condición `value <= 5`.
4. Imprime el valor ingresado por el usuario en consola.

> Esto nos da como resultado que se muestran en consola el valor ingresado por el usuario, que siempre va a ser mayor a 5.

[Siguiente tema](02_03_sentencias_break_y_continue.md)
# Condicionales

Los condicionales nos permiten evaluar una condición y decidir seguir según el resultado que camino seguir dentro del código.

## If

El If se declara usando la palabra reservada `if` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se coloca una expresión booleana para evaluar y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera.

```js
if(firstName === 'Juan'){
  console.log('Tu nombre es Juan')
}

console.log('Gracias!')
```

> En este código el `if` evalúa si la variable `firstName` contiene el string `Juan`, si es así muestra en consola `Tu nombre es Juan`, por otro lado siempre se va a mostrar en consola un `Gracias!` no importa el valor de `firstName` porque esta por fuera de las llaves `{}` del `if`.

## If else

El If Else se declara usando la palabra reservada `if` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se coloca una expresión booleana para evaluar y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera, seguido de esto se pone la palabra reservada `else` y llaves de nuevo `{}`, dentro de las cuales se coloca el código que se va a ejecutar si la condición booleana es falsa.

```js
if(firstName === 'Juan'){
  console.log('Tu nombre es Juan')
} else {
  console.log('Tu nombre no es Juan')
}
```

> En este código el `if` evalúa si la variable `firstName` contiene el string `Juan`, si es así muestra en consola `Tu nombre es Juan`, en caso contrario muestra en consola `Tu nombre no es Juan`. Es importante ver que siempre se va a cumplir un caso o el otro, pero es imposible que se cumplan ambos.

## Switch

El Switch se declara usando la palabra reservada `switch` seguida de paréntesis y llaves `(){}` dentro de los paréntesis se coloca el valor que se quiere comparar y dentro de las llaves se colocan los casos contra los cuales se va a comparar el valor. Cada caso se escribe usando la palabra reservada `case` espacio el caso a evaluar y dos puntos `:`, luego de eso se escribe el código a ejecutar y se termina el caso con `break`. El switch admite también el caso `default:` que se va a ejecutar siempre que fallen todas las otras opciones. La comparación entre los casos y el valor se hace haciendo estrictamente igual `===`.

```js
switch (resultOfGame) {
  case 'Ganó':
    console.log('Se le suman 3 puntos')
    break
  case 'Perdió':
    console.log('Se le suma 1 punto')
    break
  case 'Empató':
    console.log('No se le suma ningún punto')
    break
  default:
    console.log('El resultado no es correcto')
    break
}
```

> En el ejemplo vemos como el valor que se ingresa es el resultado de un partido de fútbol `resultOfGame` y según cual sea se muestra en consola los puntos ganados por el jugardor. También dejamos el caso `default` por si el usuario se equivoca al ingresar el resultado.

Cuando multiples casos deben ejecutar el mismo código lo que se hace es poner los casos `case` uno a continuación del otro y dejando luego del último el código a ejecutar, como en el siguiente ejemplo:


```js
switch (dayOfTheWeek) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Es un día hábil')
    break
  case 'Sábado':
  case 'Domingo':
    console.log('Es un día de fin de semana')
    break
  default:
    console.log('El día ingresado no es valido')
    break
}
```

En este ejemplo siempre que el día ingresado sea Lunes, Martes, Miércoles, Jueves o Viernes se muestra en consola `Es un día hábil`, si ingresó Sábado o Domingo se muestra en consola `Es un día de fin de semana` y si ingresó cualquier otra cosa se muestra `El día ingresado no es valido`.


# Parámetros que recibe una función

Los parámetros son aquellos valores que una función tiene definidos dentro de la misma, y que recibe al momento de iniciar la ejecución. Esto nos permite que una misma función pueda arrojar varios valores como resultado simplemente cambiando los parámetros de entrada.

- Ej: Función con argumentos de entrada, pero sin valores de retorno:

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
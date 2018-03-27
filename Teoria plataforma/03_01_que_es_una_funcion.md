# ¿Qué es una función?

La funciones son porciones de código que se pueden pensar como un sub algoritmo dentro de nuestro programa, que puede tener parámetros de salida y de entrada. Las funciones son esenciales ya que nos permiten encapsular una parte de nuestro algoritmo y poder así reutilizarlo o también ordenar nuestro código.

# Función

Una función se declara usando la palabra reservada `function`, espacio el nombre (se aplican las mismas reglas que para los nombres de variables), seguido de paréntesis y corchetes `(){}`, dentro de los paréntesis ingresamos los argumentos de la función y dentro de los corchetes el código que queremos que se ejecute cuando llamamos a la función. Para invocar una función usamos el nombre seguido de paréntesis `()` y dentro de los paréntesis ponemos los parámetros de la función que le pasamos a la función. Las funciones pueden devolver valores de retorno usando la palabra reservada `return` espacio el valor que queremos devolver, en caso de no hacerlo devuelven indefinido `undefined`.

- Ej: Función sin argumentos de entrada ni valores de retorno:

```js
function sayHello () {
  console.log('Hola!')
}

sayHello() // Muestra en consola el string 'Hola!'

var result = sayHello() // Muestra en consola el string 'Hola!' y asigna undefined a la variable result1
```

> La función `sayHello` no recibe argumentos y cuando es invocada devuelve `undefined` que en el segundo caso se lo asigno a `result` y en el segundo solo la invoco sin asignar. En ambos casos muestra en consola `Hola!`.
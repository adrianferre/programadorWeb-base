## Función constructora y new

Una función constructora se declara usando la palabra reservada `function`, espacio el nombre (se aplican las mismas reglas que para los nombres de variables, con la salvedad de que por convención se usa en PascalCase es decir empezando con la primera letra mayúsculas y siguiendo el resto de las palabras también con la primera letra en mayúscula), seguido de paréntesis y corchetes `(){}`, dentro de los paréntesis ingresamos los argumentos que se van a usar en la construcción y dentro de los corchetes el código que va a incluir los métodos y propiedades del objeto. Para crear una instancia de un objeto con nuestra función constructora usamos la palabra reservada `new`, espacio, el nombre de la función, seguido de paréntesis `()` y dentro de los paréntesis ponemos los parámetros con los cuales vamos a construir nuestro objeto.

```js
function User(name){
  // Acá se definen los métodos y propiedades de los objetos
}

var user1 = new User('Mónica') // Esto crea un nuevo objeto de tipo User, que recibe como parámetro al momento de su construcción el string 'Mónica'
var user2 = new User('Mónica') // Esto crea un nuevo objeto de tipo User, que recibe como parámetro al momento de su construcción el string 'Mónica'
var user3 = new User('Pedro') // Esto crea un nuevo objeto de tipo User, que recibe como parámetro al momento de su construcción el string 'Pedro'

user1 === user2 // Esto devuelve false, porque las instancias son distintas por mas que reciban los mismos parámetros

user1 === user3 // Esto devuelve false, porque las instancias son distintas

```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user1`, se repite este paso con `user2`y `user3`. Estos objetos no tiene ningún método, pero si tienen una propiedad privada que es la variable `name`. En el código creamos tres instancias de objetos `User`, usando la misma función constructora para comprobar que siempre crea objetos nuevosy distintos entre sí, sin embargo todos comparten los mismos métodos y propiedades.

[Más info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
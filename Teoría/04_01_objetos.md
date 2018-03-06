# Objetos

Los objetos en JavaScript se crean mediante funciones constructoras que se escriben igual que las funciones normales, pero se instancian como objetos mediante la palabra reservada `new`. Al crear una nueva intancia se asegura que siempre se crea un nuevo objeto totalmente distinto a otra instancia del mismo, pero que comparte métodos y propiedades.

## Función constructora

Una función constructora se declara usando la palabra reservada `function`, espacio el nombre (se aplican las mismas reglas que para los nombres de variables, con la salvedad de que se escriben en PascalCase es decir empezando con la primera letra mayúsculas y siguiendo el resto de las palabras también con la primera letra en mayúscula), seguido de paréntesis y corchetes `(){}`, dentro de los paréntesis ingresamos los argumentos que se van a usar en la construcción y dentro de los corchetes el código que va a incluir los métodos y propiedades del objeto. Para crear una instancia de un objeto con nuestra función constructora usamos la palabra reservada `new`, espacio, el nombre de la función, seguido de paréntesis `()` y dentro de los paréntesis ponemos los parámetros con los cuales vamos a construir nuestro objeto.

```js
function User(name){
  // Acá se definen los métodos y propiedades de los objetos
}

var user = new User('Mónica') // Esto crea un nuevo objeto de tipo User, que recibe como parámetro al momento de su construcción el string 'Mónica'
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es guardado en la variable `user`. Este objeto no tiene ningún método, pero si tiene una propiedad privada que es la variable `name`.

[Siguiente tema](04_02_propiedades_de_los_objetos)
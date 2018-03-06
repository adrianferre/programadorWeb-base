# Métodos de los objetos

Los métodos de los objetos son todas aquellas funciones definidas dentro de la función constructora o por fuera en el prototype. Estos métodos pueden ser públicos o privados dependiendo de como fueron definidos.

## Métodos privados

Los métodos privados son aquellas que la función constructora tiene definidos y usa dentro de su definición, pero que no pueden ser llamados por fuera del scope de la función. Estos métodos tienen acceso a las propiedades privadas de la función, pero no las publicas porque el contexto del `this` se define luego de instanciar el objeto con la palabra `new`.

```js
function User (name) {
  this.age = 45

  function showInfo () {
    console.log('Hola mi nombre es ', name, ' y mi edad es ', this.age)
  }

  function addYear () {
    this.age = this.age + 1
  }

  showInfo()

  addYear() // Esta función no cambia la propiedad publica age, porque se llama al crear el objeto.
}

var user = new User('Mónica') // Muestra en consola 'Hola mi nombre es  Mónica y mi edad es undefined',
// porque showInfo se ejecuta dentro de la función constructora al momento de generar el objeto.

console.log(user.age) // Muestra en consola el number 45

user.addYear() // Muestra el error user.addYear is not a function y rompe el código
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user`. Este objeto tiene la propiedad publica age y los métodos privados `showInfo` y `addYear`. Estos métodos pueden ser llamados dentro de la función y se ejecutan, pero no van a modificar ni mostrar las propiedades publicas definidas en el `this`. Al mostrar en consola `user.age` vemos que el método `addYear` no pudo modificar la propiedad publica `age`, al igual que el método `showInfo` no pudo mostrarla en consola. Lo otro que también sucede es que al tratar de llamar al método `addYear` por fuera de la función constructora el código se rompe generando un error.

## Métodos públicos

Los métodos públicos son aquellas que la función constructora tiene definidos y agregados en el `this`, permitiendo que sean llamados por fuera de la función. Estos métodos tienen acceso a las propiedades privadas de la función y también las publicas, porque son llamados luego de instanciar el objeto con la palbra `new` y definir el contexto de `this`.

```js
function User (name) {
  this.age = 45

  this.showInfo = function () {
    console.log('Hola mi nombre es '+ name+ ' y mi edad es '+ this.age)
  }
  
  this.addYear = function(){
    this.age = this.age + 1
  }

}

var user = new User('Mónica') // Crea una nueva instancia de un objeto User

console.log(user.age) // Muestra en consola el number 45

user.addYear() // Agrega uno a la propiedad publica age

user.showInfo() // Muestra en consola 'Hola mi nombre es Mónica y mi edad es 46'
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user`. Este objeto tiene la propiedad publica age y los métodos publicos `showInfo` y `addYear`. Estos métodos pueden ser llamados por fuera de la función y se ejecutan, permitiendo leer y modificar las propiedades publicas y privadas de la función constructora. Cuando ejecutamos el método `addYear` y luego el método `showInfo` vemos que pueden acceder tanto a la propiedad privada `name`, como a la publica `age` y modificarla.



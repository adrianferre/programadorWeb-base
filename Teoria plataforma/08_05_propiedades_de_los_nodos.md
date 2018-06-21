# Propiedades de los nodos

- Los nodos tiene propiedades o atributos (los mismo atributos de HTML) que pueden tanto devolver un valor como modificarse. Esto se puede hacer accediendo a la propiedad correspondiente de los nodos así como modificando esa propiedad. Los atributos o propiedades disponibles van a depender del tipo de elemento HTML que estemos manipulando.

```html
<h1 id="title"></h1>
```

```js
var id = document.getElementById('title').id

console.log(id) // Muestra en consola el string title

document.getElementById('title').id = 'pato'
```

> En el código vemos tanto como acceder al valor de la propiedad Id, así como modificarlo. El resultado final es que el HTML queda asi -> `<h1 id="pato"></h1>`



```html
<li id="list-item"></li>
```

```js
document.getElementById('text-input').className = 'list-group-item'
```

> En el código vemos como asigna la clase `list-group-item` el nodo `<li>`, esta clase se va agregar a otras que se encuentren en el nodo. El elemento quedaría así -> `<li id="list-item" class="list-group-item"></li>`


```html
<input type="text" id="text-input">
```

```js
var value = document.getElementById('text-input').value

console.log(value) // Muestra en consola el valor que haya ingresado el usuario en el  input

document.getElementById('text-input').value = ''
```

> En el código vemos tanto como acceder al valor de la propiedad value de un input que es el valor que el usuario haya ingresado en el campo. Depsués en la siguiente línea lo que hacemos es asignarle el string vacío para borrar lo que estuviera en el input.
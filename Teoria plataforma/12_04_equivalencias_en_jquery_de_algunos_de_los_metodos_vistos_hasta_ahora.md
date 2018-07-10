# Equivalencias en jQuery de algunos de los métodos y propiedades vistos hasta ahora


## Buscar un nodo por su Id

Vanilla JavaScript

```js
var inputNode = document.getElementById('firstName')
```

jQuery

```js
var inputNode = $('#firstName')
```

> Es importante aclarar que el nodo que obtenemos a través de jQuery no es el mismo tipo de nodo que uno de Vanilla JavaScript. Este nodo obtenido tiene métodos propios de jQuery que no posee un nodo de JavaScript. Por otro lado jQuery siempre devuelve un array por más que el selector sea un Id.

## Buscar nodos por clases

Vanilla JavaScript

```js
var validNodes = document.getElementsByClassName('is-valid')
```

jQuery

```js
var validNodes = $('.is-valid')
```

> Es importante aclarar que el array de nodos que obtenemos a través de jQuery no es el mismo tipo de nodos de Vanilla JavaScript. Estos nodos obtenidos tienen métodos propios de jQuery que no poseen los nodos de JavaScript.

## Escuchar el evento click

Vanilla JavaScript

```js
var buttonNode = document.getElementById('button')

buttonNode.onclick = submitInfo
```

jQuery

```js
var buttonNode = $('#button')

buttonNode.click(submitInfo)
```

> En el caso de jQuery la función se pasa como un parámetro dentro del método `click()`.

## Escuchar el evento blur

Vanilla JavaScript

```js
var inputNode = document.getElementById('firstName')

inputNode.onblur = validateField
```

jQuery

```js
var inputNode = $('#firstName')

inputNode.blur(validateField)
```

> En el caso de jQuery la función se pasa como un parámetro dentro del método `blur()`.

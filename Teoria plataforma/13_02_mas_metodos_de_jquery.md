# Más métodos de jQuery

## Append

El método `.append()` permite agregar un string con formato HTML como el último elemento de un contenedor. Es similar al `.appendChild()` de Vanilla JavaScript, pero no es necesario crear el nodo previamente, lo resuelve a partir de un string como el `innerHTML`.

```html
<ul>
  <li id="1">Item 1</li>
  <li id="2">Item 2</li>
</ul>
```


```js
$('main-list').append('<li id="3">Item 3</li>')
```

> Agregar un elemento `<li>` al final de la lista en el DOM con el texto `Item 3` y el id `3`, justo debajo del segundo item.

## Next

El método `.next()` devuelve nodo de jQuery que esta debajo el nodo de referencia.

```html
<ul>
  <li id="1">Item 1</li>
  <li id="2">Item 2</li>
</ul>
```

```js
var liNode = $('#1').next()
```

> En la variable `liNode` se guarda el nodo de Id `2`.

## Remove

El método `.remove()` elimina el nodo de jQuery sin necesidad de buscar el nodo padre.

```html
<ul>
  <li id="1">Item 1</li>
  <li id="2">Item 2</li>
</ul>
```

```js
$('#2').remove()
```

> Elimina el nodo de Id `2` de el DOM.

## Parent

El método `.parent()` devuelve el nodo de jQuery que es padre del nodo referencia.

```html
<ul>
  <li id="1">Item 1</li>
  <li id="2">Item 2</li>
</ul>
```

```js
var parentNode = $('#1').parent()
```

> La variable `parentNode` guarda el nodo `ul` que es padre del `li`.

## Css

El método `.css()` permite cambiar los estilos del nodo, cambiando alguna propiedad de css. Recibe como primer parámetro la propiedad y como segundo parámetro el valor

```html
<ul>
  <li id="1">Item 1</li>
  <li id="2">Item 2</li>
</ul>
```

```js
$('#1').css('color','red')
```

> Cambia el color de letra del primer item a rojo.
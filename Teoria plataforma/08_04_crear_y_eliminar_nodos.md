#	Crear y eliminar nodos

- Para poder agregar o eliminar elementos de nuestro HTML existen distintos métodos o propiedades que podemos utilizar, nosotros vamos a ver algunos a continuación.

## Crear un elemento o etiqueta html

- Con el método `createElement()` vamos a poder crear etiquetas de html, este método recibe como parámetro el nombre de la etiqueta en formato string y devuelve como resultado el nodo.

```js
var paragraphNode = document.createElement('p')
```

> El método recibe como parámetro el nombre de la etiqueta que queremos crear (no se incluyen los menor `<` y mayor `>` de apretura de la etiqueta), y nos devuelve el nodo ya creado para que luego lo podamos modificar o agregar directamente al DOM. Un dato importante es que si no lo agregamos al documento nunca lo vamos a ver en pantalla.

## Cambiar el contenido de un elemento

- La propiedad `innerHTML` nos permite cambiar el contenido de un nodo asignandole un string, esto pisa o elimina cualquier otro elemento dentro del nodo.

```js
var paragraphNode = document.createElement('div')

paragraphNode.innerHTML = '<p>Soy un párrafo</p>'
```

> Primero creamos un nodo de etiqueta `<div>` con el método `createElement` y luego cambiamos su contenido al modificar la propiedad `innerHTML` y asignarle el `<p>Soy un párrafo</p>`, esto nos va dar como resultado un nodo con una etiqueta `div`, que adentro va a tener una etiqueta `p` con el texto 'Soy un párrafo'. Quería algo así:

```html
<div>
  <p>Soy un párrafo</p>
</div>
```

## Agregar un nodo dentro de otro

- El método `appendChild()` nos va a permitir agrega un nodo dentro de otro, recibe como parámetro un nodo y lo agrega dentro del elemento que llamo el método. Este método es muy útil para cuando queremos agregar elementos uno por uno, el caso típico es una lista que proviene de un Array de javaScript.

```js
var list = ['Elemento 1','Elemento 2','Elemento 3']

var listNode = document.createElement('ul')

var listItemNode

for(var i = 0; i < list.length; i++){
  listItemNode = document.createElement('li')

  listItemNode.innerHTML = list[i]

  listNode.appendChild(listItemNode)
}
```

> En este caso creo primero el nodo `ul` que va a contener a todos los elmentos de la lista y luego itero el Array `list` para crear un nuevo nodo `li` y agregarlo al `lu` en cada pasada del for. Esto daría como resultado lo siguiente:

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

## Acceder al nodo padre

- Con la propiedad `parentNode` vamos a poder acceder al nodo padre de un nodo.

```html
<div>
  <p id="paragraph">Soy un párrafo</p>
</div>
```

```js
var paragraph = document.getElementById('paragraph')

paragraph.parentNode.innerHTML = '<h1>Soy un título</h1>'
```

> Al usar la propiedad `parentNode` accedo al nodo `div` pudiendo cambiar el contenido del mismo y reemplazarlo por el string `<h1>Soy un título</h1>`. Esto genera como resultado que el HTML quede:

```html
<div>
  <h1>Soy un título</h1>
</div>
```

## Remover un elemento hijo

- El método `removeChild()` nos permite eliminar un nodo que sea hijo de otro, el método recibe como parámetro el nodo que queremos eliminar. En combinación con el `parentNode` nos permite eliminar el mismo elemento que seleccionamos previamente.

```html
<div>
  <p id="paragraph">Soy un párrafo</p>
</div>
```

```js
var paragraph = document.getElementById('paragraph')

paragraph.parentNode.removeChild(paragraph)
```

> Al utilizar este método en combinación con la propiedad `parentNode` podemos eliminar el elemento en cuestión dejando como resultado el `<div></div>` vacío.
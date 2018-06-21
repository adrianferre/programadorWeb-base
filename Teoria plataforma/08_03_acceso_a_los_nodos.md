#	Acceso a los nodos

- Existen varios métodos para acceder a los nodos que utilizan distintas formas de identificarlos puede ser a través del Id, de la clase, del nombre de la etiqueta, etc. Por lo cual con sabiendo alguno de esos datos de nuestro elemento HTML vamos a poder acceder a ese nodo y manipularlo para poder mostrar en pantalla datos dinámicos creados en JavaScript.

## Acceso a los nodos por Id

- El método que vamos a emplear para acceder a un nodo sabiendo su Id es `getElementById()`, este método recibe como parámetro un Id en formato string y devuelve como resultado un solo nodo, porque el Id debería ser único en toda la página.

*Supongamos nuestra página con el siguiente HTML*

```html
<h1 id="main-title"></h1>
```

```js
var titleNode = document.getElementById('main-title')

titleNode.innerHTML = 'Al fin voy a ver algo en mi página'
```

> Este código lo que va a hacer es buscar en la página el elemento HTML con el Id `main-title`, luego voy a guardarlo en la variable `titleNode` y le voy a pedir mediante la propiedad `innerHTML` que el contenido del nodo sea el string 'Al fin voy a ver algo en mi página'. De esta manera el resultado en nuestra pagina es que el elemento de mi página queda así -> `<h1 id="main-title">Al fin voy a ver algo en mi página</h1>` logrando mostrarle al usuario un mensaje en el HTML pero empleando código JavaScript para lograrlo.


## Acceso a los nodos por clase

- El método que vamos a emplear para acceder a un nodo sabiendo su clase es `getElementsByClassName()`, este método recibe como parámetro una clase en formato string y devuelve como resultado array de nodos, porque pueden existir varios nodos con la misma clase.

*Supongamos nuestra página con el siguiente HTML*

```html
<p class="paragraph"></p>
<p class="paragraph"></p>
<p class="paragraph"></p>
```

```js
var paragraphsNodes = document.getElementsByClassName('paragraph')

paragraphsNodes[0].innerHTML = 'Soy el párrafo numero uno'
paragraphsNodes[1].innerHTML = 'Soy el párrafo numero dos'
paragraphsNodes[2].innerHTML = 'Soy el párrafo numero tres'
```

> Este código lo que va a hacer es buscar en la página todos los elementos HTML con la clase `paragraph`, luego voy a guardarlos en la variable `paragraphsNodes` y le voy a pedir mediante la propiedad `innerHTML` que el contenido del elemento cero del Array sea el string 'Soy el párrafo numero uno', luego voy a hacer lo mismo con el elemento uno del Array pero pasando le el string 'Soy el párrafo numero dos' y por último con el elemento dos del Array y el string 'Soy el párrafo numero tres'. De esta manera los elementos `<p>` de nuestra página quedan así:

```html
<p class="paragraph">Soy el párrafo numero uno</p>
<p class="paragraph">Soy el párrafo numero dos</p>
<p class="paragraph">Soy el párrafo numero tres</p>
```


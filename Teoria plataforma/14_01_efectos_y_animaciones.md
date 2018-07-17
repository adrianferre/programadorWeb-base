# Efectos y animaciones

La biblioteca de jQuery cuenta con métodos que nos permiten realizar efectos o animaciones más fácilmente cuando cambiamos elementos en el DOM. En otros casos nos permiten hacer animaciones que no serían posibles en CSS como el cambio entre un `display: none` a un `display: block`.

## Hide

El método `.hide()` nos permite cambiar un elemento que se encuentra con un valor `display` visible a `display: none`. Este cambio lo hace realizando una transición suave que va modificando las propiedades `width`, `height` y `opacity` gradualmente hasta llegar a cero. Esto hace que el elemento se esconda completo en la pantalla en un punto fijo, por defecto este punto es `top: 0; left: 0`. Los parámetros principales que recibe son el tiempo de la animación y una función callback que se llama cuando la misma se completa.

```html
<h1 id="main-title">Harry Potter y la piedra filosofal</h1>
```

```js
$('#main-title').hide(3000, function () {
  console.log('Se completo la animación')
})
```

> El código va a realizar una animación de 3 segundos para ocultar el título en pantalla y luego imprime el mensaje en consola una vez completada.

[Documentación oficial](https://api.jquery.com/hide/)

## Show

El método `.show()` nos permite cambiar un elemento que se encuentra con `display: none` a `display: block` o al valor `display` que tuviera antes de ser ocultado. Este cambio lo hace realizando una transición suave que va modificando las propiedades `width`, `height` y `opacity` gradualmente hasta su valor máximo normal o inicial. Esta hace que el elemento se vea completo en la pantalla desde un punto fijo, por defecto este punto es `top: 0; left: 0`. Los parámetros principales que recibe son el tiempo de la animación y una función callback que se llama cuando la misma se completa.

```html
<h1 style="display: none" id="main-title">Harry Potter y la cámara secreta </h1>
```

```js
$('#main-title').show(3000, function () {
  console.log('Se completo la animación')
})
```

> El código va a realizar una animación de 3 segundos para mostrar el título en pantalla y luego imprime el mensaje en consola una vez completada.

[Documentación oficial](https://api.jquery.com/show/)

## FadeOut

El método `.fadeOut()` nos permite cambiar un elemento que se encuentra con un valor `display` visible a `display: none`. Este cambio lo hace realizando una transición suave que va modificando la propiedad `opacity` gradualmente hasta el valor cero. Esto hace que el elemento se esconda completo en la pantalla, a diferencia del método `.hide()` no modifica el tamaño del elemento. Los parámetros principales que recibe son el tiempo de la animación y una función callback que se llama cuando la misma se completa.

```html
<h1 id="main-title">Harry Potter y el prisionero de Azkaban</h1>
```

```js
$('#main-title').fadeOut(3000, function () {
  console.log('Se completo la animación')
})
```

> El código va a realizar una animación de 3 segundos para ocultar el título en pantalla y luego imprime el mensaje en consola una vez completada.

[Documentación oficial](https://api.jquery.com/fadeOut/)

## FadeIn

El método `.fadeIn()` nos permite cambiar un elemento que se encuentra con `display: none` a `display: block` o al valor `display` que tuviera antes de ser ocultado. Este cambio lo hace realizando una transición suave que va modificando la propiedad `opacity` gradualmente hasta su valor máximo normal o inicial. Esto hace que que el elemento se vea completo en la pantalla, a diferencia del método `.show()` no modifica el tamaño del elemento. Los parámetros principales que recibe son el tiempo de la animación y una función callback que se llama cuando la misma se completa.

```html
<h1 style="display: none" id="main-title">Harry Potter y el cáliz de fuego</h1>
```

```js
$('#main-title').fadeIn(3000, function () {
  console.log('Se completo la animación')
})
```

> El código va a realizar una animación de 3 segundos para mostrar el título en pantalla y luego imprime el mensaje en consola una vez completada.

[Documentación oficial](https://api.jquery.com/fadeIn/)

## SlideUp

El método `.slideUp()` nos permite cambiar un elemento que se encuentra con un valor `display` visible a `display: none`. Este cambio lo hace realizando una transición suave que va modificando la propiedad `height` gradualmente hasta el valor cero. Esto hace que el elemento se esconda completo en la pantalla respetando la posición `top` como punto fijo. Los parámetros principales que recibe son el tiempo de la animación y una función callback que se llama cuando la misma se completa.

```html
<h1 id="main-title">Harry Potter y la Orden del Fénix</h1>
```

```js
$('#main-title').slideUp(3000, function () {
  console.log('Se completo la animación')
})
```

> El código va a realizar una animación de 3 segundos para ocultar el título en pantalla y luego imprime el mensaje en consola una vez completada.

[Documentación oficial](https://api.jquery.com/slideUp/)

## SlideDown

El método `.slideDown()` nos permite cambiar un elemento que se encuentra con `display: none` a `display: block` o al valor `display` que tuviera antes de ser ocultado. Este cambio lo hace realizando una transición suave que va modificando la propiedad `height` gradualmente hasta su valor máximo normal o inicial. Esto hace que el elemento se muestre en la pantalla respetando la posición `top` como punto fijo. Los parámetros principales que recibe son el tiempo de la animación y una función callback que se llama cuando la misma se completa.

```html
<h1 id="main-title">Harry Potter y el misterio del príncipe</h1>
```

```js
$('#main-title').slideDown(3000, function () {
  console.log('Se completo la animación')
})
```

> El código va a realizar una animación de 3 segundos para ocultar el título en pantalla y luego imprime el mensaje en consola una vez completada.

[Documentación oficial](https://api.jquery.com/slideDown/)

## Delay

El método `.delay()` nos permitir retrasar la ejecución del siguiente método de animación que se le aplique a ese elemento, durante un tiempo que le pasamos como parámetro. Es importante que el método de animación tenga un tiempo distinto de cero si no el retraso no se aplica.

```html
<h1 id="main-title">Harry Potter y las Reliquias de la Muerte</h1>
```

```js
$('#main-title').delay(3000).hide(300, function () {
  console.log('Se completo la animación')
})
```

> El código va a esperar 3 segundos, luego realizar una animación de 3 milisegundos para ocultar el título en pantalla y luego imprime el mensaje en consola una vez completada.

[Documentación oficial](https://api.jquery.com/delay/)
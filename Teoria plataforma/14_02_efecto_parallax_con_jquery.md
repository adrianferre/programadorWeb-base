# Efecto parallax con jQuery

El efecto Parallax se logra cuando los elementos se mueven a distintas velocidad en la pantalla cuando el usuario navega por la página, dando la sensación de profundidad. Podemos realizar este efecto en el eje vertical usando algunos métodos de jQuery.

## Scroll

El método `.scroll()` nos permite responder a los desplazamientos del usuario, ya sea usando la rueda del mouse o la barra lateral de scroll. Si lo usamos sobre el objeto `window` nos permite detectar los desplazamientos de la ventana que esta viendo el usuario en ese momento.

```js
$(window).scroll(function () {
  console.log('El usuario se está desplazando')
})
```
> Este código muestra un mensaje en consola cada vez que el usuario realiza un desplazamiento en la página.

[Documentación oficial](https://api.jquery.com/scroll/)

## ScrollTop

El método `.scrollTop()` nos permite saber la distancia en pixeles que tiene un elemento en su borde superior con respecto a su padre, al aplicarlo sobre el objeto `window` podemos saber cuanto se desplazó el usuario en la ventana.

```js
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop()
  console.log(scrollTop)
})
```
> Este código muestra en consola la distancia en pixeles que se desplazó verticalmente el usuario por la ventana, cada vez realiza un desplazamiento en la página.

[Documentación oficial](https://api.jquery.com/scrollTop/)

## Css

El método `.css()` nos permite obtener o modificar una o varias propiedades de CSS de un elemento del DOM.

```js
$('#container').css('height', '300px')
```

> Este código cambia la propiedad `height` de CSS por el valor `300px`, cambiar el alto del elemento.

[Documentación oficial](https://api.jquery.com/css/)

## Parallax

Para lograr el efecto parallax precisamos superponer tres imágenes en HTML usando `position: absolute` y `z-index`, luego cambiamos la propiedad `top` de CSS dinámicamente a medida que el usuario va recorriendo la página.

```js
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop()
  $('#background1').css('top', -(scrollTop * 0.25) + 'px')
  $('#background2').css('top', -(scrollTop * 0.75) + 'px')
  $('#background3').css('top', -(scrollTop * 2) + 'px')
})
```

> Este código hace que el usuario vea que al recorrer la página la velocidad de desplazamiento de las tres imágenes es distinta en este caso `#background1 < #background2 < #background3`.
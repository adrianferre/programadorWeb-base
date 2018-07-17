# Mostrar en consola todos los personajes listados en la API de Star Wars

- Usar la función `getData` para mostrar todos los nombres de los personajes de Star Wars usando el páginado de la API y una función recursiva.

[Video ejemplo](https://www.useloom.com/share/d45fa04d1da44a6c8b644860119b974a)

**Datos de iniciales:**

```js
function getData (url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}
```

**Documentación:**

[SWAPI](https://swapi.co/)

[jQuery AJAX](http://api.jquery.com/jquery.ajax/)
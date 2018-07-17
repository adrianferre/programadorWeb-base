# Mostrar los datos de un personaje de la API de Star Wars

- Usar la función `getData` para mostrar los datos del personaje 5 de la API de Star Wars en consola.

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



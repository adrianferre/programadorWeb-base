# Crea una función que permita levantar una lista del localStorage

- La función tiene que recibir como parámetro una key y buscar en el localStorage por esa key devolviendo un objeto de JavaScript, si no existe el elemento debe devolver un Array vacío. La función tiene que validar los parámetros que recibe, en caso de que alguno sea incorrecto no debe romper ni borrar nada.

```js 
var studentsList = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]
```

[JSON.parse](https://www.w3schools.com/js/js_json_parse.asp)

[localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
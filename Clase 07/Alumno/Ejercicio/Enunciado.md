# Crear una función que permita guardar un Array en el localStorage

- La función tiene que recibir como parámetros una key y un Array y convertir el Array en JSON para guardarlo en el localStorge. La función tiene que validar los parámetros que recibe, en caso de que alguno sea incorrecto no debe romper ni guardar nada.


**Datos de prueba:**

```js 
var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

setLocalList('studentsList', testList) // Guarda la lista en el localStorage en formato JSON
```

**Documentación:**

[JSON.stringify](https://www.w3schools.com/js/js_json_stringify.asp)

[localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
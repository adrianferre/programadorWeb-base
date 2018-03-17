# Realizar una lista de alumnos que tenga las siguientes funcionalidades:

- Deberá tener un formulario para agregar un alumno pidiendo y validando los siguientes datos, en caso de que alguno no cumpla deberá mostrar un error y no agregarlo a la lista hasta que se corrija:
   - `Nombre` es un campo obligatorio.
   - `DNI` tiene que ser un número positivo y ser único (Que no coincida con ninguno ya agregado en la lista).

- Deberá poder eliminar un alumno ingresando el número de DNI, en caso de que no exista no deberá borrarlo.

- Todos los cambios tiene que quedar guardados en el LocalStorage, en el caso de que ya exista una lista guardada me la tiene que mostrar al inicio del programa.

> Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase `is-valid` y mostrar que es invalido agregando la clase `is-invalid`. 

> Para deshabilitar el botón hay que poner en `true` la propiedad `disabled` en el botón y para habilitarlo hay que cambiarla a `false`. Ej: `document.getElementById('myButton').disabled = true`.

> Los objetos guardados en el localStorage deben tener la forma:

```js
var student = {
  firstName: 'Javier',
  dni: 34567829
}
```

- Resultado:

[Resultado](https://www.useloom.com/share/737f633426a54478ac3e4bedca88e7a9)

# Versión extendida:

- Deberá también pedir los siguientes campos y validarlos:
   - `Apellido` es un campo obligatorio.
   - `Email` tiene que tener al menos un `@` y un `.`.

- Deberá permitir buscar un alumno ingresando un text y buscando coincidencias parciales en nombre y apellido, sin importar mayúsculas o minúsculas.

> Los objetos guardados en el localStorage deben tener la forma:

```js
var student = {
  firstName: 'Javier',
  lastName: 'Suárez',
  dni: 34567829,
  email: 'javier@hotmail.com'
}
```

- Resultado:

[Resultado](https://www.useloom.com/share/a778fea2b13e49609f1de19ac8d47359)
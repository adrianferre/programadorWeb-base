# Realizar un programa de alta y baja de alumnos

Durante nuestro primer Workshop vamos a realizar un programa que nos permita gestionar una lista de alumnos de forma local en nuestro navegador, agregar y eliminar. Para esto vamos a emplear todo los temas que vimos hasta ahora y especialmente las funciones que fuimos realizando y estaban marcadas como parte del Workshop I. Los requisitos que deberá cumplir nuestro programa son los siguientes:

## Primera parte

1. Deberá tener un formulario que incluya los siguientes campos y los valide, en caso de que alguno no cumpla deberá mostrar un error y no permitir agregar el alumno hasta que se corrija:

   1. `Nombre` es un campo obligatorio.
   2. `DNI` tiene que ser un número positivo y ser único (Que no coincida con ninguno ya agregado en la lista).

2. Deberá poder eliminar un alumno ingresando el número de DNI, en caso de que no exista no borra nada.

3. Todos los cambios tienen que quedar guardados en el LocalStorage, en el caso de que ya existan alumnos guardados los tiene que mostrar al inicio del programa.

4. Deberá mostrar siempre una lista en pantalla con los alumnos cargados en el sistema que tendrá que ser actualizada en cada cambio.

[Video ejemplo](https://www.useloom.com/share/737f633426a54478ac3e4bedca88e7a9)

> Para deshabilitar el botón hay que poner en `true` la propiedad `disabled` en el botón y para habilitarlo hay que cambiarla a `false`. Ej: `document.getElementById('myButton').disabled = true`.

**Piezas a utilizar:**

- HTML -> Desafío clase 01
- Función constructora `Student` -> Desafío clase 05
- Función `setLocalList` -> Ejercicio clase 07
- Función `getLocalList` -> Desafío clase 07
- Función `createStudentNode` -> Desafío clase 08

**Documentación:**

[Listas de Bootstrap](https://getbootstrap.com/docs/4.1/components/list-group/)

Diagramas provistos en esta misma carpeta mostrando los flujos de `AltaEstudiante` y `BajaEstudiante`

## Segunda parte

- El formulario deberá también incluir los siguientes campos y validarlos:

   - `Apellido` es un campo opcional.
   - `Email` es un campo obligatorio y tiene que tener al menos un `@` y un `.`.

- Deberá permitir buscar un alumno ingresando un texto encontrando coincidencias parciales en nombre y apellido, sin importar mayúsculas o minúsculas.

[Video ejemplo](https://www.useloom.com/share/a778fea2b13e49609f1de19ac8d47359)

**Piezas a utilizar:**

- Función `searchStudentIndexByText` -> Desafío clase 04
- Función `includesText` -> Desafío clase 06
- Función `validateEmailField` -> Desafío clase 09

**Documentación:**

[Listas de Bootstrap](https://getbootstrap.com/docs/4.1/components/list-group/)

Diagrama provisto en esta misma carpeta mostrando el flujo `BúsquedaEstudiante`



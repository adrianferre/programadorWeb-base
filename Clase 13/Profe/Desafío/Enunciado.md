# Validar un formulario usando jQuery

El formulario deberá contar con los siguientes campos y validarlo la primera vez cuando el usuario pierda el foco, pero a partir de la siguiente validarlo en cada cambio del input usando jQuery para manipular el DOM.
   - Nombre: Deberá tener contenido.
   - Email: Deberá contener arroba, punto y contenido.
   - Comentarios: Deberá tener contenido.

- Si existe algún error deberá mostrar el campo en rojo y un mensaje indicando el tipo de error debajo del input.

- Deberá tener un botón para enviar la información que deberá habilitarse solo si todos los campos son validos.

[Video ejemplo](https://www.useloom.com/share/155aa51507d943998b7d0fc827019c00)

> Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase `is-valid` y mostrar que es invalido agregando la clase `is-invalid`. Para deshabilitar el botón hay que poner en `true` la propiedad `disabled` en el botón y para habilitarlo hay que cambiarla a `false`. Ej: `$('myButton').attr('disabled', true)`.

**Documentación:**

[Evento change jQuery](http://api.jquery.com/change/)

[One jQuery](http://api.jquery.com/one/)

[Listado de eventos jQuery](http://api.jquery.com/Types/#Event)
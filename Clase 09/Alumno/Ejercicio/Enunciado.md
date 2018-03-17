# Crear un formulario que valide campos antes de enviar la información

- El formulario deberá contar con los siguientes campos y validarlos cada vez que el usuario pierda el foco.
   - Nombre: Deberá tener contenido.
   - Apellido: Deberá tener contenido.
   - Email: Deberá contener arroba, punto y contenido.

- Deberá tener un botón para enviar la información que deberá habilitarse solo si todos los campos son validos.

> Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase `is-valid` y mostrar que es invalido agregando la clase `is-invalid`. Para deshabilitar el botón hay que poner en `true` la propiedad `disabled` en el botón y para habilitarlo hay que cambiarla a `false`. Ej: `document.getElementById('myButton').disabled = true`.

[Evento onblur](https://www.w3schools.com/jsref/event_onblur.asp)

[Add class](https://www.w3schools.com/howto/howto_js_add_class.asp)

[Remove class](https://www.w3schools.com/howto/howto_js_remove_class.asp)

[Boostrap forms](https://getbootstrap.com/docs/4.0/components/forms/)


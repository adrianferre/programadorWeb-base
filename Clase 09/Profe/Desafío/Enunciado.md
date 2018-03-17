# Usar el formulario del ejercicio anterior y agregarle la siguientes validaciónes

- El formulario deberá contar también con los siguientes campos y validarlos cada vez que el usuario pierda el foco.
   - Contraseña1: Deberá tener un mínimo de 6 caracteres y contenido.
   - Contraseña2: Deberá ser igual a contraseña1.
   - Edad: Deberá ser mayor a 18 años y ser un número.

Si algún campo tiene un error cuando el usuario pierde foco tendrá que agregar un mensaje de error debajo del campo.

> Si existe un error en el onblur agregar un mensaje de error usando el `appendChild`, en caso contrario sacarlo con un `removeChild`.
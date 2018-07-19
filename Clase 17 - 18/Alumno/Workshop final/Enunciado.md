# Realizar una aplicación Front End de Star Wars

- Se deberá realizar todo el Front End para mostrar datos de Star Wars, la aplicación deberá contar con las siguientes secciones y cumplir en cada caso con las funcionalidades:

   - Principal: 
      - Cargarse al inicio y al tocar el link a home.
   - Personajes: 
      - Buscar los personajes en la API y mostrarlos en pantalla en una tabla, la carga de personajes tiene que hacerse mediante paginación. 
      - Traducir el género, el color de ojos, mostrar la altura en cm, el peso en kg y en cada fila el número de orden en que se cargo el personaje. 
      - Deberá tener un botón que al presionarlo guarde el personaje en el localStorage si este no existe y lo borre de la tabla.     
   - Guardados: 
      - Mostrar los personajes que están almacenados en el localStorage.
      - Traducir los mismos campos que la tabla de personajes.
      - Deberá tener un botón que al presionarlo elimine el personaje en el localStorage y lo borre de la tabla.
   - Contacto:
      - Deberá tener un formulario que valide que ninguno de los campos estén vacíos y que el campo mail cumpla con el formato mínimo (un @ y un .). La validación tiene que hacerse al perder foco y luego dinámicamente en cada cambio.
  - Se deberán aplicar los conceptos de SPA, MVC y Module Pattern para organizar el proyecto.

[Video ejemplo](https://www.useloom.com/share/079626a0720c49f5825e5aadca9adc6a)

# Versión extendida

- Filtrar los por los datos que ya están guardados en el localStorage para no mostrarlos en la tabla de personajes.

- Usar el input de la barra de navegación comentado para cargar resultados de la búsqueda en una tabla en el contenedor principal al igual que el resto de las páginas.

**Documentación**

[SWAPI](https://swapi.co/documentation)

**Consideraciones**

> En la carpeta Recursos se encuentran algunos de los archivos necesarios para realizar el proyecto.
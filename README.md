# Curso de Desarrollador Programador Web - Camada XXXX 💾

## Apuntes y ejercicios

Este repositorio es una guía para ir subiendo cada clase que hagamos juntos, por cada una les voy a agregar una carpeta con el número de la clase y adentro van a encontrar:

- Una carpeta **Profe** que va a contener todo lo que yo voy escribiendo en cada clase, separado a su vez en las siguientes carpetas:

  * **En clase**: Todo lo que voy escribiendo en la clase así que no es necesario tomar apuntes, este contenido se los voy a subir después de cada explicación teórica para que lo tengan disponible en los ejercicios y desafíos.

  * **Ejercicio**: El enunciado y la resolución hecha por mí del ejercicio que hacemos durante la clase.

  * **Desafío**: El enunciado y la resolución hecha por mí del desafío que tiene para resolver en casa, normalmente esta resolución la explico y la subo al comienzo de la clase siguiente.

- Una carpeta **Alumno** que es para que la utilicen ustedes y que puede contener las siguientes carpetas:

  * **Ejercicio**: Acá pueden hacer la resolución del ejercicio planteado en clase, en algunos casos les voy a subir parte del ejercicio para que solo tengan que completar una parte.

  * **Desafío**: Acá pueden hacer la resolución del desafío, también en algunos casos les voy a subir parte del ejercicio para que solo tengan que completar una parte.

## Teoría

El curso incluye documentación y videos dentro de la plataforma, pero también vamos a usar la documentación disponible en Internet, las mejores páginas para ver documentación sobre cosas de JavaScript son (w3schools)[https://www.w3schools.com/] y (MDN - Mozilla Developer Network)[https://developer.mozilla.org/es/], después también tienen la página de (jQuery)[https://jquery.com/] para la segunda parte del curso.

## Para poder trabajar cada uno en su maquina y mantenerse actualizados con lo que suba, la idea es que hagan un Fork de este repositorio siguiendo estos pasos:

1. Hagan un Fork del repositorio en su GitHub, arriba a la derecha esta el botón en github.
2. En la consola posicionense en la carpeta donde van a guardar las clases, haciendo cd `<Nombre de la carpeta donde van a guardar el curso>`.
3. Clonen el repositorio en su maquina local usando el comando `git clone <URL_del_repositorio en_su_GitHub>`.
4. Entren al repositorio haciendo `cd programadorWeb-XXXX`. 
5. Luego ejecuten el comando `git remote add profe <URL_del_repositorio en_mi_GitHub>` para vincular su repo con el mio.
6. Verifiquen que tienen agregados los dos origines con el comando `git remote -v`.
7. Cada vez que quieran actualizar el repositorio con lo que subí hagan un `git pull profe master`.
8. Para subir sus cambios usen los mismos comandos que usan siempre `git add .`, `git commit -m "<Comentario>"` y `git push`, los cambios solo se van a subir en su repositorio de GitHub.

> Extra: Si ejecutan el comando `git config --global alias.up 'pull --rebase --autostash'` usen `git up` en vez de `git pull` es mejor para traer los cambios.

Cada vez que actualice la info les voy a avisar por Slack, pero el repositorio va a ser siempre el mismo para que no sea un lío. 🤓

Cualquier duda o material extra que precisen me van preguntado, éxitos! 😁
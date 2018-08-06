# Repaso de los comandos más utilizado de Git y GitHub

Git es un programa de control de versiones y Github es una pagína web que nos permite subir nuestros repos Git, compartirlos y guardarlos on line. A continuación vamos a repasar algunos de los comandos básicos y dejar esto como una cheat sheet en caso de que nos surjan dudas en su uso a lo largo del curso.

## Git add

El comando `git add` nos permite agregar archivos modificados al siguiente commit, en general siempre vamos a usar `git add .` para agregar todos los archivos modificados de una vez.

## Git commit

El comando `git commit -m "Mensaje"` nos va a permitir generar un nuevo commit y escribir un mensaje para identificarlo más tarde, el mensaje es libre y tenemos que tratar de que sea descriptivo de lo que estamos haciendo. Ej: `git commit -m "Fix issue on student's table scroll"`

## Git push

El comando `git push` sube todos los cambios a GitHub, en este paso si nuestro repo no está actualizado nos va a marcar que primero tenemos que bajarnos los cambios del servidor, resolver los conflictos que pudiera producir el merge y luego subirlo.

## Git pull

El comando `git pull` nos permite traar todos los cambios que estuvieran subidos a nuestro repo principal, si lo usamos pasandole los parámetros de repositorio y branch `git pull <repo> <branch>` podemos traernos cambios de repos externos que estén configurados como remote branch. Ej: `git pull profe master` nos permite traer los cambios del repo que tiene el alias profe.



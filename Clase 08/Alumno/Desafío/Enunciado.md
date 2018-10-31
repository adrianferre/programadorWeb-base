# Crear una función que cree un nodo alumno [Pieza del Workshop I]

- Crear una función que reciba como parámetro un objeto alumno y devuelva como resultado un nodo `<li>` con los datos del alumno.

```js
var studentNode = createStudentNode(newStudent)
```

Resultado ejemplo:

```html
<li class="list-group-item" id="22999333">
  <h1>
    Juan Peréz
  </h1>
  <h3>
    DNI: 22999333
  </h3><p>
    E-mail: juan@gmail.com
  </p>
</li>
```

**Datos de prueba:**

```js
var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}
```

**Documentación:**

[List group Bootstrap](https://getbootstrap.com/docs/4.1/components/list-group/)

[CreateElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
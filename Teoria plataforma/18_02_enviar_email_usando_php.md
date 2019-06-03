# Enviar un e-mail usando PHP

Para completar nuestro Workshop Final vamos a agregarle la posibilidad de enviar un e-mail cuando alguien completa el formulario de contacto, para esto debemos seguir los siguientes pasos:

1. Agregar un archivo `simpleEmail.php` en la carpeta template y dentro de ese archivo escribir el siguiente código, reemplazando el e-mail "myemail@gmail.com" por el del estudiante.

```
<?php
$to = "myemail@gmail.com"; // Student e-mail
$from = $_POST['email']; // This is the sender's Email address
$first_name = $_POST['firstName']; // This is the sender's Name
$subject = "Email de Star Wars API";
$comments = $first_name . ' te dijo: ' . $_POST['comments'];
$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);
if(!$email){
  echo "Hubo un error al procesar tu email, detallle del error". $email; 
}
?>
```

2. Agregar una función postData, que debería tener una forma similar a la siguiente y debería ser agregada en utils en el mismo archivo de getData.

```js
function postData (url, data, cbk) {
  $.ajax({
    url: url,
    method: 'POST',
    data: data
  })
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}
```

3. Por últim en el controller de contact debemos agregar un código similar al siguiente luego de validar el formulario para llamar a esta función y enviar un e-mail con el sistema que use por defecto el servidor de Heroku en este caso.

```js
  submitButtonNode.click(function () {
    var firstName = firstNameInputNode.val()
    var email = emailInputNode.val()
    var comments = commentsInputNode.val()

    var data = {
      firstName: firstName,
      email: email,
      comments: comments
    }

    postData('./simpleEmail.php', data, function (error, data) {
      if (!error) {
        window.location.hash = '#/contact/greetings'
      }
    })
  })
```




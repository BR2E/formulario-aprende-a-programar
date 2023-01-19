const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const contrasena = document.getElementById('contrasena');
const boton = document.querySelector('.form__formulario--boton');

const errorNombre = document.querySelector('.errorNombre');
const errorApellido = document.querySelector('.errorApellido');
const errorEmail = document.querySelector('.errorEmail');
const errorContrasena = document.querySelector('.errorContrasena');

const validarEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
const validarContrasena = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

function validarFormulario() {
    if (nombre.value.length < 8) {
        errorNombre.innerHTML = '<p class="error ">Este campo debe de tener un minimo de 10 letras</p> ';
    }

    if (apellido.value.length < 8) {
        errorApellido.innerHTML = '<p class="error ">Este campo debe de tener un minimo de 10 letras</p> ';
    }

    if (!validarEmail.test(email.value)) {
        errorEmail.innerHTML = '<p class="error ">Este campo debe de tener el formato completo</p> ';
    }

    if (!validarContrasena.test(contrasena.value)) {
        errorContrasena.innerHTML = '<p class="error ">La contraseña debe de ser mas segura</p> ';
    }


}



boton.addEventListener('click', validarFormulario, false);
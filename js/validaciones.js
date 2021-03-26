// VALIDACIONES DE LOGIN
//Validacion de email
function valEmail(email) {
    // console.log(email);emilsearias@gmail.com
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != '' && expresion.test(email.value)) {
        email.className = 'form-control is-valid';
        return true;
    } else {
        email.className = 'form-control is-invalid';
        return false;
    }
}

// Validacion de contraseña
function valContrasena(texto) {
    if (texto.value.trim() != "" && texto.value.length >= 6) {
        texto.className = 'form-control is-valid';
        return true;
    } else {
        texto.className = 'form-control is-invalid';
        return false;
    }
}


// VALIDACION DE FORMULARIO DE SUSCRIPCION


//VALIDACIONES FORM SUSCRIPCION


// VALIDACIONES DE REGISTRO DE PELICULAS
//Validacion del codigo 
function valCodigo(input) {
    if (input.value.trim() === "") {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

//Validacion del nombre 
function valNombrePelicula(input) {
    if (input.value.trim() === "") {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

//Validacion de la categoria 
function valCategoria(input) {
    if (input.value.trim() === "") {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

//Validacion de campo de descripcion 
function valDescripcion(texto) {
    if (texto.value.trim() != "" && texto.value.length >= 30) {
        texto.className = 'form-control is-valid';
        return true;
    } else {
        texto.className = 'form-control is-invalid';
        return false;
    }
}

//Contador de caracteres (se agrega en el .html: (linea - 63) <p id="caracterNum">0 caracteres</p>)
function contadorCaracteres(caracter) {
    document.getElementById("caracterNum").innerHTML = caracter.value.length + ' caracteres';

}
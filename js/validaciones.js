// VALIDACIONES DE LOGIN
//Validacion de email
// function valEmail(email) {
// let expresion = /\w+@\w+\.[a-z]{2,}$/;
// if (email.value.trim() != '' && expresion.test(email.value)) {
// email.className = 'form-control is-valid';
// return true;
// } else {
// email.className = 'form-control is-invalid';
// return false;
// }
// }

// Validacion de contraseña
// function valContrasena(texto) {
// if (texto.value.trim() != "" && texto.value.length >= 6) {
// texto.className = 'form-control is-valid';
// return true;
// } else {
// texto.className = 'form-control is-invalid';
// return false;
// }
// }


// VALIDACION DE FORMULARIO DE SUSCRIPCION


//VALIDACIONES MODAL FORM SUSCRIPCION 
//Validacion de nombre
function valSuscrpNombre(input) {
    console.log('funcion validar nombre');
    if (input.value.trim() === "") {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

//Validacion de Apellido
function valSuscrpApellido(input) {
    console.log('funcion validar apellido');
    if (input.value.trim() === "") {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

//Validacion de Email
function valEmail(email) {
    console.log('funcion validar email');
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != '' && expresion.test(email.value)) {
        email.className = 'form-control is-valid';
        return true;
    } else {
        email.className = 'form-control is-invalid';
        return false;
    }
}

//Validacion de Numero de telefono
function valiNumTel(inputTelefono) {
    console.log('funcion validar numero');
    if (inputTelefono.value.trim() != '' && !isNaN(inputTelefono.value)) {
        inputTelefono.className = 'form-control is-valid';
        return true;
    } else {
        inputTelefono.className = 'form-control is-invalid';
        return false;
    }

}

// Validacion de Checkbox
// primero creamos una variable
let checkTerminos = document.querySelector('#terminos');

checkTerminos.addEventListener('change', function() {
    valCheckBox();
})


function valCheckBox() {
    console.log('checkbox');
    if (checkTerminos.checked) {
        checkTerminos.className = 'form-check-input is-valid';
        return true;
    } else {
        checkTerminos.className = 'form-check-input is-invalid';
        return false;
    }
}

//Validacion general del formulario suscrpcion completo luego de validar campo por campo
function valGeneral(event) {
    // window.valGeneral = function(event) {

    event.preventDefault();
    console.log('desde la funcion validar general');
    if (valSuscrpNombre(document.getElementById('nombre')) === true &&
        valSuscrpApellido(document.getElementById('apellido')) === true &&
        valEmail(document.getElementById('email')) &&
        valiNumTel(document.getElementById('telefono')) &&
        valCheckBox()) {} else {
        // indicar el error
        alert('debe corregir los datos cargados')
    }
}


// VALIDACIONES DE REGISTRO DE PELICULAS
//Validacion del codigo 
/*
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

}*/
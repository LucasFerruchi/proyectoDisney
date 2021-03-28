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
});

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
    event.preventDefault();
    console.log('desde la funcion validar general');
    if (valSuscrpNombre(document.getElementById('nombre')) === true &&
        valSuscrpApellido(document.getElementById('apellido')) === true &&
        valEmail(document.getElementById('email')) &&
        valiNumTel(document.getElementById('telefono')) &&
        valCheckBox()) {
        //Limpiar validaciones 
        limpiarValidaciones();
        //Limpiar formulario
        limpiarFormulario();


    } else {
        alert('debe corregir los datos cargados')
    }
}

function limpiarFormulario() {
    document.getElementById('formSuscripcion').reset();
    modificarFunkopop = false;
}

function limpiarValidaciones() {
    document.querySelector('#nombre').className = "form-control";
    document.querySelector('#apellido').className = "form-control";
    document.querySelector('#email').className = "form-control";
    document.querySelector('#telefono').className = "form-control"
    terminos.className = "form-check-input";
}

// LOG-IN

function valPassword(input) {
    console.log('funcion valPassword');
    if (input.value.length < 6) {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

function valGeneralLogin(event) {
    event.preventDefault();
    console.log('desde la funcion valGeneralLogin');

    if (valEmail(document.getElementById('emailLogin')) &&
        valPassword(document.getElementById('password'))) {

        console.log(document.getElementById('emailLogin').value);

        if (document.getElementById('emailLogin').value === "administrador@gmail.com") {
            console.log('desde administrador');
            window.location.href = "admin.html"
        } else {
            console.log('no valido el mail de administrador@gmail.com');
            //Limpiar validaciones 
            document.querySelector('#emailLogin').className = "form-control";
            document.querySelector('#password').className = "form-control";


            //Limpiar formulario
            document.getElementById('loginForm').reset();
        }





    } else {
        alert('debe corregir los datos cargados')
    }
}





// VALIDACIONES DE REGISTRO DE PELICULAS
//Validacion del codigo 

function valCodigo(input) {
    if (input.value != "" && !isNaN(input.value) && input.value > 0) {
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className = 'form-control is-invalid';
        return false;
    }
}
export { valCodigo }

//Validacion del nombre 
function valNombrePelicula(input) {
    if (input.value.trim() != "") {
        input.className = 'form-control is-valid';
        return true;

    } else {
        input.className = 'form-control is-invalid';
        return false;
    }
}
export { valNombrePelicula }

//Validacion de la categoria 
function valCategoria(input) {
    if (input.value == "Películas" || input.value == "Series" || input.value == "Cortos" | input.value == "Animadas" || input.value == "Acción") {
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className = 'form-control is-invalid';
        return false;
    }
}
export { valCategoria }

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
export { valDescripcion }
//Contar caracateres
export function contarCaracteres(input) {
    let cantidad = document.getElementById('caracteres');
    cantidad.innerHTML = `${input.value.length} caracteres`;
}

/*
//Contador de caracteres (se agrega en el .html: (linea - 63) <p id="caracterNum">0 caracteres</p>)
function contadorCaracteres(caracter) {
    document.getElementById("caracterNum").innerHTML = caracter.value.length + ' caracteres';

}*/
//Función para limpiar las validaciones y el contador de caracteres
export function limpiarValidaciones() {
    document.querySelector('#codigo').className = "form-control";
    document.querySelector('#nombPeli').className = "form-control";
    document.querySelector('#categoria').className = "form-control"
    document.querySelector('#descripcion').className = "form-control";
    document.querySelector('#caracteres').innerHTML = '0 caracteres';
}
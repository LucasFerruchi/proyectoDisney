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
export function limpiarValidacionesAdmin() {
    document.querySelector('#codigo').className = "form-control";
    document.querySelector('#nombPeli').className = "form-control";
    document.querySelector('#categoria').className = "form-control"
    document.querySelector('#descripcion').className = "form-control";
    document.querySelector('#caracteres').innerHTML = '0 caracteres';
}
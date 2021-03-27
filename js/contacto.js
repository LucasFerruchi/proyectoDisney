window.enviarMensaje = function(event) {
    event.preventDefault();
    console.log("Desde la función enviarMensaje");
    Swal.fire({
        title: '¡Gracias!',
        text: 'Hemos recibido tu mensaje.',
        imageUrl: 'img/Contacto/happymm.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Happy Mickey',
    })
}

function campoRequerido(input) {
    console.log('Estoy en la función campoRequerido');
    if (input.value === '') {
        input.className = 'form-control is-invalid'
        return false;
    } else {
        input.className = 'form-control is-valid'
        return true;
    }
}

function contactoEmail(email) {
    console.log("Estoy en la función contactoEmail");
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != '' && expresion.test(email.value)) {
        email.className = 'form-control is-valid';
        return true;
    } else {
        email.className = 'form-control is-invalid';
        return false;
    }
}

function contactoNumeros(inputTelefono) {
    console.log("Estoy en la función contactoNumeros");
    if (inputTelefono.value.trim() != '' && !isNaN(inputTelefono.value)) {
        inputTelefono.className = 'form-control is-valid';
        return true;
    } else {
        inputTelefono.className = 'form-control is-invalid';
        return false;
    }
}

function contactoComentarios(texto) {
    console.log("Desde la función contactoComentarios")
    if (texto.value.trim() != "" && texto.value.length >= 20) {
        texto.className = 'form-control is-valid';
        return true;
    } else {
        texto.className = 'form-control is-invalid';
        return false;
    }
}
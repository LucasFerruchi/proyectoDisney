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

function validarContactoGeneral(event) {
    event.preventDefault();
    console.log("Desde la función validarContactoGeneral");
    event.preventDefault();
    if (campoRequerido(document.querySelector('#contactoNombre')) &&
        contactoEmail(document.querySelector('#exampleFormControlInput1')) &&
        contactoNumeros(document.querySelector('#contactoNumero')) &&
        contactoComentarios(document.querySelector('#exampleFormControlTextarea1'))) {
        console.log("Desde la función validarContactoGeneral");
        enviarEmail();
        Swal.fire({
            title: '¡Gracias!',
            text: 'Hemos recibido tu mensaje.',
            imageUrl: 'img/Contacto/happymm.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Happy Mickey',
        })
    } else {
        console.log("No se pudo enviar el mail");
        alert("No se pudo enviar su mensaje. Revise los datos ingresados.")
    }
}

function enviarEmail() {
    let suscripcion = document.querySelector('#formContacto');
    let alert = document.querySelector('#alerta');
    emailjs.send("service_nllcf77", "template_9t8qc7c", {
        to_name: "Sr. Administrador:",
        from_name: document.querySelector('#contactoNombre').value,
        message: `Email: ${document.querySelector('#exampleFormControlInput1').value} -
                Teléfono: ${document.querySelector('#contactoNumero').value} -
                Consulta: ${document.querySelector('#exampleFormControlTextarea1').value} .-
                `
    }).then(function(reponse) {
            console.log("Pudo enviar el mail.")
            suscripcion.reset();
            limpiarFormularioContacto();
            limpiarValidacionesContacto();
        },
        function(error) {
            console.log("No se pudo enviar el mail.")
            alert.className = "alert alert-danger mt-3";
            alert.innerHTML = `${document.querySelector('#contactoNombre').value} Ha ocurrido un fallo al enviar su consulta por favor intente nuevamente`;
        })
}

function limpiarFormularioContacto() {
    document.getElementById('formContacto').reset();
}

function limpiarValidacionesContacto() {
    document.querySelector('#contactoNombre').className = "form-control";
    document.querySelector('#exampleFormControlInput1').className = "form-control";
    document.querySelector('#contactoNumero').className = "form-control";
    document.querySelector('#exampleFormControlTextarea1').className = "form-control";
}
import { Pelis } from './peliculasClass.js'
let listaPeliculas = [];
const modalPeli = new bootstrap.Modal(document.getElementById('modalPeliculas'))
let btnAgregar = document.getElementById("btnAgregar");
//Bandera que toma el valor true para modicar la película y cuando sea false agrego una Pelicula
let modificarPeli = false;

btnAgregar.addEventListener("click", function() {
    limpiarFormulario();
    modalPeli.show();
})
leerPeliculas();

// Funcion para agregar una película 
function agregarPelicula() {
    console.log("desde agregarPeliculas")
        //validar general if (validarGeneral)
    let codigo = document.getElementById("codigo").value;
    let nombrePeli = document.getElementById("nombPeli").value;
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;
    let publicada = document.getElementById("publicada").checked;
    let destacada = document.getElementById("destacada").checked;

    let nuevaPelicula = new Pelis(codigo, nombrePeli, categoria, descripcion, imagen, publicada, destacada);
    listaPeliculas.push(nuevaPelicula);
    //console.log(listaPeliculas);

    localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas));
    limpiarFormulario();
    // Ventana de SweetAlert2
    Swal.fire(
        'Pelicula Agregada',
        'La película se agrego con éxito!',
        'success'
    )
    leerPeliculas();
    modalPeli.hide();
}
//Limpiar formulario
function limpiarFormulario() {
    modificarPeli = false;
    document.getElementById("formPeli").reset();
}

//Agrego la lectura del localStorage
function leerPeliculas() {
    let _listaPeliculas;
    if (localStorage.length > 0) {
        _listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey'));
        //console.log(_listaPeliculas);
        if (listaPeliculas.length === 0) {
            listaPeliculas = _listaPeliculas;
        }
    }
    dibujarTabla(_listaPeliculas);
}
//Dibujo los datos del localStorage en la tabla
function dibujarTabla(_listaPeliculas) {
    let tabla = document.getElementById("tablaPeliculas")
    tabla.innerHTML = "";
    let filas;
    for (let i in _listaPeliculas) {
        if (_listaPeliculas[i].publicada) {
            if (_listaPeliculas[i].destacada) {
                filas = `<tr>
                <td>${_listaPeliculas[i].codigo}</td>
                <td>${_listaPeliculas[i].nombre}</td>
                <td>${_listaPeliculas[i].categoria}</td>
                <td>${_listaPeliculas[i].descripcion}</td>
                <td><div class="form-check">
                <input type="checkbox" class="form-check-input" checked onclick="publicarPelicula(this)" id="${_listaPeliculas[i].codigo}">
                </div>
                </td>
                <td>
                <button class="btn btn-outline-warning" onclick="destacarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-star"></i></button>
                <button class="btn btn-outline-primary" onclick="editarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-edit"></i></i></button>
                <button class="btn btn-outline-danger" onclick="eliminarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-trash-restore"></i></button>
                </td>
                </tr>`
            } else {
                filas = `<tr>
                    <td>${_listaPeliculas[i].codigo}</td>
                    <td>${_listaPeliculas[i].nombre}</td>
                    <td>${_listaPeliculas[i].categoria}</td>
                    <td>${_listaPeliculas[i].descripcion}</td>
                    <td><div class="form-check">
                    <input type="checkbox" class="form-check-input" checked onclick="publicarPelicula(this)" id="${_listaPeliculas[i].codigo}">
                    </div>
                    </td>
                    <td>
                        <button class="btn btn-outline-warning" onclick="destacarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="far fa-star"></i></button>
                        <button class="btn btn-outline-primary" onclick="editarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-edit"></i></i></button>
                        <button class="btn btn-outline-danger" onclick="eliminarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-trash-restore"></i></button>
                        </td>
                </tr>`
            }
        } else {
            if (_listaPeliculas[i].destacada) {
                filas = `<tr>
                <td>${_listaPeliculas[i].codigo}</td>
                <td>${_listaPeliculas[i].nombre}</td>
                <td>${_listaPeliculas[i].categoria}</td>
                <td>${_listaPeliculas[i].descripcion}</td>
                <td><div class="form-check">
                <input type="checkbox" class="form-check-input" onclick="publicarPelicula(this)" id="${_listaPeliculas[i].codigo}">
                </div>
                </td>
                <td>
                <button class="btn btn-outline-warning" onclick="destacarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-star"></i></button>
                <button class="btn btn-outline-primary" onclick="editarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-edit"></i></i></button>
                <button class="btn btn-outline-danger" onclick="eliminarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-trash-restore"></i></button>
                </td>
                </tr>`
            } else {
                filas = `<tr>
                    <td>${_listaPeliculas[i].codigo}</td>
                    <td>${_listaPeliculas[i].nombre}</td>
                    <td>${_listaPeliculas[i].categoria}</td>
                    <td>${_listaPeliculas[i].descripcion}</td>
                    <td><div class="form-check">
                    <input type="checkbox" class="form-check-input" onclick="publicarPelicula(this)" id="${_listaPeliculas[i].codigo}">
                    </div>
                    </td>
                    <td>
                        <button class="btn btn-outline-warning" onclick="destacarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="far fa-star"></i></button>
                        <button class="btn btn-outline-primary" onclick="editarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-edit"></i></i></button>
                        <button class="btn btn-outline-danger" onclick="eliminarPelicula(this)" id="${_listaPeliculas[i].codigo}"><i class="fas fa-trash-restore"></i></button>
                        </td>
                </tr>`
            }
        }
        tabla.innerHTML += filas;
    }
}
//Función para eliminar película
window.eliminarPelicula = function(boton) {
    console.log(boton.id);
    Swal.fire({
        title: 'Estas seguro de eliminar la película',
        text: "No podrás volver atras luego de eliminar la película",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            let peliculasFiltradas = listaPeliculas.filter(function(peli) {
                return (peli.codigo != boton.id)
            });
            listaPeliculas = peliculasFiltradas;

            console.log(peliculasFiltradas);
            //Guardo los datos en localStorage
            localStorage.setItem('listaPeliculasKey', JSON.stringify(peliculasFiltradas))
                //carga los nuevos datos
            leerPeliculas();
            Swal.fire(
                'PELICULA ELIMINADA',
                'La película fue eliminada.',
                'success'
            )
        }
    })
}

//Función para editar película
window.editarPelicula = function(boton) {
    console.log("Holis editarPelicula");
    //busco la pelicula que quiero (solo el primero)
    let peliEncontrada = listaPeliculas.find((peli) => { return peli.codigo === boton.id })
        //console.log(peliEncontrada);
        //cargo los datos en el formulario
    document.getElementById('codigo').value = peliEncontrada.codigo;
    document.getElementById('nombPeli').value = peliEncontrada.nombre;
    document.getElementById('categoria').value = peliEncontrada.categoria;
    document.getElementById('descripcion').value = peliEncontrada.descripcion;
    document.getElementById('imagen').value = peliEncontrada.imagen;
    document.getElementById('publicada').checked = peliEncontrada.publicada;
    document.getElementById('destacada').checked = peliEncontrada.destacada;
    //Cambio el estado de la Bandera
    modificarPeli = true;
    //Mostrar la ventana modal
    modalPeli.show();
}

//Seleciona la bandera
window.guardarPelicula = function(event) {
    event.preventDefault();
    console.log("Desde guardarPelicula");
    if (modificarPeli) {
        //Modifico la Peli
        console.log("Aqui debemos modificar la pelicula")
        modificarPeliculaExistente();
    } else {
        //Agrego una Peli nueva
        agregarPelicula();
    }
}

//Modificar Pelicula
function modificarPeliculaExistente() {
    //VALIDAR GENERAL
    //tomo los valores viejos del formulario
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombPeli').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;
    let publicada = document.getElementById('publicada').checked;
    let destacada = document.getElementById('destacada').checked;
    //busco el objeto y modifico - recorro el arreglo
    for (let i in listaPeliculas) {
        if (listaPeliculas[i].codigo === codigo) {
            listaPeliculas[i].nombrePeli = nombre;
            listaPeliculas[i].categoria = categoria;
            listaPeliculas[i].descripcion = descripcion;
            listaPeliculas[i].imagen = imagen;
            listaPeliculas[i].publicada = publicada;
            listaPeliculas[i].destacada = destacada;
        }
    }
    //actualizo localStorage
    localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas));
    //Mostamos al usuario que se modifico correctamente
    Swal.fire(
            'Película modificada',
            'La película se modificó con éxito!',
            'success'
        )
        //dibujo los datos nuevos en la tabla
    leerPeliculas();
    //Cierro la ventana modal
    modalPeli.hide();
}

//Destacar Pelicula
//onclick="destacarPelicula(this)" id="${_listaPeliculas[i].codigo
window.destacarPelicula = function(boton) {
    console.log("Holis destacar peli")
    let codigo = boton.id;
    let baderaDestacada = false;

    for (let i in listaPeliculas) {
        if (listaPeliculas[i].codigo === codigo) {
            if (listaPeliculas[i].destacada === true) {
                listaPeliculas[i].destacada = false;
            } else {
                listaPeliculas[i].destacada = true;
                baderaDestacada = true;
            }
        }
    }

    localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas));
    //Mostamos al usuario que se modifico correctamente
    if (baderaDestacada === true) {
        Swal.fire(
            'Película Destacada',
            'La película ya es destacada',
            'success'
        )
    }
    //dibujo los datos nuevos en la tabla
    leerPeliculas();
}

//Publicar peliculas checkbox
//onclick="publicarPelicula(this)" id="${_listaPeliculas[i].codigo}"
window.publicarPelicula = function(boton) {
    console.log("Holis desde publicarPelis");
    let codigo = boton.id;
    let baderaPublicada = false;

    for (let i in listaPeliculas) {
        if (listaPeliculas[i].codigo === codigo) {
            if (listaPeliculas[i].publicada === true) {
                listaPeliculas[i].publicada = false;
            } else {
                listaPeliculas[i].publicada = true;
                baderaPublicada = true;
            }
        }
    }

    localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas));
    //Mostamos al usuario que se modifico correctamente
    if (baderaPublicada === true) {
        Swal.fire(
            'Película Publicada',
            'La película ya se encuentra publicada',
            'success'
        )
    }
    leerPeliculas();
}
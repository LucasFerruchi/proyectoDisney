import { Pelis } from './peliculasClass.js'
let listaPeliculas = [];
const modalPeli = new bootstrap.Modal(document.getElementById('modalPeliculas'))

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", function() {
    modalPeli.show();
})
leerPeliculas();

// Funcion para agregar una película 
window.agregarPelicula = function(event) {
    event.preventDefault();
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

function limpiarFormulario() {
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
        if (!_listaPeliculas[i].destacada) {
            filas = `<tr>
        <td>${_listaPeliculas[i].codigo}</td>
        <td>${_listaPeliculas[i].nombre}</td>
        <td>${_listaPeliculas[i].categoria}</td>
        <td>${_listaPeliculas[i].descripcion}</td>
        <td>${_listaPeliculas[i].publicada}</td>
        <td>
            <button class="btn btn-outline-warning"><i class="fas fa-star"></i></button>
            <button class="btn btn-outline-primary"><i class="fas fa-edit"></i></i></button>
            <button class="btn btn-outline-danger"><i class="fas fa-trash-restore"></i></button>
        </td>
        </tr>`
        } else {
            {
                filas = `<tr>
            <td>${_listaPeliculas[i].codigo}</td>
            <td>${_listaPeliculas[i].nombre}</td>
            <td>${_listaPeliculas[i].categoria}</td>
            <td>${_listaPeliculas[i].descripcion}</td>
            
            <td><div class="form-check">
                <input type="checkbox" class="form-check-input" checked>
            </div></td>
            
            <td>
                <button class="btn btn-outline-warning"><i class="far fa-star"></i></button>
                <button class="btn btn-outline-primary"><i class="fas fa-edit"></i></i></button>
                <button class="btn btn-outline-danger"><i class="fas fa-trash-restore"></i></button>
            </td>
            </tr>`
            }
        }
        tabla.innerHTML += filas;
    }
}
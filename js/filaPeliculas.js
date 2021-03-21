// Funcionalidad a la tira de peliculas

const fila = document.querySelector('.contenedorSecundario');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzq = document.getElementById('flechaIzq');
const flechaDer = document.getElementById('flechaDer');

// Flecha derecha

flechaDer.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    // if (indicadorActivo.nextSibling) {
    // indicadorActivo.nextSibling.classList.add('activo');
    // indicadorActivo.classList.remove('activo');
    // }
});

// Flecha Izquierda

flechaIzq.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    // if (indicadorActivo.previousSibling) {
    // indicadorActivo.previousSibling.classList.add('activo');
    // indicadorActivo.classList.remove('activo');
    // }
});
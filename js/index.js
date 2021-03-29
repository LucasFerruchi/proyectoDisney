// const movies = [
// { nombre: 'zootopia', categoria: 'Animada', imagen: 'img/imgBase/Zootopia.jpg' },
// { nombre: 'wandavision', categoria: 'Serie', imagen: 'img/imgBase/WandaVision.jpg' },
// { nombre: 'walle', categoria: 'Animada', imagen: 'img/imgBase/WallE.jpg' },
// { nombre: 'purl', categoria: 'Corto', imagen: 'img/imgBase/Purl.jpg' },
// { nombre: 'piratascaribe', categoria: 'Aventura', imagen: 'img/imgBase/PiratasCaribe.jpg' },
// { nombre: 'panteranegra', categoria: 'Aventura', imagen: 'img/imgBase/PanteraNegra.jpg' },
// { nombre: 'togo', categoria: 'Corto', imagen: 'img/imgBase/Togo.jpg' },
// ]
// 
// const categoriaAnimada = movies.filter(items => {
// return items.categoria === 'Animada'
// })
// 
// console.log(categoriaAnimada)

// let listaPeliculas 

// listaPeliculasKey
//Proyecto Disney Implementación
let listaPeliculas = [];
leerPeliculas();

function leerPeliculas() {
    if (localStorage.length > 0) {
        listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculasKey"));
        console.log(listaPeliculas);
        //Limpio el index
        let filaCards = document.getElementById("filaPeliculasCards");
        filaPeliculasCards.innerHTML = "";

        //Dibujar columnas con las Pelis
        for (let i in listaPeliculas) {
            //Imagenes por defecto
            let imagen = "SinImagen_01.png"
            if (listaPeliculas[i].imagen === "") {
                //Cargo una imagen por defecto
            } else {
                imagen = listaPeliculas[i].imagen;
            }
            //Armo las columnas
            let columna = `
            <div class="col-md-3 col-sm-6 my-2">
                <div class="card w-100 bg-light text-dark">
                <img src="img/imgBase/${imagen}" class="card-img-top" alt="Película ${listaPeliculas[i].nombre}">
                <div class="card-body">
                    <h5 class="card-title">${listaPeliculas[i].nombre}</h5>
                    <p class="card-text">${listaPeliculas[i].descripcion}</p>
                    <a href="#" class="btn btn-primary disabled">Ver mas</a>
                </div>
                </div>
                </div>`;
            //Agregamos la columna al elmento padre 
            filaPeliculasCards.innerHTML += columna;
        }
    }
}
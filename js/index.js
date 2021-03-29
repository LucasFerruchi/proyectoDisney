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

let listaPeliculas = [];
leerPeliculas();

function leerPeliculas() {
    if (localStorage.length > 0) {
        listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculasKey"));

        //borrar los datos de las filas de cards
        let filaCards = document.getElementById("filaCards");
        filaCards.innerHTML = "";

        //Dibujar cada columna con los datos del producto
        for (let i in listaPeliculas) {
            //cargar imagen por defecto en casa de que no este disponible
            let imagen = "";
            if (listaPeliculas[i].imagen === "") {
                //cargar imagen por defecto
                imagen = "752797.png";
            } else {
                //Usar la imagen solicitada por usuario
                imagen = listaPeliculas[i].imagen;
            }


            let columna = `<div class="col-md-3 col-sm-6 my-2">
            <div class="card w-100 shadow">
                <img src="img/productos/${imagen}" class="card-img-top" alt="Funko ${listaPeliculas[i].nombre}">
                <div class="card-body">
                    <h5 class="card-title">${listaPeliculas[i].nombre}</h5>
                    <p class="card-text">${listaPeliculas[i].descripcion}</p>
                    <a href="#" class="btn btn-primary disabled">Ver más</a>
                </div>
            </div>
        </div>`;

            //agregar los pedidos a la tabla inicio (en el elemento padre)
            filaCards.innerHTML += columna;
        }
    }
}
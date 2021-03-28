const movies = [
    { nombre: 'zootopia', categoria: 'Animada', imagen: 'img/imgBase/Zootopia.jpg' },
    { nombre: 'wandavision', categoria: 'Serie', imagen: 'img/imgBase/WandaVision.jpg' },
    { nombre: 'walle', categoria: 'Animada', imagen: 'img/imgBase/WallE.jpg' },
    { nombre: 'purl', categoria: 'Corto', imagen: 'img/imgBase/Purl.jpg' },
    { nombre: 'piratascaribe', categoria: 'Aventura', imagen: 'img/imgBase/PiratasCaribe.jpg' },
    { nombre: 'panteranegra', categoria: 'Aventura', imagen: 'img/imgBase/PanteraNegra.jpg' },
    { nombre: 'togo', categoria: 'Corto', imagen: 'img/imgBase/Togo.jpg' },
]

const categoriaAnimada = movies.filter(items => {
    return items.categoria === 'Animada'
})

console.log(categoriaAnimada)
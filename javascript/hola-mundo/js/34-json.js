'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: 'La verdad duele', year: 2016, pais: 'Francia'},
    pelicula
];

let caja_peliculas = document.querySelector("#peliculas");
let index;
for (index in peliculas){
    let p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}

// console.log(pelicula)

// pelicula.titulo = "Superman Begins";
console.log(peliculas);
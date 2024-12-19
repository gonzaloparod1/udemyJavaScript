'use strict'

let categorias = ['Accion', 'Terror', 'Comedia'];
let peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

console.log(peliculas);

let peliculas_ordenadas = peliculas.sort();

console.log(peliculas_ordenadas);

let peliculas_invertidas = peliculas.reverse();

console.log(peliculas_invertidas);

let cine = [categorias, peliculas];

// let elemento = "";

// do {
//     elemento = prompt("Introduce tu pelicula");
//     peliculas.push(elemento);
// }
// while (elemento != "ACABAR");

// peliculas[0] = undefined;

// peliculas.pop();

// console.log(cine[0][1]);
// console.log(cine[1][2]);

// peliculas.push = ("Batman");


let indice = peliculas.indexOf('Gran Torino');
if (indice > -1) {
    peliculas.splice(indice, 1)
}
console.log(indice);

let peliculas_string = peliculas.join();

let cadena = "texto1, texto2, texto3";
let cadena_array = cadena.split(",");

console.log(cadena_array);
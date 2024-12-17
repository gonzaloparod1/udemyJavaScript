'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre

/*
let pelicula = function(nombre) {
    return "La pelicula es:" + nombre;

}
*/

function sumame(numero1, numero2, sumaMuestra, sumaPorDos) {
    let sumar = numero1 + numero2;
    sumaMuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato) {
        console.log("La suma es:", dato);
    },
    function(dato) {
        console.log("La suma por dos es:", (dato * 2));
    });




// console.log(sumame(4, 5));

// sumame(4, 5);
'use strict'

// 1. Pida 6 numeros por pantalla y los meta en un array
// 2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
// 3. Ordenarlo y mostrarlo
// 4. Invertir su orden y mostrarlo
// 5. Mostrar cuantos elementos tiene el array
// 6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    numeros.forEach((numero, index) => {
        document.write("<strong>" + numero + "</strong><br/>");
    });
    document.write("</ul>");
}

// Pedir 6 numeros

let numeros = [];
// let numeros = new Array(6);

for (var i = 0; i <= 5; i++) {
    // numeros[i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
};
console.log(numeros);


// Mostrar en el cuerpo de la pagina
document.write("<h1>Cuerpo del array</h1>");
document.write("<ul>");
numeros.forEach((numero, index) => {
    document.write("<strong>" + numeros + "</strong><br/>");
});
document.write("</ul>");

// Mostrar array en el cuerpo de la pagina

mostrarArray(numeros, 'ordenados');

// Mostrar array en la consola
console.log(numeros);

// Ordenar y mostrar

numeros.sort(function(a, b) {
    return a - b;
});
mostrarArray(numeros, 'ordenados');

// Invertir y mostrar

//numeros.reverse();
// mostrarArray(numeros, 'revertidos');

// Contar elementos (indice)

document.write("<h1> El Array tiene: " + numeros.length + " elementos</h1>");

// Busqueda de un valor

let busqueda = parseInt(prompt("Busca un numero", 0));
let posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion !== -1) {
    document.write("<hr/><h1>Encontrado</h1>")
    document.write("<h1>Busqueda de " + (posicion + 1) + "</h1><hr/>");
} else {
    document.write("<hr/><h1>No encontrado</h1><hr/>");
}
// document.write("Posicion de la busqueda: " + numeros.indexOf(busqueda));
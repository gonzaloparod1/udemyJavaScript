'use strict'

// Arrays, Arreglos, Matrices

let nombre = "Gonzalo Parodi";

let nombres = ['Victor', 'Gonzalo', 'Diego'];

let lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

// console.log(nombres[3]);
// console.log(lenguajes[2]);

// console.log(nombres.length);

/*
let elemento = parseInt(prompt("Que elemento quieres del array", 0));
if (elemento >= nombres.length) {
    alert("Introduce el numero correcto menor que " + nombres.length);
} else {
    alert("El usuario seleccionado es: " + nombres[elemento]);
};
*/

document.write("<h1>Lenguaje de programacion del 2018</h1>");
document.write("<ul>");


// lenguajes.forEach((elemento, indice, arr) => {
//     console.log(arr);
//     document.write("<li>" + indice + "-" + elemento + "</li>");
// });


// Hacer iteraciones y recorrer Array

for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");

// Busquedas

// let busqueda = lenguaje.find(function(lenguaje) {
//     return lenguaje == "PHP"
// });

// console.log(busqueda);

// let busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
let precios = [10, 20, 50, 80, 12];
// let busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

// Para comprobar una condicion concreta con un fitro si el valor es mayor o menor o iguales en el array, entrega dato booleano
let busqueda = precios.some(precio => precio >= 90);

console.log(busqueda);


/*
for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>")
}

document.write(lenguajes[0]);
*/
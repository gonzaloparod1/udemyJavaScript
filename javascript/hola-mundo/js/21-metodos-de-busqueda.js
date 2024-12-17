'use strict'

// Metodos de busqueda

let numero = 444;
let texto1 = "Bienvenido al curso de JavaScript curso de Victor Robles";
let texto2 = "es muy buen curso";

// let busqueda = texto1.indexOf("curso"); // primera coincidencia de esa palabra
// let busqueda = texto1.lastIndexOf("curso");
// let busqueda = texto1.search("curso");

// let busqueda = texto1.match("curso"); // me devuelve en un array con su coleccion en el indice 0, (pimera coincidencia)
// let busqueda = texto1.match(/curso/gi); // busqueda global y devuelve un array con sus coincidencias
// let busqueda = texto1.substring(14, 5); // sacar un trozo del caracter 14 y 5 letras a partir del caracter 14
// let busqueda = texto1.charAt(44); // quiero que me saque el caracter numero 44

// let busqueda = texto1.startsWith("Victor"); // devuelve un booleano dependiendo de la coincidencia de los caracteres al inicio
// let busqueda = texto1.endsWith("Victor Robles"); // devuelve un booleano dependiendo de la coincidencia de los caracteres al final

let busqueda = texto1.includes("JavaScript"); // buscar una palabra(exacta)key sensitive, devuelve un booleano

console.log(busqueda);
// Transformacion de textos

let numero = 444;
let texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
let texto2 = "es muy buen curso";


// Metedos para transformar textos

let dato = numero.toString();
// dato = texto2.toUpperCase(); Convertir en Mayusculas
// dato = texto1.toLowerCase(); Convertir en Minisculas
console.log(typeof dato);

// Calcular la longitud que tiene el texto (si existe un texto y si tiene algo dentro)

let nombre = 'Gonzalo Parodi';
// nombre = ["hoa", "hola", "holas"];
console.log(nombre.length);


// Concatenar - Unir Textos

// let textoTotal = texto1 + " " + texto2;

let textoTotal = texto1.concat(" " + texto2);


console.log(textoTotal);
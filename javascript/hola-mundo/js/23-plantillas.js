'use strict'

// Plantillas de texto

let nombre = prompt("Mete tu nombre");
let apellidos = prompt("Mete tus apellidos");

// let texto = " Mi nombre es: " + nombre + " <br/> Mis apellidos son: " + apellidos;

let texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Ms apellidos son: ${apellidos}</h3>
`;

document.write(texto);
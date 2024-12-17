'use strict'

const numero = 12;
const texto = "Hola Mundo soy una variable global"

function holaMundo(texto) {
    let hola_mundo = "Texto dentro de la funcion";
    console.log(typeof texto);
    console.log(numero.toString());
}


holaMundo(texto);
// console.log(hola_mundo); <- Esto no se puede hacer, hola_mundo esta fuera del ambito global
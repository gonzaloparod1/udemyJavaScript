// Let y Var

/*
####
Let Permite definir variables limitando su alcance al bloque de declaracion y/o expresion donde se este usando

####
Var Define una variable global o local en una funcion sin importar el ambito del bloque*/

'use strict'

// Pruebas Var

var numero = 40;

console.log(numero);

if (true) {
    numero = 50;
    console.log(numero);
}

console.log(numero);


// Pruebas Let

var texto = "Curso JS Gonzalo Parodi";
console.log(texto);

if (true) {
    let texto = "Curso Laravel 5 Gonzalo Parodi";
    console.log(texto);
}

console.log(texto);
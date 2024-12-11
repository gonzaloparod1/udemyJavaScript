'use strict'

/* Condicionales IF
Una estructura de control, injstrucciones, permitir comparar algo
Si A es igual, es diferente, mayor que, menor que a B entonces haz algo 
 */

/*
let edad1 = 30;
let edad2 = 12;


/ Si pasa esto
if (edad1 > edad2) {
    / Ejecuta esto
    console.log("Edad uno es mayor que edad2");
} else {
    console.log("La edad uno es inferior");
}
*/

/* 

/Operadores relacionales

Mayor = >
Menor = <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/


let edad = 19;
let nombre = 'Gonzalo Parodi';

if (edad >= 18) {
    // Es mayor de edad
    console.log(nombre + "tiene" + edad + "años, es mayor de edad");

    if (edad <= 33) {
        console.log("Todavia eres Millenial");
    } else if (edad >= 70) {
        console.log('Eres anciano');
    } else {
        console.log('Ya no eres Millenial');
    }


} else {
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad ");
}
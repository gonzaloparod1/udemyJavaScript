'use strict'
/*

Operadores logicos

AND(Y): &&
OR(O): ||
Negacion: !
*/

// Negacion

let year = 2018;

if (year != 2016) {
    console.log("El año no es 2016, realmente es:" + year);

}

// AND

/*
if (year >= 2000 && year <= 2020 && year != 2018) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post mañana");
}
*/

if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post mañana");
}

// OR 

/*
if (year == 2008 || year == 2018) {
    console.log("El año acaba en 8")

}
*/

if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
} else {
    console.log("Año no registrado");
}
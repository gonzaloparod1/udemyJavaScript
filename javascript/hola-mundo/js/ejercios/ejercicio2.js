'use strict'

/*
Utilizando un bucle, mostrar a suma y la media de los numeros introducios
hasta indtroducir un numero negativo y ahi mostrar el resultado
*/

let suma = 0;
let contador = 0;

do {
    var numero = parseInt(prompt('Introuce numero hasta que metas uno negativo'));

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
        // suma += numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);

} while (numero >= 0);

alert("La suma de todos los numeros es:" + suma);
alert("La media de todos los numeros es:" + (suma / contador));
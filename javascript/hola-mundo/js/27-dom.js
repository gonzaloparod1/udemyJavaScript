'use strict'

// DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}

// Conseguir elementos con un ID concreto

// let caja = document.getElementById("micaja");
let caja = document.querySelector("#micaja");
let seccion = document.querySelector("#miseccion");
let hr = document.createElement("hr");


caja.innerHTML = 'Texto en la caja desde JS';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';
caja.className = 'hola hola2';

// Conseguir elementos por su etiqueta

let todosLosDivs = document.getElementsByTagName('div');
// let todosLosDivs = document.querySelector('div');

// Mostrar el contenido de todosLosDivs en la consola
console.log(todosLosDivs);
// let contenidoEnTexto = todosLosDivs[2].textContent;

let valor;
for(valor in todosLosDivs){
    // console.log(todosLosDivs[valor]);
    if(typeof todosLosDivs[valor].textContent == 'string'){
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(todosLosDivs[valor].textContent);
        // parrafo.appendChild(texto); // Agrega el texto al final del parrafo
        // parrafo.prepend(texto); // Agrega el texto al principio del parrafo
        parrafo.append(texto); // Agrega el texto al final del parrafo
        document.querySelector("#miseccion").appendChild(parrafo);
    }
};
// Manipular o cambiar el contenido de un div
// let contenidoEnTexto = todosLosDivs[2].innerHTML = "Otro texto para el segundo elemento";


// console.log(contenidoEnTexto)


// console.log(todosLosDivs);




// console.log(caja);

seccion.prepend(hr);

// Conseguir elementos por su clase CSS

let divsRojos = document.getElementsByClassName('rojo');
let divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = 'yellow';

let div;
for(div in divsRojos){
    if(divsRojos[div].className == 'rojo'){
        divsRojos[div].style.background = 'red';
    }
};
// divsRojos[2].style.background = 'red'; // No se puede hacer esto porque no es un array
console.log(divsRojos);

// Query Selector

let id = document.querySelector('#encabezado');
console.log(id);

let claseRojo = document.querySelector('div.rojo');
// console.log(claseRojo);

let etiqueta = document.querySelector('div');
console.log(etiqueta);
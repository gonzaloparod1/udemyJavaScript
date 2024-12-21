'use strict'

window.addEventListener('load', () => {
    const boton = document.querySelector('#boton');

// Función para cambiar el color
function cambiarColor() {
    console.log('Me has dado click');
    const bg = boton.style.background || 'none'; // Valor inicial por defecto
    boton.style.background = (bg === 'green') ? 'red' : 'green';
}

// Evento: Click
boton.addEventListener('click', cambiarColor);

// Evento: Doble click
boton.addEventListener('dblclick', () => {
    boton.style.background = 'blue';
    boton.style.padding = '10px';
    boton.style.border = '1px solid #ccc';
    console.log('Has hecho doble click!');
});

// Evento: Mouse over
boton.addEventListener('mouseover', () => {
    boton.style.background = 'yellow';
});

// Evento: Mouse out
boton.addEventListener('mouseout', () => {
    boton.style.background = '#ccc';
});


// Focus

let input = document.querySelector('#campo_nombre');
input.addEventListener('focus', () => {
    console.log('[focus]Estás dentro del input');
});

boton.addEventListener('focus', () => {

});


// Blur

input.addEventListener('blur', () => {
    console.log('[blur]Estás fuera del input');
});

// Keydown

input.addEventListener('keydown', (event) => {
    console.log('[keydown]Pulsando esta tecla', String.fromCharCode(event.keyCode));
});

// Keyup

input.addEventListener('keyup', (event) => {
    console.log('[keyup]Tecla soltada', String.fromCharCode(event.keyCode));
});

// Keypress

input.addEventListener('keypress', (event) => {
    console.log('[keypress]Tecla presionada', String.fromCharCode(event.keyCode));
});
});
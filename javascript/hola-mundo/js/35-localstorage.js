'use strict'

// Localstorage


// Comprobar disponibilidad del localstorage

if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");

}else{
    console.log("Incompatible con Localstorage disponible");
}

// Guardar  datos
localStorage.setItem("titulo", "Curso de Symfony de Victor Robles");

// Recuperar elemento

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos

let usuario = {
    nombre: "Gonzalo Parodi",
    email: "gonzalo.parodi@gmail.com",
    web: "https://myprofile-u4u5.onrender.com/",
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto

let userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

// localStorage.removeItem("usuario");

localStorage.clear();
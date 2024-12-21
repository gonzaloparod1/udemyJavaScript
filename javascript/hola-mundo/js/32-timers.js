'use strict'

window.addEventListener('load', function() {

    function intervalo(){
        let tiempo = setInterval(() => {
            console.log("Set interval ejecutado");
            let encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";}
            
            
            },1000);
            return tiempo;
    }

// Timers

// setInterval

    let tiempo = setInterval(() => {
        console.log("Set interval ejecutado");
        let encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "20px";
        } else {
            encabezado.style.fontSize = "50px";}
        
        
        },5000);
        var stop = document.querySelector("#stop");
        stop.addEventListener("click", () => {
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
        });
        var start = document.querySelector("#start");
        start.addEventListener("click", () => {
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });
    
    
// });

// setTimeout

// let tiempo = setTimeout(function() {
//     console.log("Set interval ejecutado");
//     let encabezado = document.querySelector("h1");
//     if (encabezado.style.fontSize == "50px") {
//         encabezado.style.fontSize = "20px";
//     } else {
//         encabezado.style.fontSize = "50px";}
    
    
//     },5000);
    // var stop = document.querySelector("#stop");
    // stop.addEventListener("click", () => {
    //     alert("Has parado el intervalo en bucle");
    //     clearInterval(stop);
    // });

});

'use strict'

window.addEventListener('load', function(){
    console.log('DOM cargado!!');

    let formulario = document.querySelector('#formulario');
    let box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';
        formulario.addEventListener('submit', function(){
        console.log('Evento submit capturado');
        let nombre = document.querySelector('#nombre').value;
        let apellidos = document.querySelector('#apellidos').value;
        let edad = parseInt(document.querySelector('#edad').value);
        
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert('El nombre no es valido')
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }
        
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert('El apellido no es valido')
            return false;
        }
        console.log(edad);
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert('La edad no es valida')
            return false;
        }

        box_dashed.style.display = 'block';
        console.log(nombre, apellidos, edad);

        let datos_usuario = {nombre, apellidos, edad};
        for(let indice in datos_usuario){
            let parrafo = document .createElement('p');
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
        
        // let parrafo = document .createElement('p');
        // parrafo.append(nombre);
        // parrafo.append(apellidos);
        // parrafo.append(edad);
        // box_dashed.append(parrafo);

    });
});

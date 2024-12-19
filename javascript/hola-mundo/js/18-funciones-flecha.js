function sumame(numero1, numero2, sumaMuestra, sumaPorDos) {
    let sumar = numero1 + numero2;
    sumaMuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, (dato) => {
        console.log("La suma es:", dato);
    },
    (dato) => {
        console.log("La suma por dos es:", (dato * 2));
    });
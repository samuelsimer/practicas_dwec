let numeroPrimo = function(numero) {
    for(let i = 2; i < numero**(1/2); i++){
        if(numero % i == 0){
            return false;            
        }
    }
    
};

function primerosNumerosPrimos(numeroTope){
    let mensaje = `Los números primos hasta ${numeroTope} son: `;
    for(let i = 2;i <= numeroTope; i++){
        if(numeroPrimo(i)){
            mensaje += `, ${i}`;
        }
    }
    alert(mensaje);
}

let numeroActual = Number(prompt("Introduce un número:"))

primerosNumerosPrimos(numeroActual);




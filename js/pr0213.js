let numeroPrimo = function(numero) {
    let esPrimo = true;
    for(let i = 2; i < numero; i++){
        if(numero % i == 0){
            esPrimo = false;
            return false;            
        }
    }
    if(esPrimo){
        return true;        
    }
    
};

function primerosNumerosPrimos(numeroTope,functionPrimo){
    let mensaje = `Los números primos hasta ${numeroTope} son: `;
    for(let i = 2;i <= numeroTope; i++){
        if(functionPrimo(i)){
            mensaje += `, ${i}`;
        }
    }
    alert(mensaje);
}

let numeroActual = Number(prompt("Introduce un número:"))

primerosNumerosPrimos(numeroActual,numeroPrimo);




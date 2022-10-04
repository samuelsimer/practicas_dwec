let numeroPrimo = function(numero) {
    let esPrimo = true;
    for(let i = 2; i < numero; i++){
        if(numero % i == 0){
            esPrimo = false;
            alert("NO ES PRIMO");
            return false;            
        }
    }
    if(esPrimo){
        alert("ES PRIMO");
        return true;        
    }
    
};

while(true){
    let numeroActual = Number(prompt("Introduce un número:"))
    if(numeroActual == 0){
        break;
    }
    numeroPrimo(numeroActual);
    
}
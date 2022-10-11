let numeroPrimo = function(numero) {
    for(let i = 2; i < numero**(1/2); i++){
        if(numero % i == 0){
            return false;            
        }
    }
    return true;        

    
};

while(true){
    let numeroActual = Number(prompt("Introduce un número:"))
    if(numeroActual == 0){
        break;
    }
    numeroPrimo(numeroActual) ? alert("Es primo") : alert("No es primo");
    
}
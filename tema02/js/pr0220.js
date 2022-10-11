function getFibonacci(n){
    let anterior = 0;
    let resultado = 0;
    let numFibonacci = 1;
    if(n > 1){
        resultado = 1;
        for(i = 1; i < Number(n)-1; i++){
            anterior = resultado;
            resultado += numFibonacci;
            numFibonacci = anterior;
        }
    }
    return resultado;
    
}

let num1 = prompt("Escribe el número límite de Fibonacci:");

alert("El número es: " + getFibonacci(num1));
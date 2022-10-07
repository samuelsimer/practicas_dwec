function getFibonacci(n){
    anterior = 0;
    resultado = 0;
    numFibonacci = 1;
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

num1 = prompt("Escribe el número límite de Fibonacci:");

alert("El número es: " + getFibonacci(num1));
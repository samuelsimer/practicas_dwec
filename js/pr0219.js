function sumOfMults(n, k){
    resultado = Number(n);
    for(i = 2; i <= k; i++){
        resultado += (i * n);
    }
    return resultado;
}

num1 = prompt("Escribe el número a multiplicar:");
num2 = prompt("Escribe el número de multiplos a sumar:");

alert("El resultado es: " + sumOfMults(num1, num2));
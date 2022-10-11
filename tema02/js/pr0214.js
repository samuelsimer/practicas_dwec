function fact(n){
    let factorial = 1;
    for(let i = 2;i <= n;i++){
        factorial *= i;
    }
    return factorial;
}

let numero = prompt("Introduce un número:")
alert(`El número factorial de ${numero} es ${fact(numero)}`);
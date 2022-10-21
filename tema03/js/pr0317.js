function createPow( arr, pow ){
    let numerosElevados = arr.map(item => item**pow);
    return numerosElevados;
}

let numeros = [1, 4, 10, 20, 15, 23, 8, 14];
console.log(createPow(numeros, 5));
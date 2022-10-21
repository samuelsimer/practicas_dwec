function getOdd(arr){
    let numerosImpares = arr.filter(item => item%2 != 0);

    return numerosImpares;
}

let numeros = [1, 4, 10, 20, 15, 23, 8, 14];
console.log(getOdd(numeros));
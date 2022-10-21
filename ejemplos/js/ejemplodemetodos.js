let numeros = [1, 56, 4, 87, 9];
let nuemerosCuadrado = numeros.map(item => item**2);

console.log(nuemerosCuadrado);

numeros = [1, 56, 4, 87, 9];
let numerosOrdenados = numeros.sort(
    (a, b) => {
        return (a < b) ? -1 : 1;
    }
);

console.log(numerosOrdenados);
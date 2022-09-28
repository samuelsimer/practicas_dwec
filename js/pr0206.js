let numero = prompt("Indica el número a multiplicar: ");
let cantidadIteracciones = prompt("Indica el número de iteracciones a multiplicar: ");

for(let i = 1; i <= cantidadIteracciones; i++){
    let mensaje = (`${numero} * ${i} = ${numero*i}`);
    console.log(mensaje);
}

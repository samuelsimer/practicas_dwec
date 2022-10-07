function convertToBytes(capacity, from){
    switch (from){
        case "B":
            break;
        case "KB":
            capacity *= 10**3;
            break;
            case "MB":
                capacity *= 10**6;
                break;
            case "GB":
                capacity *= 10**9;
                break;
            case "TB":
                capacity *= 10**12;
                break;
            case "PB":
                capacity *= 10**15;
                break;
            case "EB":
                capacity *= 10**18;
                break;
    }
    return capacity;
}
function convertCapacity(n, from, to){
    let resultado = n;
    if(from != to){
        resultado = convertToBytes(n,from)/convertToBytes(1,to);
    }
    return resultado;
}

let cantidadBytes = prompt("Introduce un número:");
let primeraMedida = prompt("Introduce la capacidad de lo introducido:");
let segundaMedida = prompt("Introduce a la capacidad que quieres transformarlo:");

alert("El resultado son: " + convertCapacity(cantidadBytes, primeraMedida, segundaMedida) + segundaMedida);
function isNumber(str){
    return (!isNaN(str))
}

let cadena = prompt("Introduce una cadena");

console.log(isNumber(cadena));
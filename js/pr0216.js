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

let capacidad = prompt("Introduce una cantidad de bytes:");
let medida = prompt("Introduce la abreviatura para convertirlos:");

alert(`El resultado es: ${convertToBytes(capacidad, medida)}`);
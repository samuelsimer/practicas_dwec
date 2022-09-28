let precioManzanas = prompt("Indica el precio de las manzanas: ");
let cantidadManzanas = prompt("Indica la cantidad de manzanas: ");
let precioNaranjas = prompt("Indica el precio de las naranjas: ");
let cantidadNaranjas = prompt("Indica la cantidad de naranjas: ");
let precioPlatanos = prompt("Indica el precio de los platanos: ");
let cantidadPlatanos = prompt("Indica la cantidad de platanos: ");
let totalPrecio = (Number(precioManzanas) * Number(cantidadManzanas)) + (Number(precioNaranjas) * Number(cantidadNaranjas)) + (Number(precioPlatanos) * Number(cantidadPlatanos));
let totalCantidad = Number(cantidadManzanas) + Number(cantidadNaranjas) + Number(cantidadPlatanos);

let mensaje = (`Has comprado un total de ${totalCantidad} kilos de fruta y te ha costado ${totalPrecio} euros`);

alert(mensaje);
let nombre = prompt("Indica tu nombre: ");
let notaExamen1 = Number(prompt("Indica la nota del examen 1: "));
let notaExamen2 = Number(prompt("Indica la nota del examen 2: "));

let notaFinal = (notaExamen1 + notaExamen2) / 2;

let mensaje = (`Hola ${nombre}, la nota media de tus exámenes es ${notaFinal}`);

alert(mensaje);

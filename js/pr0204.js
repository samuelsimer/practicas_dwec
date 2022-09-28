let radio = prompt("Indica el radio de la circunferencia: ");
let perimetro = (2 * 3.1415) * Number(radio);
let area = perimetro * (radio ** 2);

let mensaje = (`El perímetro del círculo de radio ${radio} es ${perimetro} y su área es ${area}`);

alert(mensaje);
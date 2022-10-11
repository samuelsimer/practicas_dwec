let basePiramide = Number(prompt("Indica el numero de asteriscos de la base de la pirámide: "));
let asteriscosActuales = 1;
let mensaje = "";

for(let i = 1; i <= basePiramide; i++){
    for(let numeroAsteriscos = 1;numeroAsteriscos <= asteriscosActuales; numeroAsteriscos++){
        mensaje += ("*");
    }
    asteriscosActuales++;
    console.log(mensaje);
    mensaje = "";
}
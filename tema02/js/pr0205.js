let valido = false;
while (valido == false){
    let numeroValido = prompt("Introduce un número válido: ");
    numeroValido = parseInt(numeroValido);
    if(isNaN(numeroValido)){
        alert("NO ES UN NÚMERO VÁLIDO!!!!");
    }else{
        valido = true;
        alert("Has introducido el número: " + numeroValido);
        
    }
};
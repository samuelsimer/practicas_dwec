let numeroMayor = 0;

for(let i = 1; i <=5; i++){
    let numeroActual = Number(prompt("Introduce un número:"))
    if(numeroMayor< numeroActual){
        numeroMayor = numeroActual;
    }
}

alert(`EL NUMERO MAYOR ES: ${numeroMayor}`)
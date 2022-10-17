function ascendDescend( len, min, max ){
    let resultado = min.toString();
    contador = min + 1;
    ascDesc = true;
    for(let i = 1; i <= len; i++){
        if(ascDesc){//con esta variable controlo cuando hay que aumentar y cuando disminuir el contador
            resultado += contador++;//aumento contador y añado número a mostrar
        }else{
            resultado += contador--;//aumento contador y añado número a mostrar
        }

        if(contador == max ){
            ascDesc = false;
        }else if(contador == min){
            ascDesc = true;
        }
    }

    return resultado;
}

console.log(ascendDescend(10, 2, 5));
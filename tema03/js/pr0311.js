function ascendDescend( len, min, max ){
    let resultado = min.toString();
    let contador = min + 1;
    let ascender = true;
    for(let i = 1; i <= len; i++){
        if(ascender){//con esta variable controlo cuando hay que aumentar y cuando disminuir el contador
            resultado += contador++;//aumento contador y añado número a mostrar
        }else{
            resultado += contador--;//aumento contador y añado número a mostrar
        }

        if(contador == max ){
            ascender = false;
        }else if(contador == min){
            ascender = true;
        }
    }

    return resultado;
}

console.log(ascendDescend(10, 2, 5));
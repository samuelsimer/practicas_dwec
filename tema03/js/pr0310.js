function replaceWithPosition(n){
    resultado = "";
    for(let letra of n){
        let base = parseInt(letra,36) - 9;//lo paso a base 36 y le resto 9 para que me devuelva la posicion en el abecedario
        if(base != NaN){
            resultado += base, ' ';
        }        
    }
    return resultado;
}

console.log(replaceWithPosition("ddfsdfsadfdafd"));
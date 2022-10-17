function countLetters(str) {
    str = str.toLowerCase();
    var objeto = {}; 
    for(var i in str){
        objeto[str[i]] = ( objeto[str[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
    }
    let numeroRepetir = objeto[str.substring(1,2)];//cojo el primer valor para comprarlo con el resto
    for(obj in objeto){
        if(objeto[obj] != numeroRepetir){//comparo el primer valor con el resto y devuelvo false si encuentro alguno que no se repite
            return false;
        }
    }
    return true;
}

console.log(countLetters("aab"));
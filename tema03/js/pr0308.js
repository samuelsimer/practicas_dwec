function countLetters(str) {
    str = str.toLowerCase();
    var objeto = {}; 
    for(var i in str){
        objeto[str[i]] = ( objeto[str[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
    }
    return objeto;
}

console.log(countLetters("kjhskdasaaaaa"));
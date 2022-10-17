function countLetters(str) {
    str = str.toLowerCase();
    var objeto = {}; 
    for(var i in str){
        objeto[str[i]] = ( objeto[str[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
        if(objeto[str[i]] > 1){
            return false;
        }
    }
    return true;
}

console.log(countLetters("holaa"));
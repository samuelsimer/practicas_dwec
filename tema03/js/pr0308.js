function countLetters(str) {
    str = str.toLowerCase()
        .replaceAll(" ", "");
    var objeto = {}; 
    for(let i of str){
        objeto[i] = ( objeto[i] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
    }
    return objeto;
}

console.log(countLetters("kjhsk dasa    aaaa"));
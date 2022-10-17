function countVowels(str){
    str = str.toLowerCase();
    contador = 0;
    for(let i = 0; i < str.length; i++){
        if(str.substr(i, 1) == "a" || str.substr(i, 1) == "e" || str.substr(i, 1) == "i" || str.substr(i, 1) == "o" || str.substr(i, 1) == "u"){
            contador++;
        }
    }
    
    return contador;
}

console.log(countVowels("gadgdsffujldpoOIAS"));
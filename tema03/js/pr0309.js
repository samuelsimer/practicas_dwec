function countVowels(str){
    strSinFormatear = str;
    str = str.toLowerCase();
    textoSinVocales = "";
    for(let i = 0; i < str.length; i++){
        if(str.substr(i, 1) != "a" || str.substr(i, 1) != "e" || str.substr(i, 1) != "i" || str.substr(i, 1) != "o" || str.substr(i, 1) != "u"){
            textoSinVocales += strSinFormatear.substr(i, 1);
        }
    }
    
    return textoSinVocales;
}

console.log(countVowels("gadgdsff ujldpo OIAS"));
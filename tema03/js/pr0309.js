function countVowels(str){
    vowels = "aeiouAEIOU";
    textoSinVocales = "";
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str.substr(i, 1))){
            textoSinVocales += str.substr(i, 1);
        }
    }
    
    return textoSinVocales;
}

console.log(countVowels("gadgdsff ujldpo OIAS"));
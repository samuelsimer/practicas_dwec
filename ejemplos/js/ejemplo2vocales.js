function removeVowels(str){
    vowels = "aeiouAEIOU";
    let textoSinVocales = str.split("")
                            .filter(item => !vowels.includes(item, vowels))
                            .join("");
    
    return textoSinVocales;
}

console.log(removeVowels("gadgdsff ujldpo OIAS"));
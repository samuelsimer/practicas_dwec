function removeVowels(str){
    vowels = "aeiouAEIOU";
    let texto = str.split("");
    let textoSinVocales = texto.filter(item => !vowels.includes(item, vowels));
    textoSinVocales = textoSinVocales.join("");
    
    return textoSinVocales;
}

console.log(removeVowels("gadgdsff ujldpo OIAS"));
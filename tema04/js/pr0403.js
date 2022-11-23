let numeroParrafos = document.querySelectorAll('p');
let direccionUltimoEnlace = document.querySelectorAll('[href]');
let enlacesGoogle = Array.from(document.querySelectorAll('[href]')).reduce((acum, item) => {
    if(item.getAttribute("href") == "https://www.google.es"){
        return ++acum;
    }
    return acum;
    }, 0);
    console.log(enlacesGoogle);
let numeroPalabraSegundoParrafo = document.querySelectorAll('p')[1];

document.getElementById("parrafos").textContent = numeroParrafos.length;
document.getElementById("segundo-enlace").textContent = direccionUltimoEnlace[direccionUltimoEnlace.length-2].getAttribute("href");
document.getElementById("links-google-es").textContent = enlacesGoogle;
document.getElementById("palabras-segundo-parrafo").textContent = numeroPalabraSegundoParrafo.textContent.split(" ").length;
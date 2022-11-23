let listaLi = Array.from(document.getElementsByTagName('li'));
listaLi.forEach((li) => {
    //Cambia contenido de los li y les introduce el enlace correspondiente
    switch(li.textContent){
        case "Google":
            li.innerHTML = `<a href="https://google.com">Google</a>`;
            break;
        case "DuckDuckGo":
            li.innerHTML = `<a href="https://duckduckgo.com">DuckDuckGo</a>`;
            break;
        case "Bing":
            li.innerHTML = `<a href="https://www.bing.com">Bing</a>`;
            break;
        case "Ecosia":
            li.innerHTML = `<a href="https://www.ecosia.org/">Ecosia</a>`;
            break;
        case "WolframAlpha":
            li.innerHTML = `<a href="https://www.wolframalpha.com/">WolframAlpha</a>`;
            break;
    }
});
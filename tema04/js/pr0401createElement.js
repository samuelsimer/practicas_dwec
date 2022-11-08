let elementos = document.querySelector("#numbers");
for(let i = 1; i <= 30; i++){
    let elemento = document.createElement('span');
    elemento.classList.add('number');
    elemento.textContent = i;
    elementos.append(elemento);
}


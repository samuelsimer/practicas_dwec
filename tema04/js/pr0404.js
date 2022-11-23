function mostrarPulsado(event){
    alert(event.target.id);
}

//Títulos de las columnas
let columnas = "IABCDEFGH".split("");
//Títulos de las filas
let filas = "876543210".split("");

//creacion tabla
let elemento = document.createElement('table');
elemento.classList.add('tabla');
document.body.append(elemento);

//creacion cabecera tabla
elemento = document.createElement('tr');
elemento.classList.add('titulos');
elemento.setAttribute('id',`${columnas[0]}${filas[0]}`);
document.querySelector('.tabla').append(elemento);

//Creacion cabecera
for(let titulos = 0; titulos < columnas.length; titulos++) {
    elemento = document.createElement('th');
    elemento.classList.add('titulos');
    if(titulos != 0){
        elemento.textContent = columnas[titulos];
    }
    elemento.setAttribute('id',columnas[titulos]);
    document.querySelector(`#${columnas[0]}${filas[0]}`).append(elemento);
}

//creacion tr
for(let fila = 1; fila < filas.length; fila++){    
    elemento = document.createElement('tr');
    elemento.setAttribute('id',`${columnas[0]}${filas[fila]}`);
    document.querySelector('.tabla').append(elemento);

    //Creacion títulos lateral
    elemento = document.createElement('th');
    elemento.classList.add('titulos');
    if(fila != 0){
        elemento.textContent = filas[fila];
    }
    elemento.setAttribute('id',`${columnas[0]}${filas[fila]}`);
    document.querySelector(`#${columnas[0]}${filas[fila]}`).append(elemento);

    //creacion casillas
    for(let columna = 1; columna < columnas.length; columna++){        
        elemento = document.createElement('td');
        if((fila+columna)%2 == 0){
            elemento.classList.add('negras');
        }
        elemento.addEventListener("click",mostrarPulsado);
        elemento.setAttribute('id',`${columnas[columna]}${filas[fila]}`);
        document.querySelector(`#${columnas[0]}${filas[fila]}`).append(elemento);
    }
}
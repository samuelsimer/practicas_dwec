crearTablero();

function crearTablero(){
    let tabla = document.createElement('table');
    let contadorCuadrado = 1;

    for(let i = 0; i < 10; i++){
        let fila = document.createElement('tr');

        for(let j = 0; j < 10; j++){
            let cuadrado = document.createElement('td');
            cuadrado.textContent = contadorCuadrado++;
            cuadrado.addEventListener('click', cambiarClase);
            cuadrado.addEventListener('contextmenu', botonDerecho);
            cuadrado.oncontextmenu = function(){ return false};             
            fila.append(cuadrado);

        }
        tabla.append(fila);
    }
    document.querySelector('#tabla').append(tabla);
}

function cambiarClase(e){
        e.target.classList.toggle('pulsado')
        document.querySelector('h1').textContent = e.target.textContent;
}

function botonDerecho(e){
    e.target.classList.add('pulsadoDerecho');
    document.querySelector('h1').textContent = e.target.textContent;
}
//INICIALIZAR VARIABLES GLOBALES
let time = 0;
let cronometro = document.getElementById('time');
let contador = 0;
let contenedorContador = document.querySelector('#score');
let btnContador = document.querySelector('#btnContador');
let btnStart = document.querySelector('#btn-start');
let btnReset = document.querySelector('#btn-reset');
let aleatorioWidth = 0;
let aleatorioHeigth = 0;
let myInterval;
let ranking = new Array();
let btnDificultad = document.querySelector('#diff');
let dificultad = 1;
crearPantalla()

function crearPantalla(){
    btnStart.addEventListener('click',comenzarJuego);
    btnReset.addEventListener('click',resetearJuego);
    btnDificultad.addEventListener('click', cambiarDificultad);

}

function cambiarDificultad(e){
    document.querySelector('#diff .selected').classList.remove('selected');
    e.target.classList.add('selected');
    dificultad = Number(document.querySelector('#diff .selected').textContent);
}

//RESETEAR JUEGO
function resetearJuego(){
    clearInterval(myInterval);
    time = 0;

    //RESETEAR DATOS
    contador = 0;
    time = 0;
    cronometro.textContent = 0;
    contenedorContador.textContent = 0;
    btnContador.style.height = 0 + "px";
    btnContador.style.width = 0 + "px";
    document.getElementById('player-input').value = '';

}


//CREACION BOTON ROJO
function comenzarJuego(){   
    if(time == 0){
        myInterval = setInterval(updateTime, 100);
    }
    
    let zonaJuego = document.getElementById('game-zone');
    contenedorContador.textContent = contador;

    btnContador.addEventListener('click', modificarBtn);

    btnContador.style['background-color'] = "red";

    aleatorioWidth  =  Math.round(Math.random() * (zonaJuego.clientWidth - (dificultad * 50)));
    
    btnContador.style.width = aleatorioWidth + "px";
    btnContador.style['margin-left'] = Math.round(Math.random() * (zonaJuego.clientWidth - aleatorioWidth))+ "px";

    aleatorioHeigth  =  Math.round(Math.random() * (zonaJuego.clientHeight - (dificultad * 50)));
    console.log(aleatorioHeigth);
    btnContador.style.height = aleatorioHeigth + "px";    
    btnContador.style['margin-top'] = Math.round(Math.random() * (zonaJuego.clientHeight - aleatorioHeigth))+ "px";
}

//ALEATORIO BOTON ROJO
function modificarBtn(){
    let zonaJuego = document.getElementById('game-zone');
    aleatorioWidth  =  Math.round(Math.random() * (zonaJuego.clientWidth - (dificultad * 50)));
    btnContador.style.width = aleatorioWidth + "px";
    btnContador.style['margin-left'] = Math.round(Math.random() * (zonaJuego.clientWidth - aleatorioWidth))+ "px";

    aleatorioHeigth  =  Math.round(Math.random() * (zonaJuego.clientHeight - (dificultad * 50)));
    btnContador.style.height = aleatorioHeigth + "px";    
    btnContador.style['margin-top'] = Math.round(Math.random() * (zonaJuego.clientHeight - aleatorioHeigth))+ "px";
    contador++;
    contenedorContador.textContent = contador;
}

//ACTUALIZAR CRONOMETRO
function updateTime(){
    time += 0.1;
    cronometro.textContent = time.toFixed(1);

    if(time >= 5){
        clearInterval(myInterval);
        document.getElementById('ranking-panel');
        actualizarRanking();        
    }

}

//ORDENAR RANKING
function actualizarRanking(){
    //ALAMACENAR EN UN ARRAY PRIMERO JUGADOR ACTUAL Y DESPUÉS LOS JUGADORES DEL RANKING
    let nombre = document.getElementById('player-input').value;
    let puntuacion = contador;
    console.log(nombre + puntuacion);

    ranking = [...ranking, {nombre: nombre,puntuacion: puntuacion}];
    console.log(ranking[0]);

    //ORDENAR RANKING
    ranking.sort((a,b) => b.puntuacion - a.puntuacion);
    if(ranking.length > 3){
        ranking.pop();
    }

    //RESETEAR DATOS
    contador = 0;
    time = 0;
    cronometro.textContent = 0;
    contenedorContador.textContent = 0;
    btnContador.style.height = 0 + "px";
    btnContador.style.width = 0 + "px";
    document.getElementById('player-input').value = '';


    //CAMBIAR RANKING
    document.querySelector('#ranking-first .ranking-name').textContent = ranking[0].nombre?ranking[0].nombre:'';
    document.querySelector('#ranking-first .ranking-score').textContent = ranking[0].puntuacion?ranking[0].puntuacion:'';

    if(ranking.length > 1){
        document.querySelector('#ranking-second .ranking-name').textContent = ranking[1].nombre?ranking[1].nombre:'';
        document.querySelector('#ranking-second .ranking-score').textContent = ranking[1].puntuacion?ranking[1].puntuacion:'';
    }
    
    if(ranking.length > 2){
        document.querySelector('#ranking-third .ranking-name').textContent = ranking[2].nombre?ranking[2].nombre:'';
        document.querySelector('#ranking-third .ranking-score').textContent = ranking[2].puntuacion?ranking[2].puntuacion:'';
    }
}
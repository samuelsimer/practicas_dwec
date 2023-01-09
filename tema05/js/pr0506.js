let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let palabraAleatoria = 0;
let fallos = 0;
let letrasPalabra;
comezarJuego();

//GENERAR LAS LETRAS A SELECCIONAR Y SUS EVENTOS
function generarLetras(){
    alphabet.forEach((item) => {
        document.getElementById('keyboard').innerHTML += `<span class="key" data-letra="${item}">${item}</span>`;
    });

    document.querySelectorAll('.key').forEach((item) => {
        item.addEventListener('click', intento);
        
    });
    document.body.addEventListener('keydown', intento);
}

//COGER PALABRA ALEATORIA QUE SE TENDRÁ QUE ADIVINAR
function generarPalabraAdivinar(){
    let numPalabraAleatoria = Math.round(Math.random() * (words.length - 1));
    palabraAleatoria = words[numPalabraAleatoria].split('');
    palabraAleatoria.forEach((item) => {
        document.getElementById('spaces').innerHTML += `<span class="space letra${item}"></span>`;
    });
    
    
}

//INICIAR JUEGO
function comezarJuego(){
    generarLetras();
    generarPalabraAdivinar();
    document.getElementById('hanged').innerHTML = `<img src="../imgs/hangman_00.png" />`;
    
}

//FUNCION DE LOS EVENTOS
function intento(e){
    let letraAccionada = '';
    switch(e.type){
        case 'keydown':
            letraAccionada = e.key;
            break;
        
        case 'click':
            letraAccionada = e.target.textContent;
            break;

    }

    //COMPROBACION SI LA PALABRA CONTIENE LA LETRA SELECCIONADA
    if(palabraAleatoria.includes(letraAccionada)){
        acierto(letraAccionada);
    }else{
        fallo(letraAccionada);
    }
}

//SI HA FALLADO LA LETRA
function fallo(l){
    if(fallos < 9){
        fallos++;
        document.getElementById('hanged').innerHTML = `<img src="../imgs/hangman_0${fallos}.png" />`;
        document.querySelector(`span[data-letra='${l}']`).classList.add('fail');
        document.querySelector(`span[data-letra='${l}']`).removeEventListener('click', intento);
    }else if(fallos == 9){
        document.querySelector('#keyboard').innerHTML = `<h1>${palabraAleatoria.join('')}</h1>`;
        document.querySelector('#msg').textContent = 'PERDISTE!!';
    }
    
}

//SI HA ACERTADO LA LETRA
function acierto(l){

    document.querySelector(`span[data-letra='${l}']`).classList.add('succeed');
    document.querySelector(`span[data-letra='${l}']`).removeEventListener('click', intento);
    document.querySelectorAll(`.letra${l}`).forEach((item) => item.textContent = l);

    let numeroLetrasVacias = Array.from(document.querySelectorAll(`.space`)).reduce((acum, item) => {
        if(item.textContent == ''){
            acum++;
        }
        return acum;
    }, 0);
    if(numeroLetrasVacias == 0){
        document.querySelector('#keyboard').innerHTML = `<h1>${palabraAleatoria.join('')}</h1>`;
        document.querySelector('#msg').textContent = 'GANASTE!!';
    }
    
}


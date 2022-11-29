let contador = 0;
let contedorContador = document.querySelector('.contador');
let btnContador = document.querySelector('#btnContador');
let aleatorioWidth = 0;
let aleatorioHeigth = 0;
generarBoton();

function generarBoton(){   
    
    contedorContador.textContent = contador;
    btnContador.addEventListener('click', modificarBtn);
    btnContador.style['background-color'] = "red";

    aleatorioWidth  =  Math.round(Math.random() * window.innerWidth);
    btnContador.style.width = aleatorioWidth + "px";
    btnContador.style['margin-left'] = Math.round(Math.random() * (window.innerWidth - aleatorioWidth))+ "px";

    aleatorioHeigth  =  Math.round(Math.random() * window.innerHeight);
    btnContador.style.height = aleatorioHeigth + "px";    
    btnContador.style['margin-top'] = Math.round(Math.random() * (window.innerWidth - aleatorioHeigth))+ "px";
}


function modificarBtn(){
    aleatorioWidth  =  Math.round(Math.random() * window.innerWidth);
    btnContador.style.width = aleatorioWidth + "px";
    btnContador.style['margin-left'] = Math.round(Math.random() * (window.innerWidth - aleatorioWidth))+ "px";

    aleatorioHeigth  =  Math.round(Math.random() * window.innerHeight);
    btnContador.style.height = aleatorioHeigth + "px";    
    btnContador.style['margin-top'] = Math.round(Math.random() * (window.innerWidth - aleatorioHeigth))+ "px";
    contador++;
    contedorContador.textContent = contador;
}
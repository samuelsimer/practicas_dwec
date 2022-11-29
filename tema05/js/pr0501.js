let lista = document.querySelector('ul');

lista.addEventListener('click', cambiarClase);
lista.onmousedown = function() {return false;}

function cambiarClase(e){
    
    if(e.target.classList.value != 'pulsado'){
        if(!e.ctrlKey){
            resetearClases();
        }
        e.target.classList.toggle('pulsado')
    }else{
        if(!e.ctrlKey){
            resetearClases();
        }else{
            e.target.classList.toggle('pulsado')
        }
    }
}

function resetearClases(){
    let elementosPulsados = document.querySelectorAll('.pulsado');
    elementosPulsados.forEach((item) => item.classList.remove('pulsado'))
}
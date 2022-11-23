let lista = document.querySelector('ul');

console.log(lista);

lista.addEventListener('click', cambiarClase);

function cambiarClase(e){
    
    if(e.target.classList.value != 'pulsado'){
        if(!e.ctrlKey){
            resetearClases();
        }
        e.target.classList.add('pulsado')
    }else{
        if(!e.ctrlKey){
            resetearClases();
        }
    }
}

function resetearClases(){
    let elementosPulsados = document.querySelectorAll('.pulsado');
    elementosPulsados.forEach((item) => item.classList.remove('pulsado'))
}
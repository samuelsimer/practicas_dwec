document.querySelector('#add-button').addEventListener('click', añadir);

function añadir(){
    let li = document.createElement('li');
    li.classList.add('todo');

    li.textContent += document.querySelector('#input-text').value;


    let btnBorrar = document.createElement('button');

    let id = Math.random()*9999;

    li.setAttribute('id', id);

    btnBorrar.setAttribute('data-id', id);
    btnBorrar.classList.add('btn');
    btnBorrar.addEventListener('click', eliminar);
    btnBorrar.textContent = "borrar";
    li.append(btnBorrar);

    document.querySelector('#input-text').value = "";

    document.querySelector('ul').append(li);
}

function eliminar(e){
    e.target.parentNode.remove();
}
